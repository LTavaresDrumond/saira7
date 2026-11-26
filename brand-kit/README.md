# Kit de marca — Sítio Saíra Sete Cores (identidade visual v1 · logo final de 26/11/2026)

Arquivos oficiais da identidade visual, definidos no projeto **"Saira7" no Claude** (doc 04 Identidade visual).
Estes arquivos **não** fazem parte do site publicado (o site usa `public/brand/`); servem para posts, Instagram, Airbnb e materiais.

## Paleta
- **7 cores da saíra (acentos, ~10%):** Azul `#0261B3` · Petróleo `#027483` · Turquesa `#0390A1` · Verde `#6EAA40` · Amarelo `#FBAC02` · Laranja `#E35E0C` · Roxo `#563C7E`
- **Base (~90%):** Areia `#F7F3EA` · Noite `#02202C`
- **Fontes:** Fraunces (títulos) · DM Sans (textos, chapéus em caixa alta espaçada)

## `logo/` (versão final, 26/11/2026)
**Logo principal:** a versão feita pelo sócio no Canva (`logo-original-canva.png`).
- Pássaro pousado no galho, com um círculo fino por trás.
- Em cima: **"Saíra Sete Cores"**.
- Embaixo: **"Agroecologia • Educação • Cultura • Saúde"**.

As versões foram geradas a partir desse arquivo (609×410 px) e ampliadas para 1540×1540. **Para gráfica ou peças grandes, exportar do Canva em alta resolução.**

| Arquivo | Versão |
|---|---|
| `logo-principal.png` | **Logo principal (versão normal)**, sem fundo, linhas escuras |
| `logo-instagram.png` | **Versão Instagram:** 1080×1080, fundo branco, cabe no círculo da foto de perfil |
| `logo-noite.png` | **Versão Noite:** fundo `#02202C`; texto, círculo e galho em Areia; pássaro intacto com filete Areia |
| `logo-areia.png` | **Versão Areia:** fundo `#F7F3EA` |
| `logo-branco.png` | Versão normal sobre fundo branco |
| `logo-noite-sem-fundo.png` | Versão Noite sem fundo (fundos escuros e fotos) |
| `logo-original-canva.png` | Arquivo enviado pelo sócio (referência) |

### Versão minimalista (posts): só o pássaro, sem texto nem círculo
**Em uso:** o pássaro inicial, voando, sem galho.
| Arquivo | Uso |
|---|---|
| `passaro-colorido.svg/.png` | Colorido, contorno Noite (fundos claros) |
| `passaro-colorido-contorno-areia.svg/.png` | Colorido, contorno Areia (fundos escuros) |
| `passaro-traco-areia.svg/.png` | Traço claro: **sobre fotos** (modelos de post, barra do topo do site) |
| `passaro-traco-noite.svg/.png` | Traço escuro: fundos claros |

**Em avaliação (`propostas-minimalista/`):** feitas a partir do pássaro da logo final, preservado como está, com os pés e o galho. Ver `comparacao.png`.
- **Proposta 1:** pássaro, pés e só a linha do galho.
- **Proposta 2:** pássaro, pés e o galho completo da logo (linhas e folhas), sem o círculo e sem texto.

Cada proposta tem quatro arquivos:
- `-cor.png`: fundos claros.
- `-foto.png`: sobre fotos, com filete Areia.
- `-traco-areia.svg/.png`: traço de uma cor só, sobre fotos.
- `-traco-noite.svg/.png`: traço de uma cor só, fundos claros.

### `antigas/`: versões desatualizadas
Selos testados entre 25 e 26/11 (v2, v3, v4 e variações) e o pássaro pousado v4. Todos estão carimbados com **DESATUALIZADA** e não devem ser usados; ficam só como histórico.

## `instagram/`
- `perfil-passaro-areia.png`: foto de perfil só com o pássaro sobre Areia (mais legível no círculo pequeno). A outra opção é `logo/logo-instagram.png`.
- `destaque-*.png`: capas dos destaques (1080×1920): Hospedagem (azul), Cursos (verde), Retiros (petróleo), Eventos (laranja), Como chegar (roxo).

## `templates/` (posts 1080×1350)
| Modelo | Quando usar |
|---|---|
| `modelo-a` (**padrão**) | Foto real inteira + degradê Noite + título Fraunces em Areia + pássaro em traço + faixa |
| `modelo-sem-foto` | Disponibilidade, avisos: fundo Areia, título Noite, pássaro colorido |
| `modelo-b` | Reserva, quando a foto não tem "respiro": foto em cima + faixa Areia com texto |

`.jpg` = prévia pronta · `.html` + `base.css` = fonte editável (abrir no navegador; as fotos vêm de `public/images/`).

Regras: texto sobre foto sempre em Areia; sem desfoque nem tarja atrás do texto; nada com cara de IA.
