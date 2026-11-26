import React, { useCallback } from 'react';
import { Home, Camera, MapPin, Compass, CalendarCheck, Waves } from 'lucide-react';
import FlipCard from './FlipCard';
import CardModal from './CardModal';
import HubLinks from './HubLinks';
import { useNavigation } from './NavigationContext';
import { CARD_COLORS } from './stripeColor';

// ─── Card Content Imports ───────────────────────────────────────────
import SpacesContent from './content/SpacesContent';
import GalleryContent from './content/GalleryContent';
import LocationContent from './content/LocationContent';
import QuoteContent from './content/QuoteContent';
import NatureContent from './content/NatureContent';
import QuintalContent from './content/QuintalContent';

// ─── Card Definitions ───────────────────────────────────────────────
const CARDS = [
  { id: 'espacos',     icon: Home,          title: 'Nossos Espaços',        subtitle: 'Acomodações e Eventos' },
  { id: 'galeria',     icon: Camera,        title: 'Galeria Fotográfica',   subtitle: 'Imagens reais do sítio' },
  { id: 'natureza',    icon: Waves,         title: 'Natureza & Rio',        subtitle: 'Rio Macaé a 10m do sítio' },
  { id: 'localizacao', icon: MapPin,        title: 'Como Chegar',           subtitle: 'Cabeceira do Sana, Macaé' },
  { id: 'quintal',     icon: Compass,       title: 'No Quintal do Sana',    subtitle: 'Turismo & Conveniências' },
  { id: 'cotacao',     icon: CalendarCheck, title: 'Solicitar Orçamento',   subtitle: 'Hospedagem e Eventos' },
];

const CARD_IDS = CARDS.map(c => c.id);

// ─── Content Renderer ───────────────────────────────────────────────
function CardContent({ cardId }) {
  switch (cardId) {
    case 'espacos':     return <SpacesContent />;
    case 'galeria':     return <GalleryContent />;
    case 'natureza':    return <NatureContent />;
    case 'localizacao': return <LocationContent />;
    case 'quintal':     return <QuintalContent />;
    case 'cotacao':     return <QuoteContent />;
    default: return null;
  }
}

// ─── Main Component ─────────────────────────────────────────────────
export default function HeroCanvas() {
  const { activeCard, openCard, closeCard } = useNavigation();

  const activeCardData = CARDS.find((c) => c.id === activeCard);

  return (
    <header className="force-dark relative min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-10 overflow-hidden">
      {/* Background Image */}
      <div className={`absolute inset-0 z-0 transition-all duration-500 ${activeCard ? 'hero-blurred' : ''}`}>
        <img
          src="/images/meio-sitio.jpg"
          alt="Vista panorâmica do Sítio Saíra Sete Cores no Sana"
          className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/75"></div>
      </div>

      {/* Hero Title */}
      <div className={`relative z-10 text-center mb-8 sm:mb-10 transition-all duration-500 ${activeCard ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl">
          Sítio Saíra Sete Cores
        </h1>
        <p className="text-stone-200 text-sm sm:text-base mt-2 font-light drop-shadow-lg">
          Cabeceira do Sana • Macaé (RJ) — Selecione para explorar
        </p>
        <HubLinks className="mt-5 sm:mt-6" />
      </div>

      {/* Cards Grid */}
      <div className={`relative z-10 max-w-5xl mx-auto w-full transition-all duration-500 ${activeCard ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {CARDS.map((card) => (
            <FlipCard
              key={card.id}
              color={CARD_COLORS[card.id]}
              icon={card.icon}
              title={card.title}
              subtitle={card.subtitle}
              isActive={activeCard === card.id}
              isReceded={activeCard !== null && activeCard !== card.id}
              onClick={() => openCard(card.id)}
            />
          ))}
        </div>
      </div>



      {/* Card Modal */}
      {activeCardData && (
        <CardModal
          title={activeCardData.title}
          icon={activeCardData.icon}
          isOpen={!!activeCard}
          onClose={closeCard}
          cardIds={CARD_IDS}
          accent={CARD_COLORS[activeCard]}
          activeCardId={activeCard}
        >
          <CardContent cardId={activeCard} />
        </CardModal>
      )}
    </header>
  );
}
