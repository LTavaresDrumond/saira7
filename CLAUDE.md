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
- **Conteúdo** (textos, contato, fotos) fica em `src/data/sairaData.js`.
- **Segredos nunca no código** (o repositório é público). Senhas e chaves vão em variáveis de ambiente da Vercel.
- **Fluxo:** mudanças pequenas e pedidas explicitamente podem ir direto para a `main`. Mudanças maiores: ramo + pull request + prévia da Vercel para aprovação no celular.
- Mensagens de commit em português, no padrão `tipo(escopo): descrição` (feat, fix, style, docs, refactor).
- Ao terminar, explique o que mudou em linguagem simples e atualize o `PROJECT_CONTEXT.md` se a arquitetura ou as regras mudarem.

## Backlog do site (resumo; o completo está no doc "01 Backlog" do projeto Saira7)
1. ~~Botões de "hub" para o site funcionar como link da bio do Instagram.~~ Feito (nov/2026): `HubLinks.jsx` (só canais: Airbnb e Instagram em destaque, WhatsApp para contato; nada que já seja card) + links diretos `#orcamento` etc. Falta só o link do Airbnb em `sairaData.contact.airbnbUrl`.
2. Opcional: regra de cores da faixa também dentro dos modais.
3. Reativar "Portfólio de Eventos" e unir "Como Chegar" ao "Quintal do Sana".
4. Área dos sócios (módulo de reservas) com Google Agenda como banco de dados. Ver doc 01 do projeto Saira7.
