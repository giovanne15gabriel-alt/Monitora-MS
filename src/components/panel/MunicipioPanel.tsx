/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MunicipioMS, Vereador } from '../../data/municipiosData.ts';
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
  BarChart3
} from 'lucide-react';

interface MunicipioPanelProps {
  municipio: MunicipioMS | null;
  onClose: () => void;
}

type TabType = 'resumo' | 'financas' | 'sebrae' | 'vereadores';

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
            <span>{formatNumber
