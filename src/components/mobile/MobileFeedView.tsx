/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MunicipioMS } from '../../data/municipiosData.ts';
import { TCE_MS_DATA } from '../../data/tceMsData.ts';
import { GOVERNO_MS_DATA } from '../../data/governoMsData.ts';
import { DEPUTADOS_ESTADUAIS_MS, DEPUTADOS_FEDERAIS_MS, DeputadoEstadual, DeputadoFederal } from '../../data/legislativoMsData.ts';
import { ELEICOES_2026_MS, EleitoCargo } from '../../data/eleicoes2026Data.ts';
import { 
  EMPRESAS_GUIA_COMERCIAL, 
  getEmpresasByIbge, 
  CONTATO_COMERCIAL_WHATSAPP, 
  CONTATO_COMERCIAL_WHATSAPP_DISPLAY 
} from '../../data/guiaComercialData.ts';
import { formatCurrency, formatCompactCurrency, formatNumber } from '../../utils/formatters.ts';
import { GiroMsWidget } from '../widgets/GiroMsWidget.tsx';
import { VisitorStats } from '../../VisitorStats.tsx';
import { 
  Scale, 
  Building2, 
  Landmark, 
  Vote, 
  Store, 
  ExternalLink, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  MapPin,
  Instagram,
  X,
  MessageCircle
} from 'lucide-react';

interface MobileFeedViewProps {
  selectedMunicipio: MunicipioMS | null;
  onSelectMunicipio: (m: MunicipioMS | null) => void;
  onOpenQuickList: () => void;
  onSearchKeyword?: (kw: string) => boolean;
}

