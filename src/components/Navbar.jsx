import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useNavigation } from './NavigationContext';
import { useTheme } from './ThemeContext';
import SevenStripe from './SevenStripe';
import ChannelButtons from './Channels';
import { sairaData } from '../data/sairaData';

/**
 * Navbar — Barra de navegação principal.
 * Em vez de scroll para âncoras, abre os cards/modais correspondentes.
 *
 * Identidade visual v1:
 *  - Faixa das 7 cores no topo.
 *  - Logo: o pássaro em traço, sem letras (Areia sobre a foto e no tema escuro;
 *    Noite na barra clara). O nome por extenso fica no rodapé: nada se repete.
 *  - Canais (Airbnb, Instagram, WhatsApp) à direita, no celular e no computador.
 *  - Computador (lg+): links curtos dos cards, todos em branco (sem destaque) + botão de tema.
 *  - Celular/tablet: canais + menu; o botão de tema fica dentro do menu.
 *  - Sobre a foto (sem rolar) a barra fica sempre escura (`force-dark`);
 *    ao rolar ela vira vidro e segue o tema (`theme-auto`);
 *    com o menu do celular aberto ela fica sólida, na mesma cor do menu.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCard, closeCard } = useNavigation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (cardId) => {
    openCard(cardId);
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    closeCard();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sobre a foto: sempre escuro. Rolando ou com o menu aberto: segue o tema.
  const onLight = (isScrolled || mobileMenuOpen) && theme === 'light';
  const logoSrc = onLight ? '/brand/passaro-traco-noite.svg' : '/brand/passaro-traco-areia.svg';
  // Menu do celular aberto: a barra fica sólida, na mesma cor do menu (nada de
  // barra transparente em cima de um menu colorido). Fechou: volta ao normal.
  const barStyle = mobileMenuOpen
    ? 'theme-auto bg-stone-950'
    : isScrolled
      ? 'theme-auto glass-nav shadow-soft'
      : 'force-dark bg-gradient-to-b from-black/60 via-black/30 to-transparent';
  const ThemeIcon = theme === 'light' ? Moon : Sun;
  const themeLabel = theme === 'light' ? 'Mudar para o tema escuro' : 'Mudar para o tema claro';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <SevenStripe className="h-1" />

      <div className={`transition-all duration-300 ${barStyle} ${isScrolled ? 'py-2' : 'py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Logo: só o pássaro (o nome do sítio fica no rodapé) */}
          <a href="/" onClick={handleLogoClick} className="group flex-shrink-0" aria-label="Sítio Saíra Sete Cores — voltar ao início">
            <img
              src={logoSrc}
              alt="Logo Sítio Saíra Sete Cores"
              width="1200"
              height="733"
              className="h-9 sm:h-10 w-auto transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>

          {/* Links dos cards (computador) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {sairaData.cards.map((card) => (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className="whitespace-nowrap text-sm font-medium text-white/85 hover:text-white transition-colors"
              >
                {card.short}
              </button>
            ))}
          </div>

          {/* Tema (computador) + canais + menu (celular) */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="hidden lg:flex p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title={themeLabel}
              aria-label={themeLabel}
            >
              <ThemeIcon className="w-4 h-4" />
            </button>
            <span className="hidden lg:block w-px h-6 bg-white/15 mx-0.5" aria-hidden="true" />

            <ChannelButtons />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 -mr-1 rounded-lg text-white"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu do celular: cards + tema claro/escuro */}
      {mobileMenuOpen && (
        <div className="theme-auto lg:hidden bg-stone-950 border-b border-white/10 shadow-xl px-4 pt-3 pb-5 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {sairaData.cards.map((card) => (
              <button
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className="py-2 px-3 rounded-md transition-colors text-left text-stone-300 hover:text-white font-medium hover:bg-white/5"
              >
                {card.title}
              </button>
            ))}
            <div className="pt-2 mt-1 border-t border-white/10">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center gap-2.5 py-2 px-3 rounded-md text-left text-stone-300 hover:text-white hover:bg-white/5 font-medium transition-colors"
              >
                <ThemeIcon className="w-4 h-4" />
                {theme === 'light' ? 'Tema escuro' : 'Tema claro'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
