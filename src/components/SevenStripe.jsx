import React from 'react';

/**
 * SevenStripe — faixa fina com as 7 cores da saíra.
 * Mesma assinatura usada no rodapé dos posts do Instagram.
 */
export default function SevenStripe({ className = 'h-1' }) {
  return <div aria-hidden="true" className={`stripe-7 w-full ${className}`} />;
}
