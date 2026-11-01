/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Newspaper, FileText, ExternalLink, Calendar, Building, ChevronDown, ChevronUp, Bell } from 'lucide-react';

interface NoticiaEstadual {
  id: string;
  titulo: string;
  resumo: string;
  orgao: string;
  data: string;
  url: string;
  categoria: string;
}

interface LicitacaoEstadual {
  id: string;
  titulo: string;
  orgao: string;
  dataAbertura: string;
  status: 'Aberto' | 'Em andamento' | 'Edital Publicado';
  modalidade: string;
  valorEstimado?: string;
  url: string;
}

const NOTICIAS_MS_MOCK: NoticiaEstadual[] = [
  {
    id: 'not-1',
    titulo: 'Governo de MS anuncia R$ 1,2 bi para infraestrutura logística e Rota Bioceânica',
    resumo: 'Pacote de investimentos contempla pavimentação de rodovias estaduais, pontes de concreto e anéis viários estratégicos para o escoamento da safra.',
    orgao: 'SEILOG / Agesul',
    data: '31/10/2026',
    categoria: 'Infraestrutura',
    url: 'https://agenciadenoticias.ms.gov.br/'
  },
  {
    id: 'not-2',
    titulo: 'MS atinge marca histórica na atração de indústrias e empregos formais no interior',
    resumo: 'Polo de celulose, biocombustíveis e agroindústria impulsionam arrecadação e geram mais de 18 mil novos postos de trabalho.',
    orgao: 'SEMADESC / Fiems',
    data: '28/10/2026',
    categoria: 'Desenvolvimento',
    url: 'https://agenciadenoticias.ms.gov.br/'
  },
  {
    id: 'not-3',
    titulo: 'Programa MS Saúde amplia cirurgias eletivas e telemedicina em 79 municípios',
    resumo: 'Caravanas de saúde e convênios hospitalares regionais zeram filas de consultas especializadas nas macrorregiões do Estado.',
    orgao: 'SES-MS',
    data: '25/10/2026',
    categoria: 'Saúde',
    url: 'https://agenciadenoticias.ms.gov.br/'
  }
];

const LICITACOES_MS_MOCK: LicitacaoEstadual[] = [
  {
    id: 'lic-1',
    titulo: 'Concorrência Pública nº 042/2026 - Restauração e Pavimentação Asfáltica da Rodovia MS-156',
    orgao: 'Agesul (Agência Estadual de Gestão de Empreendimentos)',
    dataAbertura: '18/11/2026 às 09h00',
    status: 'Aberto',
    modalidade: 'Concorrência Eletrônica',
    valorEstimado: 'R$ 48.750.000,00',
    url: 'https://www.agesul.ms.gov.br/'
  },
  {
    id: 'lic-2',
    titulo: 'Pregão Eletrônico nº 115/2026 - Aquisição de Ambulâncias Tipo UTI Móvel e Desfibriladores',
    orgao: 'SES-MS (Secretaria de Estado de Saúde)',
    dataAbertura: '12/11/2026 às 14h30',
    status: 'Em andamento',
    modalidade: 'Pregão Eletrônico SRP',
    valorEstimado: 'R$ 14.320.000,00',
    url: 'http://www.centraldecompras.ms.gov.br/'
  },
  {
    id: 'lic-3',
    titulo: 'RDC Eletrônico nº 008/2026 - Construção e Adequação de Escola Estadual de Tempo Integral',
    orgao: 'SED-MS (Secretaria de Estado de Educação)',
    dataAbertura: '25/11/2026 às 08h30',
    status: 'Edital Publicado',
    modalidade: 'Regime Diferenciado',
    valorEstimado: 'R$ 9.890.000,00',
    url: 'http://www.centraldecompras.ms.gov.br/'
  }
];

