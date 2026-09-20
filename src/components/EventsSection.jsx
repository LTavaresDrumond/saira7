import React, { useState } from 'react';
import { Users, UtensilsCrossed, BookOpen, Sparkles, Flame, CheckCircle2, Eye, X } from 'lucide-react';
import { sairaData } from '../data/sairaData';

export default function EventsSection() {
  const { events } = sairaData;
  const [selectedEventPhoto, setSelectedEventPhoto] = useState(null);

  const iconMap = {
    Users: Users,
    UtensilsCrossed: UtensilsCrossed,
    BookOpen: BookOpen,
    Sparkles: Sparkles,
  };

  return (
    <section id="eventos" className="py-20 sm:py-28 text-white relative overflow-hidden bg-stone-950">
      {/* Background Image of the Oca Carukango */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/eventos/oca1.jpg"
          alt="Oca Carukango no Sítio Saíra 7"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-black/80 to-stone-950/95"></div>
      </div>

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

        {/* Real Photos of the Oca Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-200 flex items-center gap-2">
              <span>Registros Reais da Oca & Eventos</span>
            </h3>
            <span className="text-xs text-stone-400">Clique na foto para ampliar</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {events.photos.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedEventPhoto(item)}
                className="group relative h-40 sm:h-52 rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-card bg-stone-900"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                  <span className="text-[11px] font-semibold text-white leading-tight">
                    {item.caption}
                  </span>
                  <span className="text-[9px] text-amber-300 mt-0.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3 h-3" /> Ver foto
                  </span>
                </div>
              </div>
            ))}
          </div>
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

      {/* Lightbox Modal for Event Photos */}
      {selectedEventPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <button
            onClick={() => setSelectedEventPhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={selectedEventPhoto.src}
              alt={selectedEventPhoto.caption}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <h4 className="font-serif text-xl font-bold text-white mt-4">
              {selectedEventPhoto.caption}
            </h4>
          </div>
        </div>
      )}
    </section>
  );
}
