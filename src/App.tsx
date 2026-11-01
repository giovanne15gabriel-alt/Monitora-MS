/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { InteractiveMSMap } from './components/map/InteractiveMSMap.tsx';
import { MunicipioPanel } from './components/panel/MunicipioPanel.tsx';
import { Header } from './components/layout/Header.tsx';
import { FontesOficiaisModal } from './components/modals/FontesOficiaisModal.tsx';
import { MunicipiosListModal } from './components/modals/MunicipiosListModal.tsx';
import { TceModal } from './components/modals/TceModal.tsx';
import { GovernoMsModal } from './components/modals/GovernoMsModal.tsx';
import { LegislativoModal } from './components/modals/LegislativoModal.tsx';
import { Eleicoes2026Modal } from './components/modals/Eleicoes2026Modal.tsx';
import { SponsorsTicker } from './components/layout/SponsorsTicker.tsx';
import { MobileFeedView } from './components/mobile/MobileFeedView.tsx';
import { MunicipioMS } from './data/municipiosData.ts';

export default function App() {
  const [selectedMunicipio, setSelectedMunicipio] = useState<MunicipioMS | null>(null);
  const [isFontesOpen, setIsFontesOpen] = useState(false);
  const [isQuickListOpen, setIsQuickListOpen] = useState(false);
  const [isTceOpen, setIsTceOpen] = useState(false);
  const [isGovernoOpen, setIsGovernoOpen] = useState(false);
  const [isLegislativoOpen, setIsLegislativoOpen] = useState(false);
  const [isEleicoesOpen, setIsEleicoesOpen] = useState(false);

  return (
    <div className="relative w-screen min-h-screen md:h-screen bg-slate-950 text-slate-100 flex flex-col overflow-y-auto md:overflow-hidden font-sans">
      {/* Top Header */}
      <Header
        onOpenFontes={() => setIsFontesOpen(true)}
        onResetView={() => setSelectedMunicipio(null)}
        onOpenQuickList={() => setIsQuickListOpen(true)}
        onOpenTce={() => setIsTceOpen(true)}
        onOpenGoverno={() => setIsGovernoOpen(true)}
        onOpenLegislativo={() => setIsLegislativoOpen(true)}
        onOpenEleicoes={() => setIsEleicoesOpen(true)}
      />

      {/* Carrossel de Patrocinadores Mobile (Exclusivo Topo Mobile: Quando NENHUMA cidade selecionada, exibe estaduais; ao selecionar cidade, exibe locais) */}
      <div className="block md:hidden w-full px-3 py-1.5 bg-slate-950 border-b border-slate-800/80 shrink-0 z-30">
        <SponsorsTicker selectedMunicipio={selectedMunicipio} isMobile={true} />
      </div>

      {/* Main Content Area */}
      <main className="relative flex-1 w-full flex flex-col md:overflow-hidden">
        
        {/* Mapa Interativo de MS: Fullscreen no desktop, altura calibrada no mobile */}
        <div className="w-full h-[52vh] min-h-[380px] max-h-[500px] md:h-full md:max-h-none md:flex-1 relative shrink-0">
          <InteractiveMSMap
            selectedMunicipio={selectedMunicipio}
            onSelectMunicipio={setSelectedMunicipio}
            onOpenTce={() => setIsTceOpen(true)}
            onOpenGoverno={() => setIsGovernoOpen(true)}
            onOpenLegislativo={() => setIsLegislativoOpen(true)}
            onOpenEleicoes={() => setIsEleicoesOpen(true)}
          />
        </div>

        {/* FEED DE ROLAGEM VERTICAL CONTÍNUA MOBILE (Aparece logo após o mapa ao rolar para baixo) */}
        <div className="block md:hidden w-full">
          <MobileFeedView
            selectedMunicipio={selectedMunicipio}
            onSelectMunicipio={setSelectedMunicipio}
            onOpenQuickList={() => setIsQuickListOpen(true)}
            onSearchKeyword={(kw) => {
              const lower = kw.toLowerCase().trim();
              if (lower.includes('tce') || lower.includes('divida') || lower.includes('dívida')) {
                setIsTceOpen(true);
                return true;
              }
              if (lower.includes('governo') || lower.includes('lrf') || lower.includes('orcamento') || lower.includes('orçamento')) {
                setIsGovernoOpen(true);
                return true;
              }
              if (lower.includes('alems') || lower.includes('deputad') || lower.includes('assembleia')) {
                setIsLegislativoOpen(true);
                return true;
              }
              if (lower.includes('eleiç') || lower.includes('eleic') || lower.includes('2026') || lower.includes('senador')) {
                setIsEleicoesOpen(true);
                return true;
              }
              return false;
            }}
          />
        </div>

        {/* Slide-in Side Panel for Selected Municipality */}
        <MunicipioPanel
          municipio={selectedMunicipio}
          onClose={() => setSelectedMunicipio(null)}
        />
      </main>

      {/* Eleições 2026 · Composição 2027–2030 Modal */}
      <Eleicoes2026Modal
        isOpen={isEleicoesOpen}
        onClose={() => setIsEleicoesOpen(false)}
      />

      {/* Tribunal de Contas de MS (TCE-MS) Modal */}
      <TceModal
        isOpen={isTceOpen}
        onClose={() => setIsTceOpen(false)}
      />

      {/* Governo do Estado de MS (Orçamento Real LRF, Secretarias & Obras) Modal */}
      <GovernoMsModal
        isOpen={isGovernoOpen}
        onClose={() => setIsGovernoOpen(false)}
        onOpenEleicoes={() => setIsEleicoesOpen(true)}
      />

      {/* Poder Legislativo de MS (ALEMS · 24 Dep. Estaduais e 8 Dep. Federais) Modal */}
      <LegislativoModal
        isOpen={isLegislativoOpen}
        onClose={() => setIsLegislativoOpen(false)}
        onOpenEleicoes={() => setIsEleicoesOpen(true)}
      />

      {/* Fontes Primárias Oficiais & SEBRAE (PDF e DataSebrae Validado) Modal */}
      <FontesOficiaisModal
        isOpen={isFontesOpen}
        onClose={() => setIsFontesOpen(false)}
      />

      {/* All 79 Municipalities Table/Ranking Modal */}
      <MunicipiosListModal
        isOpen={isQuickListOpen}
        onClose={() => setIsQuickListOpen(false)}
        onSelectMunicipio={(m) => {
          setSelectedMunicipio(m);
        }}
      />
    </div>
  );
}
