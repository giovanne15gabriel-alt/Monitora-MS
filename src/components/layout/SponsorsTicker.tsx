import React, { useState, useEffect } from 'react';
import { ExternalLink, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { MunicipioMS } from '../../data/municipiosData';

interface Sponsor {
  id: string;
  name: string;
  category: string;
  cidadeIbge?: number;
  logoText: string;
  imageUrl?: string;
  url?: string;
}

const SPONSORS_DATA: Sponsor[] = [
  // Patrocinadores Gerais / Estado / Governo (Aparecem no mapa geral de MS)
  { id: '1', name: 'Governo Federal · Brasil', category: 'Governo Federal', logoText: 'GOV. FEDERAL', url: '#' },
  { id: '2', name: 'Banco do Brasil', category: 'Institucional', logoText: 'BANCO DO BRASIL', url: '#' },
  { id: '3', name: 'Energisa Mato Grosso do Sul', category: 'Infraestrutura', logoText: 'ENERGISA MS', url: '#' },
  { id: '4', name: 'Sebrae MS', category: 'Parceiro Estratégico', logoText: 'SEBRAE MS', url: '#' },
  { id: '5', name: 'Sistema FIEEMS', category: 'Indústria', logoText: 'FIEEMS', url: '#' },

  // Patrocinadores de Naviraí (IBGE: 5005707)
  { id: 'nav-1', name: 'GG Engenharia & Projetos', category: 'Engenharia Civil', cidadeIbge: 5005707, logoText: 'GG Engenharia', imageUrl: '/sponsors/gg-engenharia.png', url: 'https://www.instagram.com/eng_giovanegabriel/' },
  { id: 'nav-2', name: 'Renatinho Válvulas Industriais', category: 'Comércio e Manutenção', cidadeIbge: 5005707, logoText: 'Renatinho Válvulas', imageUrl: '/sponsors/renatinho-valvulas.png', url: '#' },
  { id: 'nav-3', name: 'LA Advocacia', category: 'Jurídico & Compliance', cidadeIbge: 5005707, logoText: 'LA Advocacia', imageUrl: '/sponsors/la-advocacia.png', url: '#' },
];

interface SponsorsTickerProps {
  selectedMunicipio: MunicipioMS | null;
}

export const SponsorsTicker: React.FC<SponsorsTickerProps> = ({ selectedMunicipio }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeSponsors = React.useMemo(() => {
    if (!selectedMunicipio) {
      return SPONSORS_DATA.filter(s => !s.cidadeIbge);
    }
    const citySponsors = SPONSORS_DATA.filter(s => s.cidadeIbge === selectedMunicipio.ibge);
    if (citySponsors.length === 0) {
      return SPONSORS_DATA.filter(s => !s.cidadeIbge);
    }
    return citySponsors;
  }, [selectedMunicipio]);

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

  return (
    <div className="bg-slate-950/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-3 shadow-2xl flex flex-col gap-2 w-72">
      
      {/* Cabeçalho do Bloco */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 px-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-bold text-white tracking-wide">
            {selectedMunicipio ? `Patrocinadores · ${selectedMunicipio.nome}` : 'Parceiros & Governo'}
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

      {/* Card com efeito de transição vertical */}
      <div className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl p-2.5 flex items-center gap-3 shadow-inner relative overflow-hidden group">
        
        {/* Imagem / Logo */}
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

        {/* Informações */}
        <div className="flex-1 min-w-0 space-y-1">
          <div className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider truncate">
            {currentSponsor.category}
          </div>
          <div className="text-xs font-bold text-white tracking-wide truncate">
            {currentSponsor.logoText}
          </div>
          <a
            href={currentSponsor.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] text-slate-300 hover:text-cyan-300 font-semibold transition-colors"
          >
            <span>Visitar</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Indicadores de posição na vertical */}
        <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex flex-col gap-1">
          {activeSponsors.map((_, idx) => (
            <span
              key={idx}
              className={`block rounded-full transition-all ${
                idx === currentIndex ? 'h-3 w-1 bg-cyan-400' : 'h-1 w-1 bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
