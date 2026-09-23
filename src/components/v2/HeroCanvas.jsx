import React, { useState, useCallback } from 'react';
import { Home, Camera, MapPin, Sparkles, CalendarCheck, PartyPopper } from 'lucide-react';
import FlipCard from './FlipCard';
import CardModal from './CardModal';

// ─── Card Content Imports (reusing existing section internals) ──────
import SpacesContent from './content/SpacesContent';
import GalleryContent from './content/GalleryContent';
import LocationContent from './content/LocationContent';
import AboutContent from './content/AboutContent';
import QuoteContent from './content/QuoteContent';

// ─── Card Definitions ───────────────────────────────────────────────
const CARDS = [
  {
    id: 'espacos',
    icon: Home,
    title: 'Nossos Espaços',
    subtitle: 'Acomodações, Oca e Natureza',
  },
  {
    id: 'galeria',
    icon: Camera,
    title: 'Galeria Fotográfica',
    subtitle: 'Imagens reais do sítio',
  },
  {
    id: 'localizacao',
    icon: MapPin,
    title: 'Como Chegar',
    subtitle: 'Cabeceira do Sana, Macaé',
  },
  {
    id: 'sobre',
    icon: Sparkles,
    title: 'Sobre Nós',
    subtitle: 'Arte, Ecologia & Educação',
  },
  {
    id: 'cotacao',
    icon: CalendarCheck,
    title: 'Solicitar Orçamento',
    subtitle: 'Hospedagem e Eventos',
  },
  {
    id: 'portfolio',
    icon: PartyPopper,
    title: 'Portfólio de Eventos',
    subtitle: 'Casamentos, Retiros & Encontros',
  },
];

// ─── Content Renderer ───────────────────────────────────────────────
function CardContent({ cardId }) {
  switch (cardId) {
    case 'espacos':
      return <SpacesContent />;
    case 'galeria':
      return <GalleryContent />;
    case 'localizacao':
      return <LocationContent />;
    case 'sobre':
      return <AboutContent />;
    case 'cotacao':
      return <QuoteContent />;
    case 'portfolio':
      return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-300 mb-6">
            <PartyPopper className="w-10 h-10" />
          </div>
          <h3 className="font-serif text-2xl font-bold text-white mb-3">Em breve</h3>
          <p className="text-stone-400 text-sm max-w-sm font-light">
            Estamos preparando nosso portfólio com registros de casamentos, retiros espirituais, 
            encontros corporativos e celebrações que já aconteceram no Sítio Saíra Sete Cores.
          </p>
        </div>
      );
    default:
      return null;
  }
}

// ─── Main Component ─────────────────────────────────────────────────
export default function HeroCanvas() {
  const [activeCard, setActiveCard] = useState(null);

  const handleOpen = useCallback((cardId) => {
    setActiveCard(cardId);
  }, []);

  const handleClose = useCallback(() => {
    setActiveCard(null);
  }, []);

  const activeCardData = CARDS.find((c) => c.id === activeCard);

  return (
    <header className="relative min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-10 overflow-hidden">
      {/* Background Image */}
      <div className={`absolute inset-0 z-0 transition-all duration-500 ${activeCard ? 'v2-hero-blurred' : ''}`}>
        <img
          src="/images/meio-sitio.jpg"
          alt="Vista panorâmica do Sítio Saíra Sete Cores no Sana"
          className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/75"></div>
      </div>

      {/* Hero Title */}
      <div className="relative z-10 text-center mb-8 sm:mb-10">
        <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl">
          Sítio Saíra Sete Cores
        </h1>
        <p className="text-stone-200 text-sm sm:text-base mt-2 font-light drop-shadow-lg">
          Cabeceira do Sana • Macaé (RJ) — Selecione para explorar
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CARDS.map((card) => (
            <FlipCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              subtitle={card.subtitle}
              isActive={activeCard === card.id}
              isReceded={activeCard !== null && activeCard !== card.id}
              onClick={() => handleOpen(card.id)}
            />
          ))}
        </div>
      </div>

      {/* Capacity badges */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 mt-8 sm:mt-10">
        <span className="px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold bg-white/10 backdrop-blur-sm border border-white/15 text-white">
          🏡 Até 23 hóspedes em camas
        </span>
        <span className="px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold bg-white/10 backdrop-blur-sm border border-white/15 text-white">
          🎪 Até 100 pessoas em eventos
        </span>
        <span className="px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold bg-white/10 backdrop-blur-sm border border-white/15 text-white">
          🌊 Rio Macaé na entrada
        </span>
      </div>

      {/* Card Modal */}
      {activeCardData && (
        <CardModal
          title={activeCardData.title}
          icon={activeCardData.icon}
          isOpen={!!activeCard}
          onClose={handleClose}
        >
          <CardContent cardId={activeCard} />
        </CardModal>
      )}
    </header>
  );
}
