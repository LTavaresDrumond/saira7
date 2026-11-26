import React, { useState, useEffect } from 'react';
import {
  Home, Hotel, Sparkles, Coffee, Waves,
  Check, Images, ArrowLeft,
  Users, UtensilsCrossed, BookOpen,
  Flame, CheckCircle2, X,
  Trees, Sprout, Tent,
} from 'lucide-react';
import { sairaData } from '../../data/sairaData';
import { useNavigation, cardFromHash, normalizeHash } from '../NavigationContext';
import GalleryContent from './GalleryContent';

const SUBSPACES = [
  { id: 'rustic',      icon: Home,     label: 'Casa Antiga',    subtitle: '2 suítes, 1 quarto anexo, cozinha e sala', image: '/images/casaantiga/casa1.jpg' },
  { id: 'annex',       icon: Hotel,    label: 'Casa Nova',      subtitle: '3 suítes confortáveis', image: '/images/casanova/quartosol-1.jpg' },
  { id: 'oca',         icon: Sparkles, label: 'Oca Carukango',  subtitle: 'Espaço hexagonal para até 100 pessoas', image: '/images/eventos/oca1.jpg' },
  { id: 'convivencia', icon: Coffee,   label: 'Convivência',    subtitle: 'Área gourmet, churrasqueira e lounge', image: '/images/convivencia/churrasqueira.jpg' },
];

