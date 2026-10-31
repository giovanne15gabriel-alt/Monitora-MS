import React, { useState, useEffect } from 'react';
import { ExternalLink, Building2 } from 'lucide-react';
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
      return SPONSORS_DATA.filter(s => !s.cidadeIbge); // Fallback para o Estado
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

  return (
    <div className="bg-slate-950/92 backdrop-blur-xl border border-slate-800 rounded-2xl p-3.5 shadow-2xl flex flex-col items-center gap-2 w-64">
      
      {/* Título do Card Lateral */}
      <div className="flex items-center justify-between w-full border-b border-slate-800 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-bold text-white tracking-wide">
            {selectedMunicipio ? `Patrocinadores · ${selectedMunicipio.nome}` : 'Parceiros & Governo'}
          </span>
        </div>
      </div>

      {/* Card Principal de Exibição */}
      <div className="w-full h-36 bg-slate-900/95 border border-slate-700/80 rounded-xl p-3 flex flex-col items-center justify-between shadow-inner relative group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none" />
        
        <div className="w-full h-14 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-center overflow-hidden p-1 shrink-0">
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

        <div className="text-center space-y-0.5 z-10 w-full">
          <div className="text-xs font-bold text-white tracking-wide truncate">
            {currentSponsor.logoText}
          </div>
          <div className="text-[9px] text-slate-400 px-2 py-0.5 bg-slate-950/80 rounded-full border border-slate-800 inline-block truncate max-w-full">
            {currentSponsor.category}
          </div>
        </div>

        <a
          href={currentSponsor.url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-1 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 rounded-lg text-[10px] font-bold transition-all flex items-center justify-center gap-1 border border-slate-700/60 shadow-md"
        >
          <span>Visitar Anúncio</span>
          <ExternalLink className="w-3 h-3" />
        </a>

        {/* Indicadores de paginação */}
        <div className="absolute bottom-1 right-2 flex gap-1 z-20">
          {activeSponsors.map((_, idx) => (
            <span
              key={idx}
              className={`block rounded-full transition-all ${
                idx === currentIndex ? 'w-2 h-1 bg-cyan-400' : 'w-1 h-1 bg-slate-700'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
