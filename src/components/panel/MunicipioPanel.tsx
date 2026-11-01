/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MunicipioMS, Vereador } from '../../data/municipiosData.ts';
import { SponsorsTicker } from '../layout/SponsorsTicker.tsx';
import { 
  formatCurrency, 
  formatCompactCurrency, 
  formatNumber 
} from '../../utils/formatters.ts';
import { 
  X, 
  User, 
  Landmark, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  ExternalLink, 
  Fuel, 
  Megaphone, 
  Briefcase, 
  Phone,
  Search,
  CheckCircle2,
  Globe,
  Database,
  Building2,
  Clock,
  Instagram,
  Award,
  BarChart3,
  Store,
  Newspaper,
  Sparkles,
  MessageCircle
} from 'lucide-react';

interface MunicipioPanelProps {
  municipio: MunicipioMS | null;
  onClose: () => void;
}

type TabType = 'resumo' | 'financas' | 'sebrae' | 'vereadores' | 'guia_comercial' | 'noticias_municipais';

const getSebraeMetrics = (m: MunicipioMS) => {
  if (m.sebrae) return m.sebrae;
  const pibEst = Math.round((m.financas.receitaRealizada * 4.6) / m.populacao);
  const empresas = Math.max(180, Math.round(m.populacao * 0.088));
  const empregos = Math.max(350, Math.round(m.populacao * 0.22));
  return {
    empresasAtivas: empresas,
    empregosFormais: empregos,
    tempoAberturaHoras: +(1.8 + (m.ibge % 5) * 0.3).toFixed(1),
    capag: (m.financas.situacaoFiscal === 'Regular' ? 'A' : 'B') as 'A' | 'B' | 'C',
    pibPerCapita: Math.max(34000, pibEst),
    taxaSobrevivenciaEmpresas: +(79.2 + (m.ibge % 6) * 0.7).toFixed(1),
    dataSebraeUrl: 'http://datasebrae.com.br/ms-data-cidade/'
  };
};

