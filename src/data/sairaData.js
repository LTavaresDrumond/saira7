export const sairaData = {
  name: "Sítio Saíra Sete Cores",
  shortName: "Saíra 7",
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
    whatsappNumber: "5521999999999", // Número configurável
    whatsappDisplay: "(21) 99999-9999",
    instagramHandle: "@sitiosaira7cores",
    instagramUrl: "https://instagram.com",
    airbnbUrl: "", // Deixado preparado para quando for publicado
  },
  highlights: [
    {
      value: "Até 100",
      label: "Pessoas em Eventos",
      subtext: "Na icônica Oca Carukango",
      icon: "Users",
    },
    {
      value: "Até 23",
      label: "Hóspedes em Camas",
      subtext: "5 suítes + 1 quarto (+ camping)",
      icon: "Bed",
    },
    {
      value: "Rio Macaé",
      label: "Poço Natural Privativo",
      subtext: "Piscina natural na entrada",
      icon: "Waves",
    },
    {
      value: "Mata Atlântica",
      label: "Reserva Preservada",
      subtext: "Horta orgânica e trilhas",
      icon: "Trees",
    },
  ],
  accommodations: {
    rusticHouse: {
      id: "casa-principal",
      title: "Casa Principal Rústica",
      subtitle: "Aconchego, história e convivência integrada à natureza",
      capacity: "Ideal para famílias e grupos",
      image: "/images/piscina.jpg",
      details: [
        "3 quartos ao todo (2 suítes privativas + 1 quarto com banheiro adjacente)",
        "Sala de estar acolhedora com TV e ambiente para descanso",
        "Cozinha completa equipada para refeições em família",
        "Área externa privativa com piscina e churrasqueira",
        "Fogão a lenha tradicional para culinária afetiva",
      ],
      features: ["Piscina Privativa", "Churrasqueira", "Fogão a Lenha", "2 Suítes + 1 Quarto", "Sala de TV", "Cozinha Equipada"],
    },
    annexSuites: {
      id: "edificio-anexo",
      title: "Edifício Anexo de Suítes",
      subtitle: "Privacidade e vista deslumbrante para a serra",
      capacity: "3 Suítes Independentes",
      image: "/images/quarto1.jpg",
      details: [
        "3 suítes completas e amplas com banheiro privativo individual",
        "Entradas independentes proporcionando total privacidade aos hóspedes",
        "Janelas amplas voltadas para a copa das árvores e o verde do sítio",
        "Integração harmônica com as áreas sociais e caminhos floridos",
      ],
      features: ["3 Suítes Exclusivas", "Banheiros Privativos", "Entrada Independente", "Vista Panorâmica", "Ventilação Natural"],
    },
  },
  events: {
    title: "Oca Carukango: Espaço para Eventos & Encontros",
    subtitle: "Celebrar, aprender e se conectar sob a energia da Mata Atlântica",
    capacity: "Até 100 convidados confortavelmente",
    image: "/images/meio-sitio.jpg",
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
        title: "Rio Macaé & Poço Natural",
        description: "O rio passa bem na entrada do sítio formando uma piscina natural cristalina e calma, perfeita para banhos revigorantes em qualquer hora do dia.",
        image: "/images/rio.jpg",
      },
      {
        title: "Reserva de Mata Atlântica",
        description: "Nos fundos do sítio, uma área de floresta nativa preservada abriga espécies da fauna e flora serrana, incluindo o gracioso pássaro Saíra-Sete-Cores.",
        image: "/images/lago-1.jpg",
      },
      {
        title: "Horta Orgânica Natural",
        description: "Cultivo carinhoso de ervas, hortaliças e temperos frescos disponíveis para as refeições dos hóspedes e participantes de encontros.",
        image: "/images/chafariz.jpg",
      },
      {
        title: "Espaço para Camping & Céu Estrelado",
        description: "Gramados planos e seguros para quem deseja vivenciar a experiência de dormir sob as estrelas ao redor de fogueiras.",
        image: "/images/lago-3.jpg",
      },
    ],
  },
  gallery: [
    { title: "Vista Panorâmica do Sítio", category: "Paisagem", src: "/images/meio-sitio.jpg" },
    { title: "O Rio Macaé & Poço de Banho", category: "Rio", src: "/images/rio.jpg" },
    { title: "Piscina Privativa da Casa", category: "Acomodações", src: "/images/piscina.jpg" },
    { title: "Entrada do Sítio Saíra 7", category: "Chegada", src: "/images/entrada.jpg" },
    { title: "Piscina com Vista da Serra", category: "Lazer", src: "/images/piscina-2.jpg" },
    { title: "Chafariz e Jardins Floridos", category: "Jardim", src: "/images/chafariz.jpg" },
    { title: "Lago das Águas Cristalinas", category: "Águas", src: "/images/lago-1.jpg" },
    { title: "Espelho d'Água & Montanhas", category: "Paisagem", src: "/images/lago-2.jpg" },
    { title: "Reflexos da Mata no Lago", category: "Natureza", src: "/images/lago-3.jpg" },
    { title: "Caminhos & Bosques", category: "Natureza", src: "/images/lago4.jpg" },
    { title: "Suíte Acolhedora", category: "Acomodações", src: "/images/quarto1.jpg" },
  ],
  faqs: [
    {
      question: "Quantas pessoas o sítio comporta para hospedagem e eventos?",
      answer: "Para eventos e encontros diurnos (day use), acomodamos confortavelmente até 100 pessoas na Oca Carukango. Para pernoite/hospedagem, são até 23 pessoas em camas (distribuídas em 5 suítes e 1 quarto), com possibilidade adicional de sofás e área de camping para barracas.",
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
      answer: "Estamos na Cabeceira do Sana, no município de Macaé (RJ). É uma das regiões mais nobres e preservadas da serra, com fácil acesso para veículos de passeio.",
    },
  ],
};
