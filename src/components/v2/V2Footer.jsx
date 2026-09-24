import React from 'react';
import { MessageCircle, Heart } from 'lucide-react';
import { sairaData } from '../../data/sairaData';
import { useV2Navigation } from './V2NavigationContext';

/**
 * V2Footer — Versão do Footer para a rota /v2.
 * Links de navegação abrem os flippers/modais correspondentes.
 */
export default function V2Footer() {
  const currentYear = new Date().getFullYear();
  const { openCard, resolveAnchor } = useV2Navigation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const cardId = resolveAnchor(href);
    if (cardId) {
      openCard(cardId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { name: 'Nossos Espaços', href: '#acomodacoes' },
    { name: 'Galeria Fotográfica', href: '#galeria' },
    { name: 'Como Chegar', href: '#localizacao' },
    { name: 'Solicitar Orçamento', href: '#cotacao' },
    { name: 'Sobre Nós', href: '#sobre' },
  ];

  return (
    <footer className="bg-stone-900 text-white pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white p-0.5 shadow-lg border-2 border-amber-400/80 flex-shrink-0">
                <img
                  src="/images/logo.jpg"
                  alt="Logo Sítio Saíra Sete Cores"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight block text-white">
                  {sairaData.name}
                </span>
                <span className="text-[11px] text-amber-400 uppercase tracking-widest font-semibold block">
                  Arte, Ecologia, Educação & Saúde Integral
                </span>
                <span className="text-[10px] text-stone-400 block mt-0.5">
                  Cabeceira do Sana • Macaé (RJ)
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-sm font-light leading-relaxed max-w-sm mb-6">
              Hospedagem por temporada e espaço de eventos imerso na Mata Atlântica. O Rio Macaé, a Oca Carukango e o aconchego da serra em um só lugar.
            </p>

            <div className="text-xs text-stone-500">
              📍 Cabeceira do Sana, Macaé - RJ, Brasil
            </div>
          </div>

          {/* Quick Nav Links — opens flippers */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold mb-4 text-amber-200">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400 font-light">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connections */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-lg font-bold mb-4 text-amber-200">
              Conecte-se Conosco
            </h4>
            <p className="text-xs text-stone-400 mb-5 font-light">
              Acompanhe o dia a dia na serra e entre em contato direto para reservas:
            </p>

            <div className="flex flex-col gap-3">
              {/* WhatsApp Button */}
              <a
                href={`https://api.whatsapp.com/send?phone=${sairaData.contact.whatsappNumber}&text=${encodeURIComponent("Olá! Vim pelo site do Sítio Saíra 7 e gostaria de informações sobre reservas.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-emerald-950/80 border border-emerald-700/50 hover:bg-emerald-900 text-emerald-200 text-xs font-semibold transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-white font-semibold">WhatsApp Oficial</span>
                  <span className="text-[11px] text-emerald-300 font-normal">{sairaData.contact.whatsappDisplay}</span>
                </div>
              </a>

              {/* Instagram Button */}
              <a
                href={sairaData.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-stone-800/80 border border-stone-700 hover:bg-stone-800 text-stone-300 text-xs font-semibold transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-white">Instagram</span>
                  <span className="text-[11px] text-stone-400 font-normal">{sairaData.contact.instagramHandle}</span>
                </div>
              </a>

              {/* Airbnb Reserved Slot */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-stone-800/40 border border-stone-800 text-stone-400 text-xs">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500/80"></span>
                  Anúncio no Airbnb
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-500 bg-stone-800 px-2 py-0.5 rounded">
                  Em breve
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-light">
          <div>
            © {currentYear} {sairaData.name}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1.5 text-stone-400">
            Preservando a Mata Atlântica com amor na serra do Sana <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </div>
        </div>
      </div>
    </footer>
  );
}
