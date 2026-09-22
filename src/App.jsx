import React from 'react';
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
    <div className="min-h-screen flex flex-col font-sans bg-saira-sand text-stone-800">
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
    </div>
  );
}
