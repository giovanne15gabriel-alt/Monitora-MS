/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Scale, Building2, ListFilter, Database, Landmark, Map, Vote } from 'lucide-react';

interface HeaderProps {
  onOpenFontes: () => void;
  onResetView: () => void;
  onOpenQuickList: () => void;
  onOpenTce: () => void;
  onOpenGoverno: () => void;
  onOpenLegislativo: () => void;
  onOpenEleicoes: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenFontes,
  onResetView,
  onOpenQuickList,
  onOpenTce,
  onOpenGoverno,
  onOpenLegislativo,
  onOpenEleicoes,
}) => {
  return (
    <header className="relative z-50 flex items-center justify-between gap-4 px-5 py-2.5 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shrink-0">
      {/* Zone 1: Brand Wordmark */}
      <button 
        onClick={onResetView}
        className="text-sm font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-cyan-400 transition-colors flex items-center gap-2"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>Monitora MS</span>
      </button>

      {/* Zone 2: Navigation Links */}
      <nav className="hidden lg:flex items-center gap-3.5 text-xs font-medium text-slate-300">
        <button
          onClick={onResetView}
          className="hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <Map className="w-3.5 h-3.5 text-cyan-400" />
          <span>Mapa 3D Oficial</span>
        </button>

        <button
          onClick={onOpenEleicoes}
          className="px-2.5 py-1 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 font-semibold transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm"
        >
          <Vote className="w-3.5 h-3.5 text-cyan-400" />
          <span>Eleições 2026 (Eleitos)</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </button>

        <button
          onClick={onOpenTce}
          className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <Scale className="w-3.5 h-3.5 text-amber-400" />
          <span>TCE-MS</span>
        </button>

        <button
          onClick={onOpenGoverno}
          className="hover:text-blue-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <Building2 className="w-3.5 h-3.5 text-blue-400" />
          <span>Governo MS</span>
        </button>

        <button
          onClick={onOpenLegislativo}
          className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <Landmark className="w-3.5 h-3.5 text-amber-400" />
          <span>ALEMS & Deputados</span>
        </button>

        <button
          onClick={onOpenQuickList}
          className="hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
        >
          <ListFilter className="w-3.5 h-3.5 text-slate-400" />
          <span>79 Municípios</span>
        </button>
      </nav>

      {/* Zone 3: Primary Action - Fontes Oficiais & SEBRAE */}
      <div className="flex items-center gap-2.5 shrink-0">
        <button
          onClick={onOpenFontes}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-cyan-200 bg-cyan-950/70 hover:bg-cyan-900 border border-cyan-700/80 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
          title="Ver bancos de dados triados, fontes oficiais e SEBRAE"
        >
          <Database className="w-3.5 h-3.5 text-cyan-400" />
          <span>Fontes Oficiais & SEBRAE</span>
        </button>
      </div>
    </header>
  );
};
