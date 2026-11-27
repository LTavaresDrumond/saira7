import React from 'react';

/**
 * Photo — <img> que entrega a versão leve (WebP) das fotos de /images.
 *
 * Para "/images/x/foto.jpg" o navegador escolhe entre foto-800.webp e foto-1600.webp
 * (geradas por scripts/otimizar-fotos.py) conforme o tamanho na tela (`sizes`).
 * O JPG original fica como reserva para navegadores sem WebP.
 * Foto nova? Rode `python3 scripts/otimizar-fotos.py` antes de commitar.
 *
 * `sizes` diz quanto da largura da tela a foto ocupa (padrão: a tela toda).
 */
export default function Photo({ src, sizes = '100vw', alt = '', ...imgProps }) {
  const isPhoto = typeof src === 'string' && /^\/images\/.+\.(jpe?g|png)$/i.test(src);
  if (!isPhoto) return <img src={src} alt={alt} {...imgProps} />;

  const base = src.replace(/\.(jpe?g|png)$/i, '');
  return (
    <picture className="contents">
      <source type="image/webp" srcSet={`${base}-800.webp 800w, ${base}-1600.webp 1600w`} sizes={sizes} />
      <img src={src} alt={alt} decoding="async" {...imgProps} />
    </picture>
  );
}

// Tamanhos comuns na tela (para o atributo `sizes`)
export const SIZES = {
  tela: '100vw',
  grade3: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
  grade2: '(min-width: 768px) 50vw, 100vw',
  miniatura: '96px',
};
