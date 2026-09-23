import React, { useRef, useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * CardModal — O container expandido que aparece após o flip do card.
 * Glassmorphism escuro, scroll interno, botão de fechar.
 */
export default function CardModal({ title, icon: Icon, isOpen, onClose, children }) {
  const modalRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Clickable backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-v2-backdrop-in"
        onClick={onClose}
      />

      {/* Modal container */}
      <div
        ref={modalRef}
        className="relative z-10 w-[95%] sm:w-[92%] lg:w-[90%] max-w-6xl
                   h-[90vh] sm:h-[85vh]
                   rounded-3xl overflow-hidden
                   v2-modal-glass
                   animate-v2-modal-in
                   flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 flex-shrink-0">
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
            onClick={onClose}
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
    </div>
  );
}
