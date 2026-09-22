import React, { useState } from 'react';
import { Send, Calendar, Users, MessageSquare, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { sairaData } from '../data/sairaData';

export default function QuoteForm() {
  const [interestType, setInterestType] = useState('estadia'); // 'estadia' | 'evento'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: interestType === 'estadia' ? '15' : '50',
    notes: '',
  });

  const [openFaq, setOpenFaq] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (type) => {
    setInterestType(type);
    setFormData((prev) => ({
      ...prev,
      guests: type === 'estadia' ? '15' : '60',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const typeLabel = interestType === 'estadia' 
      ? 'Hospedagem por Temporada (até 23 em camas)' 
      : 'Evento na Oca Carukango (até 100 pessoas)';

    const text = `*Olá! Gostaria de consultar disponibilidade no Sítio Saíra 7 (Sana):*

📌 *Finalidade:* ${typeLabel}
👤 *Nome:* ${formData.name || 'Não informado'}
📞 *Telefone:* ${formData.phone || 'Não informado'}
📅 *Data Desejada:* ${formData.checkin || 'A definir'} até ${formData.checkout || 'A definir'}
👥 *Quantidade Estimada de Pessoas:* ${formData.guests}
📝 *Observações/Dúvidas:* ${formData.notes || 'Nenhuma'}`;

    const encoded = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?phone=${sairaData.contact.whatsappNumber}&text=${encoded}`;
    window.open(url, '_blank');
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="cotacao" className="py-20 sm:py-28 bg-gradient-to-b from-saira-sand to-stone-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-3">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Consulte Disponibilidade & Valores
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-saira-forest-dark tracking-tight leading-tight">
            Reserve sua data no Saíra 7
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-4 font-light">
            Preencha os dados do seu grupo ou evento para receber uma cotação personalizada diretamente no seu WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Interactive Form Card */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-card border border-stone-200/90">
            
            {/* Step 1: Selector Estadia vs Evento */}
            <div className="mb-8">
              <label className="block text-xs uppercase tracking-wider font-bold text-stone-700 mb-3">
                1. O que você gostaria de realizar?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleTypeChange('estadia')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    interestType === 'estadia'
                      ? 'border-saira-forest bg-saira-forest/5 ring-2 ring-saira-forest/20'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <span className="font-serif font-bold text-stone-900 block text-base">Hospedagem & Lazer</span>
                  <span className="text-xs text-stone-500 block mt-1">Até 23 hóspedes em camas • Casa Rústica & Anexo</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleTypeChange('evento')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    interestType === 'evento'
                      ? 'border-saira-forest bg-saira-forest/5 ring-2 ring-saira-forest/20'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  <span className="font-serif font-bold text-stone-900 block text-base">Evento ou Retiro</span>
                  <span className="text-xs text-stone-500 block mt-1">Até 100 convidados • Na Oca Carukango</span>
                </button>
              </div>
            </div>

            {/* Form Inputs */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ex: Maria da Silva"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-saira-forest/30 focus:border-saira-forest text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                    WhatsApp para Contato *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(DDD) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-saira-forest/30 focus:border-saira-forest text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-stone-500" /> Data Prevista de Entrada
                  </label>
                  <input
                    type="date"
                    name="checkin"
                    value={formData.checkin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-saira-forest/30 focus:border-saira-forest text-sm text-stone-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-stone-500" /> Data Prevista de Saída
                  </label>
                  <input
                    type="date"
                    name="checkout"
                    value={formData.checkout}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-saira-forest/30 focus:border-saira-forest text-sm text-stone-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-stone-500" /> Quantidade Estimada de Pessoas
                  </span>
                  <span className="text-xs font-bold text-saira-earth">{formData.guests} pessoas</span>
                </label>
                <input
                  type="range"
                  min="2"
                  max={interestType === 'estadia' ? '30' : '100'}
                  step="1"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full accent-saira-forest cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-stone-400 mt-1">
                  <span>Mínimo 2</span>
                  <span>{interestType === 'estadia' ? 'Até 23+ pessoas' : 'Até 100 pessoas'}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-stone-500" /> Mensagem ou Dúvidas Específicas
                </label>
                <textarea
                  rows="3"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Conte-nos se deseja celebrar algo especial, uso do fogão industrial para buffet, camping, etc."
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-saira-forest/30 focus:border-saira-forest text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
              >
                <Send className="w-5 h-5" />
                Enviar Cotação pelo WhatsApp
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 text-center mt-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Seus dados serão abertos em conversa segura no WhatsApp. Sem taxas de intermediação.
              </div>
            </form>

          </div>

          {/* Right Side: FAQ Accordion & Instant Trust */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">
              Perguntas Frequentes
            </h3>

            {sairaData.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 text-sm hover:text-saira-forest transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-stone-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone-400 flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 font-light leading-relaxed border-t border-stone-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Direct Host Contact Card */}
            <div className="p-6 rounded-2xl bg-saira-forest-dark text-white mt-6 shadow-card">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                Atendimento Direto
              </span>
              <h4 className="font-serif text-xl font-bold mb-2">
                Prefere falar agora mesmo?
              </h4>
              <p className="text-xs text-stone-300 mb-4 font-light">
                Tire dúvidas sobre disponibilidade de datas festivas, visitas técnicas para eventos ou valores para grupos.
              </p>
              <a
                href={`https://api.whatsapp.com/send?phone=${sairaData.contact.whatsappNumber}&text=${encodeURIComponent("Olá! Gostaria de tirar algumas dúvidas sobre o Sítio Saíra 7.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-white underline underline-offset-4"
              >
                Chamar no WhatsApp agora ➔
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
