// CSS das ferramentas da equipe (src/tools/*): mesmo tema do site, mas só com as classes
// usadas nelas. Entra pelo @config de src/tools/ferramentas.css, importado dentro de cada
// ferramenta, então vai num arquivo CSS separado que a vitrine nunca baixa.
import base from './tailwind.config.js';

export default {
  ...base,
  content: ['./src/tools/**/*.{js,jsx}'],
  corePlugins: { ...(base.corePlugins || {}), preflight: false }, // a base já vem do CSS do site
};
