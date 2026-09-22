import React from 'react';
import { MapPin, Navigation, Mountain, Car, CheckCircle2, Droplets } from 'lucide-react';
import { sairaData } from '../data/sairaData';

export default function LocationSection() {
  const { location } = sairaData;

  const wazeUrl = "https://waze.com/ul?q=Sítio+Saíra+Sete+Cores+Cabeceira+do+Sana+Macaé";

  return (
    <section id="localizacao" className="py-10 sm:py-14 bg-saira-sand relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-saira-earth font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3">
            <MapPin className="w-4 h-4" />
            Localização Privilegiada
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-saira-forest-dark tracking-tight leading-tight">
            Na Cabeceira do Sana, Macaé (RJ)
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-4 font-light">
            {location.description}
          </p>
        </div>

        {/* Two Columns: Tips & Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Instructions Card */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl shadow-card border border-stone-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-saira-forest/10 flex items-center justify-center text-saira-forest">
                <Mountain className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  O Encanto da Cabeceira
                </h3>
                <span className="text-xs text-saira-earth font-bold uppercase tracking-wider">
                  Serra Macaense • {location.distanceFromFrade}
                </span>
              </div>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-light">
              A <strong>Cabeceira do Sana</strong> é a região mais preservada, tranquila e silenciosa do vale. Diferente do centro comercial do arraial, aqui você desfruta de silêncio absoluto, estrelas reluzentes e o rio de águas límpidas direto na entrada do sítio.
            </p>

            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3 text-sm text-stone-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Acesso acessível:</strong> {location.access} — {location.distanceFromFrade}.</span>
              </div>
              {location.nearbyAttractions.map((attraction, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-stone-700">
                  <Droplets className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span><strong>{attraction}</strong></span>
                </div>
              ))}
              <div className="flex items-start gap-3 text-sm text-stone-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Estacionamento amplo:</strong> área interna segura para acomodar veículos do seu grupo ou evento.</span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-stone-100">
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-saira-forest hover:bg-saira-forest-light text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                Abrir no Google Maps
              </a>
              <a
                href={wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs sm:text-sm font-semibold transition-all border border-stone-300"
              >
                <Car className="w-4 h-4" />
                Navegar pelo Waze
              </a>
            </div>
          </div>

          {/* Map Visual Showcase — using official place embed */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white h-[420px] bg-stone-200">
            <iframe
              title="Mapa Sítio Saíra Sete Cores"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.1!2d-42.157444!3d-22.2734374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97c3f147c4c715%3A0xb84ac8597b070d87!2sS%C3%8DTIO%20SA%C3%8DRA%20SETE%20CORES!5e0!3m2!1spt-BR!2sbr"
              className="w-full h-full border-0 filter saturate-[0.85] contrast-[1.05]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
