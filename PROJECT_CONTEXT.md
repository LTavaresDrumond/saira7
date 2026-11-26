# Contexto do Projeto: Sítio Saíra Sete Cores (Saíra 7)

Este documento tem como objetivo fornecer todo o contexto arquitetural, regras de design e histórico de decisões do projeto para que qualquer IA (como o Antigravity) possa assumir o desenvolvimento em outra máquina de forma contínua e perfeitamente alinhada com a visão do usuário.

## 🎯 1. A Ideia e Conceito do Projeto
O Sítio Saíra Sete Cores (localizado na Cabeceira do Sana, Macaé - RJ) possui uma plataforma web focada em conversão para hospedagem e eventos. 
- **Experiência de Usuário (Single Screen / Flipper):** Abandonamos o layout tradicional de rolagem longa (landing page clássica). A interface principal (`HeroCanvas.jsx`) é uma tela fixa focada no "visual first", onde o usuário interage através de 5 **cards tridimensionais (FlipCards)** — Espaços & Fotos, Natureza, Localização, O que fazer no Sana e Reservar; a 6ª vaga fica para o card do Airbnb, quando houver. Ao clicar, o card abre um modal imersivo (`CardModal.jsx`) sobreposto à imagem de fundo.
- **Nomes diretos (nov/2026, a partir de uma consulta com um usuário final):** "Nossos Espaços" + "Galeria Fotográfica" viraram **Espaços & Fotos**; "Como Chegar" virou **Localização**; "No Quintal do Sana" virou **O que fazer no Sana**; "Solicitar Orçamento" virou **Reservar**; depois, "Natureza & Rio" virou só **Natureza**.
- **Filosofia "Menos é Mais":** O design prioriza imagens imersivas e grandiosas. Textos são usados estritamente quando necessários. Eliminar redundâncias e parágrafos massantes em favor de galerias de fotos limpas e diretas.

## 🛠 2. Tecnologias e Frameworks
- **Core:** React 18 empacotado via Vite.
- **Estilização Principal:** Tailwind CSS para grid/layout e utilitários.
- **Estilização Customizada:** CSS puro (`index.css`) para gerenciar as animações tridimensionais, efeitos de entrada, *glows* e o aprofundamento do *glassmorphism*.
- **Ícones:** `lucide-react` (padrão elegante e minimalista).
- **Roteamento Interno (State):** O gerenciamento de qual modal está aberto é feito pelo `NavigationContext.jsx` (Context API), que também espelha o card aberto no `#` do endereço (ver 3.5).

## 📂 3. Mapeamento de Pastas e Arquitetura

### 3.1 Pasta de Mídias
- `/public/images/`: Contém as fotos originais em subpastas organizadas: `casaantiga`, `casanova`, `eventos`, `convivencia`, e raiz para imagens diversas como logotipo e fotos do rio.

