import React from 'react';
import { MessageCircle, Navigation, CalendarCheck, BedDouble } from 'lucide-react';
import { sairaData } from '../data/sairaData';
import { useNavigation } from './NavigationContext';
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
 * HubLinks — Fileira de atalhos abaixo do título (o site como link da bio do Instagram).
 * Fica sobre a foto, dentro do hero (`force-dark`). Textos e ordem em sairaData.hub.
 */
export default function HubLinks({ className = '' }) {
  const { openCard } = useNavigation();
  const { contact, location } = sairaData;

  const actions = {
    whatsapp: { icon: MessageCircle, href: contact.whatsappLink },
    instagram: { icon: InstagramIcon, href: contact.instagramUrl },
    airbnb: { icon: BedDouble, href: contact.airbnbUrl },
    'como-chegar': { icon: Navigation, href: location.googleMapsUrl },
    orcamento: { icon: CalendarCheck, onClick: () => openCard('cotacao') },
  };

  const items = sairaData.hub
    .map((item) => ({ ...item, ...actions[item.id] }))
    .filter((item) => item.icon && (item.href || item.onClick));

  return (
    <nav aria-label="Atalhos" className={`flex justify-center gap-2 sm:gap-5 ${className}`}>
      {items.map(({ id, label, icon: Icon, href, onClick }) => {
        const c = readableColor(HUB_COLORS[id], true);
        const content = (
          <>
            <span
              style={{ color: c.css, backgroundColor: `rgb(${c.rgb} / 0.16)`, '--glow-rgb': c.rgb }}
              className="hub-icon w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center"
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </span>
            <span className="mt-1.5 text-[10px] min-[360px]:text-[11px] sm:text-xs font-medium text-stone-100 leading-tight drop-shadow-lg">
              {label}
            </span>
          </>
        );
        const cls = 'group flex-1 min-w-0 max-w-[88px] flex flex-col items-center text-center rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-white/60';

        return href ? (
          <a key={id} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
            {content}
          </a>
        ) : (
          <button key={id} type="button" onClick={onClick} className={cls}>
            {content}
          </button>
        );
      })}
    </nav>
  );
}
