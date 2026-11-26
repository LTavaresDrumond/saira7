import React from 'react';
import { MessageCircle } from 'lucide-react';
import { sairaData } from '../data/sairaData';
import { useNavigation } from './NavigationContext';
import { useTheme } from './ThemeContext';
import SevenStripe from './SevenStripe';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openCard } = useNavigation();
  const { theme } = useTheme();

  return (
    <footer className="relative bg-stone-950 text-white pt-6 sm:pt-8 pb-6 border-t border-white/10 overflow-hidden">
      <SevenStripe className="h-1 absolute bottom-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Rodapé compacto: só a logo (ela já traz o nome e "Agroecologia • Educação • Cultura • Saúde";
            o nome por extenso fica no título do hero) + grade 3×2 com os cards e o WhatsApp. */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-10 pb-5 border-b border-stone-800">
          <img
            src={theme === 'light' ? '/brand/logo-claro.webp' : '/brand/logo-escuro.webp'}
            alt="Logo Saíra Sete Cores — Agroecologia, Educação, Cultura e Saúde"
            className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 self-center lg:self-auto"
          />

          <nav aria-label="Rodapé" className="grid grid-cols-3 items-center gap-x-3 sm:gap-x-6 gap-y-1 lg:w-[560px]">
            {sairaData.cards.map((card) => (
              <button
                key={card.id}
                onClick={() => openCard(card.id)}
                className="py-2 text-center lg:text-left text-[13px] sm:text-sm leading-snug text-stone-400 hover:text-white transition-colors"
              >
                {card.title}
              </button>
            ))}
            <a
              href={sairaData.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 flex items-center justify-center lg:justify-start gap-1.5 text-[13px] sm:text-sm leading-snug text-stone-400 hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0 text-emerald-500" />
              WhatsApp
            </a>
          </nav>
        </div>

        <p className="pt-4 text-stone-500 text-xs text-center lg:text-left">
          &copy; {currentYear} {sairaData.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
