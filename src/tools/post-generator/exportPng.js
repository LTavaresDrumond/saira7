// Baixa (ou compartilha, no celular) o post como PNG.

function nomeDoArquivo(data = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return `post-saira-${data.getFullYear()}${p(data.getMonth() + 1)}${p(data.getDate())}${p(data.getHours())}${p(data.getMinutes())}.png`;
}

/**
 * Devolve { ok, mensagem }.
 * No celular, se o sistema permitir compartilhar arquivos, abre a folha de compartilhar
 * ("Salvar imagem", Instagram…). No computador (ou sem essa opção), baixa o arquivo.
 */
export async function exportPng(canvas) {
  const nome = nomeDoArquivo();
  const blob = await new Promise((ok) => canvas.toBlob(ok, 'image/png'));
  if (!blob) return { ok: false, mensagem: 'Não foi possível gerar a imagem. Tente de novo.' };

  const celular = window.matchMedia?.('(pointer: coarse)').matches;
  const arquivo = typeof File === 'function' ? new File([blob], nome, { type: 'image/png' }) : null;
  if (celular && arquivo && navigator.canShare?.({ files: [arquivo] })) {
    try {
      await navigator.share({ files: [arquivo], title: 'Post Saíra Sete Cores' });
      return { ok: true, mensagem: 'Pronto! Escolha "Salvar imagem" ou envie direto para o Instagram.' };
    } catch (e) {
      if (e?.name === 'AbortError') return { ok: false, mensagem: 'Compartilhamento cancelado.' };
      // se a folha falhar, cai no download abaixo
    }
  }

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nome;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  return { ok: true, mensagem: `Imagem baixada: ${nome}` };
}
