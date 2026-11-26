import React from 'react';
import { MessageCircle, BedDouble } from 'lucide-react';
import { sairaData } from '../data/sairaData';
import { HUB_COLORS, readableColor } from './stripeColor';

// O lucide-react 1.x não tem mais ícones de marcas: Instagram desenhado no mesmo traço
function InstagramIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.4" cy="6.6" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * HubLinks — Canais de captação abaixo do título (o site como link da bio do Instagram).
 *
 * Só canais externos: o que já é card (Como chegar, Orçamento…) não se repete aqui.
 *  - Destaque (`primary` em sairaData.hub): círculo cheio na cor do canal — Airbnb e Instagram.
 *  - Contato (WhatsApp): círculo de vidro com a cor do canal.
 * Fica sobre a foto, dentro do hero (`force-dark`). Textos e ordem em sairaData.hub.
 */
export default function HubLinks({ className = '' }) {
  const { contact } = sairaData;

  const channels = {
    airbnb: { icon: BedDouble, href: contact.airbnbUrl },
    instagram: { icon: InstagramIcon, href: contact.instagramUrl },
    whatsapp: { icon: MessageCircle, href: contact.whatsappLink },
  };

  // O Airbnb só aparece quando contact.airbnbUrl estiver preenchido
  const items = sairaData.hub
    .map((item) => ({ ...item, ...channels[item.id] }))
    .filter((item) => item.icon && item.href);

  return (
    <nav aria-label="Canais do sítio" className={`flex justify-center gap-5 sm:gap-8 ${className}`}>
      {items.map(({ id, label, primary, icon: Icon, href }) => {
        const hex = HUB_COLORS[id];
        const glow = readableColor(hex, true);
        const circle = primary
          ? { backgroundColor: hex }
          : { backgroundColor: `rgb(${glow.rgb} / 0.16)`, color: glow.css };

        return (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-20 flex flex-col items-center text-center rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <span
              style={{ ...circle, '--glow-rgb': glow.rgb }}
              className={`hub-icon ${primary ? 'hub-icon-primary text-saira-areia' : ''} w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center`}
            >
              <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </span>
            <span className={`mt-2 text-xs sm:text-[13px] leading-tight drop-shadow-lg ${primary ? 'font-semibold text-white' : 'font-medium text-stone-200'}`}>
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
