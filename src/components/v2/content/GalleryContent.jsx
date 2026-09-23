import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, ChevronDown } from 'lucide-react';
import { sairaData } from '../../../data/sairaData';

const INITIAL_COUNT = 6;

export default function GalleryContent() {
  const { gallery } = sairaData;
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const categories = ['Todas', ...Array.from(new Set(gallery.map((img) => img.category)))];
  const filteredImages = selectedCategory === 'Todas' ? gallery : gallery.filter((img) => img.category === selectedCategory);
  const visibleImages = expanded ? filteredImages : filteredImages.slice(0, INITIAL_COUNT);
  const hasMore = filteredImages.length > INITIAL_COUNT;

  const handleCategoryChange = (cat) => { setSelectedCategory(cat); setExpanded(false); };

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40'
                : 'bg-white/5 text-stone-400 border border-white/10 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {visibleImages.map((img, idx) => (
          <div key={`${selectedCategory}-${idx}`} onClick={() => setLightboxIndex(idx)} className="group relative h-48 sm:h-56 rounded-xl overflow-hidden cursor-pointer border border-white/10">
            <img src={img.src} alt={img.title} loading="lazy" className="w-full h-full object-cover img-zoom" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
              <span className="text-[10px] uppercase tracking-wider text-amber-300 font-bold">{img.category}</span>
              <h4 className="font-serif text-base font-bold">{img.title}</h4>
              <div className="mt-1.5 flex items-center gap-1 text-[10px] text-stone-300"><Maximize2 className="w-3 h-3" />Ampliar</div>
            </div>
          </div>
        ))}
      </div>

      {/* Expand */}
      {hasMore && (
        <div className="text-center mt-5">
          <button onClick={() => setExpanded(!expanded)} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 text-stone-300 text-xs font-semibold border border-white/10 hover:text-white hover:border-white/20 transition-all">
            <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
            {expanded ? 'Ver menos' : `Ver mais (${filteredImages.length - INITIAL_COUNT} restantes)`}
          </button>
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4">
          <button onClick={() => setLightboxIndex(null)} className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50"><X className="w-6 h-6" /></button>
          <button onClick={() => setLightboxIndex((p) => (p - 1 + filteredImages.length) % filteredImages.length)} className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white z-50"><ChevronLeft className="w-7 h-7" /></button>
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img src={filteredImages[lightboxIndex].src} alt={filteredImages[lightboxIndex].title} className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl" />
            <div className="text-center text-white mt-3">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">{filteredImages[lightboxIndex].category} ({lightboxIndex + 1}/{filteredImages.length})</span>
              <h3 className="font-serif text-xl font-bold mt-1">{filteredImages[lightboxIndex].title}</h3>
            </div>
          </div>
          <button onClick={() => setLightboxIndex((p) => (p + 1) % filteredImages.length)} className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white z-50"><ChevronRight className="w-7 h-7" /></button>
        </div>
      )}
    </div>
  );
}
