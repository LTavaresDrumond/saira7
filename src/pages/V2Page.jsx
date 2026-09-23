import React from 'react';
import Navbar from '../components/Navbar';
import HeroCanvas from '../components/v2/HeroCanvas';
import Footer from '../components/Footer';

export default function V2Page() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-stone-950 text-white">
      <Navbar />
      <main className="flex-grow">
        <HeroCanvas />
      </main>
      <Footer />
    </div>
  );
}
