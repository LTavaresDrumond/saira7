export const sairaData = {
  name: "Sítio Saíra Sete Cores",
  shortName: "Saíra 7",
  url: "https://saira7.vercel.app",
  tagline: "Seu refúgio exclusivo de Mata Atlântica na Cabeceira do Sana",
  location: {
    neighborhood: "Cabeceira do Sana",
    city: "Macaé",
    state: "RJ",
    fullAddress: "Cabeceira do Sana, Macaé - RJ",
    description: "Localizado na parte mais tranquila e preservada do Sana, com ar puro de montanha e águas cristalinas do Rio Macaé na porta.",
    googleMapsUrl: "https://maps.google.com/?q=Cabeceira+do+Sana+Macae+RJ",
  },
  contact: {
    whatsappNumber: "5561992823308",
    whatsappDisplay: "(61) 99282-3308",
    whatsappLink: "https://api.whatsapp.com/send?phone=5561992823308&text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20S%C3%ADtio%20Sa%C3%ADra%207%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20reservas.",
    instagramHandle: "@sitio_saira_sete_cores",
    instagramUrl: "https://www.instagram.com/sitio_saira_sete_cores",
    airbnbUrl: "", // Deixado preparado para quando for publicado
  },
  highlights: [
    {
      value: "Até 100",
      label: "Pessoas em Eventos",
      subtext: "Na emblemática Oca Carukango",
      icon: "Users",
    },
    {
      value: "Até 23",
      label: "Hóspedes em Camas",
      subtext: "Casa Antiga + Casa Nova (+ camping)",
      icon: "Bed",
    },
    {
      value: "Rio Macaé",
      label: "Poço Natural Privativo",
      subtext: "Piscina natural cristalina na entrada",
      icon: "Waves",
    },
    {
      value: "Mata Atlântica",
      label: "Reserva Preservada",
      subtext: "Horta orgânica, lagos e trilhas",
      icon: "Trees",
    },
  ],
  accommodations: {
    rusticHouse: {
      id: "casa-antiga",
      title: "Casa Antiga (Principal Rústica)",
      subtitle: "Aconchego histórico, paredes de tijolo aparente e convivência integrada à natureza",
      capacity: "Ideal para famílias e grupos",
      image: "/images/casaantiga/casa1.jpg",
      secondaryImage: "/images/casaantiga/casa2.jpg",
      details: [
        "3 quartos ao todo: 2 suítes privativas + 1 quarto com banheiro adjacente",
        "Sala de estar acolhedora com TV e ambiente para descanso",
        "Cozinha equipada para refeições em família",
        "Área externa privativa com piscina e churrasqueira",
        "Fogão a lenha tradicional para culinária afetiva da serra",
      ],
      features: ["Piscina Privativa", "Churrasqueira", "Fogão a Lenha", "2 Suítes + 1 Quarto", "Sala de TV", "Cozinha Equipada"],
    },
    annexSuites: {
      id: "casa-nova",
      title: "Casa Nova (Edifício de Suítes)",
      subtitle: "Suítes completas, modernas, com privacidade e vista panorâmica para o vale",
      capacity: "3 Suítes Independentes",
      image: "/images/casanova/quarto1.jpg",
      secondaryImage: "/images/casanova/quartosol-1.jpg",
      details: [
        "3 suítes completas, amplas e arejadas com banheiro privativo individual",
        "Quartos temáticos (Quarto Sol, Quarto Estrela) com acabamento confortável",
        "Entradas independentes proporcionando total privacidade aos hóspedes",
        "Janelas amplas voltadas para a copa das árvores e o verde do sítio",
        "Integração harmônica com as áreas de convivência e jardins floridos",
      ],
      features: ["3 Suítes Exclusivas", "Banheiros Privativos", "Entrada Independente", "Vista Panorâmica", "Ventilação Natural"],
    },
  },
  convivencia: {
    title: "Área de Convivência & Gastronomia",
    subtitle: "Espaços amplos para reunir, saborear e relaxar entre árvores frutíferas e jardins",
    image: "/images/convivencia/convivencia.jpg",
    items: [
      {
        title: "Espaço Gourmet com Churrasqueira",
        description: "Bancadas completas, churrasqueira e mesas ao ar livre para confraternizações.",
        image: "/images/convivencia/churrasqueira.jpg",
      },
      {
        title: "Jabuticabeiras & Pomar",
        description: "Árvores frutíferas centenárias que convidam a colher fruta no pé e contemplar a serra.",
        image: "/images/convivencia/jabuticabeira.jpg",
      },
      {
        title: "Horta Orgânica Natural",
        description: "Temperos frescos, folhas e ervas aromáticas cultivadas com adubação natural no sítio.",
        image: "/images/convivencia/horta1.jpg",
      },
    ],
  },
  events: {
    title: "Oca Carukango: Espaço para Eventos & Encontros",
    subtitle: "Celebrar, aprender e se conectar sob a energia da Mata Atlântica",
    capacity: "Até 100 convidados confortavelmente",
    image: "/images/eventos/oca1.jpg",
    photos: [
      { src: "/images/eventos/oca1.jpg", caption: "A icônica Oca Carukango" },
      { src: "/images/eventos/oca2.jpg", caption: "Estrutura rústica e teto de palha" },
      { src: "/images/eventos/casamento1.jpg", caption: "Celebrações e Casamentos" },
      { src: "/images/eventos/casamentooca1.jpg", caption: "Decoração de evento na Oca" },
      { src: "/images/eventos/oca3.jpg", caption: "Espaço interno coberto e arejado" },
      { src: "/images/eventos/casamento2.jpg", caption: "Cerimônia com vista para a serra" },
    ],
    description: "A Oca Carukango é uma construção singular, ampla, coberta e aberta para a brisa da serra. Projetada para acolher momentos marcantes como casamentos intimistas, retiros espirituais e de yoga, vivências corporativas, workshops e aulas de educação ambiental ao ar livre.",
    features: [
      {
        title: "Capacidade para 100 Pessoas",
        description: "Espaço amplo para celebrações, mesas, rodas de conversa e práticas em grupo.",
        icon: "Users",
      },
      {
        title: "Cozinha Industrial & Comercial",
        description: "Estrutura completa com fogão comercial, fogão a lenha e geladeiras para atender buffets e grandes equipes culinárias.",
        icon: "UtensilsCrossed",
      },
      {
        title: "Aulas & Vivências Ambientais",
        description: "Ambiente ideal para imersões ecológicas, cursos de permacultura, botânica e vivências de bem-estar.",
        icon: "BookOpen",
      },
      {
        title: "Integração com a Natureza",
        description: "Vista aberta para a mata, som das águas do Rio Macaé e total privacidade para seu evento.",
        icon: "Sparkles",
      },
    ],
  },
  nature: {
    title: "A Magia das Águas e da Floresta",
    subtitle: "Uma experiência sensorial onde o Rio Macaé encontra a serra",
    items: [
      {
        title: "Rio Macaé: Poço e Piscina Natural",
        description: "O Rio Macaé corre na entrada do sítio formando um poço natural cristalino e calmo, com acesso fácil para banhos revigorantes a qualquer hora do dia.",
        image: "/images/natureza/rio-banho.jpg",
      },
      {
        title: "Águas Cristalinas da Serra",
        description: "Água pura descendo direto das nascentes mais preservadas da Cabeceira do Sana, trazendo energia e frescor inigualáveis.",
        image: "/images/natureza/rio-cristalino.jpg",
      },
      {
        title: "Reserva de Mata Atlântica",
        description: "Nos fundos do sítio, uma área de floresta nativa preservada abriga rica fauna e flora, incluindo o pássaro Saíra-Sete-Cores.",
        image: "/images/natureza/lago-1.jpg",
      },
      {
        title: "Lagos e Espelhos d'Água",
        description: "Trilhas contornando lagos límpidos que refletem as montanhas e o verde exuberante da propriedade.",
        image: "/images/natureza/lago-3.jpg",
      },
    ],
  },
  gallery: [
    // Eventos & Oca Carukango
    { title: "Oca Carukango", category: "Oca & Eventos", src: "/images/eventos/oca1.jpg" },
    { title: "Estrutura da Oca", category: "Oca & Eventos", src: "/images/eventos/oca2.jpg" },
    { title: "Casamento no Sítio", category: "Oca & Eventos", src: "/images/eventos/casamento1.jpg" },
    { title: "Decoração de Evento na Oca", category: "Oca & Eventos", src: "/images/eventos/casamentooca1.jpg" },
    { title: "Cerimônia na Serra", category: "Oca & Eventos", src: "/images/eventos/casamento2.jpg" },
    { title: "Interior da Oca", category: "Oca & Eventos", src: "/images/eventos/oca3.jpg" },
    { title: "Entrada dos Eventos", category: "Oca & Eventos", src: "/images/eventos/entrada1.jpg" },
    
    // Casa Antiga & Convivência
    { title: "Casa Antiga - Fachada Rústica", category: "Casa Antiga", src: "/images/casaantiga/casa1.jpg" },
    { title: "Casa Antiga - Varanda & Tijolos", category: "Casa Antiga", src: "/images/casaantiga/casa2.jpg" },
    { title: "Churrasqueira & Gourmet", category: "Convivência", src: "/images/convivencia/churrasqueira.jpg" },
    { title: "Área de Convivência", category: "Convivência", src: "/images/convivencia/convivencia.jpg" },
    { title: "Horta Orgânica Cultivada", category: "Convivência", src: "/images/convivencia/horta1.jpg" },
    { title: "Jabuticabeira Centenária", category: "Convivência", src: "/images/convivencia/jabuticabeira.jpg" },

    // Casa Nova & Quartos
    { title: "Casa Nova - Suíte Confortável", category: "Casa Nova", src: "/images/casanova/quarto1.jpg" },
    { title: "Casa Nova - Quarto Sol", category: "Casa Nova", src: "/images/casanova/quartosol-1.jpg" },
    { title: "Entrada Quarto Estrela", category: "Casa Nova", src: "/images/casanova/entradaquartoestrela.jpg" },
    { title: "Quarto Estrela - Apoio", category: "Casa Nova", src: "/images/casanova/quartoestrelacozinha.jpg" },

    // Rio Macaé
    { title: "Banho no Rio Macaé", category: "Rio Macaé", src: "/images/natureza/rio-banho.jpg" },
    { title: "Águas Cristalinas do Rio", category: "Rio Macaé", src: "/images/natureza/rio-cristalino.jpg" },

    // Natureza & Paisagens
    { title: "Vista Panorâmica do Sítio", category: "Natureza", src: "/images/natureza/meio-sitio.jpg" },
    { title: "Piscina Privativa", category: "Natureza", src: "/images/natureza/piscina.jpg" },
    { title: "Piscina com Vista da Serra", category: "Natureza", src: "/images/natureza/piscina-2.jpg" },
    { title: "Chafariz e Jardins Floridos", category: "Natureza", src: "/images/natureza/chafariz.jpg" },
    { title: "Lago das Águas Claras", category: "Natureza", src: "/images/natureza/lago-1.jpg" },
    { title: "Espelho d'Água & Serra", category: "Natureza", src: "/images/natureza/lago-2.jpg" },
    { title: "Reflexos da Mata no Lago", category: "Natureza", src: "/images/natureza/lago-3.jpg" },
    { title: "Bosques e Caminhos", category: "Natureza", src: "/images/natureza/lago4.jpg" },
  ],
  faqs: [
    {
      question: "Quantas pessoas o sítio comporta para hospedagem e eventos?",
      answer: "Para eventos e encontros diurnos (day use), acomodamos confortavelmente até 100 pessoas na Oca Carukango. Para pernoite/hospedagem, são até 23 pessoas em camas (distribuídas na Casa Antiga e na Casa Nova), com possibilidade adicional de sofás e área de camping para barracas.",
    },
    {
      question: "Como funciona a divisão das casas (Casa Antiga e Casa Nova)?",
      answer: "A Casa Antiga é a sede principal, charmosa e rústica, com 3 quartos (2 suítes + 1 quarto com banheiro ao lado), sala de TV, cozinha, fogão a lenha, churrasqueira e piscina privativa. A Casa Nova conta com 3 suítes amplas e independentes (como Quarto Sol e Quarto Estrela), perfeitas para mais privacidade.",
    },
    {
      question: "Como funciona a cozinha para eventos e grupos grandes?",
      answer: "Contamos com infraestrutura gastronômica completa: fogão comercial/industrial de alta capacidade, fogão a lenha rústico tradicional, churrasqueira, geladeiras e bancadas de apoio para equipes de buffet.",
    },
    {
      question: "O poço do rio é privativo e seguro para banho?",
      answer: "Sim! O Rio Macaé passa logo na entrada do sítio formando uma piscina natural com águas límpidas e calmas, acessível diretamente pelos hóspedes.",
    },
    {
      question: "Onde fica localizado exatamente o sítio?",
      answer: "Estamos na Cabeceira do Sana, no município de Macaé (RJ). É a região mais preservada e tranquila do Sana, com fácil acesso para veículos de passeio comuns.",
    },
  ],
};
