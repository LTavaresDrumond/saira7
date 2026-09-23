import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ─── Original Page Components ───────────────────────────────────────
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import AccommodationsSection from './components/AccommodationsSection';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

// ─── V2 Page ────────────────────────────────────────────────────────
import V2Page from './pages/V2Page';

// ─── Original Landing Page ──────────────────────────────────────────
function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-saira-sand text-stone-800">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AccommodationsSection />
        <GallerySection />
        <LocationSection />
        <QuoteForm />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

// ─── App with Router ────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/v2" element={<V2Page />} />
      </Routes>
    </BrowserRouter>
  );
}
