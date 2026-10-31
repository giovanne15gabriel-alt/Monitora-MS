import React, { useState, useEffect } from 'react';
import { Building2, Sparkles, ExternalLink } from 'lucide-react';
import { MunicipioMS } from '../../data/municipiosData';

interface Sponsor {
  id: string;
  name: string;
  category: string;
  cidadeIbge?: number; // Se preenchido, é patrocinador específico daquele município
  logoText: string;
  url?: string;
}

// Base de dados de patrocinadores (Estaduais e Municipais)
const SPONSORS_DATA: Sponsor[] = [
  // Patrocinadores Gerais / Estado / Governo (Exibidos quando nenhuma cidade está selecionada)
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

  // Patrocinadores de Caarapó (IBGE: 5002704 - Exemplo ou ajuste conforme IBGE)
  { id: 'caa-1', name: 'Cooperativa Agroindustrial Caarapó', category: 'Agronegócio', cidadeIbge: 5002654, logoText: 'COOP CAARAPÓ', url: '#' },
];

interface SponsorsTickerProps {
  selectedMunicipio: MunicipioMS | null;
}

export const SponsorsTicker: React.FC<SponsorsTickerProps> = ({ selectedMunicipio }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filtra os patrocinadores com base na cidade selecionada
  const activeSponsors = React.useMemo(() => {
    if (!selectedMunicipio) {
      // Nenhum município selecionado: mostra apenas os estaduais/gerais (sem cidadeIbge)
      return SPONSORS_DATA.filter(s => !s.cidadeIbge);
    }

    // Município selecionado: busca os patrocinadores específicos da cidade
    const citySponsors = SPONSORS_DATA.filter(s => s.cidadeIbge === selectedMunicipio.ibge);

    // Se a cidade não tiver patrocinadores cadastrados, faz o fallback para os estaduais
    if (citySponsors.length === 0) {
      return SPONSORS_DATA.filter(s => !s.cidadeIbge);
    }

    return citySponsors;
  }, [selectedMunicipio]);

  // Efeito de rotação automática do carrossel
  useEffect(() => {
    if (activeSponsors.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeSponsors.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSponsors.length]);

  // Reseta o índice se a lista mudar
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedMunicipio]);

  const currentSponsor = activeSponsors[currentIndex] || activeSponsors[0];

  return (
    <div className="w-full bg-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded-xl px-4 py-2 flex items-center justify-between shadow-lg">
      
      {/* Título dinâmico indicando o contexto do patrocínio */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
          {selectedMunicipio ? `Patrocinadores · ${selectedMunicipio.nome}` : 'Parceiros & Governo · Estado de MS'}
        </span>
      </div>

      {/* Card do Anúncio Atual em Destaque */}
      <div className="flex-1 mx-4 overflow-hidden text-center">
        <a
          href={currentSponsor.url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-colors group truncate"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-transparent font-bold">
            {currentSponsor.logoText}
          </span>
          <span className="text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
            {currentSponsor.category}
          </span>
          <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-cyan-400 shrink-0" />
        </a>
      </div>

      {/* Indicadores de Paginação do Carrossel */}
      <div className="flex items-center gap-1 shrink-0">
        {activeSponsors.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all rounded-full ${
              idx === currentIndex ? 'w-4 h-1.5 bg-cyan-400' : 'w-1.5 h-1.5 bg-slate-700 hover:bg-slate-600'
            }`}
          />
        ))}
      </div>

    </div>
  );
};
