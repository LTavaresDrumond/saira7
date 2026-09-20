/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saira: {
          forest: {
            DEFAULT: '#1B3B2B',
            dark: '#11261B',
            light: '#2D5A43',
          },
          earth: {
            DEFAULT: '#A06B43',
            dark: '#7D4F2E',
            light: '#C8936B',
            amber: '#D97706',
          },
          sand: {
            DEFAULT: '#F7F5F0',
            dark: '#EDE8DF',
            light: '#FDFAF4',
          },
          water: {
            DEFAULT: '#2A6F97',
            light: '#61A5C2',
            dark: '#01497C',
          },
          moss: '#588157',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(27, 59, 43, 0.08)',
        'card': '0 15px 35px -5px rgba(27, 59, 43, 0.1), 0 5px 15px rgba(0,0,0,0.04)',
        'elevated': '0 25px 50px -12px rgba(27, 59, 43, 0.25)',
      }
    },
  },
  plugins: [],
};
