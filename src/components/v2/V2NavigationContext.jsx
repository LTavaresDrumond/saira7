import React, { createContext, useContext, useState, useCallback } from 'react';

/**
 * V2NavigationContext — Permite que qualquer componente (Navbar, Footer)
 * dispare a abertura de um card/modal na interface V2.
 */
const V2NavigationContext = createContext(null);

export function useV2Navigation() {
  return useContext(V2NavigationContext);
}

// Map of anchor hrefs → card IDs
const ANCHOR_TO_CARD = {
  '#acomodacoes': 'espacos',
  '#galeria': 'galeria',
  '#localizacao': 'localizacao',
  '#sobre': 'sobre',
  '#cotacao': 'cotacao',
};

export function V2NavigationProvider({ children }) {
  const [activeCard, setActiveCard] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const openCard = useCallback((cardId) => {
    setActiveCard(cardId);
    setBreadcrumbs([cardId]);
  }, []);

  const closeCard = useCallback(() => {
    setActiveCard(null);
    setBreadcrumbs([]);
  }, []);

  const pushBreadcrumb = useCallback((crumb) => {
    setBreadcrumbs((prev) => [...prev, crumb]);
  }, []);

  const popBreadcrumb = useCallback(() => {
    setBreadcrumbs((prev) => {
      if (prev.length <= 1) return prev;
      return prev.slice(0, -1);
    });
  }, []);

  const goToBreadcrumb = useCallback((index) => {
    setBreadcrumbs((prev) => prev.slice(0, index + 1));
  }, []);

  // Resolves an anchor href to a card ID for the V2 interface
  const resolveAnchor = useCallback((href) => {
    return ANCHOR_TO_CARD[href] || null;
  }, []);

  const value = {
    activeCard,
    breadcrumbs,
    openCard,
    closeCard,
    pushBreadcrumb,
    popBreadcrumb,
    goToBreadcrumb,
    resolveAnchor,
    ANCHOR_TO_CARD,
  };

  return (
    <V2NavigationContext.Provider value={value}>
      {children}
    </V2NavigationContext.Provider>
  );
}
