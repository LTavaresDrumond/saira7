# Kit de marca — Sítio Saíra Sete Cores (identidade visual v1)

Arquivos oficiais da identidade visual, definidos no projeto **"Saira7" no Claude** (doc 04 Identidade visual).
Estes arquivos **não** fazem parte do site publicado (o site usa `public/brand/`); servem para posts, Instagram, Airbnb e materiais.

## Paleta
- **7 cores da saíra (acentos, ~10%):** Azul `#0261B3` · Petróleo `#027483` · Turquesa `#0390A1` · Verde `#6EAA40` · Amarelo `#FBAC02` · Laranja `#E35E0C` · Roxo `#563C7E`
- **Base (~90%):** Areia `#F7F3EA` · Noite `#02202C`
- **Fontes:** Fraunces (títulos) · DM Sans (textos, chapéus em caixa alta espaçada)

## `logo/` (versão v4, 26/11/2026: pássaro pousado no galho)
Selo: pássaro pousado no centro, com um círculo fino **por trás** dele (asa, bico e rabo passam por cima, e a linha para antes de tocar o pássaro). O **galho nasce da própria linha do círculo**: no lado direito a linha vira o contorno do galho (borda de cima e de baixo), que passa sob os pés e afina na ponta, perto do rabo. Texto em volta em **Fraunces itálico**.
Em cima: **"Saíra Sete Cores"** (por extenso) · embaixo: **"Agroecologia – Cultura – Educação – Saúde"**.
`emblema-circulo-galho.svg` = círculo + galho + pássaro em vetor (sem o texto).

| Arquivo | Uso |
|---|---|
| `selo-claro.png` | Fundo branco, texto Noite, pássaro colorido |
| `selo-areia.png` | Fundo Areia, texto Noite, pássaro colorido |
| `selo-escuro.png` | Fundo Noite, texto Areia, pássaro colorido com contorno Areia |
| `selo-colorido-sem-fundo.png` | Sem fundo, texto Noite, pássaro colorido (para fundos claros quaisquer) |
| `selo-noite.png` | Sem fundo, tudo em Noite (uma cor só) |
| `selo-areia-traco.png` | Sem fundo, tudo em Areia (uma cor só) — **sobre fotos** |
| `passaro-colorido.svg/.png` | Pássaro pousado colorido, contorno Noite (fundos claros) |
| `passaro-colorido-contorno-areia.svg/.png` | Pássaro colorido, contorno Areia (fundos escuros) |
| `passaro-traco-areia.svg/.png` | Pássaro em traço claro — **sobre fotos** (modelo A, navbar do site) |
| `passaro-traco-noite.svg/.png` | Pássaro em traço escuro — fundos claros |
| `previa-versoes.png` | Folha com todas as versões do selo |

## `instagram/`
- `perfil-passaro-areia.png` — foto de perfil (pássaro sobre Areia; mais legível no círculo pequeno)
- `perfil-selo-circular.png` — foto de perfil alternativa (selo)
- `destaque-*.png` — capas dos destaques (1080×1920): Hospedagem (azul), Cursos (verde), Retiros (petróleo), Eventos (laranja), Como chegar (roxo)

## `templates/` (posts 1080×1350)
| Modelo | Quando usar |
|---|---|
| `modelo-a` (**padrão**) | Foto real inteira + degradê Noite + título Fraunces em Areia + pássaro em traço + faixa |
| `modelo-sem-foto` | Disponibilidade, avisos: fundo Areia, título Noite, pássaro colorido |
| `modelo-b` | Reserva, quando a foto não tem "respiro": foto em cima + faixa Areia com texto |

`.jpg` = prévia pronta · `.html` + `base.css` = fonte editável (abrir no navegador; as fotos vêm de `public/images/`).

Regras: texto sobre foto sempre em Areia; sem desfoque nem tarja atrás do texto; nada com cara de IA.
