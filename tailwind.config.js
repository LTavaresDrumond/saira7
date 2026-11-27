/** @type {import('tailwindcss').Config} */

// Identidade visual v1 (projeto Saira7 no Claude, doc 04).
// As cores de interface (white, stone, amber, emerald, sky) apontam para
// variáveis CSS definidas em src/index.css. Assim o mesmo componente funciona
// no tema escuro e no tema claro, e áreas sobre foto usam a classe `force-dark`.
const v = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Ferramentas da equipe têm CSS próprio (tailwind.ferramentas.config.js), que só baixa
    // junto com a ferramenta: a vitrine não carrega estilos que não usa.
    "!./src/tools/**",
  ],
  theme: {
    extend: {
      colors: {
        // Texto/realce principal do tema (Areia no escuro, Noite no claro)
        white: v('--c-fg'),
        // Escala neutra do tema (texto secundário → superfícies)
        stone: {
          100: v('--c-s100'),
          200: v('--c-s200'),
          300: v('--c-s300'),
          400: v('--c-s400'),
          500: v('--c-s500'),
          600: v('--c-s600'),
          700: v('--c-s700'),
          800: v('--c-s800'),
          900: v('--c-s900'),
          950: v('--c-s950'),
        },
        // Acento do tema (Amarelo sol no escuro, Azul saíra no claro)
        amber: {
          200: v('--c-accent-soft'),
          300: v('--c-accent'),
          400: v('--c-accent'),
          500: v('--c-accent-strong'),
        },
        // Verde mata (WhatsApp, natureza)
        emerald: {
          300: v('--c-verde'),
          400: v('--c-verde'),
          500: v('--c-verde'),
          600: '#4E8A2C',
          700: '#3F7A22',
          900: v('--c-verde-deep'),
        },
        sky: {
          400: '#0390A1',
        },
        // Paleta fixa da marca (as 7 cores da saíra + base)
        saira: {
          azul: '#0261B3',
          petroleo: '#027483',
          turquesa: '#0390A1',
          verde: '#6EAA40',
          amarelo: '#FBAC02',
          laranja: '#E35E0C',
          roxo: '#563C7E',
          areia: '#F7F3EA',
          noite: '#02202C',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(2, 32, 44, 0.12)',
        'card': '0 15px 35px -5px rgba(2, 32, 44, 0.12), 0 5px 15px rgba(0,0,0,0.04)',
        'elevated': '0 25px 50px -12px rgba(2, 32, 44, 0.3)',
      }
    },
  },
  plugins: [],
};
