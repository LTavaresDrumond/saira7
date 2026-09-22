import React from 'react';
import { Sparkles, HeartHandshake, Compass, GraduationCap, Palette, Leaf, Users } from 'lucide-react';

export default function AboutSection() {
  const offerings = [
    {
      icon: Users,
      title: 'Hospedagem para Grupos',
      desc: 'Até 23 pessoas em camas, com espaço adicional para camping.',
      color: 'saira-forest',
    },
    {
      icon: GraduationCap,
      title: 'Escola de Agroecologia',
      desc: 'Educação ambiental integrada à natureza com vivências práticas.',
      color: 'saira-earth',
    },
    {
      icon: Sparkles,
      title: 'Eventos, Retiros e Casamentos',
      desc: 'Na Oca Carukango, para até 100 pessoas com infraestrutura completa.',
      color: 'amber-600',
    },
    {
      icon: Leaf,
      title: 'Educação com a Natureza',
      desc: 'Cursos de permacultura, botânica e vivências ecológicas.',
      color: 'emerald-600',
    },
    {
      icon: Palette,
      title: 'Arte como Metodologia',
      desc: 'Oficinas criativas e artísticas integradas ao ambiente natural.',
      color: 'sky-600',
    },
    {
      icon: Compass,
      title: 'Ecoturismo & Trilhas',
      desc: 'Fácil acesso às trilhas, cachoeiras e atrativos da região do Sana.',
      color: 'saira-water',
    },
  ];

  return (
    <section id="sobre" className="py-10 sm:py-14 bg-saira-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Visual Showcase (Images) */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-elevated border-4 border-white">
              <img
                src="/images/entrada.jpg"
                alt="Chegada ao Sítio Saíra Sete Cores no Sana"
                className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Overlapping Secondary Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 z-20 w-48 sm:w-64 rounded-2xl overflow-hidden shadow-card border-4 border-white hidden sm:block">
              <img
                src="/images/chafariz.jpg"
                alt="Jardim e chafariz do sítio"
                className="w-full h-36 sm:h-44 object-cover"
              />
              <div className="bg-saira-forest-dark text-white p-3 text-center">
                <span className="text-xs uppercase tracking-wider font-semibold text-amber-200">
                  Ar Puro da Serra
                </span>
              </div>
            </div>

            {/* Decorative Background Blob */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-saira-earth/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Text & Narrative Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-saira-earth font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3">
              <Sparkles className="w-4 h-4 text-saira-earth" />
              Sobre Nós
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-saira-forest-dark tracking-tight leading-tight mb-6">
              Onde o tempo desacelera e a natureza reconecta
            </h2>

            {/* Offerings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-stone-300/60">
              {offerings.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/60 transition-colors">
                    <div className={`w-9 h-9 rounded-lg bg-${item.color}/10 flex-shrink-0 flex items-center justify-center text-${item.color}`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-stone-900 text-sm">{item.title}</h4>
                      <p className="text-[11px] text-stone-500 mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
