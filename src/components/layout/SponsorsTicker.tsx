import React, { useState, useEffect } from 'react';
import { Building2, Sparkles, ExternalLink } from 'lucide-react';
import { MunicipioMS } from '../../data/municipiosData';

interface Sponsor {
  id: string;
  name: string;
  category: string;
  cidadeIbge?: number;
  logoText: string;
  url?: string;
}

const SPONSORS_DATA: Sponsor[] = [
  // Patrocinadores Gerais / Estado / Governo (Aparecem quando nenhuma cidade está selecionada)
  { id: '1', name: 'Governo Federal · Brasil', category: 'Governo Federal', logoText: 'GOV. FEDERAL', url: '#' },
  { id: '2', name: 'Banco do Brasil', category: 'Institucional', logoText: 'BANCO DO BRASIL', url: '#' },
  { id: '3', name: 'Energisa Mato Grosso do Sul', category: 'Infraestrutura', logoText: 'ENERGISA MS', url: '#' },
  { id: '4', name: 'Sebrae MS', category: 'Parceiro Estratégico', logoText: 'SEBRAE MS', url: '#' },
  { id: '5', name: 'Sistema FIEEMS', category: 'Indústria', logoText: 'FIEEMS', url: '#' },

  // Patrocinadores de Naviraí (IBGE: 5005707)
  { id: 'nav-1', name: 'GG Engenharia & Projetos', category: 'Engenharia Civil', cidadeIbge: 5005707, logoText: 'GG ENGENHARIA', url: 'https://www.instagram.com/eng_giovanegabriel/' },
  { id: 'nav-2', name: 'Renatinho Válvulas Industriais', category: 'Comércio e Manutenção', cidadeIbge: 5005707, logoText: 'RENATINHO VÁLVULAS', url: '#' },
  { id: 'nav-3', name: 'Comercial Agrícola Naviraí', category: 'Agronegócio', cidadeIbge: 5005707, logoText: 'AGRÍCOLA NAVIRAÍ', url: '#' },

  // Patrocinadores de Dourados (IBGE: 5003702)
  { id: 'dou-1', name: 'Construtora Grande Dourados', category: 'Construção Civil', cidadeIbge: 5003702, logoText: 'CONSTRUTORA DOURADOS', url: '#' },
  { id: 'dou-2', name: 'Hospital Regional de Dourados', category: 'Saúde', cidadeIbge: 5003702, logoText: 'HOSPITAL DOURADOS', url: '#' },
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
    <div className="flex flex-col items-center gap-1.5 w-full">
      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>{selectedMunicipio ? `Patrocinadores · ${selectedMunicipio.nome}` : 'Parceiros & Governo · Estado de MS'}</span>
      </div>

      {/* Card no padrão exato de 176x176 pixels */}
      <div className="w-[176px] h-[176px] bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-4 flex flex-col items-center justify-between shadow-2xl relative group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none" />
        
        <div className="w-8 h-8 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 shadow-inner shrink-0">
          <Building2 className="w-4 h-4" />
        </div>

        <div className="text-center space-y-1 z-10 my-auto">
          <div className="text-xs font-bold text-white tracking-wide line-clamp-2">
            {currentSponsor.logoText}
          </div>
          <div className="text-[10px] text-slate-400 px-2 py-0.5 bg-slate-950/80 rounded-full border border-slate-800 inline-block">
            {currentSponsor.category}
          </div>
        </div>

        <a
          href={currentSponsor.url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-1.5 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 rounded-xl text-[10px] font-bold transition-all flex items-center justify-center gap-1.5 border border-slate-700/60 shadow-md group-hover:border-cyan-400"
        >
          <span>Visitar</span>
          <ExternalLink className="w-3 h-3" />
        </a>

        {/* Indicadores de paginação */}
        <div className="absolute bottom-1 right-2 flex gap-1">
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
