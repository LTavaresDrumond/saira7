import React from 'react';
import { Coffee, Flame, Sprout, TreePine } from 'lucide-react';
import { sairaData } from '../data/sairaData';

export default function ConvivenciaSection() {
  const { convivencia } = sairaData;

  const icons = [Flame, TreePine, Sprout];

  return (
    <section className="py-20 sm:py-24 bg-saira-sand border-y border-stone-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-saira-earth font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3">
            <Coffee className="w-4 h-4" />
            Convivência & Gastronomia
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-saira-forest-dark tracking-tight leading-tight">
            {convivencia.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3 font-light">
            {convivencia.subtitle}
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {convivencia.items.map((item, idx) => {
            const IconComp = icons[idx] || Coffee;
            return (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-card border border-stone-200/80 hover:shadow-elevated transition-all flex flex-col"
              >
                <div className="relative h-60 sm:h-64 overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-5 right-5 text-white flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-300 flex-shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex items-center">
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
