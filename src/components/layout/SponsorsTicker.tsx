import React from 'react';
import { Sparkles, Building } from 'lucide-react';

interface SponsorItem {
  id: string;
  name: string;
  category: string;
}

// Protótipo com espaços disponíveis para patrocinadores (176x176 px)
const DUMMY_SPONSORS: SponsorItem[] = [
  { id: '1', name: 'Seu Patrocínio Aqui', category: 'Espaço Disponível' },
  { id: '2', name: 'Anuncie Sua Marca', category: 'Banner 176x176' },
  { id: '3', name: 'Empresa Parceira', category: 'Seja Patrocinador' },
  { id: '4', name: 'Sua Marca em Destaque', category: 'Divulgue no MS' },
  { id: '5', name: 'Espaço Comercial', category: 'Contato Disponível' },
];

export const SponsorsTicker: React.FC = () => {
  // Duplicamos a lista para garantir o efeito de rolagem infinita contínua sem saltos
  const repeatedSponsors = [...DUMMY_SPONSORS, ...DUMMY_SPONSORS];

  return (
    <div className="w-full overflow-hidden bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-2xl py-2.5 px-4 shadow-xl select-none">
      
      {/* Cabeçalho discreto da faixa */}
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>EMPRESA PARCEIRAS & PATROCINADORES</span>
        </div>
        <span className="text-[10px] text-cyan-400 font-mono bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-800/60">
          Anuncie aqui: (67) 93300-1147
        </span>
      </div>

      {/* Faixa Rolativa Infinita */}
      <div className="relative w-full overflow-hidden flex mask-gradient">
        <div className="flex gap-3 animate-marquee whitespace-nowrap py-1">
          {repeatedSponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.id}-${index}`}
              className="w-[176px] h-[176px] shrink-0 bg-slate-950/80 hover:bg-slate-900 border border-slate-800/90 hover:border-cyan-500/50 rounded-xl p-3 flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-pointer shadow-md"
              title="Clique para anunciar sua empresa"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors mb-2.5 shadow-inner">
                <Building className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-300 group-hover:text-white truncate w-full px-1">
                {sponsor.name}
              </span>
              <span className="text-[10px] text-slate-500 group-hover:text-cyan-300 mt-1">
                {sponsor.category}
              </span>
              <span className="mt-2 text-[9px] font-semibold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                QUERO ANUNCIAR →
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
