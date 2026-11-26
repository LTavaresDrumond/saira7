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
    <footer className="relative bg-stone-950 text-white pt-8 sm:pt-10 pb-8 border-t border-white/10 overflow-hidden">
      <SevenStripe className="h-1 absolute bottom-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-stone-800">
          
          {/* Brand & Sobre Nós Minimizados */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3.5">
              <img
                src={theme === 'light' ? '/brand/selo-claro.webp' : '/brand/selo-escuro.webp'}
                alt="Selo Sítio Ecológico Saíra Sete Cores"
                className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0"
              />
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight block text-white">
                  {sairaData.name}
                </span>
                {/* Mesma cor do nome do sítio (nada de dourado solto); texto do selo v4 */}
                <span className="text-[11px] uppercase tracking-widest font-semibold block text-white">
                  Agroecologia · Cultura · Educação · Saúde
                </span>
              </div>
            </div>
          </div>

          {/* Links e Contato */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row justify-between gap-8 lg:justify-end">
            
            {/* Nav */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Explorar</h4>
              <ul className="space-y-3">
                {/* Mesmos nomes dos cards (sairaData.cards); "Reservar" fica no "Fale Conosco" via WhatsApp */}
                {sairaData.cards.filter((card) => card.id !== 'cotacao').map((card) => (
                  <li key={card.id}>
                    <button onClick={() => openCard(card.id)} className="text-stone-400 hover:text-amber-400 text-sm transition-colors text-left">
                      {card.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Fale Conosco</h4>
              <div className="space-y-4">
                <a 
                  href={sairaData.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-stone-400 hover:text-emerald-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm">WhatsApp Direto</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-xs">
            &copy; {currentYear} {sairaData.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
