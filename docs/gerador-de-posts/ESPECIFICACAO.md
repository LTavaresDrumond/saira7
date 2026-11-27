# Gerador de posts no site — especificação completa

_Sítio Saíra Sete Cores · 27/11/2026 · para o Claude Code, repositório `LTavaresDrumond/saira7`_

Arquivos que acompanham esta especificação:
- `ESPECIFICACAO.md` (este arquivo)
- `REFERENCIA-gerador.html`: implementação de referência completa e testada (um único HTML com `<canvas>`; fontes e pássaros embutidos em base64). **É a fonte da verdade do desenho**; se este texto e o HTML divergirem em alguma medida, vale o HTML.

## 1. Objetivo
Levar para dentro do site o **gerador de posts** que hoje existe só como página avulsa, para que os sócios façam as artes do Instagram sozinhos, sem depender de ninguém. O gerador roda **100% no navegador**: a pessoa sobe uma foto, digita o texto, escolhe o modelo e baixa o PNG. Nada é enviado a servidor, não há backend, não há senha nesta fase.

## 2. Como o site vira um portal
Três camadas, da mais pública para a mais restrita:

| Camada | Para quem | Endereço | Situação |
|---|---|---|---|
| **1. Vitrine** (tela única com os cards) | Clientes, vindos do Instagram | `/` | no ar, **não mexer** |
| **2. Ferramentas da equipe (sem login)** | Sócios, com o link divulgado por nós | `/gerador` | **este módulo (fase 1)** |
| **3. Área dos sócios (com login)** | Só sócios | `/equipe` | futura: agenda de reservas, orçamento, financeiro, e o gerador como mais um item |

**Decisões de arquitetura (para não refazer depois):**
1. **Cada ferramenta é um módulo isolado** em `src/tools/<nome>/` (hoje só `post-generator`). Quando existir login, o módulo só muda de rota (`/gerador` → `/equipe/gerador`), sem reescrever.
2. **Carregamento sob demanda** (`React.lazy` + `Suspense`): o código do gerador só baixa quando alguém abre `/gerador`. A vitrine não pode ficar mais pesada nem mais lenta no 4G.
3. **Entrada discreta:** um link pequeno no **rodapé** ("Equipe · Gerar post"). **Não vira card** (a vitrine é do cliente) e não vai na barra do topo. Respeita a regra "nada se repete".
4. **Não indexar:** `/gerador` com `noindex`. Observação honesta: o repositório e o site são públicos, então a ferramenta não é secreta, só não é divulgada. Ela não expõe dado nenhum, o que é aceitável até a fase 3 (login).
5. **Sem senha, sem segredo:** nada de variável de ambiente nesta fase.

## 3. Roteamento
Hoje o site usa **hash** (`#reservar`, `#espacos`…) para os cards, gerido pelo `NavigationContext`, e não tem páginas. O `react-router-dom` já está no `package.json`. Recomendação (proponha outra se justificar):
- Rotas por **caminho**: `/` → vitrine (como está), `/gerador` → gerador. Os links com `#` continuam funcionando exatamente como hoje (`/#reservar`).
- `vercel.json` com **rewrite** para `index.html`, para `/gerador` abrir direto ao recarregar ou ao colar o link.
- O botão "voltar" do celular deve levar do gerador de volta à vitrine; o fechamento de modais com `#` não pode ser afetado.
- O gerador **não** usa o `NavigationContext` nem os modais; é uma página própria, com link "← Voltar ao site".

## 4. Especificação funcional
**Tela:** no celular, prévia em cima e controles embaixo, em coluna. No computador, prévia à esquerda (fixa ao rolar) e controles à direita. Alvos de toque ≥ 44 px; campos de texto com fonte ≥ 16 px (evita o zoom do iPhone).

**Controles, em grupos:**
1. **Foto:** "Com foto" / "Sem foto (fundo Areia)". Com foto: escolher arquivo (galeria do celular), posição vertical (0–100, padrão **100** = mostra a parte de baixo), posição horizontal (0–100, padrão 50), zoom (100–200%), escurecer a foto toda (0–30%, padrão 0).
2. **Modelo:** "Texto em cima" (**A-topo**) / "Texto embaixo" (**A**). **Formato:** "Feed 4:5" (1080×1350) / "Stories 9:16" (1080×1920).
3. **Estilo do texto:** "Só título" / "Título + subtexto" / "Título grande + subtexto". Controle "Tamanho do texto" de 40 a 140% (padrão 100).
4. **Texto:** chapéu (linha pequena, opcional), título (várias linhas; Enter quebra), subtexto (some em "Só título"), rodapé (só no modelo sem foto, opcional).
5. **Baixar imagem (PNG).**

