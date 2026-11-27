import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroCanvas from './components/HeroCanvas';
import Footer from './components/Footer';
import { NavigationProvider } from './components/NavigationContext';
import { ThemeProvider } from './components/ThemeContext';

// Ferramentas da equipe: carregadas só quando alguém abre a rota (não pesam a vitrine)
const PostGeneratorPage = lazy(() => import('./tools/post-generator/PostGeneratorPage'));

export default function App() {
  return (
    <ThemeProvider>
    <NavigationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div className="min-h-screen flex flex-col font-sans bg-stone-950 text-white">
              <Navbar />
              <main className="flex-grow">
                <HeroCanvas />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/gerador" element={
            <Suspense fallback={<div className="min-h-screen bg-stone-950" />}>
              <PostGeneratorPage />
            </Suspense>
          } />
          {/* Endereço desconhecido: volta para a vitrine em vez de mostrar tela vazia */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </NavigationProvider>
    </ThemeProvider>
  );
}
