import React, { useState } from 'react';
import { Home, Hotel, Check, Users, Bed, Flame, Waves, ShieldCheck } from 'lucide-react';
import { sairaData } from '../data/sairaData';

export default function AccommodationsSection() {
  const [activeTab, setActiveTab] = useState('rustic');

  const { rusticHouse, annexSuites } = sairaData.accommodations;
  const current = activeTab === 'rustic' ? rusticHouse : annexSuites;

  return (
    <section id="acomodacoes" className="py-20 sm:py-28 bg-saira-sand-dark/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-saira-earth font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3">
            <Bed className="w-4 h-4" />
            Hospedagem por Temporada
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-saira-forest-dark tracking-tight leading-tight">
            Acomodações que abraçam até 23 hóspedes
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-4 font-light">
            Distribuídas harmoniosamente em duas edificações independentes, garantindo conforto para grupos que desejam compartilhar bons momentos sem abrir mão de privacidade.
          </p>

          {/* Interactive Tab Selector */}
          <div className="inline-flex p-1.5 rounded-full bg-stone-200/80 mt-8 border border-stone-300">
            <button
              onClick={() => setActiveTab('rustic')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'rustic'
                  ? 'bg-saira-forest text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <Home className="w-4 h-4" />
              Casa Principal Rústica
            </button>
            <button
              onClick={() => setActiveTab('annex')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'annex'
                  ? 'bg-saira-forest text-white shadow-md'
                  : 'text-stone-700 hover:text-stone-900'
              }`}
            >
              <Hotel className="w-4 h-4" />
              Edifício Anexo de Suítes
            </button>
          </div>
        </div>

        {/* Tab Content Showcase */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-card border border-stone-200 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image Side */}
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[420px]">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating Pill on image */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-saira-earth text-white mb-2">
                  {current.capacity}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  {current.title}
                </h3>
              </div>
            </div>

            {/* Content & Details Side */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest text-saira-earth font-bold block mb-1">
                  Detalhes do Espaço
                </span>
                <h4 className="font-serif text-2xl font-bold text-stone-900 mb-3">
                  {current.subtitle}
                </h4>
                
                {/* List of Details */}
                <ul className="space-y-3 mt-6">
                  {current.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-700 text-sm sm:text-base">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Feature Tags */}
                <div className="pt-6 mt-6 border-t border-stone-100 flex flex-wrap gap-2">
                  {current.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-saira-sand text-saira-forest-dark text-xs font-medium border border-stone-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-500 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Privacidade total para seu grupo fechado
                </div>
                <a
                  href="#cotacao"
                  className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-saira-forest hover:bg-saira-forest-light text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
                >
                  Consultar Disponibilidade
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Extra Capacity Notice */}
        <div className="mt-8 text-center text-xs sm:text-sm text-stone-600 bg-amber-50/70 border border-amber-200/60 rounded-2xl p-4 max-w-2xl mx-auto">
          🏕️ <strong>Precisa de mais vagas?</strong> Além das camas confortáveis para 23 pessoas, dispomos de sofás aconchegantes e amplo espaço gramado para montagem de barracas de camping.
        </div>

      </div>
    </section>
  );
}