**Valores iniciais** (o primeiro uso já mostra um exemplo bom): com foto, texto em cima, feed, "Só título"; chapéu "Carnaval 2027 · Sítio inteiro"; título "Até 20↵pessoas."; rodapé "Sítio Saíra Sete Cores".

**Download:** `canvas.toBlob(..., 'image/png')`. No celular, se `navigator.canShare({files})` existir, abrir a folha de compartilhar do sistema (permite "Salvar imagem" e enviar direto ao Instagram); senão, `<a download>`. Nome do arquivo: `post-saira-AAAAMMDDHHMM.png`. Mostrar mensagem de sucesso ou erro.

**Prévia:** o mesmo `<canvas>` na resolução real (1080 de largura), exibido com CSS `width:100%`. Atualiza a cada alteração (sem botão "gerar").

**Foto do usuário:** lida só no navegador (`URL.createObjectURL`, liberando com `revokeObjectURL`), nunca enviada. Respeitar a orientação EXIF (confirmar com foto de celular tirada em pé). Fotos grandes (12 MP) devem ser aceitas sem travar.

## 5. Especificação visual (px, na peça de 1080 de largura)
**Fontes:** Fraunces (títulos) e DM Sans (chapéu, subtexto, rodapé), as mesmas que o site já usa. Antes de desenhar, esperar `document.fonts.load('400 100px Fraunces')` e `document.fonts.load('500 30px "DM Sans"')`, senão o canvas usa fonte reserva.

**Cores:** Areia `#F7F3EA` · Noite `#02202C` · Petróleo `#027483` · faixa das 7 cores, nesta ordem, 7 partes iguais: `#0261B3 #027483 #0390A1 #6EAA40 #FBAC02 #E35E0C #563C7E`.

**Fundo com foto (modo "cover"):** `escala = max(W/largura, H/altura) × zoom`; deslocamento X = `-(largura×escala − W) × posX`, Y = `-(altura×escala − H) × posY` (pos em 0–1). Depois, se "escurecer" > 0, camada `rgba(2,32,44, valor)` sobre tudo.

**Degradê Noite** (sempre nas peças com foto): paradas `0% → rgba(2,32,44,.9)`, `28% → .6`, `58% → 0`. **Texto em cima:** degradê de cima para baixo. **Texto embaixo:** de baixo para cima.

**Faixa das 7 cores:** 22 px de altura. **No topo** quando há foto e o texto está em cima (A-topo); **na base** nos demais casos (A e sem foto).

**Margens:** laterais 80 (com foto) e 88 (sem foto). Feed: 110 do topo (texto em cima) ou 110 da base (texto embaixo). **Stories:** 230 do topo e 300 da base (área segura: o Instagram cobre topo e base com a interface).

**Tipografia:**
| Elemento | Fonte | Tamanho base | Observação |
|---|---|---|---|
| Chapéu | DM Sans 500 | 30 | CAIXA ALTA, espaçamento entre letras 6 px (letra a letra ou `letterSpacing`), baixa 26 px do topo do bloco, ocupa 66 px com o respiro |
| Título | Fraunces 400 | **Só título 120 · Título + subtexto 104 · Título grande 150** | × escala de 40–140%; entrelinha 1,05; quebra automática de palavras na largura útil (W − 2×margem) e quebra manual com Enter |
| Subtexto | DM Sans 400 | **42** (Título + subtexto) ou **46** (grande) | × escala; entrelinha 1,4; 44 px de respiro abaixo do título; sem subtexto em "Só título" |
| Rodapé (sem foto) | DM Sans 500 | 28 | CAIXA ALTA, espaçamento 5, cor Noite, a 88 px da esquerda e 78 px da base |

**Cores do texto:** com foto, **tudo em Areia** (regra do projeto: texto sobre foto é sempre Areia). Sem foto: título e subtexto em Noite, chapéu em Petróleo.

