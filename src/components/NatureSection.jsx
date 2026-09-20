import React from 'react';
import { Waves, Trees, Sprout, Tent } from 'lucide-react';
import { sairaData } from '../data/sairaData';

export default function NatureSection() {
  const { nature } = sairaData;

  const icons = [Waves, Trees, Sprout, Tent];

  return (
    <section id="natureza" className="py-20 sm:py-28 bg-saira-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-saira-water font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3">
            <Waves className="w-4 h-4" />
            Ecoturismo & Conexão Natural
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-saira-forest-dark tracking-tight leading-tight">
            {nature.title}
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-4 font-light">
            {nature.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {nature.items.map((item, idx) => {
            const Icon = icons[idx] || Trees;
            return (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-card border border-stone-200/80 hover:shadow-elevated transition-all flex flex-col"
              >
                {/* Image Container with zoom */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  
                  {/* Floating Icon & Title on image */}
                  <div className="absolute bottom-5 left-6 right-6 text-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-200 flex-shrink-0 border border-white/30">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6 sm:p-7 flex-1 flex items-center">
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* River Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-sky-900 to-saira-forest text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-sky-200 flex-shrink-0">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold">Banho de rio revigorante na entrada do sítio</h4>
              <p className="text-xs sm:text-sm text-stone-200 mt-0.5">Águas límpidas vindas direto das nascentes das montanhas do Sana.</p>
            </div>
          </div>
          <a
            href="#cotacao"
            className="px-6 py-3 rounded-full bg-white text-saira-forest font-semibold text-xs sm:text-sm hover:bg-stone-100 transition-colors shadow-sm flex-shrink-0"
          >
            Conferir Temporadas
          </a>
        </div>

      </div>
    </section>
  );
}
