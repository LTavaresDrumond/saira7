import React from 'react';
import { MessageCircle } from 'lucide-react';
import { sairaData } from './data/sairaData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import AccommodationsSection from './components/AccommodationsSection';
import ConvivenciaSection from './components/ConvivenciaSection';
import EventsSection from './components/EventsSection';
import NatureSection from './components/NatureSection';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-saira-sand text-stone-800 relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <AccommodationsSection />
        <ConvivenciaSection />
        <EventsSection />
        <NatureSection />
        <GallerySection />
        <LocationSection />
        <QuoteForm />
      </main>
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={sairaData.getWhatsAppApiUrl("Olá! Vim pelo site do Sítio Saíra 7 e gostaria de informações sobre datas e reservas.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-3.5 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center gap-2.5 transition-all transform hover:scale-105 group border-2 border-emerald-400/40"
        title="Falar no WhatsApp: +55 (61) 99282-3308"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide">WhatsApp</span>
      </a>
    </div>
  );
}
