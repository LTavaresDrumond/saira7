import React, { useRef } from 'react';
import { useStripeColor } from './stripeColor';

/**
 * FlipCard — Card individual com face frontal glassmorphism.
 * A animação de flip acontece via CSS class toggle.
 * O estado "receded" é aplicado quando outro card está ativo.
 */
export default function FlipCard({ icon: Icon, title, subtitle, isActive, isReceded, onClick }) {
  // Cor da faixa das 7 cores na mesma coluna do card (cards ficam sempre sobre a foto)
  const ref = useRef(null);
  const accent = useStripeColor(ref, true);

  return (
    <button
      ref={ref}
      onClick={onClick}
      style={{ '--glow-rgb': accent.rgb }}
      disabled={isActive}
      className={`
        group relative w-full text-left
        rounded-2xl cursor-pointer
        transition-all duration-500 ease-out
        ${isReceded
          ? 'scale-90 opacity-30 pointer-events-none blur-[1px]'
          : 'scale-100 opacity-100'
        }
        ${isActive
          ? 'card-flipping pointer-events-none'
          : ''
        }
      `}
    >
      {/* Card Face — Glassmorphism + Dark Gradient */}
      <div className={`
        relative flex flex-col justify-center items-center text-center
        px-5 py-8 sm:py-10 lg:py-12
        card-glass
        transition-all duration-300
        group-hover:-translate-y-1 group-hover:card-glow
        ${isActive ? 'card-glow' : ''}
      `}>
        {/* Icon */}
        <div
          style={{ color: accent.css, backgroundColor: `rgb(${accent.rgb} / 0.16)` }}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 icon-pulse group-hover:[animation-play-state:paused]">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight mb-1.5 drop-shadow-lg">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="text-stone-300 text-[11px] sm:text-xs font-light leading-snug max-w-[200px]">
          {subtitle}
        </p>

        {/* Hover indicator */}
        <div style={{ color: accent.css }} className="mt-4 text-[10px] uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Clique para explorar
        </div>
      </div>
    </button>
  );
}
