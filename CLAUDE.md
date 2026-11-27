# CLAUDE.md — Site do Sítio Saíra Sete Cores

Instruções para o Claude Code neste repositório. Leia também o `PROJECT_CONTEXT.md` (arquitetura, identidade visual v1 e regras de design obrigatórias).

## O projeto
- Site do **Sítio Ecológico Saíra Sete Cores** (Cabeceira do Sana, Macaé – RJ): hospedagem, eventos na Oca Carukango, cursos e retiros.
- Produção: https://saira7.vercel.app (Vercel, deploy automático a cada push na `main`; cada ramo/PR gera uma prévia protegida por login da Vercel).
- A base de conhecimento do sítio (acomodações, preços, regras, identidade visual, backlog) fica no projeto **"Saira7" no Claude**. Decisões de negócio vêm de lá; este repositório cuida só do site.

## Stack
React 18 + Vite 6 + Tailwind CSS 3 + lucide-react. Sem backend por enquanto.

```bash
npm ci          # instalar
npm run dev     # desenvolvimento
npm run build   # rodar SEMPRE antes de commitar
```

## Regras de trabalho
- **Celular primeiro:** a maioria dos visitantes vem do Instagram, no celular. Confira toda mudança visual em 320, 360, 390 e 430 px de largura, além do computador, nos temas claro e escuro.
- **Texto sobre foto** precisa estar dentro de um elemento com `force-dark`. Modais usam `theme-auto`. Detalhes no `PROJECT_CONTEXT.md`.
- **Cores:** use as classes do tema (`white`, `stone-*`, `amber-*`, `emerald-*`, que viram variáveis CSS) ou as fixas `saira-*`. Não use hex soltos de outras paletas. As cores dos cards ficam em `CARD_COLORS` (`src/components/stripeColor.js`).
- **Fotos:** use sempre o componente `<Photo>` (não `<img>`) e, ao incluir ou trocar uma foto, rode `python3 scripts/otimizar-fotos.py` para gerar as versões WebP.
- **Conteúdo** (textos, contato, fotos) fica em `src/data/sairaData.js` — inclusive os nomes dos cards (`cards`) e a ordem dos canais da barra (`channels`).
- **Nada se repete** na mesma tela (regra 4 do `PROJECT_CONTEXT.md`): o que é card não vira botão extra, os canais ficam só na barra do topo e o nome do sítio por extenso fica só no título do hero.
- **Segredos nunca no código** (o repositório é público). Senhas e chaves vão em variáveis de ambiente da Vercel.
- **Fluxo:** mudanças pequenas e pedidas explicitamente podem ir direto para a `main`. Mudanças maiores: ramo + pull request + prévia da Vercel para aprovação no celular.
- Mensagens de commit em português, no padrão `tipo(escopo): descrição` (feat, fix, style, docs, refactor).
- Ao terminar, explique o que mudou em linguagem simples e atualize o `PROJECT_CONTEXT.md` se a arquitetura ou as regras mudarem.

## Backlog do site (resumo; o completo está no doc "01 Backlog" do projeto Saira7)

**Feito**
- ✅ Hub da bio do Instagram (PR #2, nov/2026): canais de captação, cards compactos no celular, links diretos `#reservar` etc. e prévia do link no WhatsApp (`public/og.jpg`).
- ✅ Cards com nomes diretos e barra nova (PR #3, nov/2026): Espaços & Fotos (Galeria virou aba), Natureza & Rio, Localização, O que fazer no Sana, Reservar; barra com o pássaro (sem o nome) e os canais (`Channels.jsx`), no celular e no computador; links e rodapé em branco, sem dourado; tema dentro do menu no celular, com a barra sólida enquanto o menu está aberto.

- ✅ Fotos mais leves (PR #4, nov/2026): WebP de 800 e 1600 px (`scripts/otimizar-fotos.py`) entregues pelo componente `Photo`.

**A fazer (ordem sugerida)**
1. Card do Airbnb na 6ª vaga da grade, quando houver o link (preencher `sairaData.contact.airbnbUrl`; o botão da barra aparece sozinho). Card novo precisa entrar em `sairaData.cards`, `CARD_HASHES` (link direto) e `CARD_COLORS`.
2. Área dos sócios (módulo de reservas) com Google Agenda como banco de dados. Ver doc 01 do projeto Saira7. **Pendências para começar:** nomes dos sócios e conta central do Google.
3. Opcional: regra de cores da faixa também dentro dos modais.
4. Em aberto: Portfólio de Eventos (a vaga ficou para o Airbnb; as fotos de eventos estão na aba Fotos).
