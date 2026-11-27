import React, { useEffect, useId, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, ImagePlus, Moon, Sun } from 'lucide-react';
import SevenStripe from '../../components/SevenStripe';
import { useTheme } from '../../components/ThemeContext';
import { ESTADO_INICIAL } from './constants';
import { drawPost } from './drawPost';
import useResources from './useResources';
import useImageFile from './useImageFile';
import { exportPng } from './exportPng';
// CSS das ferramentas embutido neste arquivo (a vitrine não leva código para carregá-lo)
import estilosFerramentas from '../ferramentas.css?inline';

/**
 * Gerador de posts (/gerador) — ferramenta da equipe, sem login por enquanto.
 * Tudo acontece no navegador: a foto nunca sai do aparelho.
 * A peça gerada não depende do tema do site (sempre Areia/Noite); só a interface segue o tema.
 */
export default function PostGeneratorPage() {
  const [st, setSt] = useState(ESTADO_INICIAL);
  const set = (campo) => (valor) => setSt((s) => ({ ...s, [campo]: valor }));
  const canvasRef = useRef(null);
  const recursos = useResources();
  const { foto, lendo, erro: erroFoto, escolher } = useImageFile();
  const [msg, setMsg] = useState('');
  const [baixando, setBaixando] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  // Página da equipe: começa no topo, não aparece no Google e tem título próprio
  useEffect(() => {
    const estilo = document.createElement('style');
    estilo.textContent = estilosFerramentas;
    document.head.appendChild(estilo);
    window.scrollTo(0, 0);
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    const tituloAnterior = document.title;
    document.title = 'Gerador de posts · Sítio Saíra Sete Cores';
    return () => {
      estilo.remove();
      meta.remove();
      document.title = tituloAnterior;
    };
  }, []);

  // Redesenha a cada mudança (sem botão "gerar")
  useEffect(() => {
    if (!recursos.pronto || !canvasRef.current) return;
    drawPost(canvasRef.current, st, { foto, passaros: recursos.passaros });
  }, [st, foto, recursos]);

  const voltar = () => {
    // veio do site? volta no histórico; abriu o link direto? vai para a vitrine
    if ((window.history.state?.idx ?? 0) > 0) navigate(-1);
    else navigate('/');
  };

  const baixar = async () => {
    setBaixando(true);
    setMsg('');
    try {
      const r = await exportPng(canvasRef.current);
      setMsg(r.mensagem);
    } catch {
      setMsg('Não foi possível salvar a imagem. Tente de novo.');
    } finally {
      setBaixando(false);
    }
  };

  const comFoto = st.fundo === 'foto';
  const descricao = `Prévia do post ${st.story ? 'para stories (9:16)' : 'para o feed (4:5)'}, ${
    comFoto ? 'com foto' : st.fundo === 'escuro' ? 'sem foto, fundo escuro' : 'sem foto, fundo claro'
  }, texto ${st.topo ? 'em cima' : 'embaixo'}: ${st.titulo.replace(/\n/g, ' ')}`;

  return (
    <div className="min-h-screen bg-stone-950 text-white font-sans">
      <SevenStripe className="h-1" />
      <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-3 flex items-center justify-between gap-3">
        <button
          onClick={voltar}
          className="inline-flex items-center gap-2 min-h-[44px] px-3 -ml-3 rounded-lg text-stone-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao site
        </button>
        <button
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Mudar para o tema escuro' : 'Mudar para o tema claro'}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
        >
          {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white">Gerador de posts</h1>
        <p className="text-stone-400 text-sm mt-1 mb-5">
          Para o Instagram do sítio. A foto fica só no seu aparelho; nada é enviado.
        </p>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] items-start">
          {/* Prévia */}
          <div className="lg:sticky lg:top-4">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-2.5">
              <canvas
                ref={canvasRef}
                width={1080}
                height={st.story ? 1920 : 1350}
                role="img"
                aria-label={descricao}
                className="block w-full h-auto rounded-lg bg-stone-800"
              />
            </div>
            {!recursos.pronto && !recursos.erro && <p className="text-stone-400 text-sm mt-2">Carregando fontes…</p>}
            {recursos.erro && <p className="text-sm mt-2 text-white">Não foi possível carregar as fontes. Recarregue a página.</p>}
          </div>

          {/* Controles */}
          <div className="flex flex-col gap-4">
            <Grupo titulo="1 · Foto">
              <Opcoes
                rotulo="Fundo do post"
                valor={st.fundo}
                onChange={set('fundo')}
                opcoes={[['foto', 'Com foto'], ['claro', 'Sem foto · claro'], ['escuro', 'Sem foto · escuro']]}
              />
              {comFoto && (
                <>
                  <label className="mt-3 flex items-center justify-center gap-2 min-h-[48px] rounded-xl border border-dashed border-white/25 hover:border-white/50 text-white text-base cursor-pointer focus-within:outline focus-within:outline-2 focus-within:outline-white/60">
                    <ImagePlus className="w-5 h-5" />
                    {lendo ? 'Abrindo a foto…' : foto ? 'Trocar foto' : 'Escolher foto'}
                    <input
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      onChange={(e) => { escolher(e.target.files?.[0]); e.target.value = ''; }}
                    />
                  </label>
                  {erroFoto && <p className="text-sm mt-2 text-white">{erroFoto}</p>}
                  <Faixa rotulo="Posição vertical da foto" valor={st.posY} min={0} max={100} onChange={set('posY')} />
                  <Faixa rotulo="Posição horizontal" valor={st.posX} min={0} max={100} onChange={set('posX')} />
                  <Faixa rotulo="Zoom" valor={st.zoom} min={100} max={200} sufixo="%" onChange={set('zoom')} />
                  <Faixa rotulo="Escurecer a foto toda (para céu claro)" valor={st.escurecer} min={0} max={30} sufixo="%" onChange={set('escurecer')} />
                  <p className="text-stone-400 text-[13px] mt-3 leading-snug">
                    Dica: o texto vai onde a foto tem menos valor. Destaque embaixo (lago, vegetação) → texto em cima.
                    Destaque em cima (céu, serra) → texto embaixo.
                  </p>
                </>
              )}
            </Grupo>

            <Grupo titulo="2 · Modelo">
              <Opcoes rotulo="Posição do texto" valor={st.topo} onChange={set('topo')} opcoes={[[true, 'Texto em cima'], [false, 'Texto embaixo']]} />
              <div className="mt-2">
                <Opcoes rotulo="Formato" valor={st.story} onChange={set('story')} opcoes={[[false, 'Feed 4:5'], [true, 'Stories 9:16']]} />
              </div>
            </Grupo>

            <Grupo titulo="3 · Estilo do texto">
              <Opcoes
                rotulo="Estilo do texto"
                valor={st.estilo}
                onChange={set('estilo')}
                opcoes={[['so', 'Só título'], ['sub', 'Título + subtexto'], ['grande', 'Título grande + subtexto']]}
              />
              <Faixa rotulo="Tamanho do texto" valor={st.escala} min={40} max={140} sufixo="%" onChange={set('escala')} />
            </Grupo>

            <Grupo titulo="4 · Texto">
              <Campo rotulo="Chapéu (linha pequena em cima; deixe vazio para tirar)" valor={st.chapeu} onChange={set('chapeu')} />
              <Campo rotulo="Título (Enter quebra a linha)" valor={st.titulo} onChange={set('titulo')} multilinha />
              {st.estilo !== 'so' && (
                <Campo rotulo="Subtexto (Enter quebra a linha)" valor={st.sub} onChange={set('sub')} multilinha />
              )}
              {!comFoto && (
                <Campo rotulo="Rodapé (só no modelo sem foto; vazio para tirar)" valor={st.rodape} onChange={set('rodape')} />
              )}
            </Grupo>

            <button
              onClick={baixar}
              disabled={!recursos.pronto || baixando}
              className="w-full min-h-[52px] rounded-xl bg-saira-azul hover:brightness-110 disabled:opacity-60 text-saira-areia text-[17px] font-semibold inline-flex items-center justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            >
              <Download className="w-5 h-5" />
              {baixando ? 'Gerando…' : 'Baixar imagem (PNG)'}
            </button>
            <p className="text-stone-400 text-sm min-h-[20px]" role="status" aria-live="polite">{msg}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

function Grupo({ titulo, children }) {
  return (
    <fieldset className="rounded-2xl bg-white/5 border border-white/10 px-4 pb-4 pt-2">
      <legend className="px-1.5 text-xs uppercase tracking-[0.12em] font-semibold text-stone-300">{titulo}</legend>
      {children}
    </fieldset>
  );
}

// Botões de escolha (um só ativo), com alvo de toque ≥ 44 px
function Opcoes({ rotulo, valor, opcoes, onChange }) {
  return (
    <div role="group" aria-label={rotulo} className="flex flex-wrap gap-2 mt-1">
      {opcoes.map(([v, texto]) => {
        const ativo = v === valor;
        return (
          <button
            key={String(v)}
            type="button"
            aria-pressed={ativo}
            onClick={() => onChange(v)}
            className={`flex-1 basis-[30%] min-w-[96px] min-h-[44px] px-3 rounded-xl border text-sm leading-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 ${
              ativo ? 'bg-white text-stone-950 border-white font-semibold' : 'border-white/25 text-white hover:border-white/50'
            }`}
          >
            {texto}
          </button>
        );
      })}
    </div>
  );
}

function Faixa({ rotulo, valor, min, max, sufixo = '', onChange }) {
  const id = useId();
  return (
    <div className="mt-3">
      <label htmlFor={id} className="flex justify-between text-sm text-stone-300">
        <span>{rotulo}</span>
        <span className="text-white tabular-nums">{valor}{sufixo}</span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={valor}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-11 accent-saira-azul cursor-pointer"
      />
    </div>
  );
}

function Campo({ rotulo, valor, onChange, multilinha = false }) {
  const id = useId();
  const classe = 'w-full mt-1 rounded-xl bg-stone-950 border border-white/20 focus:border-white/60 focus:outline-none px-3 py-2.5 text-base text-white placeholder-stone-500';
  return (
    <div className="mt-3 first:mt-1">
      <label htmlFor={id} className="block text-sm text-stone-300">{rotulo}</label>
      {multilinha ? (
        <textarea id={id} rows={3} value={valor} onChange={(e) => onChange(e.target.value)} className={`${classe} resize-y`} />
      ) : (
        <input id={id} type="text" value={valor} onChange={(e) => onChange(e.target.value)} className={classe} />
      )}
    </div>
  );
}
