import React from 'react';
import { Waves, Trees, Sprout, Tent } from 'lucide-react';
import { sairaData } from '../../data/sairaData';

export default function NatureContent() {
  const { nature } = sairaData;
  const icons = [Waves, Trees, Sprout, Tent];

  return (
    <div className="space-y-6">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-amber-400/15 flex items-center justify-center text-amber-300 mx-auto mb-4">
          <Waves className="w-8 h-8" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-white mb-3">O Rio na sua Porta</h2>
        <p className="text-stone-300 font-light text-sm">
          Um dos nossos maiores diferenciais: o poço principal do Rio Macaé fica na exata entrada do sítio.
          Você dorme e acorda com o som das águas, a apenas 10 metros das acomodações.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {nature.items.map((item, idx) => {
          const Ic = icons[idx] || Trees;
          return (
            <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-6 flex items-center gap-3 text-white">
                  <div className="p-2 rounded-lg bg-amber-400/20 backdrop-blur-md text-amber-300 border border-amber-400/30">
                    <Ic className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                </div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-sm">
                <p className="text-stone-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-900/40 to-stone-900 border border-emerald-500/20 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
          <Sprout className="w-8 h-8" />
        </div>
        <div>
          <h4 className="font-serif text-lg font-bold text-white mb-1">Preservação Ambiental</h4>
          <p className="text-stone-400 text-xs sm:text-sm">
            O Sítio Saíra 7 está inserido em uma APA (Área de Proteção Ambiental). Nosso compromisso 
            é com o turismo ecológico e sustentável. Protegemos a fauna e flora locais para que 
            as próximas gerações também possam desfrutar dessa magia.
          </p>
        </div>
      </div>
    </div>
  );
}
