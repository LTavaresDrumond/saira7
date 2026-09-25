import React from 'react';
import { Navigation, Car, CheckCircle2, Droplets, Mountain } from 'lucide-react';
import { sairaData } from '../../data/sairaData';

export default function LocationContent() {
  const { location } = sairaData;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Info */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-amber-400/15 flex items-center justify-center text-amber-300">
            <Mountain className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-bold text-white">O Encanto da Cabeceira</h3>
            <span className="text-xs text-amber-300 font-bold uppercase tracking-wider">Serra Macaense • {location.distanceFromFrade}</span>
          </div>
        </div>

        <p className="text-stone-300 text-sm leading-relaxed mb-6">
          {location.description} Diferente do centro comercial do arraial, aqui você desfruta de silêncio absoluto, estrelas reluzentes e o rio de águas límpidas direto na entrada do sítio.
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-2.5 text-sm text-stone-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <span><strong className="text-white">Acesso acessível:</strong> {location.access} — {location.distanceFromFrade}.</span>
          </div>
          {location.nearbyAttractions?.map((a, i) => (
            <div key={i} className="flex items-start gap-2.5 text-sm text-stone-300">
              <Droplets className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
              <span><strong className="text-white">{a}</strong></span>
            </div>
          ))}
          <div className="flex items-start gap-2.5 text-sm text-stone-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
            <span><strong className="text-white">Estacionamento amplo:</strong> área interna segura para veículos.</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-amber-400/20 hover:bg-amber-400/30 text-amber-200 text-xs font-semibold border border-amber-400/30 transition-all">
            <Navigation className="w-4 h-4" />Google Maps
          </a>
          <a href="https://waze.com/ul?q=Sítio+Saíra+Sete+Cores+Cabeceira+do+Sana+Macaé" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 text-xs font-semibold border border-white/10 transition-all">
            <Car className="w-4 h-4" />Waze
          </a>
        </div>
      </div>

      {/* Map */}
      <div className="rounded-2xl overflow-hidden border border-white/10 h-[350px] sm:h-[400px]">
        <iframe
          title="Mapa Sítio Saíra Sete Cores"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.1!2d-42.157444!3d-22.2734374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97c3f147c4c715%3A0xb84ac8597b070d87!2sS%C3%8DTIO%20SA%C3%8DRA%20SETE%20CORES!5e0!3m2!1spt-BR!2sbr"
          className="w-full h-full border-0 filter saturate-[0.8] contrast-[1.05]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