**Pássaro (logo):** com foto → versão em traço Areia: A-topo 140 px de largura a 84 px do topo e 72 da direita; A (texto embaixo) 150 px a 64 do topo e 64 da direita. Sem foto → versão colorida, 150 px, a 80 do topo e 80 da direita. Em Stories, descer o pássaro 160 px (área segura). Usar os SVGs que o site já tem em `public/` (confirmar os nomes reais; se faltar a versão em traço Areia ou a colorida, extrair os SVGs embutidos em base64 no HTML de referência).

**Posição do bloco de texto:** com foto e texto em cima, o bloco começa na margem do topo; com foto e texto embaixo, termina na margem da base (altura calculada a partir do texto). **Sem foto, o texto fica sempre em cima.**

**Regras de marca:** sem desfoque nem tarja atrás do texto; nada com cara de "feito por IA"; a faixa das 7 cores é a assinatura.

## 6. Estrutura de arquivos sugerida
```
src/tools/post-generator/
  PostGeneratorPage.jsx     # página: prévia + painel de controles
  drawPost.js               # função pura de desenho no canvas (espelha o §5)
  constants.js              # cores, medidas, tamanhos base, valores iniciais
  useImageFile.js           # lê a foto escolhida (createObjectURL, limpeza)
  exportPng.js              # toBlob + compartilhar/baixar
src/App.jsx                 # rotas / e /gerador (lazy)
vercel.json                 # rewrite para index.html
```
`drawPost(canvas, estado, recursos)` deve ser função pura (fácil de testar); `usePostState` guarda o estado dos controles; os componentes usam as classes e variáveis de tema do site. Textos de interface em português.

## 7. Entrada no rodapé
No `Footer.jsx`, um **link discreto** ("Equipe · Gerar post"), fora da grade dos cards, na cor dos demais links do rodapé, levando a `/gerador`. Não vira card, não vai na barra, não aparece na vitrine em nenhum outro lugar.

## 8. Critérios de aceitação (testar antes de abrir o PR)
1. `npm run build` passa; a vitrine em `/` fica **igual** (conferir 320, 360, 390 e 430 px, temas claro e escuro, e os links `#reservar`, `#fotos` etc.).
2. O peso da vitrine **não aumenta** (o gerador vai em chunk separado; conferir na saída do build).
3. `/gerador` abre direto (colar o link e recarregar funciona na Vercel) e tem o botão "← Voltar ao site".
4. No celular (iPhone e Android): subir uma foto da galeria, digitar o texto, baixar/compartilhar o PNG de 1080×1350 e de 1080×1920, e abrir o arquivo na galeria.
5. Comparar a saída lado a lado com o HTML de referência para os mesmos dados: medidas, cores, quebra de linhas e posição do pássaro devem bater (tolerância de 1–2 px).
6. Combinações a testar: texto em cima/embaixo × só título / título + subtexto / título grande + subtexto × com e sem foto × feed e stories.
7. Foto de celular tirada em pé não sai deitada; foto de 12 MP não trava.
8. Título muito longo quebra linha sem sair da peça; chapéu e subtexto vazios somem sem deixar buraco.
9. Tema claro/escuro da interface funciona (a **peça gerada** não depende do tema: sempre Areia/Noite).
10. Acessibilidade básica: `label` em cada campo, foco visível, contraste suficiente; o canvas tem `aria-label` descrevendo a prévia.

## 9. Fora do escopo (por enquanto)
Login, salvar rascunhos, histórico, biblioteca de fotos do sítio dentro da ferramenta, carrossel em lote, integração com Canva ou Meta, modelo B, vídeo/Reels. Ideias para a fase 3: escolher fotos direto de `public/images`, salvar "modelos de texto" e gerar um carrossel inteiro de uma vez.

## 10. Depois de pronto
- Atualizar o `PROJECT_CONTEXT.md` (nova seção "Ferramentas da equipe": rota, estrutura do módulo, regras do §5) e o backlog do `CLAUDE.md` (marcar o gerador como feito e registrar a fase 3 "Área dos sócios").
- Se a identidade do pássaro mudar (versão minimalista em avaliação), trocar só o arquivo em `public/`; a ferramenta usa o mesmo arquivo da barra do site.
