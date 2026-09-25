import React, { createContext, useContext, useState, useCallback } from 'react';

/**
 * NavigationContext — Permite que qualquer componente (Navbar, Footer)
 * dispare a abertura de um card/modal na interface V2.
 */
const NavigationContext = createContext(null);

export function useNavigation() {
  return useContext(NavigationContext);
}

// Map of anchor hrefs → card IDs
const ANCHOR_TO_CARD = {
  '#espacos': 'espacos',
  '#galeria': 'galeria',
  '#natureza': 'natureza',
  '#localizacao': 'localizacao',
  '#quintal': 'quintal',
  '#cotacao': 'cotacao',
};

export function NavigationProvider({ children }) {
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
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}
