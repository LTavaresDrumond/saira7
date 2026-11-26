import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';

/**
 * NavigationContext — Permite que qualquer componente (Navbar, Footer, hub)
 * dispare a abertura de um card/modal na interface principal.
 *
 * Também mantém o card aberto no endereço da página (ex.: saira7.vercel.app/#orcamento):
 *  - quem abre um link com # cai direto no card certo (bom para stories e WhatsApp);
 *  - o botão "voltar" do celular fecha o modal em vez de sair do site.
 */
const NavigationContext = createContext(null);

export function useNavigation() {
  return useContext(NavigationContext);
}

// Endereços de cada card. O primeiro de cada lista é o que aparece na barra
// de endereço; os outros continuam funcionando (links antigos / do menu).
export const CARD_HASHES = {
  espacos: ['espacos'],
  galeria: ['galeria'],
  natureza: ['natureza'],
  localizacao: ['como-chegar', 'localizacao'],
  quintal: ['quintal'],
  cotacao: ['orcamento', 'cotacao'],
};

const HASH_TO_CARD = Object.fromEntries(
  Object.entries(CARD_HASHES).flatMap(([id, hashes]) => hashes.map((h) => [h, id]))
);

// "#Orçamento", "#orcamento" e "orcamento" → 'cotacao'
export function cardFromHash(hash = '') {
  let h = String(hash).replace(/^#/, '');
  try { h = decodeURIComponent(h); } catch { /* endereço malformado: usa como veio */ }
  h = h.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
  return HASH_TO_CARD[h] || null;
}

const currentHashCard = () => (typeof window === 'undefined' ? null : cardFromHash(window.location.hash));

export function NavigationProvider({ children }) {
  const [activeCard, setActiveCard] = useState(currentHashCard);
  const [breadcrumbs, setBreadcrumbs] = useState(() => {
    const id = currentHashCard();
    return id ? [id] : [];
  });
  // true quando fomos nós que criamos a entrada do histórico com o # do card
  // (aí fechar o modal = voltar uma página, e o "voltar" do celular funciona).
  const pushedRef = useRef(false);

  // Botão voltar/avançar do navegador (ou # digitado na barra de endereço)
  useEffect(() => {
    const onPopState = () => {
      const id = currentHashCard();
      // Não sabemos o que há na entrada anterior: fechar pelo X só limpa o endereço
      pushedRef.current = false;
      setActiveCard(id);
      setBreadcrumbs(id ? [id] : []);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const openCard = useCallback((cardId) => {
    setActiveCard(cardId);
    setBreadcrumbs([cardId]);

    const hashes = CARD_HASHES[cardId];
    if (!hashes) return;
    const hash = `#${hashes[0]}`;
    if (window.location.hash === hash) return;
    if (pushedRef.current || currentHashCard()) {
      // Trocando de um card para outro: não empilha histórico
      window.history.replaceState(window.history.state, '', hash);
    } else {
      window.history.pushState(window.history.state, '', hash);
      pushedRef.current = true;
    }
  }, []);

  const closeCard = useCallback(() => {
    setActiveCard(null);
    setBreadcrumbs([]);

    if (!currentHashCard()) return;
    if (pushedRef.current) {
      pushedRef.current = false;
      window.history.back();
    } else {
      // Chegou direto por um link com #: só limpa o endereço
      window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search);
    }
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

  // Resolve um href de âncora ("#cotacao", "#orcamento"…) para o id do card
  const resolveAnchor = useCallback((href) => cardFromHash(href), []);

  const value = {
    activeCard,
    breadcrumbs,
    openCard,
    closeCard,
    pushBreadcrumb,
    popBreadcrumb,
    goToBreadcrumb,
    resolveAnchor,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}
