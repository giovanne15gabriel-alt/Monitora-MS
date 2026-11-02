/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ExternalLink, Building2, ChevronDown, ChevronUp, ChevronRight, ChevronLeft, Instagram, MessageCircle, Sparkles } from 'lucide-react';
import { MunicipioMS } from '../../data/municipiosData';

interface Sponsor {
  id: string;
  name: string;
  category: string;
  cidadeIbge?: number;
  cidadeNome?: string;
  logoText: string;
  imageUrl?: string;
  url?: string;
}

const BASE_URL = import.meta.env.BASE_URL || './';

const SPONSORS_DATA: Sponsor[] = [
  // 1. Patrocinadores Oficiais de Nível Estadual / Governo
  { id: '1', name: 'Governo Federal · Brasil', category: 'Governo Federal', logoText: 'GOV. FEDERAL', url: '#' },
  { id: '2', name: 'Banco do Brasil', category: 'Institucional', logoText: 'BANCO DO BRASIL', url: '#' },
  { id: '3', name: 'Energisa Mato Grosso do Sul', category: 'Infraestrutura', logoText: 'ENERGISA MS', url: '#' },
  { id: '4', name: 'Sebrae MS', category: 'Parceiro Estratégico', logoText: 'SEBRAE MS', url: '#' },
  { id: '5', name: 'Sistema FIEEMS', category: 'Indústria', logoText: 'FIEEMS', url: '#' },

  // 2. Patrocinadores & Empresas Municipais (Naviraí - IBGE: 5005707)
  { 
    id: 'nav-1', 
    name: 'GG Engenharia & Projetos', 
    category: 'Engenharia Civil & Projetos', 
    cidadeIbge: 5005707, 
    cidadeNome: 'Naviraí',
    logoText: 'GG Engenharia', 
    imageUrl: `${BASE_URL}sponsors/gg-engenharia.png`, 
    url: 'https://www.instagram.com/eng_giovanegabriel/' 
  },
  { 
    id: 'nav-2', 
    name: 'Renatinho Válvulas Industriais', 
    category: 'Comércio & Manutenção', 
    cidadeIbge: 5005707, 
    cidadeNome: 'Naviraí',
    logoText: 'Renatinho Válvulas', 
    imageUrl: `${BASE_URL}sponsors/renatinho-valvulas.png`, 
    url: 'https://wa.me/5567933001147?text=Ol%C3%A1!%20Vi%20a%20empresa%20Renatinho%20V%C3%A1lvulas%20no%20Monitora%20MS.' 
  },
  { 
    id: 'nav-3', 
    name: 'LA Advogados Associados', 
    category: 'Jurídico & Compliance', 
    cidadeIbge: 5005707, 
    cidadeNome: 'Naviraí',
    logoText: 'LA Advogados', 
    imageUrl: `${BASE_URL}sponsors/la-advocacia.png`, 
    url: 'https://www.instagram.com/la_advogadosassociados/' 
  },
  { 
    id: 'nav-4', 
    name: 'Agência Valete', 
    category: 'Marketing Digital & Automação', 
    cidadeIbge: 5005707, 
    cidadeNome: 'Naviraí',
    logoText: 'Agência Valete', 
    imageUrl: `${BASE_URL}sponsors/agencia-valete.png`, 
    url: 'https://www.instagram.com/agenciavalete6/' 
  },
];

interface SponsorsTickerProps {
  selectedMunicipio?: MunicipioMS | null;
  isMobile?: boolean;
  forceStateOnly?: boolean; // Se true, força exibir sempre os apoiadores a nível estadual
}

