import React, { useRef, useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Home, ChevronRight as BreadcrumbSep } from 'lucide-react';
import { useV2Navigation } from './V2NavigationContext';

/**
 * CardModal — Modal expandido com:
 *  - Breadcrumbs de navegação (estilo file explorer)
 *  - Setas prev/next para navegar entre cards
 *  - Animação de fechamento reverso (shrink + flip-in)
 */
export default function CardModal({ title, icon: Icon, isOpen, onClose, onPrev, onNext, cardIds, activeCardId, children }) {
  const modalRef = useRef(null);
  const [closing, setClosing] = useState(false);
  const nav = useV2Navigation();

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onPrev, onNext]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Reset closing state when card changes
  useEffect(() => {
    setClosing(false);
  }, [activeCardId]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 350);
  };

  if (!isOpen) return null;

  // Build breadcrumb labels
  const CARD_LABELS = {
    espacos: 'Nossos Espaços',
    galeria: 'Galeria Fotográfica',
    localizacao: 'Como Chegar',
    sobre: 'Sobre Nós',
    cotacao: 'Solicitar Orçamento',
    portfolio: 'Portfólio de Eventos',
  };

  const breadcrumbs = nav?.breadcrumbs || [activeCardId];

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 ${closing ? 'pointer-events-none' : ''}`}>
      {/* Clickable backdrop overlay */}
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm ${closing ? 'animate-v2-backdrop-out' : 'animate-v2-backdrop-in'}`}
        onClick={handleClose}
      />

      {/* Prev Arrow */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
          aria-label="Card anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Modal container */}
      <div
        ref={modalRef}
        className={`relative z-10 w-[95%] sm:w-[92%] lg:w-[90%] max-w-6xl
                   h-[90vh] sm:h-[85vh]
                   rounded-3xl overflow-hidden
                   v2-modal-glass
                   ${closing ? 'animate-v2-modal-out' : 'animate-v2-modal-in'}
                   flex flex-col`}
      >
        {/* Breadcrumbs */}
        <div className="flex items-center gap-1.5 px-6 sm:px-8 pt-4 pb-1.5 text-[11px] text-stone-500 flex-shrink-0">
          <button
            onClick={handleClose}
            className="flex items-center gap-1 text-stone-400 hover:text-amber-300 transition-colors"
          >
            <Home className="w-3 h-3" />
            <span>Início</span>
          </button>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <BreadcrumbSep className="w-3 h-3 text-stone-600" />
              {idx < breadcrumbs.length - 1 ? (
                <button
                  onClick={() => nav?.goToBreadcrumb(idx)}
                  className="text-stone-400 hover:text-amber-300 transition-colors"
                >
                  {CARD_LABELS[crumb] || crumb}
                </button>
              ) : (
                <span className="text-amber-300/80 font-semibold">
                  {CARD_LABELS[crumb] || crumb}
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-3.5 border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="w-10 h-10 rounded-xl bg-amber-400/15 flex items-center justify-center text-amber-300">
                <Icon className="w-5 h-5" />
              </div>
            )}
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">
              {title}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-6 v2-modal-scroll">
          {children}
        </div>
      </div>

      {/* Next Arrow */}
      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
          aria-label="Próximo card"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}
    </div>
  );
}
