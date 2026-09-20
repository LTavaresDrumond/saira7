import React from 'react';
import { Sparkles, HeartHandshake, Compass } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-saira-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
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
              Bem-vindo ao Saíra 7
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-saira-forest-dark tracking-tight leading-tight mb-6">
              Onde o tempo desacelera e a natureza reconecta
            </h2>

            <p className="text-stone-700 text-base sm:text-lg leading-relaxed mb-6 font-light">
              Batizado em homenagem ao <strong>Saíra-Sete-Cores</strong>, ave símbolo de exuberância e liberdade que habita a Mata Atlântica da região, o sítio foi concebido para ser um templo de paz, celebração e vitalidade.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
              Localizado na <strong>Cabeceira do Sana</strong> — o ponto mais alto e preservado do distrito —, oferecemos o casamento perfeito entre o rústico autêntico e a estrutura acolhedora. Aqui, o som do Rio Macaé emoldura momentos inesquecíveis, seja para um fim de semana em família ou para um evento transformador.
            </p>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-300/60">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-saira-forest/10 flex-shrink-0 flex items-center justify-center text-saira-forest">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-base">Localização Privilegiada</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Cabeceira do Sana: água límpida e privacidade total longe da agitação.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-saira-earth/10 flex-shrink-0 flex items-center justify-center text-saira-earth">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-900 text-base">Hospitalidade Afetiva</h4>
                  <p className="text-xs text-stone-600 mt-0.5">Espaços pensados para acolher com carinho até 23 pessoas em pernoite.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
