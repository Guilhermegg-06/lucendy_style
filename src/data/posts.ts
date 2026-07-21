export interface BarberPost {
  id: string;
  image: string;
  caption: string;
  date: string;
  barber?: string;
  service?: string;
  featured?: boolean;
}

export const posts: BarberPost[] = [
  { id: "corte-barba", image: "/images/posts/corte-barba.jpg", caption: "Degradê baixo com barba desenhada e acabamento preciso.", date: "2026-07-21", service: "Corte + barba", featured: true },
  { id: "barboterapia-atendimento", image: "/images/posts/barboterapia-atendimento.jpg", caption: "Cuidado da barba durante o atendimento.", date: "2026-07-21", service: "Barboterapia" },
  { id: "corte-tesoura", image: "/images/posts/corte-tesoura-textura.jpg", caption: "Volume preservado, textura e laterais alinhadas.", date: "2026-07-21", service: "Corte na tesoura" },
  { id: "degrade-mullet", image: "/images/posts/corte-degrade-mullet.jpg", caption: "Degradê com comprimento e personalidade na parte posterior.", date: "2026-07-21", service: "Corte degradê" },
  { id: "barboterapia-relaxamento", image: "/images/posts/barboterapia-relaxamento.jpg", caption: "Um momento de cuidado e relaxamento durante o serviço de barba.", date: "2026-07-21", service: "Barboterapia" },
  { id: "evento-profissional", image: "/images/posts/evento-profissional.jpg", caption: "Em busca de novas técnicas e evolução profissional.", date: "2026-07-21", service: "Aperfeiçoamento profissional" },
];