export const NoticiasLicitacoesWidget: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'noticias' | 'licitacoes'>('noticias');
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <div className="pointer-events-auto bg-slate-950/90 backdrop-blur-md border border-slate-800/90 rounded-2xl shadow-2xl w-72 sm:w-80 text-slate-100 overflow-hidden transition-all duration-300">
      
      {/* Top Header com Botão de Minimizar */}
      <div className="px-3 py-2 bg-slate-900/80 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Bell className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-bold text-white tracking-wide">Radar MS Oficial</span>
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          title={isCollapsed ? "Expandir Radar MS" : "Minimizar Radar MS"}
        >
          {isCollapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>
      </div>

      {!isCollapsed && (
        <div className="p-3 space-y-2.5">
          
          {/* Navegação Interna: 2 Abas Estilo Toggle Button */}
          <div className="grid grid-cols-2 p-1 bg-slate-900/90 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveTab('noticias')}
              className={`flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${
                activeTab === 'noticias'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Newspaper className="w-3 h-3 shrink-0" />
              <span>Notícias MS</span>
            </button>

            <button
              onClick={() => setActiveTab('licitacoes')}
              className={`flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${
                activeTab === 'licitacoes'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <FileText className="w-3 h-3 shrink-0" />
              <span>Licitações Abertas</span>
            </button>
          </div>

          {/* Conteúdo Aba 1: Notícias MS (Governo e Estado) */}
          {activeTab === 'noticias' && (
            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {NOTICIAS_MS_MOCK.map((item) => (
                <div
                  key={item.id}
                  className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all text-left space-y-1 group"
                >
                  <div className="flex items-center justify-between gap-1 text-[9px]">
                    <span className="px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 font-semibold border border-cyan-800/60">
                      {item.categoria}
                    </span>
                    <span className="text-slate-400 font-mono">{item.data}</span>
                  </div>

                  <h4 className="text-[11px] font-bold text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug">
                    {item.titulo}
                  </h4>

                  <p className="text-[10px] text-slate-400 line-clamp-2 leading-relaxed">
                    {item.resumo}
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[9px]">
                    <span className="text-slate-400 font-medium">{item.orgao}</span>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      <span>Ler na fonte</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Conteúdo Aba 2: Licitações Abertas (Estado do MS) */}
          {activeTab === 'licitacoes' && (
            <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
              {LICITACOES_MS_MOCK.map((lic) => {
                const statusStyles = {
                  'Aberto': 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80',
                  'Em andamento': 'bg-cyan-950/80 text-cyan-300 border-cyan-800/80',
                  'Edital Publicado': 'bg-amber-950/80 text-amber-300 border-amber-800/80',
                }[lic.status];

                return (
                  <div
                    key={lic.id}
                    className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all text-left space-y-1.5"
                  >
                    <div className="flex items-center justify-between gap-1">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${statusStyles}`}>
                        {lic.status}
                      </span>
                      <span className="text-[9px] text-slate-400 font-mono">{lic.modalidade}</span>
                    </div>

                    <h4 className="text-[11px] font-bold text-slate-100 leading-snug">
                      {lic.titulo}
                    </h4>

                    <div className="space-y-0.5 text-[9.5px] text-slate-400 pt-0.5">
                      <div className="flex items-center gap-1">
                        <Building className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{lic.orgao}</span>
                      </div>
                      <div className="flex items-center gap-1 font-mono text-slate-300">
                        <Calendar className="w-2.5 h-2.5 text-slate-400 shrink-0" />
                        <span>Abertura: {lic.dataAbertura}</span>
                      </div>
                      {lic.valorEstimado && (
                        <div className="text-emerald-400 font-mono text-[9px] font-semibold">
                          Estimado: {lic.valorEstimado}
                        </div>
                      )}
                    </div>

                    <div className="pt-1 border-t border-slate-800/60 flex justify-end">
                      <a
                        href={lic.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[9.5px] text-cyan-400 hover:text-cyan-300 font-medium"
                      >
                        <span>Acessar Edital / Portal</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      )}

    </div>
  );
};
