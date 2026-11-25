import React, { useState } from 'react';
import { Compass, ShoppingBag, Map, Mountain, Info, Store } from 'lucide-react';

const TOURISM_ITEMS = [
  {
    id: 1,
    title: 'Arraial do Sana',
    distance: '3.5 km',
    desc: 'O centrinho charmoso da vila. Ótimo para caminhadas, artesanato, e curtir a atmosfera reggae local com bons restaurantes.',
    image: '/images/meio-sitio.jpg', // Placeholder, we can update if needed
  },
  {
    id: 2,
    title: 'Cachoeira das Andorinhas',
    distance: 'Trilha de 2km',
    desc: 'Uma das mais belas da região, com quedas d\'água perfeitas para um banho revigorante. Trilha de nível moderado.',
    image: '/images/rio.jpg',
  },
  {
    id: 3,
    title: 'Cachoeira Mãe',
    distance: '4 km',
    desc: 'Amplo poço para nado e tobogã natural. Excelente para passar a tarde inteira em contato direto com a natureza.',
    image: '/images/lago-3.jpg',
  }
];

const CONVENIENCE_ITEMS = [
  {
    id: 1,
    title: 'Mercearia Local',
    desc: 'Itens básicos de alimentação, produtos de limpeza, higiene e utilidades do dia a dia.',
    icon: ShoppingBag,
    distance: '3 km',
  },
  {
    id: 2,
    title: 'Mercado Principal',
    desc: 'Fica no Arraial. Carnes, hortifruti, padaria e maior variedade para as compras do seu churrasco ou estadia.',
    icon: Store,
    distance: '3.5 km',
  },
  {
    id: 3,
    title: 'Posto de Saúde / Farmácia',
    desc: 'Apoio médico básico e farmácia central na praça do Arraial do Sana.',
    icon: Info,
    distance: '3.5 km',
  }
];

export default function QuintalContent() {
  const [activeTab, setActiveTab] = useState('tourism');

  return (
    <div className="flex flex-col h-full">
      <div className="text-center mb-8">
        <h2 className="font-serif text-3xl font-bold text-white mb-2">No Quintal do Sana</h2>
        <p className="text-stone-400 text-sm font-light">Explore a região ou encontre facilidades para sua estadia.</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <button
            onClick={() => setActiveTab('tourism')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'tourism' 
                ? 'bg-amber-400/20 text-amber-300 shadow-sm border border-amber-400/30' 
                : 'text-stone-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Mountain className="w-4 h-4" />
            Ecoturismo
          </button>
          <button
            onClick={() => setActiveTab('convenience')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'convenience' 
                ? 'bg-emerald-400/20 text-emerald-300 shadow-sm border border-emerald-400/30' 
                : 'text-stone-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Map className="w-4 h-4" />
            Conveniências
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1">
        {activeTab === 'tourism' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-fadeIn">
            {TOURISM_ITEMS.map((item) => (
              <div key={item.id} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex flex-col group">
                <div className="force-dark h-40 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-3 right-3 px-2 py-1 rounded text-[10px] font-bold bg-black/60 text-amber-300 backdrop-blur-md">
                    {item.distance}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-serif text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-stone-400 text-xs leading-relaxed flex-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
            {CONVENIENCE_ITEMS.map((item) => (
              <div key={item.id} className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-emerald-400/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400 mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-1">{item.title}</h3>
                <div className="text-[11px] font-semibold text-emerald-400/80 mb-3 uppercase tracking-wider">{item.distance}</div>
                <p className="text-stone-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
