import React from 'react';
import { Calendar, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col justify-between pt-28 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with High Visibility & Subtle Ambient Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/meio-sitio.jpg"
          alt="Vista panorâmica do Sítio Saíra Sete Cores no Sana"
          className="w-full h-full object-cover object-center scale-100 filter brightness-[0.88] contrast-[1.02]"
        />
        {/* Soft gradient only at edges to ensure full visibility of the landscape */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
      </div>

      {/* Top Spacer */}
      <div className="relative z-10"></div>

      {/* Minimalist Central Hero Content: Spacious & Clean */}
      <div className="relative z-10 max-w-4xl mx-auto text-center my-auto py-8 sm:py-14">
        {/* Hero Title: 'Aluguel por temporada' (refined & smaller) */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight drop-shadow-2xl mb-6">
          Aluguel por temporada
        </h1>

        {/* CTA Buttons with sleek glassmorphism */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <a
            href="#cotacao"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white bg-saira-forest/90 hover:bg-saira-forest backdrop-blur-md border border-emerald-400/40 shadow-elevated transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 text-sm sm:text-base"
          >
            <Calendar className="w-4 h-4 text-emerald-300" />
            Solicitar Cotação & Datas
          </a>
          <a
            href="#acomodacoes"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-white bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/30 transition-all transform hover:-translate-y-0.5 text-sm sm:text-base shadow-sm"
          >
            Conhecer o Sítio
          </a>
        </div>
      </div>

      {/* Bottom Hero Text: Centered, clean, high-contrast and unobstructed */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center pb-2">
        <p className="text-stone-100 text-base sm:text-xl md:text-2xl font-serif tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] leading-relaxed">
          Recebemos eventos de <span className="text-amber-300 font-semibold">até 100 pessoas</span> e hospedamos <span className="text-amber-300 font-semibold">até 23 pessoas em camas</span>.
        </p>

        {/* Scroll Down Indicator */}
        <div className="mt-5 flex flex-col items-center gap-1 text-stone-300/80 hover:text-white transition-opacity">
          <span className="text-[10px] uppercase tracking-widest font-medium">Rolar para explorar</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>
    </header>
  );
}