export const SponsorsTicker: React.FC<SponsorsTickerProps> = ({ 
  selectedMunicipio, 
  isMobile = false,
  forceStateOnly = false 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Verifica se a cidade selecionada tem empresas cadastradas no banco
  const hasCitySponsors = Boolean(
    !forceStateOnly &&
    selectedMunicipio &&
    SPONSORS_DATA.some(s => s.cidadeIbge === selectedMunicipio.ibge)
  );

  // Regra das 3 lacunas:
  // - No carrossel da esquerda ou sem cidade: patrocinadores estaduais
  // - Na janela da cidade: empresas da cidade (se houver, como Naviraí). Se não houver, patrocinadores estaduais
  const activeSponsors = React.useMemo(() => {
    if (forceStateOnly || !selectedMunicipio) {
      return SPONSORS_DATA.filter(s => !s.cidadeIbge);
    }
    const citySponsors = SPONSORS_DATA.filter(s => s.cidadeIbge === selectedMunicipio.ibge);
    if (citySponsors.length > 0) {
      return citySponsors;
    }
    return SPONSORS_DATA.filter(s => !s.cidadeIbge);
  }, [selectedMunicipio, forceStateOnly]);

  useEffect(() => {
    if (activeSponsors.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeSponsors.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [activeSponsors.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedMunicipio]);

  const currentSponsor = activeSponsors[currentIndex] || activeSponsors[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activeSponsors.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + activeSponsors.length) % activeSponsors.length);
  };

  // Helper para renderizar botão de link social/web
  const renderLinkButton = (sponsor: Sponsor) => {
    if (!sponsor.url || sponsor.url === '#') return null;
    const isInsta = sponsor.url.includes('instagram.com');
    const isWhats = sponsor.url.includes('wa.me');

    return (
      <a
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`px-2 py-1 rounded-lg text-[10px] font-semibold flex items-center gap-1 transition-all ${
          isInsta 
            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30' 
            : isWhats 
            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30' 
            : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30'
        }`}
      >
        {isInsta && <Instagram className="w-2.5 h-2.5 text-cyan-400" />}
        {isWhats && <MessageCircle className="w-2.5 h-2.5 text-emerald-400" />}
        {!isInsta && !isWhats && <ExternalLink className="w-2.5 h-2.5" />}
        <span>{isInsta ? 'Instagram' : isWhats ? 'WhatsApp' : 'Visitar'}</span>
      </a>
    );
  };

  // LAYOUT COMPACTO EM LINHA (Usado no topo mobile e dentro da janela da cidade selecionada)
  if (isMobile) {
    return (
      <div className={`w-full backdrop-blur-md rounded-xl px-3 py-2 flex items-center justify-between gap-2 shadow-lg transition-all ${
        hasCitySponsors 
          ? 'bg-slate-900/98 border border-amber-500/40 ring-1 ring-amber-500/20' 
          : 'bg-slate-900/95 border border-slate-800'
      }`}>
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center p-0.5 shrink-0 shadow-inner overflow-hidden">
            {currentSponsor.imageUrl ? (
              <img src={currentSponsor.imageUrl} alt={currentSponsor.name} className="w-full h-full object-contain filter drop-shadow" />
            ) : (
              <Building2 className="w-4 h-4 text-cyan-400" />
            )}
          </div>
          <div className="min-w-0 flex flex-col">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className={`text-[10.5px] font-bold uppercase truncate ${hasCitySponsors ? 'text-amber-300' : 'text-cyan-400'}`}>
                {currentSponsor.logoText}
              </span>
              {hasCitySponsors && (
                <span className="text-[7.5px] px-1.5 py-0.2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold uppercase tracking-wider shrink-0 flex items-center gap-0.5">
                  <Sparkles className="w-2 h-2 text-amber-400" />
                  {selectedMunicipio?.nome}
                </span>
              )}
            </div>
            <span className="text-[9px] text-slate-400 truncate">{currentSponsor.category}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {renderLinkButton(currentSponsor)}
          <div className="flex items-center gap-0.5 bg-slate-950/80 rounded-lg border border-slate-800 p-1">
            <button onClick={handlePrev} className="p-0.5 text-slate-400 hover:text-white" title="Anterior">
              <ChevronLeft className="w-3 h-3" />
            </button>
            <span className="text-[9px] text-slate-400 px-1 font-mono">{currentIndex + 1}/{activeSponsors.length}</span>
            <button onClick={handleNext} className="p-0.5 text-slate-400 hover:text-white" title="Próximo">
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // LAYOUT FLUTUANTE VERTICAL PARA O MAPA (Carrossel da lateral esquerda)
  return (
    <div className="bg-slate-950/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-3 shadow-2xl flex flex-col gap-2 w-72">
      <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 px-1">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full animate-pulse ${hasCitySponsors ? 'bg-amber-400' : 'bg-cyan-400'}`} />
          <span className="text-[11px] font-bold text-white tracking-wide">
            {hasCitySponsors ? `Parceiros de ${selectedMunicipio?.nome}` : 'Parceiros Oficiais & Governo (MS)'}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={handlePrev} className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors" title="Anterior">
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
          <button onClick={handleNext} className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors" title="Próximo">
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-2.5 flex items-center gap-3 shadow-inner relative overflow-hidden group">
        <div className="w-16 h-16 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center overflow-hidden p-1 shrink-0 shadow-inner">
          {currentSponsor.imageUrl ? (
            <img 
              src={currentSponsor.imageUrl} 
              alt={currentSponsor.name} 
              className="w-full h-full object-contain filter drop-shadow"
            />
          ) : (
            <Building2 className="w-5 h-5 text-cyan-400" />
          )}
        </div>

        <div className="flex-1 min-w-0 space-y-1">
          <div className={`text-[10px] font-bold uppercase tracking-wider truncate ${hasCitySponsors ? 'text-amber-400' : 'text-cyan-400'}`}>
            {currentSponsor.category}
          </div>
          <div className="text-xs font-bold text-white tracking-wide truncate">
            {currentSponsor.logoText}
          </div>
          {currentSponsor.url && currentSponsor.url !== '#' ? (
            <div className="pt-0.5">
              {renderLinkButton(currentSponsor)}
            </div>
          ) : (
            <span className="text-[9px] text-slate-500 font-mono">Oficial</span>
          )}
        </div>

        <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex flex-col gap-1">
          {activeSponsors.map((_, idx) => (
            <span
              key={idx}
              className={`block rounded-full transition-all ${
                idx === currentIndex ? (hasCitySponsors ? 'h-3 w-1 bg-amber-400' : 'h-3 w-1 bg-cyan-400') : 'h-1 w-1 bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
