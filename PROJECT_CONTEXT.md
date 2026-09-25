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
- **Roteamento Interno (State):** O gerenciamento de qual modal está aberto não usa URLs clássicas. É tudo gerido pelo `NavigationContext.jsx` (Context API).

## 📂 3. Mapeamento de Pastas e Arquitetura

### 3.1 Pasta de Mídias
- `/public/images/`: Contém as fotos originais em subpastas organizadas: `casaantiga`, `casanova`, `eventos`, `convivencia`, e raiz para imagens diversas como logotipo e fotos do rio.

### 3.2 Componentes Core (`src/components/`)
- `App.jsx` e `main.jsx`: Ponto de entrada que envolve a aplicação com o provedor de navegação.
- `HeroCanvas.jsx`: O motor visual do site. Renderiza a grade de 6 cards flutuantes.
- `FlipCard.jsx`: O botão/card em si. Responsável pela estética tridimensional, ícones e o hover (que possui um glow branco uniforme).
- `CardModal.jsx`: O contêiner de vidro que expande a informação do card. Ele não possui botões flutuantes de "Voltar/Avançar" nas laterais (para evitar cliques acidentais).
- `NavigationContext.jsx`: Cérebro do estado dos cards.
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

## 🎨 4. Diretrizes e Regras de Design (Mandatório)
Qualquer alteração visual futura deve respeitar estritamente estas leis:
1. **Glassmorphism Cristalino:** Fundo dos modais de vidro devem usar pouquíssima opacidade (ex: 7% a 15%) com blur leve. Deve parecer um "cristal finíssimo" que permite ver o fundo da natureza perfeitamente.
2. **Hover Uniforme:** O *glow* nos cards principais ao passar o mouse deve brilhar nos 4 cantos do card igualmente (overflow não pode estar escondido prejudicando o top).
3. **Imagens > Texto:** Sempre prefira componentes focados em foto e ícones a longos parágrafos explicativos. Se houver blocos de texto lado-a-lado com imagens sem necessidade, elimine-os.

## 🔮 5. Backlog Futuro (O Que Fazer a Seguir)
Quando a inteligência artificial assumir, aqui estão os itens arquitetados e planejados para a próxima iteração do projeto:

- [ ] **Mesclagem "Localização + Quintal":** Em um esforço de otimização da grade, planeja-se integrar a aba "Como Chegar" diretamente no card de "Quintal do Sana", centralizando tudo que é externo ao sítio em um único modal.
- [ ] **Reativar Portfólio de Eventos:** Com o espaço liberado pela fusão acima (mantendo 6 cards no total), reativaremos o card de "Portfólio de Eventos" na tela inicial. Ele será concebido focado estritamente em uma grande galeria de fotos ilustrando casamentos, encontros e retiros passados (sem textos, apenas a energia visual dos eventos).
- [ ] **Trilha de Navegação (Breadcrumbs):** Melhorar a estilização e a clareza da navegação aninhada (ex: Nossos Espaços > Casa Nova) no estilo *file-explorer* no cabeçalho do modal.
- [ ] **Polimento Mobile:** Realizar validação de *QA* das novas abas no card Quintal, garantindo conforto nos toques e rolagem horizontal suave em smartphones.
