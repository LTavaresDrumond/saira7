import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

/**
 * ThemeContext — tema claro/escuro do site.
 *
 * - O tema inicial é definido por um script no index.html (antes de o React
 *   carregar, para não piscar): usa a escolha salva do visitante ou, se não
 *   houver, a preferência do celular/computador.
 * - O tema vai no atributo `data-theme` do <html>; as cores vêm das variáveis
 *   CSS em src/index.css.
 */
const STORAGE_KEY = 'saira-theme';
const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });

function readInitialTheme() {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#F7F3EA' : '#02202C');
  }, [theme]);

  // Segue a preferência do sistema enquanto o visitante não escolher um tema
  useEffect(() => {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch { /* sem acesso */ }
    if (saved || !window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (e) => setTheme(e.matches ? 'light' : 'dark');
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next = t === 'light' ? 'dark' : 'light';
      try { localStorage.setItem(STORAGE_KEY, next); } catch { /* sem acesso */ }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