### 3.2 Componentes Core (`src/components/`)
- `App.jsx` e `main.jsx`: Ponto de entrada que envolve a aplicação com o provedor de navegação.
- `HeroCanvas.jsx`: O motor visual do site. Renderiza a grade de cards (2 colunas no celular e no tablet, 3 no computador). Nomes, ordem e subtítulos vêm de `sairaData.cards`; aqui ficam só o ícone e o conteúdo de cada card (`CARD_PARTS`). **Quando sobra um card sozinho na última linha, ele ocupa a linha inteira** (hoje o "Reservar"); com 6 cards isso some sozinho.
- `FlipCard.jsx`: O botão/card em si. Responsável pela estética tridimensional, ícones e o hover (brilho uniforme na cor do card). **No celular (< 640 px) fica compacto:** só ícone e título, em 2 colunas, para todos os cards caberem na primeira tela; a partir de 640 px volta a mostrar o subtítulo.
- `CardModal.jsx`: O contêiner de vidro que expande a informação do card. Ele não possui botões flutuantes de "Voltar/Avançar" nas laterais (para evitar cliques acidentais). A trilha no topo ("Início › Espaços & Fotos › Casa Antiga") usa o título do card e o `label` das telas internas.
- `NavigationContext.jsx`: Cérebro do estado dos cards, da trilha (`breadcrumbs`: `[idDoCard, { id, label }, …]`) e dos links diretos (`#reservar` etc.).
- `Channels.jsx`: Canais de captação (o site como link da bio do Instagram), **na barra do topo, no celular e no computador**. O site é um auxiliar de divulgação: **Airbnb e Instagram são os canais principais** (Airbnb em Laranja fogo, Instagram em Roxo ipê) e o **WhatsApp é o contato direto** (Verde mata). Botões redondos e cheios com os ícones das marcas (Simple Icons, CC0): 40 px no celular, 44 px no computador, onde o Airbnb ganha o nome escrito para ter mais destaque. Ordem e nomes em `sairaData.channels`; cores em `CHANNEL_COLORS` (`stripeColor.js`). O Airbnb aparece sozinho quando `contact.airbnbUrl` for preenchido.
- `Navbar.jsx`: Barra do topo. **Logo = só o pássaro em traço, sem letras** (o nome por extenso fica só no título do hero). À direita, os canais. No computador (lg+): links curtos dos cards (`short` em `sairaData.cards`), **todos em branco, sem destaque**, e o botão de tema. No celular/tablet: canais + menu; **o botão de tema fica dentro do menu**. **Com o menu do celular aberto, a barra fica sólida, na mesma cor do menu** (Noite no tema escuro, Areia no claro); ao fechar, volta a ser transparente sobre a foto.
- `Footer.jsx`: **Rodapé compacto (nov/2026):** só a logo final (ela já traz "Saíra Sete Cores" e "Agroecologia • Educação • Cultura • Saúde"; o nome por extenso fica no título do hero) e uma **grade 3×2** sem títulos: os 5 cards (`sairaData.cards`) e o WhatsApp. No celular fica centralizado (logo em cima, grade embaixo); no computador, logo à esquerda e grade à direita. Links em cinza do tema, brancos ao passar o mouse.

### 3.3 Componentes de Conteúdo (`src/components/content/`)
São os componentes renderizados internamente pelos modais:
- `SpacesContent.jsx`: Card **"Espaços & Fotos"**, com duas abas. **Espaços:** sub-cards de Casa Antiga, Casa Nova, Oca e Convivência (a tela interna segue a trilha do modal; tocar em "Espaços & Fotos" na trilha volta para a lista). **Fotos:** a galeria completa (`GalleryContent`). O endereço acompanha a aba (`#espacos` / `#fotos`). *Nota: Casa Antiga e Casa Nova não possuem mais blocos de texto gigantes, focando 100% no visual das fotos.*
- `GalleryContent.jsx`: Galeria de fotos mista com filtros por categoria e ampliação — hoje é a aba "Fotos" de Espaços & Fotos (não é mais um card).
- `NatureContent.jsx`: O card "Natureza" focado no poço do rio na entrada do sítio.
- `QuintalContent.jsx`: Card **"O que fazer no Sana"** (o id interno continua `quintal`). Abas "Ecoturismo" e "Conveniências" (mercados locais). Sem título interno: o nome já está no cabeçalho do modal.
- `LocationContent.jsx`: Card **"Localização"**: mapa e guia de como chegar.
- `QuoteContent.jsx`: Card **"Reservar"** (o id interno continua `cotacao`): formulário de hospedagem/evento que envia pelo WhatsApp, e perguntas frequentes.

### 3.4 Data Source
- `src/data/sairaData.js`: Centralização de copywriting, parâmetros de contato (link do WhatsApp), descrições de quartos. Facilita manutenções de conteúdo sem tocar na lógica React.
  - `cards`: nome (`title`), nome curto da barra do computador (`short`) e subtítulo de cada card, na ordem da tela. Os `id`s são internos (links diretos, cores, conteúdo) e não mudam com o nome.
  - `channels`: ordem e nome dos canais da barra (Airbnb, Instagram, WhatsApp).

### 3.5 Links diretos para os cards
Cada card tem um endereço próprio, para usar em stories, posts e respostas no WhatsApp:

| Card | Endereço | Também funcionam (links antigos) |
|---|---|---|
| Espaços & Fotos | `saira7.vercel.app/#espacos` | — |
| Espaços & Fotos, direto na aba Fotos | `saira7.vercel.app/#fotos` | `#galeria` |
| Natureza | `saira7.vercel.app/#natureza` | — |
| Localização | `saira7.vercel.app/#localizacao` | `#como-chegar` |
| O que fazer no Sana | `saira7.vercel.app/#o-que-fazer` | `#quintal` |
| Reservar | `saira7.vercel.app/#reservar` | `#orcamento`, `#cotacao` |

