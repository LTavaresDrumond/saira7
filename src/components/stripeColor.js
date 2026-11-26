import { useLayoutEffect, useState } from 'react';

/**
 * Cor "posicional" da faixa das 7 cores.
 *
 * A faixa do topo da navbar divide a largura da tela em 7 partes iguais.
 * Um elemento (ícone, texto de destaque) assume a cor da parte da faixa que
 * está na mesma coluna vertical que ele: o que está embaixo do verde fica
 * verde, embaixo do azul fica azul, e assim por diante.
 */
export const STRIPE_COLORS = [
  '#0261B3', // Azul saíra
  '#027483', // Petróleo rio
  '#0390A1', // Turquesa
  '#6EAA40', // Verde mata
  '#FBAC02', // Amarelo sol
  '#E35E0C', // Laranja fogo
  '#563C7E', // Roxo ipê
];

/**
 * Cores dos 6 cards da tela inicial (opção "B2", escolhida em 25/11/2026):
 * as cores da faixa intercalando tons frios e quentes, para cada card
 * contrastar com o vizinho — no celular (lista vertical) e no computador (3×2).
 */
export const CARD_COLORS = {
  espacos: '#0261B3',     // Azul saíra
  galeria: '#6EAA40',     // Verde mata
  natureza: '#E35E0C',    // Laranja fogo
  localizacao: '#0390A1', // Turquesa
  quintal: '#FBAC02',     // Amarelo sol
  cotacao: '#563C7E',     // Roxo ipê
};

/**
 * Cores dos botões de atalho (hub) abaixo do título. "Como chegar" e
 * "Orçamento" repetem a cor do card correspondente.
 */
export const HUB_COLORS = {
  whatsapp: '#6EAA40',            // Verde mata
  instagram: '#E35E0C',           // Laranja fogo
  airbnb: '#0261B3',              // Azul saíra
  'como-chegar': CARD_COLORS.localizacao,
  orcamento: CARD_COLORS.cotacao,
};

const AREIA = [247, 243, 234];
const NOITE = [2, 32, 44];

const hexToRgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const mix = (a, b, t) => a.map((v, i) => Math.round(v * (1 - t) + b[i] * t));
const luminance = ([r, g, b]) => {
  const f = (c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};

export function stripeIndexAt(x) {
  const width = document.documentElement.clientWidth || window.innerWidth || 1;
  return Math.min(6, Math.max(0, Math.floor((x / width) * 7)));
}

/**
 * Ajusta a cor para continuar legível: clareia as cores escuras sobre fundo
 * escuro (azul, petróleo, roxo) e escurece as claras sobre fundo claro
 * (amarelo, verde). Devolve "R G B" (para usar com opacidade) e o hex.
 */
export function readableColor(hex, onDark) {
  let rgb = hexToRgb(hex);
  const lum = luminance(rgb);
  if (onDark && lum < 0.1) rgb = mix(rgb, AREIA, 0.5);
  else if (onDark && lum < 0.2) rgb = mix(rgb, AREIA, 0.35);
  if (!onDark && lum > 0.3) rgb = mix(rgb, NOITE, 0.35);
  return { rgb: rgb.join(' '), css: `rgb(${rgb.join(',')})` };
}

/**
 * Hook: devolve a cor da faixa na coluna onde o elemento está.
 * Recalcula quando a tela muda de tamanho ou de layout.
 */
export function useStripeColor(ref, onDark = true) {
  const [hex, setHex] = useState(STRIPE_COLORS[3]);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const update = () => {
      const r = el.getBoundingClientRect();
      if (!r.width) return;
      setHex(STRIPE_COLORS[stripeIndexAt(r.left + r.width / 2)]);
    };
    update();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    ro?.observe(document.documentElement);
    window.addEventListener('resize', update);
    // Algumas animações de entrada mudam a posição logo após montar
    const t = setTimeout(update, 600);
    return () => {
      ro?.disconnect();
      window.removeEventListener('resize', update);
      clearTimeout(t);
    };
  }, [ref]);

  return readableColor(hex, onDark);
}
