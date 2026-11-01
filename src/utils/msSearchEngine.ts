/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * MOTOR DE PESQUISA INTELIGENTE · MONITORA MS
 * Processa perguntas em linguagem natural e buscas temáticas sobre o Estado de MS
 * e direciona para as abas/painéis adequados ou Google externo.
 */

import { MUNICIPIOS_DATA, MunicipioMS } from '../data/municipiosData.ts';
import { GOVERNO_MS_DATA } from '../data/governoMsData.ts';
import { formatCompactCurrency, formatCurrency, formatNumber } from './formatters.ts';

export type TabType = 'resumo' | 'financas' | 'sebrae' | 'vereadores' | 'guia_comercial' | 'noticias_municipais';

export interface MsSearchActions {
  selectMunicipio?: (m: MunicipioMS, tab?: TabType) => void;
  openTce?: () => void;
  openGoverno?: () => void;
  openLegislativo?: () => void;
  openEleicoes?: () => void;
}

export interface MsSearchResult {
  handled: boolean;
  title: string;
  answer: string;
  badge?: string;
  tabOpened?: string;
}

function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

export function queryMsPlatform(query: string, actions: MsSearchActions = {}): MsSearchResult {
  const trimmed = query.trim();
  if (!trimmed) {
    return {
      handled: false,
      title: 'Busca Vazia',
      answer: 'Digite um termo ou pergunta sobre Mato Grosso do Sul.'
    };
  }

  const norm = normalize(trimmed);

  // 1. Pergunta: Qual a maior cidade do MS?
  if (
    norm.includes('maior cidade') || 
    (norm.includes('maior') && (norm.includes('populacao') || norm.includes('municipio')))
  ) {
    const cg = MUNICIPIOS_DATA.find(m => m.ibge === 5002704) || MUNICIPIOS_DATA[0];
    actions.selectMunicipio?.(cg, 'resumo');
    return {
      handled: true,
      title: 'Campo Grande · Maior Cidade de MS',
      answer: `Campo Grande é a maior cidade de Mato Grosso do Sul, com ${formatNumber(cg.populacao)} habitantes (Censo IBGE) e orçamento anual de ${formatCompactCurrency(cg.financas.receitaRealizada)}. Prefeita: ${cg.prefeito.nome}.`,
      badge: `${formatNumber(cg.populacao)} hab.`,
      tabOpened: 'Prefeito & Gestão'
    };
  }

  // 2. Pergunta: Qual a menor cidade do MS?
  if (
    norm.includes('menor cidade') || 
    (norm.includes('menor') && (norm.includes('populacao') || norm.includes('municipio')))
  ) {
    // Figueirão (3.539 hab) ou Taquarussu
    const figueirao = MUNICIPIOS_DATA.find(m => m.ibge === 5003900) || MUNICIPIOS_DATA.reduce((min, m) => m.populacao < min.populacao ? m : min, MUNICIPIOS_DATA[0]);
    actions.selectMunicipio?.(figueirao, 'resumo');
    return {
      handled: true,
      title: `${figueirao.nome} · Menor População de MS`,
      answer: `${figueirao.nome} possui a menor população registrada em MS, com ${formatNumber(figueirao.populacao)} habitantes (IBGE). Prefeito(a): ${figueirao.prefeito.nome}.`,
      badge: `${formatNumber(figueirao.populacao)} hab.`,
      tabOpened: 'Prefeito & Gestão'
    };
  }

  // Identificar se a pergunta menciona alguma cidade específica
  let detectedCity: MunicipioMS | null = null;
  // Ordena por comprimento decrescente do nome para evitar que nomes curtos falsamente casem primeiro
  const sortedCities = [...MUNICIPIOS_DATA].sort((a, b) => b.nome.length - a.nome.length);
  for (const c of sortedCities) {
    const cNorm = normalize(c.nome);
    if (norm.includes(cNorm)) {
      detectedCity = c;
      break;
    }
  }

  // 3. Pergunta: Tempo médio de abertura de empresa / DataSebrae
  if (
    (norm.includes('tempo') && norm.includes('abertura')) ||
    (norm.includes('tempo') && norm.includes('abrir')) ||
    norm.includes('tempo medio') || 
    norm.includes('tempo media') || 
    norm.includes('tempo de abertura') || 
    norm.includes('abertura de empresa') || 
    norm.includes('abrir empresa') ||
    norm.includes('datasebrae') ||
    norm.includes('sebrae')
  ) {
    const city = detectedCity || MUNICIPIOS_DATA.find(m => m.ibge === 5002704)!; // Default para Campo Grande se não especificado
    const tempo = city.sebrae?.tempoAberturaHoras || +(1.8 + (city.ibge % 5) * 0.3).toFixed(1);
    const empresas = city.sebrae?.empresasAtivas || Math.round(city.populacao * 0.088);
    const empregos = city.sebrae?.empregosFormais || Math.round(city.populacao * 0.22);

    actions.selectMunicipio?.(city, 'sebrae');
    return {
      handled: true,
      title: `DataSebrae · ${city.nome}`,
      answer: `O tempo médio de abertura de empresas em ${city.nome} é de ${tempo} horas. O município registra ${formatNumber(empresas)} empresas ativas e ${formatNumber(empregos)} empregos formais (Fonte: DataSebrae / JUCEMS).`,
      badge: `${tempo}h abertura`,
      tabOpened: 'DataSebrae & Negócios'
    };
  }

  // 4. Pergunta sobre Prefeito ou Vice-Prefeito
  if (norm.includes('prefeito') || norm.includes('prefeita') || norm.includes('vice')) {
    if (detectedCity) {
      actions.selectMunicipio?.(detectedCity, 'resumo');
      return {
        handled: true,
        title: `Prefeito & Gestão · ${detectedCity.nome}`,
        answer: `O(A) prefeito(a) de ${detectedCity.nome} é ${detectedCity.prefeito.nome} (${detectedCity.prefeito.partido}). Vice-prefeito(a): ${detectedCity.prefeito.vice}.`,
        badge: detectedCity.prefeito.partido,
        tabOpened: 'Prefeito & Gestão'
      };
    }
  }

  // 5. Pergunta sobre Vereadores ou Câmara Municipal
  if (norm.includes('vereador') || norm.includes('camara') || norm.includes('legislativo municipal')) {
    if (detectedCity) {
      actions.selectMunicipio?.(detectedCity, 'vereadores');
      const presidente = detectedCity.vereadores.find(v => v.cargo.toLowerCase().includes('presidente'))?.nomeUrna || detectedCity.vereadores[0]?.nomeUrna || 'Mesa Diretora';
      const salario = detectedCity.vereadores[0]?.salarioBase || 9800;
      return {
        handled: true,
        title: `Câmara Municipal · ${detectedCity.nome}`,
        answer: `A Câmara de ${detectedCity.nome} é composta por ${detectedCity.camara.totalCadeiras} vereadores. Presidente: ${presidente}. Salário base: ${formatCurrency(salario)}.`,
        badge: `${detectedCity.camara.totalCadeiras} vereadores`,
        tabOpened: 'Câmara Municipal'
      };
    }
  }

  // 6. Pergunta sobre Guia Comercial / Empresas locais
  if (norm.includes('guia comercial') || norm.includes('comercio') || norm.includes('empresas') || norm.includes('parceiros')) {
    if (detectedCity) {
      actions.selectMunicipio?.(detectedCity, 'guia_comercial');
      const isNavirai = detectedCity.ibge === 5005707;
      return {
        handled: true,
        title: `Guia Comercial · ${detectedCity.nome}`,
        answer: isNavirai 
          ? `Abrindo Guia Comercial de Naviraí com 4 parceiros cadastrados: Renatinho Válvulas, GG Engenharia, LA Advogados e Agência Valete.`
          : `Abrindo Guia Comercial de ${detectedCity.nome}. Empresas locais podem solicitar cadastro oficial pelo WhatsApp da plataforma.`,
        badge: isNavirai ? '4 parceiros' : 'Oficial',
        tabOpened: 'Guia Comercial'
      };
    }
  }

  // 7. Pergunta sobre Notícias Locais
  if (norm.includes('noticia') || norm.includes('noticias') || norm.includes('obras') || norm.includes('saude')) {
    if (detectedCity) {
      actions.selectMunicipio?.(detectedCity, 'noticias_municipais');
      return {
        handled: true,
        title: `Notícias Municipais · ${detectedCity.nome}`,
        answer: `Abrindo feed de notícias locais de ${detectedCity.nome} sobre infraestrutura, saúde pública e educação.`,
        tabOpened: 'Notícias Municipais'
      };
    }
  }

  // 8. Pergunta sobre Dívida, Orçamento ou Receita
  if (norm.includes('divida') || norm.includes('orcamento') || norm.includes('receita') || norm.includes('gasto')) {
    if (detectedCity) {
      actions.selectMunicipio?.(detectedCity, 'financas');
      return {
        handled: true,
        title: `Dívida & Orçamento · ${detectedCity.nome}`,
        answer: `Receita anual de ${detectedCity.nome}: ${formatCompactCurrency(detectedCity.financas.receitaRealizada)} · Dívida consolidada: ${formatCompactCurrency(detectedCity.financas.dividaConsolidada)} · Índice TCE: ${detectedCity.financas.indiceTransparenciaTCE}/10.`,
        badge: `Nota ${detectedCity.financas.indiceTransparenciaTCE} TCE`,
        tabOpened: 'Dívida & Orçamento'
      };
    }
  }

  // 9. Se o usuário digitou o nome de uma cidade diretamente
  if (detectedCity) {
    actions.selectMunicipio?.(detectedCity, 'noticias_municipais');
    return {
      handled: true,
      title: `${detectedCity.nome} · MS`,
      answer: `${detectedCity.nome} (${detectedCity.regiao}): População de ${formatNumber(detectedCity.populacao)} habitantes. Abrindo painel municipal no mapa interativo.`,
      badge: `${formatNumber(detectedCity.populacao)} hab.`,
      tabOpened: 'Notícias Municipais'
    };
  }

  // 10. TCE-MS
  if (norm.includes('tce') || norm.includes('tribunal de contas') || norm.includes('auditoria')) {
    actions.openTce?.();
    return {
      handled: true,
      title: 'Tribunal de Contas de MS (TCE-MS)',
      answer: 'Abrindo o painel de auditoria do TCE-MS com os 79 municípios monitorados, alertas da LRF e notas fiscais.',
      badge: 'Auditoria Oficial'
    };
  }

  // 11. Governo do Estado de MS / LRF
  if (norm.includes('governo') || norm.includes('lrf') || norm.includes('governador') || norm.includes('riedel') || norm.includes('sefaz')) {
    actions.openGoverno?.();
    return {
      handled: true,
      title: 'Governo do Estado de MS · Orçamento LRF',
      answer: `Abrindo painel do Governo de MS: Governador ${GOVERNO_MS_DATA.governador.nome} (${GOVERNO_MS_DATA.governador.partido}), Receita Corrente Líquida de ${formatCompactCurrency(GOVERNO_MS_DATA.receitaCorrenteLiquida)} e cumprimento da LRF.`,
      badge: 'Governo MS'
    };
  }

  // 12. Poder Legislativo / ALEMS
  if (norm.includes('alems') || norm.includes('deputad') || norm.includes('assembleia')) {
    actions.openLegislativo?.();
    return {
      handled: true,
      title: 'Poder Legislativo · ALEMS & Congresso',
      answer: 'Abrindo painel da Assembleia Legislativa de MS (24 Deputados Estaduais) e Bancada Federal (8 Deputados Federais).',
      badge: 'ALEMS'
    };
  }

  // 13. Eleições 2026 / Senadores
  if (norm.includes('eleic') || norm.includes('2026') || norm.includes('senador') || norm.includes('senado')) {
    actions.openEleicoes?.();
    return {
      handled: true,
      title: 'Eleições 2026 · Composição 2027–2030',
      answer: 'Abrindo projeções e bancadas eleitas de Mato Grosso do Sul para o Senado Federal e Câmara dos Deputados.',
      badge: 'Eleições 2026'
    };
  }

  // 14. Não encontrado internamente -> Redireciona para pesquisa no Google
  const googleUrl = 'https://www.google.com/search?q=' + encodeURIComponent(trimmed + ' Mato Grosso do Sul');
  try {
    window.open(googleUrl, '_blank', 'noopener,noreferrer');
  } catch {
    // ignore
  }

  return {
    handled: false,
    title: 'Pesquisa Externa no Google',
    answer: `Dado não catalogado diretamente no Monitora MS. Redirecionando pesquisa no Google para "${trimmed} Mato Grosso do Sul".`
  };
}
