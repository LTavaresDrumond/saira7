import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { sairaData } from '../data/sairaData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Sítio', href: '#sobre' },
    { name: 'Acomodações', href: '#acomodacoes' },
    { name: 'Oca Carukango', href: '#eventos' },
    { name: 'Natureza & Rio', href: '#natureza' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Como Chegar', href: '#localizacao' },
    { name: 'Solicitar Orçamento', href: '#cotacao', highlight: true },
  ];

  const handleWhatsAppDirect = () => {
    const url = sairaData.getWhatsAppApiUrl("Olá! Vim pelo site do Sítio Saíra 7 e gostaria de saber mais informações sobre disponibilidade e reservas.");
    window.open(url, '_blank');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-soft py-3'
          : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white p-0.5 shadow-md border-2 border-amber-300/60 group-hover:border-amber-400 transition-all flex-shrink-0">
            <img
              src="/images/logo.jpg"
              alt="Logo Sítio Saíra Sete Cores"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <span className={`block font-serif text-xl sm:text-2xl font-bold tracking-tight leading-none ${isScrolled ? 'text-saira-forest-dark' : 'text-white'}`}>
              Saíra Sete Cores
            </span>
            <span className={`block text-[11px] uppercase tracking-widest font-semibold mt-1 ${isScrolled ? 'text-saira-earth' : 'text-amber-200'}`}>
              Cabeceira do Sana • Macaé
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm transition-colors ${
                link.highlight
                  ? isScrolled
                    ? 'font-semibold text-saira-forest hover:text-saira-forest-light underline decoration-saira-earth/40 underline-offset-4'
                    : 'font-semibold text-amber-300 hover:text-amber-200 underline decoration-amber-300/40 underline-offset-4'
                  : `font-medium hover:text-saira-earth ${
                      isScrolled ? 'text-stone-700' : 'text-white/90 hover:text-white'
                    }`
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Instagram Button */}
          <a
            href={sairaData.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 text-white transition-all transform hover:scale-105 shadow-md flex items-center justify-center"
            title="Instagram: @sitio_saira_sete_cores"
            aria-label="Instagram @sitio_saira_sete_cores"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppDirect}
            className="p-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white transition-all transform hover:scale-105 shadow-md flex items-center justify-center"
            title="Falar no WhatsApp: +55 (61) 99282-3308"
            aria-label="Falar no WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-stone-800' : 'text-white'}`}
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-saira-sand-light border-b border-stone-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-md transition-colors ${
                  link.highlight
                    ? 'text-saira-forest font-semibold bg-stone-200/50 hover:bg-stone-200'
                    : 'text-stone-700 hover:text-saira-forest font-medium hover:bg-stone-100'
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Quick Contacts in Mobile Menu */}
            <div className="pt-3 mt-2 border-t border-stone-200 flex flex-col gap-2">
              <a
                href={sairaData.getWhatsAppApiUrl("Olá! Vim pelo site do Sítio Saíra 7 e gostaria de informações sobre reservas.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {sairaData.contact.whatsappDisplay}</span>
              </a>
              <a
                href={sairaData.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg bg-stone-800 hover:bg-stone-900 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <svg className="w-4 h-4 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>Instagram: {sairaData.contact.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