export const MobileFeedView: React.FC<MobileFeedViewProps> = ({
  selectedMunicipio,
  onSelectMunicipio,
  onOpenQuickList,
  onSearchKeyword
}) => {
  // Estados para expansão/colapso das seções no feed mobile
  const [openSections, setOpenSections] = useState({
    tce: true,
    governo: true,
    alems: true,
    eleicoes: true,
    vitrine: true,
  });

  const toggleSection = (key: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full bg-slate-950 text-slate-100 flex flex-col space-y-4 px-3 py-4 pb-12">
      
      {/* 1. INDICADORES & BUSCA (GIRO MS MOBILE) */}
      <section className="w-full">
        <GiroMsWidget onSearchKeyword={onSearchKeyword} />
      </section>

      {/* 2. AVISO / DESTAQUE DE MUNICÍPIO SELECIONADO NO MAPA */}
      {selectedMunicipio ? (
        <section className="w-full p-4 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-500/40 shadow-xl space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center gap-2">
              <span 
                className="w-3 h-3 rounded-full shrink-0" 
                style={{ backgroundColor: selectedMunicipio.regiaoCor }} 
              />
              <div>
                <h3 className="text-base font-bold text-white leading-tight">
                  {selectedMunicipio.nome}
                </h3>
                <span className="text-[10px] text-cyan-400 font-medium">
                  {selectedMunicipio.regiao} · {formatNumber(selectedMunicipio.populacao)} hab.
                </span>
              </div>
            </div>
            <button
              onClick={() => onSelectMunicipio(null)}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
              title="Fechar seleção"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Prefeito(a):</span>
              <span className="font-bold text-white truncate block">{selectedMunicipio.prefeito.nome}</span>
              <span className="text-[10px] text-cyan-400 font-mono">({selectedMunicipio.prefeito.partido})</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Transparência TCE:</span>
              <span className="font-bold text-emerald-400 block text-sm">
                {selectedMunicipio.financas.indiceTransparenciaTCE.toFixed(1)} / 10
              </span>
              <span className="text-[9px] text-slate-400">Regular</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-300">
            Dica: Toque na gaveta lateral para abrir o painel detalhado com as 6 abas (Notícias, Guia, Prefeito, Câmara, Dívida e DataSebrae).
          </div>
        </section>
      ) : (
        <section className="w-full p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-5 h-5 text-cyan-400 shrink-0" />
            <div className="text-left">
              <div className="text-xs font-bold text-white">Explore os 79 Municípios</div>
              <div className="text-[10px] text-slate-400">Toque diretamente em qualquer cidade no mapa acima</div>
            </div>
          </div>
          <button
            onClick={onOpenQuickList}
            className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-cyan-950 text-cyan-300 border border-cyan-800 shrink-0 hover:bg-cyan-900"
          >
            Ver Lista
          </button>
        </section>
      )}

      {/* 3. TCE-MS (TRIBUNAL DE CONTAS DO ESTADO) */}
      <section className="w-full rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl">
        <button
          onClick={() => toggleSection('tce')}
          className="w-full px-4 py-3 bg-slate-950/70 border-b border-slate-800 flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                TCE-MS · Tribunal de Contas do Estado
              </h3>
              <p className="text-[10px] text-slate-400">Auditoria dos 79 municípios e Governo de MS</p>
            </div>
          </div>
          {openSections.tce ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
        </button>

        {openSections.tce && (
          <div className="p-4 space-y-3 text-xs">
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Orçamento TCE-MS</span>
                <span className="font-mono font-bold text-amber-400 text-sm">
                  {formatCompactCurrency(TCE_MS_DATA.orcamentoTotalAnual)}
                </span>
                <span className="text-[9px] text-slate-500 block">Exercício 2026</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">Presidente</span>
                <span className="font-bold text-white text-xs block truncate">{TCE_MS_DATA.presidente}</span>
                <span className="text-[9px] text-cyan-400 block">Conselheiro</span>
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Conselheiros Titulares:
              </span>
              <div className="space-y-1 max-h-40 overflow-y-auto pr-1">
                {TCE_MS_DATA.conselheiros.slice(0, 4).map((c) => (
                  <div key={c.id} className="p-2 rounded-lg bg-slate-950/50 border border-slate-800/80 flex items-center justify-between text-[11px]">
                    <div>
                      <span className="font-semibold text-white block">{c.nome}</span>
                      <span className="text-[9px] text-slate-400">{c.cargo}</span>
                    </div>
                    <span className="font-mono text-emerald-400 text-[10px]">{formatCurrency(c.subsidioBruto)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-end">
              <a
                href="https://www.tce.ms.gov.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold"
              >
                <span>Acessar Portal Oficial TCE-MS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </section>

      {/* 4. GOVERNO DE MS (ORÇAMENTO REAL LRF) */}
      <section className="w-full rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl">
        <button
          onClick={() => toggleSection('governo')}
          className="w-full px-4 py-3 bg-slate-950/70 border-b border-slate-800 flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Governo do Estado de MS · Orçamento LRF
              </h3>
              <p className="text-[10px] text-slate-400">Receitas, Saúde, Educação e Obras Estratégicas</p>
            </div>
          </div>
          {openSections.governo ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
        </button>

        {openSections.governo && (
          <div className="p-4 space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block">Governador do Estado:</span>
                <span className="font-bold text-white text-sm">{GOVERNO_MS_DATA.governador.nome}</span>
                <span className="text-[10px] text-cyan-400 font-mono">({GOVERNO_MS_DATA.governador.partido}) · Mandato {GOVERNO_MS_DATA.governador.mandato}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block">Vice-Governador:</span>
                <span className="font-bold text-slate-200 text-xs">{GOVERNO_MS_DATA.viceGovernador.nome}</span>
                <span className="text-[10px] text-emerald-400 font-mono">({GOVERNO_MS_DATA.viceGovernador.partido})</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[9px] text-slate-400 block">Receita Corrente Líquida</span>
                <span className="font-mono font-bold text-emerald-400 text-xs">
                  {formatCompactCurrency(GOVERNO_MS_DATA.receitaCorrenteLiquida)}
                </span>
                <span className="text-[8px] text-slate-500">Orçamento Real</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <span className="text-[9px] text-slate-400 block">Gasto Pessoal Executivo</span>
                <span className="font-mono font-bold text-cyan-400 text-xs">
                  {GOVERNO_MS_DATA.indicadoresLRF[0]?.percentual || 40.84}%
                </span>
                <span className="text-[8px] text-emerald-400">Regular (Teto: 49%)</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-end">
              <a
                href={GOVERNO_MS_DATA.portalTransparenciaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-semibold"
              >
                <span>Portal da Transparência SEFAZ-MS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </section>

      {/* 5. ALEMS & DEPUTADOS FEDERAIS */}
      <section className="w-full rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl">
        <button
          onClick={() => toggleSection('alems')}
          className="w-full px-4 py-3 bg-slate-950/70 border-b border-slate-800 flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Landmark className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Poder Legislativo · ALEMS & Congresso
              </h3>
              <p className="text-[10px] text-slate-400">24 Deputados Estaduais e 8 Deputados Federais de MS</p>
            </div>
          </div>
          {openSections.alems ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
        </button>

        {openSections.alems && (
          <div className="p-4 space-y-3 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block">Presidente da ALEMS:</span>
                <span className="font-bold text-white text-xs">Dep. Gerson Claro (PP)</span>
                <span className="text-[9px] text-amber-400 font-mono">Palácio Guaicurus · Parque dos Poderes</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                24 Deputados
              </span>
            </div>

            <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
              {DEPUTADOS_ESTADUAIS_MS.slice(0, 6).map((dep: DeputadoEstadual) => (
                <div key={dep.id} className="p-2 rounded-lg bg-slate-950/50 border border-slate-800/80 flex items-center justify-between text-[11px]">
                  <div>
                    <span className="font-semibold text-white">{dep.nomeUrna}</span>
                    <span className="text-[9px] text-slate-400 ml-1.5 font-mono">({dep.partido})</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400">{formatNumber(dep.votos)} votos</span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-800 flex justify-end">
              <a
                href="https://al.ms.leg.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold"
              >
                <span>Acessar Portal da ALEMS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </section>

      {/* 6. ELEIÇÕES 2026 · COMPOSIÇÃO 2027–2030 */}
      <section className="w-full rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl">
        <button
          onClick={() => toggleSection('eleicoes')}
          className="w-full px-4 py-3 bg-slate-950/70 border-b border-slate-800 flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm">
              <Vote className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Eleições 2026 · Composição 2027–2030
              </h3>
              <p className="text-[10px] text-slate-400">Senadores, Deputados Federais e Poder Executivo</p>
            </div>
          </div>
          {openSections.eleicoes ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
        </button>

        {openSections.eleicoes && (
          <div className="p-4 space-y-3 text-xs">
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Bancada de MS no Senado Federal (3 Senadores):
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {ELEICOES_2026_MS.senadoresEleitos.map((sen: EleitoCargo) => (
                  <div key={sen.id} className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white text-xs">{sen.nome}</span>
                      <span className="text-[9px] text-cyan-400 font-mono ml-1.5">({sen.partido})</span>
                    </div>
                    {sen.instagramUrl && (
                      <a
                        href={sen.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[10px] text-cyan-400 hover:text-cyan-300"
                      >
                        <Instagram className="w-3 h-3" />
                        <span>{sen.instagramHandle}</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Deputados Federais Eleitos (Câmara dos Deputados):
              </span>
              <div className="space-y-1 max-h-40 overflow-y-auto pr-1">
                {ELEICOES_2026_MS.deputadosFederaisEleitos.map((dep: EleitoCargo) => (
                  <div key={dep.id} className="p-2 rounded-lg bg-slate-950/50 border border-slate-800/80 flex items-center justify-between text-[11px]">
                    <div>
                      <span className="font-semibold text-white">{dep.nomeUrna}</span>
                      <span className="text-[9px] text-slate-400 ml-1.5 font-mono">({dep.partido})</span>
                    </div>
                    <span className="text-[9px] text-slate-400 font-mono">{formatNumber(dep.votos)} votos</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 7. VITRINE DE ANÚNCIOS & GUIA COMERCIAL */}
      <section className="w-full rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 overflow-hidden shadow-xl">
        <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Store className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                {selectedMunicipio && getEmpresasByIbge(selectedMunicipio.ibge).length > 0
                  ? `Guia Comercial de ${selectedMunicipio.nome}`
                  : 'Guia Comercial Oficial & Vitrine MS'}
              </h3>
              <p className="text-[10px] text-amber-300/90">Espaço Empresarial e Parceiros Oficiais</p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Oficial
          </span>
        </div>

        <div className="p-4 space-y-3.5 text-xs">
          {/* Card dos Parceiros Oficiais com Imagem/Logo */}
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {selectedMunicipio && getEmpresasByIbge(selectedMunicipio.ibge).length > 0
                ? `Empresas Cadastradas em ${selectedMunicipio.nome}:`
                : 'Parceiros Oficiais Cadastrados (Naviraí - MS):'}
            </span>

            <div className="grid grid-cols-1 gap-2.5 text-left">
              {(selectedMunicipio && getEmpresasByIbge(selectedMunicipio.ibge).length > 0
                ? getEmpresasByIbge(selectedMunicipio.ibge)
                : EMPRESAS_GUIA_COMERCIAL
              ).map((empresa) => (
                <div
                  key={empresa.id}
                  className="p-3 rounded-xl bg-slate-900/95 border border-slate-700/80 hover:border-amber-500/50 transition-all flex items-start gap-3 shadow-md"
                >
                  {/* Logo / Imagem da Empresa */}
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-inner">
                    {empresa.imagemUrl ? (
                      <img
                        src={empresa.imagemUrl}
                        alt={empresa.nome}
                        className="w-full h-full object-contain filter drop-shadow"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <Store className="w-5 h-5 text-amber-400" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 flex-wrap">
                      <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/80">
                        {empresa.categoria}
                      </span>
                      {empresa.verificado && (
                        <span className="text-[9px] text-emerald-400 font-mono flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Verificado
                        </span>
                      )}
                    </div>

                    <h4 className="text-xs font-bold text-white mt-1 leading-snug">
                      {empresa.nome}
                    </h4>
                    <p className="text-[10px] text-slate-300 mt-0.5 leading-relaxed">
                      {empresa.descricao}
                    </p>

                    <div className="mt-2 flex items-center gap-3 text-[10px]">
                      {empresa.instagramUrl && (
                        <a
                          href={empresa.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium"
                        >
                          <Instagram className="w-3 h-3" />
                          <span>Instagram</span>
                        </a>
                      )}
                      <a
                        href={`https://wa.me/${CONTATO_COMERCIAL_WHATSAPP}?text=${encodeURIComponent(`Olá! Vi a empresa ${empresa.nome} no Guia Comercial do Monitora MS.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
                      >
                        <MessageCircle className="w-3 h-3" />
                        <span>Contato</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chamada para anúncio com WhatsApp 67 9 3300-1147 */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-500/20 text-center space-y-2">
            <p className="text-xs text-slate-200 font-medium">
              "Anuncie seu comércio aqui. Entre em contato para colocar sua empresa no guia oficial da cidade."
            </p>
            <a
              href={`https://wa.me/${CONTATO_COMERCIAL_WHATSAPP}?text=${encodeURIComponent('Olá! Tenho interesse em cadastrar minha empresa no Guia Comercial do Monitora MS.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all w-full"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Quero Anunciar no Guia Oficial</span>
              <span className="text-[10px] font-mono text-slate-900 bg-amber-400/90 px-1.5 py-0.5 rounded ml-1">
                {CONTATO_COMERCIAL_WHATSAPP_DISPLAY}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. CONTADOR DE VISITANTES & CRÉDITO DO DESENVOLVEDOR */}
      <footer className="w-full pt-4 border-t border-slate-800/80 space-y-3">
        <div className="flex flex-col items-center justify-center gap-3">
          {/* Contador de visitantes limpo */}
          <div className="w-full">
            <VisitorStats isMobile={true} />
          </div>

          {/* Botão Instagram Dev. Giovane Gabriel */}
          <a
            href="https://www.instagram.com/eng_giovanegabriel/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram: @eng_giovanegabriel (Dev. Giovane Gabriel)"
            className="w-full max-w-xs flex items-center justify-center gap-2.5 px-4 py-2.5 bg-slate-900/90 hover:bg-slate-850 backdrop-blur-xl border border-slate-700/80 hover:border-cyan-400/60 rounded-xl shadow-xl transition-all group"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 via-teal-400 to-blue-500 flex items-center justify-center text-slate-950 shadow-md shadow-cyan-500/30 shrink-0 group-hover:scale-105 transition-all">
              <Instagram className="w-4 h-4 text-slate-950 stroke-[2.2]" />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-xs font-bold text-slate-100 group-hover:text-cyan-300 transition-colors whitespace-nowrap">
                Dev. Giovane Gabriel
              </span>
              <span className="text-[10px] text-cyan-400 font-mono font-medium">
                @eng_giovanegabriel
              </span>
            </div>
          </a>

          <p className="text-[10px] text-slate-400 text-center font-mono">
            Monitora MS · Transparência Cívica e Controle Social dos 79 Municípios
          </p>
        </div>
      </footer>

    </div>
  );
};
