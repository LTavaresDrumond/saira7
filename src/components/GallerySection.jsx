import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { sairaData } from '../data/sairaData';

export default function GallerySection() {
  const { gallery } = sairaData;
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['Todas', 'Paisagem', 'Rio', 'Acomodações', 'Lazer'];

  const filteredImages = selectedCategory === 'Todas'
    ? gallery
    : gallery.filter((img) => img.category === selectedCategory);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="galeria" className="py-20 sm:py-28 bg-saira-sand-dark/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-saira-earth font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3">
            <Camera className="w-4 h-4" />
            Galeria Fotográfica
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-saira-forest-dark tracking-tight leading-tight">
            Imagens Reais do Sítio Saíra 7
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-4 font-light">
            Cada canto foi moldado para oferecer conexão pura com a exuberância da serra.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-saira-forest text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-card cursor-pointer border border-stone-200 bg-stone-100"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-bold mb-1">
                  {img.category}
                </span>
                <h4 className="font-serif text-xl font-bold">{img.title}</h4>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-stone-200 font-medium">
                  <Maximize2 className="w-3.5 h-3.5" /> Ampliar foto
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 select-none animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav Prev */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Main Photo in Lightbox */}
          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].title}
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
            <div className="text-center text-white mt-4">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                {filteredImages[lightboxIndex].category} ({lightboxIndex + 1} de {filteredImages.length})
              </span>
              <h3 className="font-serif text-2xl font-bold mt-1">
                {filteredImages[lightboxIndex].title}
              </h3>
            </div>
          </div>

          {/* Nav Next */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-50"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>
      )}
    </section>
  );
}