- Acento e maiúscula não importam (`#Orçamento` funciona).
- Ao abrir um card pelo site, o endereço muda para o `#` dele; o botão "voltar" do celular fecha o modal em vez de sair do site.
- A lista fica em `CARD_HASHES` (`NavigationContext.jsx`). Card novo (ex.: Airbnb) precisa entrar lá, em `CARD_COLORS` e em `sairaData.cards`. Ao renomear um card, mantenha o endereço antigo na lista para não quebrar links já compartilhados.

### 3.6 Prévia do link (WhatsApp / Instagram / Facebook)
- Imagem: `public/og.jpg` (1200×630, ~240 KB, recorte de `meio-sitio.jpg` com a faixa das 7 cores na base).
- Metatags `og:*` no `index.html`, com o endereço **completo** da imagem (com caminho relativo o WhatsApp não mostra a foto).
- O WhatsApp guarda a prévia em cache por um tempo; mudanças na imagem podem demorar a aparecer em links já compartilhados.

## 🎨 4. Identidade Visual v1 (nov/2026) — fonte da verdade: projeto "Saira7" no Claude (doc 04)

### Paleta
- **As 7 cores da saíra (acentos, ~10% da arte):** Azul saíra `#0261B3` · Petróleo rio `#027483` · Turquesa `#0390A1` · Verde mata `#6EAA40` · Amarelo sol `#FBAC02` · Laranja fogo `#E35E0C` · Roxo ipê `#563C7E`.
- **Base (~90%):** Areia `#F7F3EA` e Noite `#02202C`.
- No Tailwind: classes fixas `saira-azul`, `saira-areia`, `saira-noite` etc.

### Tipografia
- Títulos: **Fraunces** (`font-serif`; `font-bold` é renderizado em 600).
- Textos: **DM Sans** (`font-sans`).

### Logo (arquivos em `public/brand/`)
Versão final (26/11/2026): a **logo feita pelo sócio no Canva** ("Saíra Sete Cores" / "Agroecologia • Educação • Cultura • Saúde", pássaro pousado com círculo por trás). A **versão minimalista é só o pássaro** (o desenho inicial, sem galho nem círculo). Os arquivos oficiais completos (versões branco, areia, noite e sem fundo da logo, perfil e destaques do Instagram, modelos de post) ficam em `brand-kit/` — ver `brand-kit/README.md`. Eles **não** fazem parte do site; o site usa só `public/brand/`.
- `passaro-traco-areia.svg` / `passaro-traco-noite.svg`: pássaro em traço, **a logo da barra do topo** (Areia sobre a foto e no tema escuro; Noite na barra clara). Sem letras: o nome fica no título do hero. (Em nov/2026 testamos o selo na barra e voltamos para o pássaro, que ficou melhor.)
- `logo-claro.webp` / `logo-escuro.webp` (256 px): logo final sem fundo, usada no rodapé conforme o tema (claro: linhas escuras; escuro: linhas Areia e filete Areia no pássaro). São geradas a partir de `brand-kit/logo/logo-principal.png` / `logo-noite-sem-fundo.png`: **se a logo mudar, gere os `.webp` de novo** (Python/Pillow: redimensionar para 256×256 e salvar em WebP qualidade 88).
- `passaro.svg` (colorido, contorno Noite) e `passaro-contorno-areia.svg` (contorno Areia, para fundos escuros). `passaro.svg` também é o favicon.

### Faixa das 7 cores
- Assinatura da marca (a mesma dos posts do Instagram): componente `SevenStripe` / classe `.stripe-7`, no topo da navbar e no fim do rodapé.

### Tema claro / escuro
- `ThemeContext.jsx` + atributo `data-theme` no `<html>`. O tema inicial é definido por um script no `index.html` (escolha salva em `localStorage['saira-theme']` ou preferência do sistema). Botão sol/lua na barra do topo (computador) ou dentro do menu (celular).
- As cores de interface do Tailwind (`white`, `stone-*`, `amber-*`, `emerald-*`) apontam para variáveis CSS em `src/index.css`:
  - `white` = cor do texto do tema (Areia no escuro, Noite no claro).
  - `stone-*` = escala neutra do tema (`stone-950` é o fundo).
  - `amber-*` = acento do tema (Amarelo sol no escuro, Azul saíra no claro).
  - `emerald-*` = Verde mata.
