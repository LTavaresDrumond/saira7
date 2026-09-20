import React from 'react';
import { Users, UtensilsCrossed, BookOpen, Sparkles, Flame, CheckCircle2 } from 'lucide-react';
import { sairaData } from '../data/sairaData';

export default function EventsSection() {
  const { events } = sairaData;

  const iconMap = {
    Users: Users,
    UtensilsCrossed: UtensilsCrossed,
    BookOpen: BookOpen,
    Sparkles: Sparkles,
  };

  return (
    <section id="eventos" className="py-20 sm:py-28 bg-saira-forest-dark text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-4 h-4" />
            Espaço para Eventos & Encontros
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Oca Carukango
          </h2>
          <p className="text-stone-300 text-base sm:text-lg mt-4 font-light leading-relaxed">
            Uma estrutura coberta e arejada para acolher até <strong className="text-amber-200 font-semibold">100 convidados</strong> com infraestrutura culinária comercial completa e imersão total na Mata Atlântica.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {events.features.map((feat, idx) => {
            const IconComp = iconMap[feat.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-amber-300/40 transition-all transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center mb-4">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">
                  {feat.title}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner: Kitchen & Buffets */}
        <div className="rounded-3xl bg-gradient-to-r from-stone-900/90 to-saira-forest-dark border border-white/15 p-8 sm:p-12 shadow-elevated">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-amber-300 mb-2">
                <Flame className="w-4 h-4 text-amber-400" />
                Infraestrutura Gastronômica de Apoio
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Estrutura completa para buffets, banquetes e vivências culinárias
              </h3>
              <p className="text-stone-300 text-sm sm:text-base font-light leading-relaxed mb-6">
                Para que seu evento aconteça com tranquilidade, dispomos de <strong>fogão comercial/industrial de alta chama</strong>, fogão a lenha rústico para preparos artesanais, churrasqueira, bancadas e geladeiras espaçosas para acondicionamento de insumos.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-stone-200">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Fogão Industrial
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Fogão a Lenha
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Churrasqueira
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Geladeiras
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Bancadas de Apoio
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Energia Estável
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
              <div className="text-xs uppercase tracking-widest text-stone-400 mb-1">Capacidade de Eventos</div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-amber-300 mb-4">
                100 Pessoas
              </div>
              <a
                href="#cotacao"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-all transform hover:scale-105 shadow-md text-sm"
              >
                Solicitar Cotação para Evento
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
