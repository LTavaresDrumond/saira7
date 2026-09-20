import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Trees } from 'lucide-react';
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
  ];

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent("Olá! Vim pelo site do Sítio Saíra 7 e gostaria de saber mais informações sobre disponibilidade.");
    window.open(`https://wa.me/${sairaData.contact.whatsappNumber}?text=${text}`, '_blank');
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
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-saira-forest-light/20 flex items-center justify-center border border-saira-forest/30 group-hover:bg-saira-forest/30 transition-colors">
            <Trees className={`w-5 h-5 ${isScrolled ? 'text-saira-forest' : 'text-emerald-300'}`} />
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
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-saira-earth ${
                isScrolled ? 'text-stone-700' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a
            href="#cotacao"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm transition-all transform hover:-translate-y-0.5 bg-saira-forest hover:bg-saira-forest-light text-white"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Solicitar Orçamento
          </a>

          <button
            onClick={handleWhatsAppDirect}
            className="p-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white transition-all transform hover:scale-105 shadow-md flex items-center justify-center"
            title="Falar no WhatsApp"
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
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-700 hover:text-saira-forest font-medium py-2 px-3 rounded-md hover:bg-stone-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-stone-200">
              <a
                href="#cotacao"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-3 rounded-full font-semibold text-white bg-saira-forest hover:bg-saira-forest-light transition-all"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
