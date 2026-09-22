import React, { useState } from 'react';
import {
  Home, Hotel, Sparkles, Coffee, Waves,
  Check, Bed, ShieldCheck, Images,
  Users, UtensilsCrossed, BookOpen,
  Flame, CheckCircle2, Eye, X,
  Trees, Sprout, Tent,
} from 'lucide-react';
import { sairaData } from '../data/sairaData';

// ─── Tab Definitions ────────────────────────────────────────────────────
const TAB_KEYS = ['rustic', 'annex', 'oca', 'convivencia', 'natureza'];

const TAB_META = {
  rustic:      { label: 'Casa Antiga',     icon: Home,     color: 'saira-forest' },
  annex:       { label: 'Casa Nova',       icon: Hotel,    color: 'saira-forest' },
  oca:         { label: 'Oca Carukango',   icon: Sparkles, color: 'amber'        },
  convivencia: { label: 'Convivência',     icon: Coffee,   color: 'saira-earth'  },
  natureza:    { label: 'Natureza & Rio',  icon: Waves,    color: 'saira-water'  },
};

// ─── Sub-component: Accommodation Card (Casa Antiga / Casa Nova) ──────
function AccommodationCard({ data }) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const photos = [data.image, data.secondaryImage].filter(Boolean);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-card border border-stone-200 transition-all">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Image Side */}
        <div className="lg:col-span-6 relative min-h-[350px] sm:min-h-[440px] flex flex-col justify-between bg-stone-900">
          <div className="absolute inset-0 z-0">
            <img src={photos[photoIdx] || data.image} alt={data.title} className="w-full h-full object-cover transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
          <div className="relative z-10 p-6 flex items-center justify-between">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-saira-earth text-white shadow-sm">
              {data.capacity}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-md text-white border border-white/20">
              <Images className="w-3.5 h-3.5" /> Foto {photoIdx + 1} de {photos.length}
            </span>
          </div>
          <div className="relative z-10 p-6 sm:p-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">{data.title}</h3>
            <div className="flex gap-2.5">
              {photos.map((photo, idx) => (
                <button key={idx} onClick={() => setPhotoIdx(idx)} className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 transition-all ${photoIdx === idx ? 'border-amber-400 scale-105 shadow-md' : 'border-white/40 opacity-70 hover:opacity-100'}`}>
                  <img src={photo} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Details Side */}
        <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-saira-earth font-bold block mb-1">Detalhes do Espaço</span>
            <h4 className="font-serif text-2xl font-bold text-stone-900 mb-3">{data.subtitle}</h4>
            <ul className="space-y-3 mt-6">
              {data.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3 text-stone-700 text-sm sm:text-base">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6 mt-6 border-t border-stone-100 flex flex-wrap gap-2">
              {data.features.map((feature, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-saira-sand text-saira-forest-dark text-xs font-medium border border-stone-200">{feature}</span>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-stone-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Privacidade e exclusividade para o seu grupo
            </div>
            <a href="#cotacao" className="w-full sm:w-auto text-center px-6 py-3 rounded-full bg-saira-forest hover:bg-saira-forest-light text-white text-xs sm:text-sm font-semibold transition-all shadow-sm">
              Consultar Disponibilidade
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-component: Oca Carukango (Events Tab) ────────────────────────
function OcaTab() {
  const { events } = sairaData;
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const iconMap = { Users, UtensilsCrossed, BookOpen, Sparkles };

  return (
    <div className="space-y-10">
      {/* Photos Grid */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-saira-forest-dark flex items-center gap-2">
            Registros Reais da Oca & Eventos
          </h3>
          <span className="text-xs text-stone-400 hidden sm:inline">Clique na foto para ampliar</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {events.photos.map((item, idx) => (
            <div key={idx} onClick={() => setSelectedPhoto(item)} className="group relative h-40 sm:h-52 rounded-2xl overflow-hidden cursor-pointer border border-stone-200 shadow-card bg-stone-100">
              <img src={item.src} alt={item.caption} className="w-full h-full object-cover img-zoom" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <span className="text-[11px] font-semibold text-white leading-tight">{item.caption}</span>
                <span className="text-[9px] text-amber-500 mt-0.5 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3 h-3" /> Ver foto
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {events.features.map((feat, idx) => {
          const IconComp = iconMap[feat.icon] || Sparkles;
          return (
            <div key={idx} className="bg-saira-sand-dark/30 p-6 sm:p-7 rounded-2xl border border-stone-200 hover:border-saira-earth/40 transition-all transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-saira-earth/15 text-saira-earth flex items-center justify-center mb-4">
                <IconComp className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 mb-2">{feat.title}</h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">{feat.description}</p>
            </div>
          );
        })}
      </div>

      {/* Kitchen Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-stone-800 to-saira-forest-dark text-white p-8 sm:p-12 shadow-elevated">
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
              Para que seu evento aconteça com tranquilidade, dispomos de <strong>fogão comercial/industrial de alta chama</strong>, fogão a lenha rústico, churrasqueira, bancadas e geladeiras espaçosas.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-stone-200">
              {['Fogão Industrial', 'Fogão a Lenha', 'Churrasqueira', 'Geladeiras', 'Bancadas de Apoio', 'Energia Estável'].map((item, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {item}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
            <div className="text-xs uppercase tracking-widest text-stone-400 mb-1">Capacidade de Eventos</div>
            <div className="font-serif text-4xl sm:text-5xl font-bold text-amber-300 mb-4">100 Pessoas</div>
            <a href="#cotacao" className="w-full sm:w-auto px-7 py-3.5 rounded-full font-semibold bg-amber-500 hover:bg-amber-400 text-stone-950 transition-all transform hover:scale-105 shadow-md text-sm">
              Solicitar Cotação para Evento
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <button onClick={() => setSelectedPhoto(null)} className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img src={selectedPhoto.src} alt={selectedPhoto.caption} className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl" />
            <h4 className="font-serif text-xl font-bold text-white mt-4">{selectedPhoto.caption}</h4>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Sub-component: Convivência Tab ───────────────────────────────────
function ConvivenciaTab() {
  const { convivencia } = sairaData;
  const icons = [Flame, Trees, Sprout];

  return (
    <div>
      <p className="text-stone-600 text-base sm:text-lg font-light mb-8 max-w-2xl">
        {convivencia.subtitle}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {convivencia.items.map((item, idx) => {
          const IconComp = icons[idx] || Coffee;
          return (
            <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-card border border-stone-200/80 hover:shadow-elevated transition-all flex flex-col">
              <div className="relative h-60 sm:h-64 overflow-hidden bg-stone-100">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover img-zoom" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-300 flex-shrink-0">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight">{item.title}</h3>
                </div>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex items-center">
                <p className="text-stone-600 text-sm leading-relaxed font-light">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Sub-component: Natureza & Rio Tab ────────────────────────────────
function NaturezaTab() {
  const { nature } = sairaData;
  const icons = [Waves, Trees, Sprout, Tent];

  return (
    <div>
      <p className="text-stone-600 text-base sm:text-lg font-light mb-8 max-w-2xl">
        {nature.subtitle}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {nature.items.map((item, idx) => {
          const Icon = icons[idx] || Trees;
          return (
            <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-card border border-stone-200/80 hover:shadow-elevated transition-all flex flex-col">
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover img-zoom" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-amber-200 flex-shrink-0 border border-white/30">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">{item.title}</h3>
                </div>
              </div>
              <div className="p-6 sm:p-7 flex-1 flex items-center">
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* River Callout Banner */}
      <div className="mt-10 bg-gradient-to-r from-sky-900 to-saira-forest text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-sky-200 flex-shrink-0">
            <Waves className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-serif text-lg sm:text-xl font-bold">Banho de rio revigorante na entrada do sítio</h4>
            <p className="text-xs sm:text-sm text-stone-200 mt-0.5">Águas límpidas vindas direto das nascentes das montanhas do Sana.</p>
          </div>
        </div>
        <a href="#cotacao" className="px-6 py-3 rounded-full bg-white text-saira-forest font-semibold text-xs sm:text-sm hover:bg-stone-100 transition-colors shadow-sm flex-shrink-0">
          Conferir Temporadas
        </a>
      </div>
    </div>
  );
}

// ─── Main Section Component ───────────────────────────────────────────
export default function AccommodationsSection() {
  const [activeTab, setActiveTab] = useState('rustic');
  const { rusticHouse, annexSuites } = sairaData.accommodations;

  // Heading per tab
  const headings = {
    rustic:      { tag: 'Hospedagem por Temporada', title: 'Casa Antiga (Sede Rústica)', desc: 'Conforto rústico para famílias e grupos com piscina privativa, fogão a lenha e churrasqueira.' },
    annex:       { tag: 'Hospedagem por Temporada', title: 'Casa Nova (Edifício de Suítes)', desc: 'Suítes modernas e independentes com total privacidade e vista para o verde.' },
    oca:         { tag: 'Espaço para Eventos', title: 'Oca Carukango', desc: 'Estrutura para até 100 convidados com infraestrutura culinária comercial completa.' },
    convivencia: { tag: 'Convivência & Gastronomia', title: 'Área de Convivência', desc: 'Espaços amplos para reunir, saborear e relaxar entre árvores frutíferas e jardins.' },
    natureza:    { tag: 'Ecoturismo & Conexão Natural', title: 'A Magia das Águas e da Floresta', desc: 'Rio Macaé, mata atlântica preservada, lagos e uma experiência sensorial única.' },
  };

  const currentHeading = headings[activeTab];

  return (
    <section id="acomodacoes" className="py-10 sm:py-14 bg-saira-sand-dark/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-saira-earth font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3">
            <Bed className="w-4 h-4" />
            Nossos Espaços
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-saira-forest-dark tracking-tight leading-tight">
            Tudo o que o Sítio oferece
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-4 font-light">
            Explore cada canto do Saíra Sete Cores: das acomodações acolhedoras à Oca Carukango, passando pela natureza exuberante da Cabeceira do Sana.
          </p>
        </div>

        {/* ─── Tab Selector (Scrollable on mobile) ─── */}
        <div className="mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide">
            {TAB_KEYS.map((key) => {
              const meta = TAB_META[key];
              const Icon = meta.icon;
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                    isActive
                      ? 'bg-saira-forest text-white shadow-md scale-[1.02]'
                      : 'bg-white/80 text-stone-600 hover:text-stone-900 hover:bg-white border border-stone-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {meta.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── Dynamic Sub-header ─── */}
        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest text-saira-earth font-bold block mb-1">{currentHeading.tag}</span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-saira-forest-dark mb-2">{currentHeading.title}</h3>
          <p className="text-stone-500 text-sm sm:text-base font-light max-w-2xl">{currentHeading.desc}</p>
        </div>

        {/* ─── Tab Content ─── */}
        <div className="animate-fadeIn">
          {activeTab === 'rustic' && <AccommodationCard data={rusticHouse} />}
          {activeTab === 'annex' && <AccommodationCard data={annexSuites} />}
          {activeTab === 'oca' && <OcaTab />}
          {activeTab === 'convivencia' && <ConvivenciaTab />}
          {activeTab === 'natureza' && <NaturezaTab />}
        </div>

        {/* Extra Capacity Notice (only for accommodation tabs) */}
        {(activeTab === 'rustic' || activeTab === 'annex') && (
          <div className="mt-8 text-center text-xs sm:text-sm text-stone-600 bg-amber-50/70 border border-amber-200/60 rounded-2xl p-4 max-w-2xl mx-auto">
            🏕️ <strong>Precisa de mais vagas?</strong> Além das camas para 23 pessoas distribuídas na Casa Antiga e Casa Nova, dispomos de sofás aconchegantes e amplo espaço gramado para montagem de barracas de camping.
          </div>
        )}

      </div>
    </section>
  );
}
