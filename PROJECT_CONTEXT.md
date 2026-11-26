# Contexto do Projeto: Sítio Saíra Sete Cores (Saíra 7)

Este documento tem como objetivo fornecer todo o contexto arquitetural, regras de design e histórico de decisões do projeto para que qualquer IA (como o Antigravity) possa assumir o desenvolvimento em outra máquina de forma contínua e perfeitamente alinhada com a visão do usuário.

## 🎯 1. A Ideia e Conceito do Projeto
O Sítio Saíra Sete Cores (localizado na Cabeceira do Sana, Macaé - RJ) possui uma plataforma web focada em conversão para hospedagem e eventos. 
- **Experiência de Usuário (Single Screen / Flipper):** Abandonamos o layout tradicional de rolagem longa (landing page clássica). A interface principal (`HeroCanvas.jsx`) é uma tela fixa focada no "visual first", onde o usuário interage através de 6 **cards tridimensionais (FlipCards)**. Ao clicar, o card abre um modal imersivo (`CardModal.jsx`) sobreposto à imagem de fundo.
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
- `HeroCanvas.jsx`: O motor visual do site. Renderiza a grade de 6 cards flutuantes.
- `FlipCard.jsx`: O botão/card em si. Responsável pela estética tridimensional, ícones e o hover (que possui um glow branco uniforme).
- `CardModal.jsx`: O contêiner de vidro que expande a informação do card. Ele não possui botões flutuantes de "Voltar/Avançar" nas laterais (para evitar cliques acidentais).
- `NavigationContext.jsx`: Cérebro do estado dos cards e dos links diretos (`#orcamento` etc.).
- `HubLinks.jsx`: Canais de captação abaixo do título, para o site funcionar como link da bio do Instagram. O site é um auxiliar de divulgação: **Airbnb e Instagram são os canais principais** (círculo cheio: Airbnb em Laranja fogo, Instagram em Roxo ipê) e o **WhatsApp é o contato direto** (círculo de vidro em Verde mata). Textos, ordem e destaque (`primary`) em `sairaData.hub`; cores em `HUB_COLORS` (`stripeColor.js`). O Airbnb aparece sozinho quando `contact.airbnbUrl` for preenchido.
  - **Regra: nada se repete.** O hub só tem canais externos; o que já é card (Como Chegar, Orçamento…) não entra nele.
- `Navbar.jsx` / `Footer.jsx`: Controles de menu globais. Foram refatorados para *abrir os modais* programaticamente através do Context. O Footer hospeda a antiga seção "Sobre Nós", convertida em pequenos *badges*.

### 3.3 Componentes de Conteúdo (`src/components/content/`)
São os componentes renderizados internamente pelos modais:
- `SpacesContent.jsx`: Nossas Acomodações. (Sub-cards de Casa Antiga, Casa Nova, Oca e Convivência). *Nota: Casa Antiga e Casa Nova não possuem mais blocos de texto gigantes, focando 100% no visual das fotos.*
- `GalleryContent.jsx`: Galeria de fotos mista (estilo Masonry/Grid).
- `NatureContent.jsx`: O card "Natureza & Rio" focado no poço do rio na entrada do sítio.
- `QuintalContent.jsx`: Turismo e conveniências locais. Utiliza um sistema de "Abas" para separar "Ecoturismo" de "Conveniências" (Mercados locais).
- `LocationContent.jsx`: Integração com mapas e guia de como chegar.
- `QuoteContent.jsx`: Formulário de cotação e botões de contato.

### 3.4 Data Source
- `src/data/sairaData.js`: Centralização de copywriting, parâmetros de contato (link do WhatsApp), descrições de quartos. Facilita manutenções de conteúdo sem tocar na lógica React.

### 3.5 Links diretos para os cards
Cada card tem um endereço próprio, para usar em stories, posts e respostas no WhatsApp:

| Card | Endereço |
|---|---|
| Nossos Espaços | `saira7.vercel.app/#espacos` |
| Galeria | `saira7.vercel.app/#galeria` |
| Natureza & Rio | `saira7.vercel.app/#natureza` |
| Como Chegar | `saira7.vercel.app/#como-chegar` (também `#localizacao`) |
| Quintal do Sana | `saira7.vercel.app/#quintal` |
| Orçamento | `saira7.vercel.app/#orcamento` (também `#cotacao`) |

- Acento e maiúscula não importam (`#Orçamento` funciona).
- Ao abrir um card pelo site, o endereço muda para o `#` dele; o botão "voltar" do celular fecha o modal em vez de sair do site.
- A lista fica em `CARD_HASHES` (`NavigationContext.jsx`). Card novo (ex.: Portfólio) precisa entrar lá.

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
- `passaro-traco-areia.svg` / `passaro-traco-noite.svg`: pássaro em traço, usado na navbar (Areia sobre a foto e no tema escuro; Noite no tema claro).
- `passaro.svg` (colorido, contorno Noite) e `passaro-contorno-areia.svg` (contorno Areia, para fundos escuros). `passaro.svg` também é o favicon.
- `selo-escuro.png` / `selo-claro.png`: selo circular "Sítio Ecológico Saíra Sete Cores", usado no rodapé conforme o tema.

### Faixa das 7 cores
- Assinatura da marca (a mesma dos posts do Instagram): componente `SevenStripe` / classe `.stripe-7`, no topo da navbar e no fim do rodapé.

### Tema claro / escuro
- `ThemeContext.jsx` + atributo `data-theme` no `<html>`. O tema inicial é definido por um script no `index.html` (escolha salva em `localStorage['saira-theme']` ou preferência do sistema). Botão sol/lua na navbar.
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

## 🔮 5. Backlog Futuro (O Que Fazer a Seguir)
Quando a inteligência artificial assumir, aqui estão os itens arquitetados e planejados para a próxima iteração do projeto:

- [x] **Hub da bio do Instagram:** canais (Airbnb, Instagram, WhatsApp) abaixo do título, links diretos por card e prévia do link corrigida (nov/2026).
- [ ] **Fotos mais leves:** `public/images` tem ~42 MB (18 fotos acima de 1 MB). Gerar versões WebP no tamanho de exibição.

- [ ] **Mesclagem "Localização + Quintal":** Em um esforço de otimização da grade, planeja-se integrar a aba "Como Chegar" diretamente no card de "Quintal do Sana", centralizando tudo que é externo ao sítio em um único modal.
- [ ] **Reativar Portfólio de Eventos:** Com o espaço liberado pela fusão acima (mantendo 6 cards no total), reativaremos o card de "Portfólio de Eventos" na tela inicial. Ele será concebido focado estritamente em uma grande galeria de fotos ilustrando casamentos, encontros e retiros passados (sem textos, apenas a energia visual dos eventos).
- [ ] **Trilha de Navegação (Breadcrumbs):** Melhorar a estilização e a clareza da navegação aninhada (ex: Nossos Espaços > Casa Nova) no estilo *file-explorer* no cabeçalho do modal.
- [ ] **Polimento Mobile:** Realizar validação de *QA* das novas abas no card Quintal, garantindo conforto nos toques e rolagem horizontal suave em smartphones.
