import React from 'react';
import { MessageCircle, BedDouble } from 'lucide-react';
import { sairaData } from '../data/sairaData';
import { HUB_COLORS, readableColor } from './stripeColor';

/**
 * Canais de captação do sítio (Airbnb, Instagram, WhatsApp).
 *
 * O site é um auxiliar de divulgação: os canais aparecem UMA vez em cada tela.
 *  - Celular/tablet (até 1279 px): `HubLinks`, círculos abaixo do título (dentro do hero, `force-dark`).
 *  - Computador (xl+, a partir de 1280 px): `NavChannels`, botões maiores na barra do topo.
 * O que já é card (Como chegar, Orçamento…) não entra aqui.
 * Textos, ordem e destaque (`primary`) em sairaData.hub; cores em HUB_COLORS.
 */

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

// iconOnly: o ícone já identifica o canal; o do Airbnb (cama) precisa do nome escrito na barra
export function getChannels() {
  const { contact } = sairaData;
  const links = {
    airbnb: { icon: BedDouble, href: contact.airbnbUrl, iconOnly: false },
    instagram: { icon: InstagramIcon, href: contact.instagramUrl, iconOnly: true },
    whatsapp: { icon: MessageCircle, href: contact.whatsappLink, iconOnly: true },
  };
  // O Airbnb só aparece quando contact.airbnbUrl estiver preenchido
  return sairaData.hub
    .map((item) => ({ ...item, ...links[item.id], color: HUB_COLORS[item.id] }))
    .filter((item) => item.icon && item.href);
}

/**
 * Celular/tablet: círculos abaixo do título.
 *  - Destaque (`primary`: Airbnb, Instagram): círculo cheio na cor do canal.
 *  - Contato (WhatsApp): círculo de vidro com a cor do canal.
 */
export default function HubLinks({ className = '' }) {
  return (
    <nav aria-label="Canais do sítio" className={`flex justify-center gap-5 sm:gap-8 ${className}`}>
      {getChannels().map(({ id, label, primary, icon: Icon, href, color }) => {
        const glow = readableColor(color, true);
        const circle = primary
          ? { backgroundColor: color }
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

/**
 * Computador: botões cheios na barra do topo, maiores que o botão de tema.
 * Funcionam sobre a foto e na barra clara (tema claro rolando): as cores claras
 * (verde) são escurecidas para o ícone Areia ter contraste.
 */
export function NavChannels({ className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {getChannels().map(({ id, label, icon: Icon, href, color, iconOnly }) => {
        const fill = readableColor(color, false);
        const glow = readableColor(color, true);
        return (
          <a
            key={id}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            aria-label={label}
            style={{ backgroundColor: fill.css, '--glow-rgb': glow.rgb }}
            className={`nav-channel h-11 rounded-full flex items-center text-saira-areia outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
              iconOnly ? 'w-11 justify-center' : 'px-4 gap-2'
            }`}
          >
            <Icon className="w-5 h-5" />
            {!iconOnly && <span className="text-sm font-semibold">{label}</span>}
          </a>
        );
      })}
    </div>
  );
}
