import { useEffect, useState } from 'react';
import { FONTES, PASSAROS } from './constants';

function loadImage(src) {
  return new Promise((ok, err) => {
    const img = new Image();
    img.onload = () => ok(img);
    img.onerror = err;
    img.src = src;
  });
}

let cache = null;

// Carrega as fontes próprias do gerador e os pássaros uma vez só.
// Só desenhamos depois disso; senão o canvas usaria uma fonte reserva.
async function loadResources() {
  if (cache) return cache;
  cache = (async () => {
    await Promise.all(
      FONTES.map(async ({ family, url, weight }) => {
        const face = new FontFace(family, `url(${url}) format('woff2')`, { weight });
        await face.load();
        document.fonts.add(face);
      })
    );
    const entries = await Promise.all(
      Object.entries(PASSAROS).map(async ([nome, { src }]) => [nome, await loadImage(src)])
    );
    return { passaros: Object.fromEntries(entries) };
  })();
  return cache;
}

export default function useResources() {
  const [state, setState] = useState({ pronto: false, erro: null, passaros: null });
  useEffect(() => {
    let vivo = true;
    loadResources()
      .then((r) => vivo && setState({ pronto: true, erro: null, passaros: r.passaros }))
      .catch((e) => {
        cache = null;
        if (vivo) setState({ pronto: false, erro: e, passaros: null });
      });
    return () => { vivo = false; };
  }, []);
  return state;
}