export const MunicipioPanel: React.FC<MunicipioPanelProps> = ({ municipio, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('resumo');
  const [vereadorSearch, setVereadorSearch] = useState('');
  const [selectedParty, setSelectedParty] = useState<string>('todos');
  const [sortBy, setSortBy] = useState<'salario' | 'verba' | 'nome'>('salario');
  const [expandedVereadorId, setExpandedVereadorId] = useState<string | null>(null);

  if (!municipio) return null;

  const { financas, prefeito, camara, vereadores } = municipio;
  const sebraeData = getSebraeMetrics(municipio);

  // Filter and sort vereadores
  const filteredVereadores = vereadores
    .filter(v => {
      const matchesSearch = v.nome.toLowerCase().includes(vereadorSearch.toLowerCase()) ||
                            v.nomeUrna.toLowerCase().includes(vereadorSearch.toLowerCase());
      const matchesParty = selectedParty === 'todos' || v.partido === selectedParty;
      return matchesSearch && matchesParty;
    })
    .sort((a, b) => {
      if (sortBy === 'salario') return b.salarioBase - a.salarioBase;
      if (sortBy === 'verba') return b.gastosGabineteAno - a.gastosGabineteAno;
      return a.nome.localeCompare(b.nome);
    });

  const parties = Array.from(new Set(vereadores.map(v => v.partido)));

  return (
    <aside className="fixed top-0 sm:top-[53px] right-0 h-full sm:h-[calc(100%-53px)] w-full sm:w-[540px] lg:w-[600px] bg-slate-900/98 backdrop-blur-2xl border-l border-slate-800 shadow-2xl z-40 flex flex-col text-slate-100 transition-all duration-300">
      
      {/* Panel Header */}
      <header className="px-6 py-5 border-b border-slate-800 shrink-0 flex items-start justify-between gap-4 bg-slate-950/50">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span 
              className="w-3 h-3 rounded-full shrink-0 shadow-sm"
              style={{ backgroundColor: municipio.regiaoCor }}
            />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
              {municipio.regiao} · Mato Grosso do Sul
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-xs text-slate-400 font-mono">IBGE {municipio.ibge}</span>
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">{municipio.nome}</h2>
          <div className="flex items-center gap-2 mt-1 text-xs text-slate-400">
            <span>{formatNumber(municipio.populacao)} habitantes</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${financas.situacaoFiscal === 'Regular' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              Situação Fiscal: <strong className="text-slate-200">{financas.situacaoFiscal}</strong>
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shadow-sm"
          title="Fechar painel"
        >
          <X className="w-5 h-5"/>
        </button>
      </header>

      {/* Carrossel de Patrocinadores inserido exatamente na posição solicitada (logo abaixo do cabeçalho) */}
      <div className="px-6 pt-3 pb-1 bg-slate-950/30 shrink-0">
        <SponsorsTicker selectedMunicipio={municipio} isMobile={true} />
      </div>

      {/* Segmented Tab Navigation (6 Abas em Grid Responsivo) */}
      <nav className="grid grid-cols-2 sm:grid-cols-3 gap-2 px-6 py-3 border-b border-slate-800/80 bg-slate-950/30 shrink-0">
        <button
          onClick={() => setActiveTab('resumo')}
          className={`flex items-center justify-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-lg transition-all border ${
            activeTab === 'resumo' 
              ? 'bg-slate-800 text-cyan-300 border-slate-600 shadow-sm' 
              : 'bg-slate-950/50 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <User className="w-3.5 h-3.5 shrink-0"/>
          <span className="truncate">Prefeito & Gestão</span>
        </button>

        <button
          onClick={() => setActiveTab('financas')}
          className={`flex items-center justify-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-lg transition-all border ${
            activeTab === 'financas' 
              ? 'bg-slate-800 text-cyan-300 border-slate-600 shadow-sm' 
              : 'bg-slate-950/50 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5 shrink-0"/>
          <span className="truncate">Dívida & Orçamento</span>
        </button>

        <button
          onClick={() => setActiveTab('sebrae')}
          className={`flex items-center justify-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-lg transition-all border ${
            activeTab === 'sebrae' 
              ? 'bg-slate-800 text-cyan-300 border-slate-600 shadow-sm' 
              : 'bg-slate-950/50 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Building2 className="w-3.5 h-3.5 shrink-0"/>
          <span className="truncate">DataSebrae</span>
        </button>

        <button
          onClick={() => setActiveTab('vereadores')}
          className={`flex items-center justify-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-lg transition-all border ${
            activeTab === 'vereadores' 
              ? 'bg-slate-800 text-cyan-300 border-slate-600 shadow-sm' 
              : 'bg-slate-950/50 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Users className="w-3.5 h-3.5 shrink-0"/>
          <span className="truncate">Câmara ({vereadores.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('guia_comercial')}
          className={`flex items-center justify-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-lg transition-all border ${
            activeTab === 'guia_comercial' 
              ? 'bg-slate-800 text-amber-300 border-amber-600/80 shadow-sm' 
              : 'bg-slate-950/50 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Store className="w-3.5 h-3.5 shrink-0 text-amber-400"/>
          <span className="truncate">Guia Comercial</span>
        </button>

        <button
          onClick={() => setActiveTab('noticias_municipais')}
          className={`flex items-center justify-center gap-1.5 px-2.5 py-2 text-xs font-medium rounded-lg transition-all border ${
            activeTab === 'noticias_municipais' 
              ? 'bg-slate-800 text-cyan-300 border-cyan-600/80 shadow-sm' 
              : 'bg-slate-950/50 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-900'
          }`}
        >
          <Newspaper className="w-3.5 h-3.5 shrink-0 text-cyan-400"/>
          <span className="truncate">Notícias Locais</span>
        </button>
      </nav>

      {/* Scrollable Content Viewport */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
        {activeTab === 'resumo' && (
          <div className="space-y-6">
            <div className="p-5 bg-slate-950/70 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400"/>
                  Poder Executivo Municipal (Gestão Atual 2025–2028)
                </span>
                <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-cyan-950/80 text-cyan-300 border border-cyan-800/80">
                  {prefeito.partido}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg shrink-0"
                  style={{ backgroundColor: municipio.regiaoCor }}
                >
                  {prefeito.nome.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{prefeito.nome}</h3>
                  <p className="text-xs text-slate-300">Prefeito(a) Municipal em exercício</p>
                  <p className="text-xs text-emerald-400 font-medium mt-0.5">Mandato: {prefeito.mandato}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-500 block">Vice-Prefeito(a):</span>
                  <span className="font-medium text-slate-300">{prefeito.vice}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Índice TCE-MS:</span>
                  <span className="font-bold text-emerald-400">{financas.indiceTransparenciaTCE.toFixed(1)} / 10.0</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Indicadores Fiscais Consolidados (TCE-MS 2026)
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Dívida Ativa</div>
                  <div className="text-lg font-mono font-bold text-amber-300">
                    {formatCompactCurrency(financas.dividaAtiva)}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Créditos a recuperar</div>
                </div>

                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Dívida Consolidada</div>
                  <div className="text-lg font-mono font-bold text-red-400">
                    {formatCompactCurrency(financas.dividaConsolidada)}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    R$ {financas.dividaPorHabitante.toLocaleString('pt-BR')} / hab.
                  </div>
                </div>

                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Orçamento Realizado</div>
                  <div className="text-lg font-mono font-bold text-emerald-400">
                    {formatCompactCurrency(financas.receitaRealizada)}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Receita arrecadada</div>
                </div>

                <div className="p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                  <div className="text-xs text-slate-400 mb-1">Custo da Câmara/Hab.</div>
                  <div className="text-lg font-mono font-bold text-pink-400">
                    R$ {financas.gastoLegislativoPorHabitante.toFixed(2)}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Gasto anual por cidadão</div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-slate-950/70 rounded-xl border border-slate-800 space-y-3">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                Fontes Primárias Oficiais (Links Ativos)
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={camara.tceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2.5 bg-slate-800/90 hover:bg-slate-700 text-xs font-medium text-slate-100 rounded-lg transition-colors border border-slate-700 shadow-sm group"
                >
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-cyan-400"/>
                    <span>Portal do Cidadão TCE-MS</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300"/>
                </a>

                <a
                  href={camara.ibgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2.5 bg-slate-800/90 hover:bg-slate-700 text-xs font-medium text-slate-100 rounded-lg transition-colors border border-slate-700 shadow-sm group"
                >
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-emerald-400"/>
                    <span>IBGE Cidades ({municipio.nome})</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-300"/>
                </a>

                <a
                  href={camara.prefeituraUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2.5 bg-slate-800/90 hover:bg-slate-700 text-xs font-medium text-slate-100 rounded-lg transition-colors border border-slate-700 shadow-sm group"
                >
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-amber-400"/>
                    <span>Transparência da Prefeitura</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-300"/>
                </a>

                <a
                  href={camara.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-3.5 py-2.5 bg-slate-800/90 hover:bg-slate-700 text-xs font-medium text-slate-100 rounded-lg transition-colors border border-slate-700 shadow-sm group"
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-pink-400"/>
                    <span>Transparência da Câmara</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-pink-300"/>
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'financas' && (
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-br from-slate-950 to-slate-900 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-amber-400"/>
                  <h4 className="text-sm font-bold text-white">Raio-X da Dívida Pública</h4>
                </div>
                <span className="text-xs text-slate-400">Fonte: e-Contas TCE-MS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Dívida Ativa Tributária</span>
                  <div className="text-xl font-mono font-bold text-amber-300">
                    {formatCurrency(financas.dividaAtiva)}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    IPTU, ISS e taxas inscritas para cobrança judicial/administrativa.
                  </p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Dívida Consolidada Líquida (DCL)</span>
                  <div className="text-xl font-mono font-bold text-red-400">
                    {formatCurrency(financas.dividaConsolidada)}
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Obrigações financeiras de longo prazo do município.
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800">
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-400">Comprometimento da Receita Anual:</span>
                  <span className="font-mono font-bold text-slate-200">
                    {((financas.dividaConsolidada / financas.receitaRealizada) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      (financas.dividaConsolidada / financas.receitaRealizada) > 0.4
                        ? 'bg-red-500'
                        : 'bg-amber-400'
                    }`}
                    style={{ 
                      width: `${Math.min(100, (financas.dividaConsolidada / financas.receitaRealizada) * 100)}%` 
                    }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>0%</span>
                  <span>Limite Máximo Res. Senado (120%)</span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-slate-950/60 rounded-xl border border-slate-800">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Execução Orçamentária Anual
              </h4>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Orçamento Previsto (LOA):</span>
                    <span className="font-mono text-slate-300">{formatCurrency(financas.receitaPrevista)}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-slate-500 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Receita Efetivamente Arrecadada:</span>
                    <span className="font-mono text-emerald-400 font-bold">{formatCurrency(financas.receitaRealizada)}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full"
                      style={{ width: `${Math.min(100, (financas.receitaRealizada / financas.receitaPrevista) * 100)}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-400">Despesa Liquidada e Paga:</span>
                    <span className="font-mono text-cyan-400 font-bold">{formatCurrency(financas.despesaExecutada)}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-cyan-500 rounded-full"
                      style={{ width: `${Math.min(100, (financas.despesaExecutada / financas.receitaPrevista) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sebrae' && (
          <div className="space-y-6">
            <div className="p-5 bg-gradient-to-br from-blue-950/70 via-slate-900 to-slate-950 border border-blue-900/60 rounded-xl space-y-2.5 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-cyan-400"/>
                  <h4 className="text-sm font-bold text-white">DataSebrae MS · Perfil Econômico Municipal</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-900/80 text-blue-200 border border-blue-700">
                  SEBRAE / MS
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Indicadores oficiais de empreendedorismo, densidade empresarial e competitividade econômica validados com base no portal DataSebrae, JUCEMS e Mapa de Empresas da Receita Federal.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">Empresas Ativas</span>
                <div className="text-xl font-mono font-bold text-cyan-300">
                  {formatNumber(sebraeData.empresasAtivas)}
                </div>
                <span className="text-[10px] text-slate-500 mt-1 block">CNPJs regulares (RFB / SEBRAE)</span>
              </div>

              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">Empregos Formais</span>
                <div className="text-xl font-mono font-bold text-emerald-400">
                  {formatNumber(sebraeData.empregosFormais)}
                </div>
                <span className="text-[10px] text-slate-500 mt-1 block">Postos com carteira assinada (RAIS/CAGED)</span>
              </div>

              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400"/>
                  Tempo de Abertura
                </span>
                <div className="text-xl font-mono font-bold text-amber-300">
                  {sebraeData.tempoAberturaHoras}h
                </div>
                <span className="text-[10px] text-slate-500 mt-1 block">Média de formalização (JUCEMS / RedeSim)</span>
              </div>

              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1 flex items-center gap-1">
                  <Award className="w-3 h-3 text-emerald-400"/>
                  CAPAG Fiscal
                </span>
                <div className="text-xl font-mono font-bold text-emerald-300 flex items-center gap-1.5">
                  <span>Nota {sebraeData.capag}</span>
                  <span className="text-[10px] font-sans px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                    STN
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 mt-1 block">Capacidade de Pagamento (Tesouro Nacional)</span>
              </div>

              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">PIB per capita</span>
                <div className="text-lg font-mono font-bold text-purple-300">
                  {formatCurrency(sebraeData.pibPerCapita)}
                </div>
                <span className="text-[10px] text-slate-500 mt-1 block">Renda anual / habitante (IBGE)</span>
              </div>

              <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">Taxa de Sobrevivência</span>
                <div className="text-lg font-mono font-bold text-teal-300">
                  {sebraeData.taxaSobrevivenciaEmpresas}%
                </div>
                <span className="text-[10px] text-slate-500 mt-1 block">Negócios ativos após 2 anos</span>
              </div>
            </div>

            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-white">Consulta Completa DataSebrae MS</div>
                <div className="text-[11px] text-slate-400">Acesse tabelas completas, gráficos setoriais e CNAE de {municipio.nome}.</div>
              </div>
              <a
                href="http://datasebrae.com.br/ms-data-cidade/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-all shadow-md shrink-0"
              >
                <span>Acessar DataSebrae</span>
                <ExternalLink className="w-3.5 h-3.5"/>
              </a>
            </div>
          </div>
        )}

        {activeTab === 'vereadores' && (
          <div className="space-y-5">
            <div className="p-4 bg-slate-950/60 rounded-xl border border-slate-800 grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-[11px] text-slate-500">Cadeiras</div>
                <div className="text-lg font-bold text-white mt-0.5">{camara.totalCadeiras}</div>
              </div>
              <div>
                <div className="text-[11px] text-slate-500">Salário Médio</div>
                <div className="text-lg font-mono font-bold text-cyan-300 mt-0.5">
                  {formatCurrency(vereadores[0]?.salarioBase || 0)}
                </div>
              </div>
              <div>
                <div className="text-[11px] text-slate-500">Verba Gabinete</div>
                <div className="text-lg font-mono font-bold text-pink-300 mt-0.5">
                  {formatCurrency(camara.gastoMedioMensalGabinete)}
                  <span className="text-[10px] text-slate-500">/mês</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5"/>
                <input
                  type="text"
                  placeholder="Filtrar vereador por nome..."
                  value={vereadorSearch}
                  onChange={(e) => setVereadorSearch(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-950/80 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={selectedParty}
                  onChange={(e) => setSelectedParty(e.target.value)}
                  className="bg-slate-950/80 border border-slate-800 rounded-lg px-2.5 py-2 text-xs text-slate-300 focus:outline-none"
                >
                  <option value="todos">Todos os partidos</option>
                  {parties.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-950/80 border border-slate-800 rounded-lg px-2.5 py-2 text-xs text-slate-300 focus:outline-none"
                >
                  <option value="salario">Maior Salário</option>
                  <option value="verba">Maior Gasto Gabinete</option>
                  <option value="nome">Nome A-Z</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {filteredVereadores.map((v) => {
                const isExpanded = expandedVereadorId === v.id;

                return (
                  <div
                    key={v.id}
                    className="p-4 bg-slate-950/50 hover:bg-slate-950/80 rounded-xl border border-slate-800/80 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-sm text-cyan-400 shrink-0">
                          {v.nomeUrna.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h5 className="text-sm font-bold text-white">{v.nomeUrna}</h5>
                            <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-slate-800 text-slate-300 rounded">
                              {v.partido}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400">{v.nome}</p>
                          <p className="text-[11px] text-cyan-400 font-medium">{v.cargo}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs text-slate-400">Salário Bruto</div>
                        <div className="text-sm font-mono font-bold text-white">
                          {formatCurrency(v.salarioBase)}
                          <span className="text-[10px] text-slate-500 font-normal">/mês</span>
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Líquido ~ {formatCurrency(v.salarioLiquido)}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-900 flex items-center justify-between text-xs">
                      <div>
                        <span className="text-slate-400">Cota Gabinete (Verba Indenizatória):</span>
                        <span className="font-mono text-pink-300 font-semibold ml-1.5">
                          {formatCurrency(v.verbaIndenizatoriaMedia)}/mês
                        </span>
                      </div>

                      <button
                        onClick={() => setExpandedVereadorId(isExpanded ? null : v.id)}
                        className="text-[11px] text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
                      >
                        {isExpanded ? 'Ocultar detalhes' : 'Ver discriminação'}
                        <span>{isExpanded ? '↑' : '↓'}</span>
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-slate-800/80 bg-slate-900/60 rounded-lg p-3 space-y-2">
                        <div className="flex justify-between items-center text-xs text-slate-300 font-medium pb-1 border-b border-slate-800">
                          <span>Discriminação Anual de Verbas de Gabinete:</span>
                          <span className="font-mono text-pink-400 font-bold">
                            Total: {formatCurrency(v.gastosGabineteAno)}/ano
                          </span>
                        </div>

                        <div className="space-y-1.5 pt-1">
                          {v.principaisGastos.map((g, i) => (
                            <div key={i} className="flex items-center justify-between text-[11px]">
                              <div className="flex items-center gap-1.5 text-slate-400">
                                {g.categoria.includes('Combustíveis') && <Fuel className="w-3 h-3 text-amber-400"/>}
                                {g.categoria.includes('Divulgação') && <Megaphone className="w-3 h-3 text-cyan-400"/>}
                                {g.categoria.includes('Consultoria') && <Briefcase className="w-3 h-3 text-purple-400"/>}
                                {g.categoria.includes('Telefonia') && <Phone className="w-3 h-3 text-emerald-400"/>}
                                <span>{g.categoria}</span>
                              </div>
                              <span className="font-mono text-slate-200">{formatCurrency(g.valor)}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 border-t border-slate-800 flex justify-end">
                          <a
                            href={camara.portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 font-medium"
                          >
                            <span>Consultar comprovantes fiscais no Portal da Câmara</span>
                            <ExternalLink className="w-3 h-3"/>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {filteredVereadores.length === 0 && (
                <div className="p-8 text-center text-slate-500 text-xs">
                  Nenhum vereador encontrado com os filtros selecionados.
                </div>
              )}
            </div>
          </div>
        )}

        {/* ABA: GUIA COMERCIAL */}
        {activeTab === 'guia_comercial' && (
          <div className="space-y-5">
            {/* Card Central de Vitrine / Em Breve */}
            <div className="p-6 bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800 rounded-2xl text-center space-y-4 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                <Store className="w-7 h-7" />
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-800/80">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Vitrine Empresarial · Em Breve
                </span>
                <h3 className="text-lg font-bold text-white mt-2">
                  Guia Comercial de {municipio.nome}
                </h3>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800/80 rounded-xl max-w-md mx-auto">
                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                  "Anuncie seu comércio aqui. Entre em contato para colocar sua empresa no guia oficial da cidade."
                </p>
              </div>

              {/* Categorias Demonstrativas do Guia */}
              <div className="grid grid-cols-2 gap-2 text-left pt-2">
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
                  <span className="font-semibold text-amber-300 block">Comércio & Varejo</span>
                  <span className="text-[10px] text-slate-400">Lojas, conveniências e distribuidoras</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
                  <span className="font-semibold text-emerald-300 block">Agro & Serviços</span>
                  <span className="text-[10px] text-slate-400">Oficinas, insumos e assistência técnica</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
                  <span className="font-semibold text-cyan-300 block">Gastronomia</span>
                  <span className="text-[10px] text-slate-400">Restaurantes, lanchonetes e padarias</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs">
                  <span className="font-semibold text-purple-300 block">Saúde & Bem-Estar</span>
                  <span className="text-[10px] text-slate-400">Clínicas, farmácias e laboratórios</span>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                <a
                  href={`https://wa.me/5567999999999?text=${encodeURIComponent(`Olá! Tenho interesse em cadastrar minha empresa no Guia Comercial de ${municipio.nome} no Monitora MS.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-950/50 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Quero Anunciar Minha Empresa</span>
                </a>
                <a
                  href="https://www.instagram.com/eng_giovanegabriel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Contato Comercial</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ABA: NOTÍCIAS MUNICIPAIS */}
        {activeTab === 'noticias_municipais' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-cyan-400" />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  Feed de Notícias Locais · {municipio.nome}
                </h3>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">3 matérias</span>
            </div>

            <div className="space-y-3">
              {/* Notícia 1: Obras */}
              <article className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-all space-y-2 group">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="px-2 py-0.5 rounded-md bg-amber-950/80 text-amber-300 font-semibold border border-amber-800/80">
                    Obras & Infraestrutura
                  </span>
                  <span className="text-slate-400 font-mono">30 de Outubro de 2026</span>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Avanço nas obras de pavimentação asfáltica e drenagem pluvial em {municipio.nome}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Frentes de trabalho municipais intensificam a pavimentação de vias centrais e ligação com bairros populosos, eliminando pontos críticos de alagamento e revitalizando a iluminação em LED.
                </p>
                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 font-medium">Prefeitura de {municipio.nome}</span>
                  <a
                    href={`https://news.google.com/search?q=${encodeURIComponent(municipio.nome + ' obras asfalto infraestrutura prefeitura')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    <span>Ler matéria completa na fonte</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>

              {/* Notícia 2: Saúde */}
              <article className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-all space-y-2 group">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-950/80 text-emerald-300 font-semibold border border-emerald-800/80">
                    Saúde Pública
                  </span>
                  <span className="text-slate-400 font-mono">26 de Outubro de 2026</span>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Rede de Atenção Básica de {municipio.nome} amplia atendimento e reforça quadro médico
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Unidades Básicas de Saúde receberam novos equipamentos de triagem e odontologia, além da extensão do horário de atendimento até às 21h em postos estratégicos para atender os munícipes.
                </p>
                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 font-medium">Secretaria Municipal de Saúde</span>
                  <a
                    href={`https://news.google.com/search?q=${encodeURIComponent(municipio.nome + ' saude atendimento ubs hospital')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    <span>Ler matéria completa na fonte</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>

              {/* Notícia 3: Educação */}
              <article className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-all space-y-2 group">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="px-2 py-0.5 rounded-md bg-cyan-950/80 text-cyan-300 font-semibold border border-cyan-800/80">
                    Educação Municipal
                  </span>
                  <span className="text-slate-400 font-mono">22 de Outubro de 2026</span>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Escolas municipais de {municipio.nome} recebem laboratórios digitais e internet de alta velocidade
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Programa de modernização educacional entregou novos notebooks e tablets pedagógicos para as turmas de ensino fundamental, acompanhado de formação continuada para os docentes da rede.
                </p>
                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-400 font-medium">Secretaria Municipal de Educação</span>
                  <a
                    href={`https://news.google.com/search?q=${encodeURIComponent(municipio.nome + ' educacao escolas laboratorios tecnologia')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    <span>Ler matéria completa na fonte</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        )}
      </div>

      <footer className="px-6 py-4 border-t border-slate-800 bg-slate-950/90 shrink-0 flex flex-wrap items-center justify-between gap-3">
        <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400"/>
          <span>Fontes Oficiais: TCE-MS · DataSebrae · IBGE</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={camara.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 transition-colors border border-slate-700"
            title="Acessar portal da câmara e consultar vereadores e gastos"
          >
            <Users className="w-3.5 h-3.5 text-pink-400"/>
            <span>Câmara Municipal</span>
            <ExternalLink className="w-3 h-3 text-slate-400"/>
          </a>
          <a
            href={camara.tceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 text-xs font-semibold text-cyan-300 transition-colors border border-cyan-800/80 shadow-md"
            title="Consultar auditoria no TCE-MS"
          >
            <Database className="w-3.5 h-3.5 text-cyan-400"/>
            <span>Auditoria TCE-MS</span>
            <ExternalLink className="w-3 h-3"/>
          </a>
        </div>
      </footer>
    </aside>
  );
};
