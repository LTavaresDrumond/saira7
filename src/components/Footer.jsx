import React from 'react';
import { MessageCircle, Heart, CheckCircle2 } from 'lucide-react';
import { sairaData } from '../data/sairaData';
import { useNavigation } from './NavigationContext';

const ABOUT_BADGES = [
  'Hospedagem para grupos (até 23 pessoas)',
  'Escola de Agroecologia',
  'Eventos, retiros e casamentos',
  'Educação com a natureza',
  'Arte como metodologia',
  'Oca Carukango (Espaço Quilombola)'
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openCard } = useNavigation();

  return (
    <footer className="relative bg-stone-950 text-white pt-16 pb-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Sobre Nós Minimizados */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3.5 mb-6">
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
                  Arte, Ecologia & Educação
                </span>
              </div>
            </div>

            {/* Badges do Sobre Nós */}
            <div className="flex flex-wrap gap-2 mb-6">
              {ABOUT_BADGES.map((badge, idx) => (
                <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-stone-300 text-[11px] hover:border-amber-400/30 transition-colors">
                  <CheckCircle2 className="w-3 h-3 text-amber-400" />
                  {badge}
                </span>
              ))}
            </div>

            <div className="text-xs text-stone-500">
              📍 Cabeceira do Sana, Macaé - RJ, Brasil
            </div>
          </div>

          {/* Links e Contato */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row justify-between gap-8 lg:justify-end">
            
            {/* Nav */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Explorar</h4>
              <ul className="space-y-3">
                <li><button onClick={() => openCard('espacos')} className="text-stone-400 hover:text-amber-400 text-sm transition-colors text-left">Acomodações & Eventos</button></li>
                <li><button onClick={() => openCard('galeria')} className="text-stone-400 hover:text-amber-400 text-sm transition-colors text-left">Galeria Fotográfica</button></li>
                <li><button onClick={() => openCard('natureza')} className="text-stone-400 hover:text-amber-400 text-sm transition-colors text-left">Natureza e Rio</button></li>
                <li><button onClick={() => openCard('quintal')} className="text-stone-400 hover:text-amber-400 text-sm transition-colors text-left">No Quintal do Sana</button></li>
                <li><button onClick={() => openCard('localizacao')} className="text-stone-400 hover:text-amber-400 text-sm transition-colors text-left">Como Chegar</button></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Fale Conosco</h4>
              <div className="space-y-4">
                <a 
                  href={sairaData.contact.whatsapp.link}
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
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-xs">
            &copy; {currentYear} {sairaData.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1.5 text-stone-500 text-xs">
            Feito com <Heart className="w-3 h-3 text-red-500/70" /> na Serra Carioca
          </div>
        </div>
      </div>
    </footer>
  );
}
