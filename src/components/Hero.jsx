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
    <header className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Parallax-feel & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/meio-sitio.jpg"
          alt="Vista panorâmica do Sítio Saíra Sete Cores no Sana"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.82]"
        />
        {/* Gradients for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-saira-sand via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-saira-forest-dark/30 mix-blend-multiply"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-8 sm:mt-12">
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-amber-200 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-sm animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Cabeceira do Sana • Macaé (RJ)
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] drop-shadow-md mb-6">
          Seu refúgio de <span className="text-amber-200 italic font-normal">Mata Atlântica</span> e águas cristalinas na serra
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-stone-200 font-light leading-relaxed mb-10 drop-shadow">
          O Rio Macaé na entrada com piscina natural, a imponente <strong className="font-semibold text-white">Oca Carukango</strong> para eventos de até 100 convidados e hospedagem rústica acolhedora para até 23 pessoas.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#cotacao"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white bg-saira-forest hover:bg-saira-forest-light shadow-elevated transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2.5 text-base border border-emerald-400/30"
          >
            <Calendar className="w-5 h-5 text-emerald-300" />
            Solicitar Cotação & Datas
          </a>
          <a
            href="#acomodacoes"
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 transition-all transform hover:-translate-y-1 text-base shadow-sm"
          >
            Explorar o Sítio
          </a>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto text-left">
          {sairaData.highlights.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Trees;
            return (
              <div
                key={idx}
                className="glass-card-dark p-4 sm:p-5 rounded-2xl border border-white/15 text-white shadow-card hover:border-amber-300/40 transition-all transform hover:-translate-y-1"
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-3 text-amber-200">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-amber-100/90 mt-0.5">
                  {item.label}
                </div>
                <div className="text-[11px] text-stone-300 font-light mt-1">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-stone-300 flex flex-col items-center gap-1 opacity-75 hover:opacity-100 transition-opacity">
        <span className="text-[11px] uppercase tracking-widest font-medium text-stone-400">Descer</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </header>
  );
}