- **`force-dark`:** áreas sobre foto (hero, cards principais, legendas de fotos, lightbox, navbar sem rolar) ficam sempre escuras, em qualquer tema.
- **`theme-auto`:** volta a seguir o tema dentro de uma área `force-dark` (ex.: o modal, que fica dentro do hero).
- Regra: **todo texto em cima de foto** precisa estar dentro de um elemento com `force-dark`.

## 🎨 4.1 Diretrizes e Regras de Design (Mandatório)
Qualquer alteração visual futura deve respeitar estritamente estas leis:
1. **Glassmorphism Cristalino:** Fundo dos modais de vidro devem usar pouquíssima opacidade (ex: 7% a 15%) com blur leve. Deve parecer um "cristal finíssimo" que permite ver o fundo da natureza perfeitamente.
2. **Hover Uniforme:** O *glow* nos cards principais ao passar o mouse deve brilhar nos 4 cantos do card igualmente (overflow não pode estar escondido prejudicando o top).
3. **Imagens > Texto:** Sempre prefira componentes focados em foto e ícones a longos parágrafos explicativos. Se houver blocos de texto lado-a-lado com imagens sem necessidade, elimine-os.
4. **Nada se repete:** cada coisa aparece uma vez por tela. O que já é card não vira botão extra; os canais (Airbnb, Instagram, WhatsApp) ficam só na barra do topo; o nome do sítio por extenso fica só no título do hero (a barra mostra só o pássaro); o título do card fica só no cabeçalho do modal.
5. **Canais em destaque:** o site é um auxiliar de divulgação. Airbnb e Instagram são os canais principais de captação (mais ênfase); o WhatsApp é o contato direto.
6. **Letras sem dourado solto:** links da barra, itens do menu e textos do rodapé usam a cor do texto do tema (Areia no escuro, Noite no claro), sem cor de destaque — nem o "Reservar". As 7 cores ficam para a faixa, os ícones dos cards e os botões dos canais.

## 🔮 5. Backlog Futuro (O Que Fazer a Seguir)
Quando a inteligência artificial assumir, aqui estão os itens arquitetados e planejados para a próxima iteração do projeto:

**Feito**
- [x] **Hub da bio do Instagram (PR #2, nov/2026):** canais de captação, cards compactos no celular, links diretos por card e prévia do link corrigida.
- [x] **Cards com nomes diretos e barra nova (PR #3, nov/2026):** Galeria unida a Espaços (Espaços & Fotos, com abas); Localização, O que fazer no Sana e Reservar; barra com o pássaro sem o nome e os canais (celular e computador); links e rodapé em branco, sem dourado; tema dentro do menu no celular, com a barra sólida enquanto o menu está aberto; trilha do modal corrigida (nomes e voltar).

**A fazer (ordem sugerida)**
- [ ] **Fotos mais leves:** `public/images` tem ~42 MB (18 fotos acima de 1 MB). Gerar versões WebP no tamanho de exibição.
- [ ] **Card do Airbnb (6ª vaga da grade):** quando existir o link, preencher `sairaData.contact.airbnbUrl` (o botão da barra aparece sozinho) e criar o card na vaga liberada pela união Espaços & Fotos. Definir o que o card mostra além do botão da barra (ex.: as suítes Sol, Estrela e Lua com o link de cada uma), para não repetir o mesmo atalho.
- [ ] **Área dos sócios (módulo de reservas):** login com usuário e senha em variável de ambiente da Vercel (nunca no código), formulário "Nova reserva" e Google Agenda da conta central como banco de dados (uma agenda por unidade). Regras e campos no doc 01 do projeto Saira7. Pendências: nomes dos sócios e conta central do Google.
- [ ] **Cores da faixa dentro dos modais (opcional):** abas, filtros e botões seguindo a regra de cores da faixa.
- [ ] **Portfólio de Eventos (em aberto):** a vaga que seria dele ficou para o Airbnb, e a fusão "Localização + Quintal" foi descartada (os dois continuam como cards). As fotos de eventos já aparecem na aba Fotos (filtro "Oca & Eventos"); decidir se o portfólio vira uma aba própria ou fica assim.
- [ ] **Trilha de Navegação (Breadcrumbs):** nomes e o voltar pela trilha já funcionam; falta só melhorar a estilização no estilo *file-explorer*.
- [ ] **Polimento Mobile:** validação de *QA* das abas (O que fazer no Sana, Espaços & Fotos), garantindo conforto nos toques e rolagem suave em smartphones.
