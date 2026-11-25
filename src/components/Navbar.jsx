import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageCircle, Sun, Moon } from 'lucide-react';
import { sairaData } from '../data/sairaData';
import { useNavigation } from './NavigationContext';
import { useTheme } from './ThemeContext';
import SevenStripe from './SevenStripe';
import { useStripeColor } from './stripeColor';

// Link com a cor da faixa na mesma coluna
function StripeLink({ onDark, className, children, ...props }) {
  const ref = useRef(null);
  const c = useStripeColor(ref, onDark);
  return (
    <button ref={ref} style={{ color: c.css, textDecorationColor: `rgb(${c.rgb} / 0.45)` }} className={className} {...props}>
      {children}
    </button>
  );
}

/**
 * Navbar — Barra de navegação principal.
 * Em vez de scroll para âncoras, abre os flippers/modais correspondentes.
 *
 * Identidade visual v1:
 *  - Faixa das 7 cores no topo.
 *  - Logo: pássaro em traço (Areia sobre a foto/tema escuro, Noite no tema claro).
 *  - Botão de tema claro/escuro.
 *  - Sobre a foto (sem rolar) a barra fica sempre escura (`force-dark`);
 *    ao rolar ela vira vidro e segue o tema (`theme-auto`).
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCard, closeCard, resolveAnchor } = useNavigation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nossos Espaços', href: '#espacos' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Natureza & Rio', href: '#natureza' },
    { name: 'Quintal do Sana', href: '#quintal' },
    { name: 'Como Chegar', href: '#localizacao' },
    { name: 'Orçamento', href: '#cotacao', highlight: true },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const cardId = resolveAnchor(href);
    if (cardId) {
      openCard(cardId);
      setMobileMenuOpen(false);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    closeCard();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent("Olá! Vim pelo site do Sítio Saíra 7 e gostaria de saber mais informações sobre disponibilidade.");
    window.open(`https://api.whatsapp.com/send?phone=${sairaData.contact.whatsappNumber}&text=${text}`, '_blank');
  };

  // Sobre a foto: sempre escuro. Rolando: segue o tema.
  const onLight = isScrolled && theme === 'light';
  const logoSrc = onLight ? '/brand/passaro-traco-noite.svg' : '/brand/passaro-traco-areia.svg';
  const subRef = useRef(null);
  const subColor = useStripeColor(subRef, !onLight);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <SevenStripe className="h-1" />

      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'theme-auto glass-nav shadow-soft py-3'
            : 'force-dark bg-gradient-to-b from-black/60 via-black/30 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
            <img
              src={logoSrc}
              alt="Logo Sítio Saíra Sete Cores"
              className="h-9 sm:h-10 w-auto flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-semibold tracking-tight leading-none text-white">
                Saíra Sete Cores
              </span>
              <span ref={subRef} style={{ color: subColor.css }} className="block whitespace-nowrap text-[10px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.18em] font-medium mt-1">
                Cabeceira do Sana • Macaé
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) =>
              link.highlight ? (
                <StripeLink
                  key={link.name}
                  onDark={!onLight}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-80"
                >
                  {link.name}
                </StripeLink>
              ) : (
                <button
                  key={link.name}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-white/85 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              )
            )}
          </div>

          {/* Actions & Mobile Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title={theme === 'light' ? 'Mudar para o tema escuro' : 'Mudar para o tema claro'}
              aria-label={theme === 'light' ? 'Mudar para o tema escuro' : 'Mudar para o tema claro'}
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              onClick={handleWhatsAppDirect}
              className="p-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-saira-areia transition-all transform hover:scale-105 shadow-md flex items-center justify-center"
              title="Falar no WhatsApp"
              aria-label="Falar no WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="theme-auto lg:hidden bg-stone-950 border-b border-white/10 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-2 px-3 rounded-md transition-colors text-left ${
                  link.highlight
                    ? 'text-amber-300 font-semibold bg-white/5 hover:bg-white/10'
                    : 'text-stone-300 hover:text-white font-medium hover:bg-white/5'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
