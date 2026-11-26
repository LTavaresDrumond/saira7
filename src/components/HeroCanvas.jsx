import React from 'react';
import { Home, MapPin, Compass, CalendarCheck, Waves } from 'lucide-react';
import FlipCard from './FlipCard';
import CardModal from './CardModal';
import { useNavigation } from './NavigationContext';
import { CARD_COLORS } from './stripeColor';
import { sairaData } from '../data/sairaData';
import Photo from './Photo';

// ─── Card Content Imports ───────────────────────────────────────────
import SpacesContent from './content/SpacesContent';
import LocationContent from './content/LocationContent';
import QuoteContent from './content/QuoteContent';
import NatureContent from './content/NatureContent';
import QuintalContent from './content/QuintalContent';

// ─── Cards ──────────────────────────────────────────────────────────
// Nomes, ordem e subtítulos em sairaData.cards; aqui só o ícone e o conteúdo de cada um.
const CARD_PARTS = {
  espacos:     { icon: Home,          Content: SpacesContent },   // Espaços & Fotos (com a galeria)
  natureza:    { icon: Waves,         Content: NatureContent },
  localizacao: { icon: MapPin,        Content: LocationContent },
  quintal:     { icon: Compass,       Content: QuintalContent },  // O que fazer no Sana
  cotacao:     { icon: CalendarCheck, Content: QuoteContent },    // Reservar
};

const CARDS = sairaData.cards
  .filter((card) => CARD_PARTS[card.id])
  .map((card) => ({ ...card, ...CARD_PARTS[card.id] }));

const CARD_IDS = CARDS.map((c) => c.id);

// Quando sobra um card sozinho na última linha, ele ocupa a linha inteira
// (hoje: 5 cards → o "Reservar" fica largo). Com 6 cards, nada muda.
function lastCardSpan(index) {
  if (index !== CARDS.length - 1) return '';
  const n = CARDS.length;
  return [
    n % 2 === 1 ? 'col-span-2' : '',
    n % 3 === 2 ? 'lg:col-span-2' : n % 3 === 1 ? 'lg:col-span-3' : n % 2 === 1 ? 'lg:col-span-1' : '',
  ].join(' ').trim();
}

// ─── Main Component ─────────────────────────────────────────────────
export default function HeroCanvas() {
  const { activeCard, openCard, closeCard } = useNavigation();

  const activeCardData = CARDS.find((c) => c.id === activeCard);

  return (
    <header className="force-dark relative min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-10 overflow-hidden">
      {/* Background Image */}
      <div className={`absolute inset-0 z-0 transition-all duration-500 ${activeCard ? 'hero-blurred' : ''}`}>
        <Photo
          fetchpriority="high"
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
      </div>

      {/* Cards Grid */}
      <div className={`relative z-10 max-w-5xl mx-auto w-full transition-all duration-500 ${activeCard ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {CARDS.map((card, index) => (
            <FlipCard
              key={card.id}
              className={lastCardSpan(index)}
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
          <activeCardData.Content />
        </CardModal>
      )}
    </header>
  );
}
