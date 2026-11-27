import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Sem o "pré-carregador" de módulos do Vite: a vitrine não leva código extra por causa
    // das ferramentas da equipe carregadas sob demanda (ex.: /gerador).
    modulePreload: false,
  },
  server: {
    port: 5173,
    host: true,
  },
});
