import { useCallback, useState } from 'react';

// Lado maior da foto guardada para desenhar. Uma foto de celular (12 MP, ~4000 px) é
// reduzida uma vez ao ser escolhida; o post tem no máximo 1920 px de altura, e o zoom
// vai até 200%, então 3840 px mantém a nitidez sem travar a cada letra digitada.
const LADO_MAXIMO = 3840;

/**
 * Lê a foto escolhida só no navegador (nunca é enviada).
 * O <img> já aplica a orientação EXIF (foto tirada em pé não sai deitada); desenhamos ela
 * num canvas reduzido e liberamos o arquivo da memória (revokeObjectURL).
 */
export default function useImageFile() {
  const [foto, setFoto] = useState(null);
  const [lendo, setLendo] = useState(false);
  const [erro, setErro] = useState(null);

  const escolher = useCallback(async (file) => {
    if (!file) return;
    setLendo(true);
    setErro(null);
    const url = URL.createObjectURL(file);
    try {
      const img = await new Promise((ok, err) => {
        const i = new Image();
        i.decoding = 'async';
        i.onload = () => ok(i);
        i.onerror = () => err(new Error('Não foi possível abrir essa imagem.'));
        i.src = url;
      });
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      const r = Math.min(1, LADO_MAXIMO / Math.max(w, h));
      const cv = document.createElement('canvas');
      cv.width = Math.round(w * r);
      cv.height = Math.round(h * r);
      const ctx = cv.getContext('2d');
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, cv.width, cv.height);
      setFoto(cv);
    } catch (e) {
      setErro(e.message || 'Não foi possível abrir essa imagem.');
    } finally {
      URL.revokeObjectURL(url);
      setLendo(false);
    }
  }, []);

  return { foto, lendo, erro, escolher };
}
