/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Clock, DollarSign, Fuel, Search, ArrowUpRight, Compass, Sparkles } from 'lucide-react';

interface GiroMsWidgetProps {
  onSearchKeyword?: (keyword: string) => boolean; // return true if handled internally
}

export const GiroMsWidget: React.FC<GiroMsWidgetProps> = ({ onSearchKeyword }) => {
  const [horaMs, setHoraMs] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);

  // Fuso horário oficial de Mato Grosso do Sul (Campo Grande - UTC-4)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        const timeStr = now.toLocaleTimeString('pt-BR', {
          timeZone: 'America/Campo_Grande',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        setHoraMs(timeStr);
      } catch {
        // Fallback para UTC-4 manual caso o fuso local não esteja no runtime
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const msDate = new Date(utc - 4 * 3600000);
        setHoraMs(msDate.toLocaleTimeString('pt-BR'));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Lógica da Barra de Pesquisa Global do MS
  const handleGlobalSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = searchQuery.trim();
    if (!trimmed) return;

    setIsSearching(true);

    // Banco de palavras-chave locais e temas monitorados no MS
    const internalKeywords = [
      'dívida', 'divida', 'orçamento', 'orcamento', 'tce', 'gastos',
      'população', 'populacao', 'habitantes', 'censo',
      'pib', 'sebrae', 'empresas', 'negocios', 'negócios',
      'deputados', 'deputado', 'alems', 'assembleia',
      'prefeito', 'prefeitos', 'vereadores', 'vereador', 'camara',
      'eleições', 'eleicao', 'eleicoes', '2026', 'senador', 'governador',
      'navirai', 'naviraí', 'dourados', 'campo grande', 'corumba', 'corumbá',
      'tres lagoas', 'três lagoas', 'ponta pora', 'ponta porã'
    ];

    const lower = trimmed.toLowerCase();
    const isInternalMatch = internalKeywords.some(kw => lower.includes(kw));

    let handled = false;
    if (isInternalMatch && onSearchKeyword) {
      handled = onSearchKeyword(trimmed);
    }

    // Se não encontrar nada correspondente internamente (ou se a busca não foi absorvida),
    // redireciona para a pesquisa externa no Google com contexto de Mato Grosso do Sul
    if (!handled) {
      const googleUrl = 'https://www.google.com/search?q=' + encodeURIComponent(trimmed + ' Mato Grosso do Sul');
      window.open(googleUrl, '_blank', 'noopener,noreferrer');
    }

    setTimeout(() => {
      setIsSearching(false);
      setSearchQuery('');
    }, 400);
  };

  return (
    <div className="pointer-events-auto bg-slate-950/90 backdrop-blur-md border border-slate-800/90 rounded-2xl p-3 shadow-2xl max-w-xs w-full text-slate-100 space-y-2.5">
      
      {/* Cabeçalho do Giro MS */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-1.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <span className="text-[11px] font-black tracking-wider text-white uppercase flex items-center gap-1">
            Giro MS <span className="text-[9px] font-normal text-cyan-400">Tempo Real</span>
          </span>
        </div>
        <span className="text-[9px] text-slate-400 font-mono">MS (UTC-4)</span>
      </div>

      {/* Grid de 3 KPIs (Hora Oficial MS, Dólar, Diesel Médio MS) */}
      <div className="grid grid-cols-3 gap-1.5 text-center">
        
        {/* KPI 1: Hora Oficial de Campo Grande / MS */}
        <div className="p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between items-center group hover:border-cyan-500/40 transition-colors">
          <div className="flex items-center gap-1 text-[9px] text-slate-400 font-medium">
            <Clock className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
            <span className="truncate">Hora MS</span>
          </div>
          <span className="text-[11px] font-extrabold text-cyan-300 font-mono tracking-tight my-0.5">
            {horaMs || '--:--:--'}
          </span>
          <span className="text-[8px] text-slate-400 font-mono">Campo Grande</span>
        </div>

        {/* KPI 2: Cotação do Dólar Comercial */}
        <div className="p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between items-center group hover:border-emerald-500/40 transition-colors">
          <div className="flex items-center gap-1 text-[9px] text-slate-400 font-medium">
            <DollarSign className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
            <span className="truncate">Dólar</span>
          </div>
          <span className="text-[11px] font-extrabold text-emerald-400 font-mono tracking-tight my-0.5">
            R$ 5,45
          </span>
          <span className="text-[8px] text-emerald-400/80 font-mono">-0,32%</span>
        </div>

        {/* KPI 3: Preço Médio do Diesel MS (+ICMS) */}
        <div className="p-1.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between items-center group hover:border-amber-500/40 transition-colors">
          <div className="flex items-center gap-1 text-[9px] text-slate-400 font-medium">
            <Fuel className="w-2.5 h-2.5 text-amber-400 shrink-0" />
            <span className="truncate">Diesel MS</span>
          </div>
          <span className="text-[11px] font-extrabold text-amber-300 font-mono tracking-tight my-0.5">
            R$ 5,89
          </span>
          <span className="text-[8px] text-slate-400 font-mono">+ ICMS</span>
        </div>

      </div>

      {/* Barra de Pesquisa Global do MS */}
      <form onSubmit={handleGlobalSearch} className="relative mt-1">
        <div className="relative flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar dados do MS..."
            className="w-full pl-2.5 pr-8 py-1.5 text-[11px] bg-slate-900/90 border border-slate-700/80 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all shadow-inner"
          />
          <button
            type="submit"
            disabled={isSearching}
            className="absolute right-1 p-1 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all disabled:opacity-50"
            title="Pesquisar dados do MS"
          >
            <Search className="w-3 h-3" />
          </button>
        </div>
        <p className="text-[8px] text-slate-400 mt-1 flex items-center gap-1 px-1">
          <Compass className="w-2.5 h-2.5 text-cyan-400/80 shrink-0" />
          <span>Busca em dados estaduais ou pesquisa externa</span>
        </p>
      </form>

    </div>
  );
};
