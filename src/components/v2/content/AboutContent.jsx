import React from 'react';
import { GraduationCap, Palette, Leaf, Users, Sparkles, Compass } from 'lucide-react';

const offerings = [
  { icon: Users, title: 'Hospedagem para Grupos', desc: 'Até 23 pessoas em camas, com espaço adicional para camping.' },
  { icon: GraduationCap, title: 'Escola de Agroecologia', desc: 'Educação ambiental integrada à natureza com vivências práticas.' },
  { icon: Sparkles, title: 'Eventos, Retiros e Casamentos', desc: 'Na Oca Carukango, para até 100 pessoas com infraestrutura completa.' },
  { icon: Leaf, title: 'Educação com a Natureza', desc: 'Cursos de permacultura, botânica e vivências ecológicas.' },
  { icon: Palette, title: 'Arte como Metodologia', desc: 'Oficinas criativas e artísticas integradas ao ambiente natural.' },
  { icon: Compass, title: 'Ecoturismo & Trilhas', desc: 'Fácil acesso às trilhas, cachoeiras e atrativos da região do Sana.' },
];

export default function AboutContent() {
  return (
    <div>
      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
        Onde o tempo desacelera e a natureza reconecta
      </h3>
      <p className="text-stone-400 text-sm mb-8 max-w-lg font-light">
        Arte, Ecologia, Educação & Saúde Integral na Cabeceira do Sana.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {offerings.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex-shrink-0 flex items-center justify-center text-amber-300">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-sm">{item.title}</h4>
                <p className="text-[11px] text-stone-400 mt-0.5 leading-snug">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
