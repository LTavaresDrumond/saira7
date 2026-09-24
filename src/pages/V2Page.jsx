import React from 'react';
import { V2NavigationProvider } from '../components/v2/V2NavigationContext';
import V2Navbar from '../components/v2/V2Navbar';
import HeroCanvas from '../components/v2/HeroCanvas';
import V2Footer from '../components/v2/V2Footer';

export default function V2Page() {
  return (
    <V2NavigationProvider>
      <div className="min-h-screen flex flex-col font-sans bg-stone-950 text-white">
        <V2Navbar />
        <main className="flex-grow">
          <HeroCanvas />
        </main>
        <V2Footer />
      </div>
    </V2NavigationProvider>
  );
}