// ─── Detailed Content Components ─────────────────────────────────────
function AccommodationDetail({ data }) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const photos = [data.image, data.secondaryImage].filter(Boolean);

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 animate-fadeIn">
      <div className="force-dark relative min-h-[360px] sm:min-h-[480px] bg-stone-900">
        <img src={photos[photoIdx] || data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 p-5 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/80 text-white backdrop-blur-md">
            {data.title}
          </span>
          <span className="px-3 py-1 rounded-full text-xs bg-black/50 backdrop-blur text-white border border-white/20 flex items-center gap-1.5">
            <Images className="w-3.5 h-3.5" /> {photoIdx + 1} / {photos.length}
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-col gap-4">
          <div className="flex gap-3">
            {photos.map((p, i) => (
              <button 
                key={i} 
                onClick={() => setPhotoIdx(i)} 
                className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all ${photoIdx === i ? 'border-amber-400 scale-105 shadow-lg' : 'border-white/30 opacity-70 hover:opacity-100 hover:scale-100'}`}
              >
                <img src={p} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OcaDetail() {
  const { events } = sairaData;
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const iconMap = { Users, UtensilsCrossed, BookOpen, Sparkles };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {events.photos.map((item, idx) => (
          <div key={idx} onClick={() => setSelectedPhoto(item)} className="force-dark group relative h-32 sm:h-40 rounded-xl overflow-hidden cursor-pointer border border-white/10">
            <img src={item.src} alt={item.caption} className="w-full h-full object-cover img-zoom" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5">
              <span className="text-[10px] text-white font-semibold">{item.caption}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {events.features.map((feat, idx) => {
          const Ic = iconMap[feat.icon] || Sparkles;
          return (
            <div key={idx} className="p-5 rounded-xl bg-white/5 border border-white/10">
              <Ic className="w-6 h-6 text-amber-300 mb-3" />
              <h3 className="font-serif text-base font-bold text-white mb-1">{feat.title}</h3>
              <p className="text-stone-400 text-xs">{feat.description}</p>
            </div>
          );
        })}
      </div>
      <div className="rounded-2xl bg-gradient-to-r from-stone-800 to-stone-900 p-6 sm:p-8 border border-white/10">
        <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
          <Flame className="w-4 h-4" /> Infraestrutura Gastronômica
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-stone-300">
          {['Fogão Industrial', 'Fogão a Lenha', 'Churrasqueira', 'Geladeiras', 'Bancadas de Apoio', 'Energia Estável'].map((item, i) => (
            <span key={i} className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />{item}</span>
          ))}
        </div>
      </div>
      {selectedPhoto && (
        <div className="force-dark fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedPhoto(null)}>
          <button className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white"><X className="w-6 h-6" /></button>
          <img src={selectedPhoto.src} alt={selectedPhoto.caption} className="max-h-[75vh] max-w-full rounded-xl object-contain" />
        </div>
      )}
    </div>
  );
}

function ConvivenciaDetail() {
  const { convivencia } = sairaData;
  const icons = [Flame, Trees, Sprout];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {convivencia.items.map((item, idx) => {
        const Ic = icons[idx] || Coffee;
        return (
          <div key={idx} className="rounded-2xl overflow-hidden border border-white/10">
            <div className="force-dark relative h-48 overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                <Ic className="w-4 h-4 text-amber-300" />
                <h3 className="font-serif text-base font-bold">{item.title}</h3>
              </div>
            </div>
            <div className="p-4"><p className="text-stone-400 text-xs">{item.description}</p></div>
          </div>
        );
      })}
    </div>
  );
}



// ─── Detail Renderer ─────────────────────────────────────────────────
function SubspaceDetail({ subId }) {
  const { rusticHouse, annexSuites } = sairaData.accommodations;
  switch (subId) {
    case 'rustic':      return <AccommodationDetail data={rusticHouse} />;
    case 'annex':       return <AccommodationDetail data={annexSuites} />;
    case 'oca':         return <OcaDetail />;
    case 'convivencia': return <ConvivenciaDetail />;
    default: return null;
  }
}

// ─── Main Component ──────────────────────────────────────────────────
// "Espaços & Fotos": a antiga Galeria virou a aba "Fotos" deste card (nov/2026).
const TABS = [
  { id: 'espacos', icon: Home, label: 'Espaços' },
  { id: 'fotos', icon: Images, label: 'Fotos' },
];

const startsOnPhotos = () =>
  typeof window !== 'undefined' && ['fotos', 'galeria'].includes(normalizeHash(window.location.hash));

export default function SpacesContent() {
  const nav = useNavigation();
  const [tab, setTab] = useState(() => (startsOnPhotos() ? 'fotos' : 'espacos'));

  // Se o "#" mudar com o card aberto (voltar/avançar, link #fotos), a aba acompanha
  useEffect(() => {
    const syncTab = () => {
      const h = normalizeHash(window.location.hash);
      if (h === 'fotos' || h === 'galeria') setTab('fotos');
      else if (h === 'espacos') setTab('espacos');
    };
    window.addEventListener('popstate', syncTab);
    return () => window.removeEventListener('popstate', syncTab);
  }, []);

  // A tela interna (Casa Antiga, Oca…) segue a trilha do topo do modal:
  // tocar em "Espaços & Fotos" na trilha volta para a lista.
  const activeSubspace = tab === 'espacos' ? nav?.breadcrumbs?.[1]?.id ?? null : null;

  const changeTab = (next) => {
    if (next === tab) return;
    setTab(next);
    if ((nav?.breadcrumbs?.length ?? 0) > 1) nav.goToBreadcrumb(0);
    // O endereço acompanha a aba: saira7.vercel.app/#fotos abre direto nas fotos
    if (cardFromHash(window.location.hash) === 'espacos') {
      window.history.replaceState(window.history.state, '', next === 'fotos' ? '#fotos' : '#espacos');
    }
  };

  const handleSubspaceClick = (space) => {
    nav?.pushBreadcrumb({ id: space.id, label: space.label });
  };

  const handleBack = () => {
    nav?.popBreadcrumb();
  };

  return (
    <div>
      {/* Abas */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm" role="tablist">
          {TABS.map(({ id, icon: TabIcon, label }) => (
            <button
              key={id}
              role="tab"
              aria-selected={tab === id}
              onClick={() => changeTab(id)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                tab === id
                  ? 'bg-amber-400/20 text-amber-300 shadow-sm border border-amber-400/30'
                  : 'text-stone-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <TabIcon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'fotos' ? (
        <GalleryContent />
      ) : activeSubspace ? (
        <div>
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-stone-300 text-xs font-semibold hover:text-white hover:border-white/20 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar aos espaços
          </button>
          <SubspaceDetail subId={activeSubspace} />
        </div>
      ) : (
        <div>
          <p className="text-stone-400 text-sm mb-6 font-light">
            Selecione um espaço para ver os detalhes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUBSPACES.map((space) => {
              const SubIcon = space.icon;
              return (
                <button
                  key={space.id}
                  onClick={() => handleSubspaceClick(space)}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/40 transition-all text-left"
                >
                  {/* Thumbnail */}
                  <div className="force-dark relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={space.image}
                      alt={space.label}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="flex items-center gap-2 mb-1">
                        <SubIcon className="w-4 h-4 text-amber-300" />
                        <h3 className="font-serif text-base sm:text-lg font-bold text-white">{space.label}</h3>
                      </div>
                      <p className="text-stone-300 text-[11px] sm:text-xs font-light">{space.subtitle}</p>
                    </div>
                  </div>

                  {/* Hover CTA */}
                  <div className="force-dark absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-4 py-2 rounded-full bg-amber-400/20 backdrop-blur-sm border border-amber-400/30 text-amber-200 text-xs font-semibold">
                      Ver detalhes →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
