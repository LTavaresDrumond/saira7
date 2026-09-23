import React, { useState } from 'react';
import { Send, Calendar, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { sairaData } from '../../../data/sairaData';

export default function QuoteContent() {
  const [interestType, setInterestType] = useState('estadia');
  const [formData, setFormData] = useState({
    name: '', phone: '', checkin: '', checkout: '',
    guests: '15', notes: '',
  });
  const [openFaq, setOpenFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (type) => {
    setInterestType(type);
    setFormData((prev) => ({ ...prev, guests: type === 'estadia' ? '15' : '60' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const typeLabel = interestType === 'estadia'
      ? 'Hospedagem por Temporada (até 23 em camas)'
      : 'Evento na Oca Carukango (até 100 pessoas)';
    const text = `*Olá! Gostaria de consultar disponibilidade no Sítio Saíra 7 (Sana):*\n\n📌 *Finalidade:* ${typeLabel}\n👤 *Nome:* ${formData.name}\n📱 *Telefone:* ${formData.phone}\n📅 *Check-in:* ${formData.checkin}\n📅 *Check-out:* ${formData.checkout}\n👥 *Pessoas:* ${formData.guests}\n💬 *Observações:* ${formData.notes || 'Nenhuma'}`;
    window.open(`https://api.whatsapp.com/send?phone=${sairaData.contact.whatsappNumber}&text=${encodeURIComponent(text)}`, '_blank');
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-sm placeholder-stone-500 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 transition-all";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Form */}
      <div className="lg:col-span-7">
        {/* Type Selector */}
        <div className="flex gap-2 mb-6">
          <button onClick={() => handleTypeChange('estadia')} className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${interestType === 'estadia' ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40' : 'bg-white/5 text-stone-400 border border-white/10'}`}>
            <Calendar className="w-4 h-4" /> Hospedagem
          </button>
          <button onClick={() => handleTypeChange('evento')} className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold transition-all ${interestType === 'evento' ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40' : 'bg-white/5 text-stone-400 border border-white/10'}`}>
            <Users className="w-4 h-4" /> Evento
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Seu nome" required className={inputClass} />
            <input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="WhatsApp / Telefone" required className={inputClass} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <input type="date" name="checkin" value={formData.checkin} onChange={handleInputChange} required className={inputClass} />
            <input type="date" name="checkout" value={formData.checkout} onChange={handleInputChange} required className={inputClass} />
            <input type="number" name="guests" value={formData.guests} onChange={handleInputChange} min="1" max={interestType === 'estadia' ? 30 : 100} className={inputClass} />
          </div>
          <textarea name="notes" value={formData.notes} onChange={handleInputChange} placeholder="Observações adicionais (opcional)" rows={3} className={`${inputClass} resize-none`} />
          <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-lg">
            <Send className="w-4 h-4" /> Enviar via WhatsApp
          </button>
        </form>
      </div>

      {/* FAQs */}
      <div className="lg:col-span-5">
        <h3 className="font-serif text-lg font-bold text-white mb-4">Perguntas Frequentes</h3>
        <div className="space-y-2">
          {sairaData.faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between px-4 py-3 text-left text-sm text-stone-200 hover:text-white transition-colors">
                <span className="font-medium pr-4">{faq.question}</span>
                {openFaq === idx ? <ChevronUp className="w-4 h-4 flex-shrink-0 text-amber-300" /> : <ChevronDown className="w-4 h-4 flex-shrink-0 text-stone-500" />}
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-3 text-xs text-stone-400 leading-relaxed border-t border-white/5 pt-2">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
