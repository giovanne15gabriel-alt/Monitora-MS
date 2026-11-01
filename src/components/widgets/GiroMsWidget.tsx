/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Clock, DollarSign, Fuel, Search, ArrowUpRight, Compass, Sparkles, X, CheckCircle2 } from 'lucide-react';
import { queryMsPlatform, MsSearchActions, MsSearchResult } from '../../utils/msSearchEngine.ts';

interface GiroMsWidgetProps {
  onSearchActions?: MsSearchActions;
  onSearchKeyword?: (keyword: string) => boolean; // backwards compatible
}

export const GiroMsWidget: React.FC<GiroMsWidgetProps> = ({ onSearchActions, onSearchKeyword }) => {
  const [horaMs, setHoraMs] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [inlineAnswer, setInlineAnswer] = useState<MsSearchResult | null>(null);
  const dismissTimerRef = useRef<number | null>(null);

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

  // Lógica da Barra de Pesquisa Global do MS com resposta instantânea e limpeza de histórico
  const handleGlobalSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = searchQuery.trim();
    if (!trimmed) return;

    setIsSearching(true);

    // Limpa imediatamente o input ("já apaga o histórico de conversa")
    setSearchQuery('');

    // Cancela timer anterior se houver
    if (dismissTimerRef.current) {
      window.clearTimeout(dismissTimerRef.current);
    }

    // Executa pesquisa inteligente
    const result = queryMsPlatform(trimmed, onSearchActions);

    // Se houver callback legado e não tínhamos onSearchActions
    if (!onSearchActions && onSearchKeyword) {
      onSearchKeyword(trimmed);
    }

    setInlineAnswer(result);
    setIsSearching(false);

    // Auto-dismiss da resposta inline após 10 segundos
    dismissTimerRef.current = window.setTimeout(() => {
      setInlineAnswer(null);
    }, 10000);
  };

  return (
    <div className="pointer-events-auto bg-slate-950/85 backdrop-blur-xl border border-cyan-500/30 hover:border-cyan-400/50 rounded-2xl p-3.5 shadow-[0_0_25px_rgba(6,182,212,0.15)] ring-1 ring-white/5 max-w-xs w-full text-slate-100 space-y-3 transition-all duration-300">
      
      {/* Cabeçalho do Giro MS Futurista */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,1)]"></span>
          </div>
          <span className="text-[11px] font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 uppercase">
            GIRO MS <span className="text-[9px] font-semibold text-cyan-400 font-mono">· LIVE</span>
          </span>
        </div>
        <div className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[9px] text-cyan-300 font-mono">
          UTC-4
        </div>
      </div>

      {/* Grid de 3 KPIs Futuristas */}
      <div className="grid grid-cols-3 gap-2 text-center">
        
        {/* KPI 1: Hora Oficial de Campo Grande / MS */}
        <div className="p-2 rounded-xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800/90 hover:border-cyan-500/40 flex flex-col justify-between items-center group transition-all duration-200 shadow-inner">
          <div className="flex items-center gap-1 text-[9px] text-slate-400 font-medium">
            <Clock className="w-2.5 h-2.5 text-cyan-400 shrink-0" />
            <span className="truncate">Hora MS</span>
          </div>
          <span className="text-[11px] font-black text-cyan-300 font-mono tracking-tight my-1 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]">
            {horaMs || '--:--:--'}
          </span>
          <span className="text-[8px] text-slate-400 font-mono">Campo Grande</span>
        </div>

        {/* KPI 2: Cotação do Dólar Comercial */}
        <div className="p-2 rounded-xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800/90 hover:border-emerald-500/40 flex flex-col justify-between items-center group transition-all duration-200 shadow-inner">
          <div className="flex items-center gap-1 text-[9px] text-slate-400 font-medium">
            <DollarSign className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
            <span className="truncate">Dólar</span>
          </div>
          <span className="text-[11px] font-black text-emerald-400 font-mono tracking-tight my-1 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">
            R$ 5,45
          </span>
          <span className="text-[8px] text-emerald-400/90 font-mono font-semibold">-0,32%</span>
        </div>

        {/* KPI 3: Preço Médio do Diesel MS (R$ 7,34 com destaque explícito para ICMS incluso) */}
        <div className="p-2 rounded-xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-amber-500/30 hover:border-amber-400/50 flex flex-col justify-between items-center group transition-all duration-200 shadow-inner">
          <div className="flex items-center gap-1 text-[9px] text-slate-400 font-medium">
            <Fuel className="w-2.5 h-2.5 text-amber-400 shrink-0" />
            <span className="truncate">Diesel S10</span>
          </div>
          <span className="text-[11px] font-black text-amber-300 font-mono tracking-tight my-0.5 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]">
            R$ 7,34
          </span>
          <div className="flex flex-col items-center leading-none">
            <span className="text-[7.5px] text-amber-200/90 font-mono font-medium">
              ICMS incluso: R$ 1,25
            </span>
            <span className="text-[7px] text-slate-500 font-mono mt-0.5">ANP / Operaction</span>
          </div>
        </div>

      </div>

      {/* Barra de Pesquisa Global do MS Futurista */}
      <form onSubmit={handleGlobalSearch} className="relative mt-1">
        <div className="relative flex items-center group">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar dados do MS..."
            className="w-full pl-3 pr-8 py-1.5 text-xs bg-slate-900/90 border border-slate-700/80 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 transition-all shadow-inner"
          />
          <button
            type="submit"
            disabled={isSearching}
            className="absolute right-1 p-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-bold transition-all shadow-md disabled:opacity-50"
            title="Pesquisar dados do MS"
          >
            <Search className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Resposta Instantânea Inline (já apaga a pergunta do input e exibe o resultado ali mesmo) */}
        {inlineAnswer && (
          <div className="mt-2 p-2.5 rounded-xl bg-slate-900/98 border border-cyan-500/40 shadow-xl text-left space-y-1.5 transition-all">
            <div className="flex items-start justify-between gap-1.5 border-b border-slate-800 pb-1">
              <div className="flex items-center gap-1.5 min-w-0">
                {inlineAnswer.handled ? (
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 animate-pulse" />
                ) : (
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                )}
                <span className="text-[10px] font-bold text-white truncate">
                  {inlineAnswer.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setInlineAnswer(null)}
                className="p-0.5 text-slate-400 hover:text-white rounded shrink-0"
                title="Fechar resposta"
              >
                <X className="w-3 h-3" />
              </button>
            </div>

            <p className="text-[10px] text-slate-300 leading-relaxed">
              {inlineAnswer.answer}
            </p>

            {inlineAnswer.tabOpened && (
              <div className="pt-0.5 flex items-center justify-between text-[8.5px] text-cyan-300 font-mono">
                <span>Aba: {inlineAnswer.tabOpened}</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-0.5">
                  <CheckCircle2 className="w-2.5 h-2.5" /> Ativo no mapa
                </span>
              </div>
            )}
          </div>
        )}

        <p className="text-[8px] text-slate-400 mt-1 flex items-center justify-between px-1">
          <span className="flex items-center gap-1">
            <Compass className="w-2.5 h-2.5 text-cyan-400/80 shrink-0" />
            <span>Busca inteligente ou Google</span>
          </span>
          <span className="text-cyan-400/80 font-mono">79 Municípios</span>
        </p>
      </form>

    </div>
  );
};
