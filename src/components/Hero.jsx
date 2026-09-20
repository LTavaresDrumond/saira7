import React from 'react';
import { Users, Bed, Waves, Trees, ArrowDown, Calendar } from 'lucide-react';
import { sairaData } from '../data/sairaData';

export default function Hero() {
  const iconMap = {
    Users: Users,
    Bed: Bed,
    Waves: Waves,
    Trees: Trees,
  };

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75"></div>
      </div>

      {/* Top Spacer */}
      <div className="relative z-10"></div>

      {/* Minimalist Central Hero Content: Spacious & Unobstructed */}
      <div className="relative z-10 max-w-4xl mx-auto text-center my-auto py-8 sm:py-16">
        {/* Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/25 text-amber-200 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Cabeceira do Sana • Macaé (RJ)
        </div>

        {/* Hero Title: Exactly 'Aluguel por temporada' */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none drop-shadow-2xl mb-8">
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

      {/* Slim & Ultra-Transparent Glass Metric Cards: Allows Full Photo Visibility */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5">
          {sairaData.highlights.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Trees;
            return (
              <div
                key={idx}
                className="bg-black/25 hover:bg-black/40 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/20 hover:border-amber-300/50 text-white transition-all transform hover:-translate-y-0.5 shadow-lg flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                    {item.value}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center text-amber-200">
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-amber-200 leading-tight">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-stone-300 font-light truncate mt-0.5">
                    {item.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-6 flex flex-col items-center gap-1 text-stone-300 opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[10px] uppercase tracking-widest font-medium text-stone-300">Rolar para explorar</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>
    </header>
  );
}
