import {
  AREIA, NOITE, PETROLEO, TURQUESA, FAIXA, PLACEHOLDER_BG, PLACEHOLDER_TXT,
  W, H_FEED, H_STORY, FAIXA_ALTURA, FONTE_TITULO, FONTE_TEXTO, PASSAROS, ESTILOS,
} from './constants';

/**
 * Desenha o post no canvas. Função pura: só lê `estado` e `recursos` e pinta o canvas.
 * Espelha linha a linha a função desenhar() de docs/gerador-de-posts/REFERENCIA-gerador.html;
 * a única adição é o fundo escuro no modo sem foto (fundo Noite, texto Areia, pássaro com contorno Areia).
 *
 * estado: ver ESTADO_INICIAL em constants.js
 * recursos: { foto: imagem/canvas escolhido ou null, passaros: { tracoAreia, colorido, coloridoAreia } }
 */
export function drawPost(canvas, estado, recursos) {
  const ctx = canvas.getContext('2d');
  const H = estado.story ? H_STORY : H_FEED;
  if (canvas.width !== W) canvas.width = W;
  if (canvas.height !== H) canvas.height = H;

  const escala = estado.escala / 100;
  const base = ESTILOS[estado.estilo] || ESTILOS.so;
  const tam = Math.round(base.titulo * escala);
  const tamS = Math.round(base.sub * escala);

  const querFoto = estado.fundo === 'foto';
  const comFoto = querFoto && !!recursos.foto;
  const escuro = !comFoto && estado.fundo === 'escuro';
  const cor = comFoto || escuro ? AREIA : NOITE;
  const topo = estado.topo;

  // fundo
  ctx.fillStyle = escuro ? NOITE : AREIA;
  ctx.fillRect(0, 0, W, H);
  if (comFoto) {
    const img = recursos.foto;
    const z = estado.zoom / 100;
    const iw = img.width;
    const ih = img.height;
    const s = Math.max(W / iw, H / ih) * z;
    const dw = iw * s;
    const dh = ih * s;
    const dx = -(dw - W) * (estado.posX / 100);
    const dy = -(dh - H) * (estado.posY / 100);
    ctx.drawImage(img, dx, dy, dw, dh);
    const v = estado.escurecer / 100;
    if (v > 0) {
      ctx.fillStyle = `rgba(2,32,44,${v})`;
      ctx.fillRect(0, 0, W, H);
    }
    const g = topo ? ctx.createLinearGradient(0, 0, 0, H) : ctx.createLinearGradient(0, H, 0, 0);
    g.addColorStop(0, 'rgba(2,32,44,.9)');
    g.addColorStop(0.28, 'rgba(2,32,44,.6)');
    g.addColorStop(0.58, 'rgba(2,32,44,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  } else if (querFoto) {
    // "Com foto" ainda sem foto escolhida
    ctx.fillStyle = PLACEHOLDER_BG;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = PLACEHOLDER_TXT;
    ctx.font = `500 36px '${FONTE_TEXTO}', sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText("Escolha uma foto ou use 'Sem foto'", W / 2, H / 2);
    ctx.textAlign = 'left';
  }

  // faixa das 7 cores: no topo com foto e texto em cima; na base nos demais casos
  const faixaNoTopo = comFoto && topo;
  const fy = faixaNoTopo ? 0 : H - FAIXA_ALTURA;
  FAIXA.forEach((c, i) => {
    ctx.fillStyle = c;
    ctx.fillRect((i * W) / 7, fy, W / 7 + 1, FAIXA_ALTURA);
  });

  // margens (stories com área segura)
  const mTop = estado.story ? 230 : 110;
  const mBot = estado.story ? 300 : 110;

  // texto
  const ML = comFoto ? 80 : 88;
  const larg = W - ML * 2;
  const chapeu = estado.chapeu.trim().toUpperCase();
  const titulo = estado.titulo;
  const sub = estado.estilo === 'so' ? '' : estado.sub;
  const fTit = `400 ${tam}px '${FONTE_TITULO}', serif`;
  const fSub = `400 ${tamS}px '${FONTE_TEXTO}', sans-serif`;
  const lt = quebra(ctx, titulo, fTit, larg);
  const ls = sub.trim() ? quebra(ctx, sub, fSub, larg) : [];
  const hCh = chapeu ? 30 + 36 : 0;
  const hTi = lt.length * tam * 1.05;
  const hSu = ls.length ? 44 + ls.length * tamS * 1.4 : 0;
  const bloco = hCh + hTi + hSu;
  const nTopo = comFoto ? topo : true;
  let y = nTopo ? mTop : H - mBot - bloco;
  // Como na referência: sem foto e "texto embaixo", o bloco desce (acima do rodapé no feed)
  if (!comFoto && topo === false) y = H - mBot - bloco - (estado.story ? 0 : 60);

  ctx.textBaseline = 'alphabetic';
  if (chapeu) {
    ctx.font = `500 30px '${FONTE_TEXTO}', sans-serif`;
    ctx.fillStyle = comFoto ? AREIA : escuro ? TURQUESA : PETROLEO;
    espacado(ctx, chapeu, ML, y + 26, 6);
    y += 66;
  }
  ctx.fillStyle = cor;
  ctx.font = fTit;
  for (const l of lt) {
    y += tam * 0.86;
    ctx.fillText(l, ML, y);
    y += tam * 0.19;
  }
  if (ls.length) {
    y += 44;
    ctx.font = fSub;
    ctx.fillStyle = cor;
    for (const l of ls) {
      y += tamS * 1.05;
      ctx.fillText(l, ML, y);
      y += tamS * 0.35;
    }
  }

  // rodapé (sem foto)
  if (!comFoto) {
    const r = estado.rodape.trim().toUpperCase();
    if (r) {
      ctx.fillStyle = escuro ? AREIA : NOITE;
      ctx.font = `500 28px '${FONTE_TEXTO}', sans-serif`;
      espacado(ctx, r, 88, H - 78, 5);
    }
  }

  // pássaro
  const qual = comFoto ? 'tracoAreia' : escuro ? 'coloridoAreia' : 'colorido';
  const passaro = recursos.passaros?.[qual];
  if (passaro) {
    const bw = comFoto ? (topo ? 140 : 150) : 150;
    const bx = W - (comFoto ? (topo ? 72 : 64) : 80) - bw;
    const by = (comFoto ? (topo ? 84 : 64) : 80) + (estado.story ? 160 : 0);
    ctx.drawImage(passaro, bx, by, bw, bw * PASSAROS[qual].ratio);
  }
}

// Quebra de linha: Enter quebra manualmente; palavras quebram na largura útil
export function quebra(ctx, texto, fonte, larg) {
  ctx.font = fonte;
  const out = [];
  for (const par of texto.split('\n')) {
    const pal = par.split(/\s+/).filter(Boolean);
    if (!pal.length) {
      out.push('');
      continue;
    }
    let l = pal[0];
    for (let i = 1; i < pal.length; i++) {
      const t = `${l} ${pal[i]}`;
      if (ctx.measureText(t).width > larg) {
        out.push(l);
        l = pal[i];
      } else l = t;
    }
    out.push(l);
  }
  return out;
}

// Texto com espaçamento entre letras (letra a letra, como na referência)
function espacado(ctx, txt, x, y, sp) {
  let cx = x;
  for (const ch of txt) {
    ctx.fillText(ch, cx, y);
    cx += ctx.measureText(ch).width + sp;
  }
}
