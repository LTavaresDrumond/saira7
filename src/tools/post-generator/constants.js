// Gerador de posts — constantes do desenho.
// Fonte da verdade: docs/gerador-de-posts/REFERENCIA-gerador.html (vale o HTML se houver divergência
// com a especificação). Medidas em px na peça de 1080 de largura.

// Cores da identidade (só para o desenho no canvas)
export const AREIA = '#F7F3EA';
export const NOITE = '#02202C';
export const PETROLEO = '#027483';
export const TURQUESA = '#0390A1'; // chapéu no fundo escuro (Petróleo some sobre Noite)
export const FAIXA = ['#0261B3', '#027483', '#0390A1', '#6EAA40', '#FBAC02', '#E35E0C', '#563C7E'];
export const PLACEHOLDER_BG = '#e4ded0';
export const PLACEHOLDER_TXT = '#7a8a90';

export const W = 1080;
export const H_FEED = 1350;
export const H_STORY = 1920;
export const FAIXA_ALTURA = 22;

// Fontes próprias do gerador (os mesmos arquivos da referência), com nomes que não
// se misturam com as fontes do site.
export const FONTE_TITULO = 'Fraunces Gerador';
export const FONTE_TEXTO = 'DM Sans Gerador';
export const FONTES = [
  { family: FONTE_TITULO, url: '/fonts/gerador/fraunces.woff2', weight: '100 900' },
  { family: FONTE_TEXTO, url: '/fonts/gerador/dm-sans.woff2', weight: '100 1000' },
];

// Pássaros: os mesmos arquivos da barra do site. Proporção (altura/largura) tirada do viewBox,
// porque os SVGs não têm width/height e alguns navegadores informam tamanho 0.
export const PASSAROS = {
  tracoAreia: { src: '/brand/passaro-traco-areia.svg', ratio: 733 / 1200 }, // sobre foto
  colorido: { src: '/brand/passaro.svg', ratio: 268 / 435 }, // sem foto, fundo claro
  coloridoAreia: { src: '/brand/passaro-contorno-areia.svg', ratio: 268 / 435 }, // sem foto, fundo escuro
};

// Tamanhos base do texto por estilo
export const ESTILOS = {
  so: { titulo: 120, sub: 42 },
  sub: { titulo: 104, sub: 42 },
  grande: { titulo: 150, sub: 46 },
};

// Valores iniciais (o primeiro uso já mostra um exemplo bom)
export const ESTADO_INICIAL = {
  fundo: 'foto', // 'foto' | 'claro' (sem foto, Areia) | 'escuro' (sem foto, Noite)
  topo: true, // texto em cima (A-topo) ou embaixo (A)
  story: false, // feed 4:5 ou stories 9:16
  estilo: 'so', // 'so' | 'sub' | 'grande'
  escala: 100, // tamanho do texto, 40–140 %
  posY: 100, // posição vertical da foto, 0–100 (100 = mostra a parte de baixo)
  posX: 50,
  zoom: 100, // 100–200 %
  escurecer: 0, // 0–30 %
  chapeu: 'Carnaval 2027 · Sítio inteiro',
  titulo: 'Até 20\npessoas.',
  sub: '',
  rodape: 'Sítio Saíra Sete Cores',
};
