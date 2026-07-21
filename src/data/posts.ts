export interface BarberPost { id: string; image: string; caption: string; date: string; barber?: string; service?: string; featured?: boolean }
export const posts: BarberPost[] = [
  { id: "1", image: "/images/posts/corte-01.jpg", caption: "Degradê limpo com acabamento natural.", date: "2026-07-18", service: "Degradê", featured: true },
  { id: "2", image: "/images/posts/corte-02.jpg", caption: "Textura e definição.", date: "2026-07-15", service: "Corte masculino" },
  { id: "3", image: "/images/posts/corte-03.jpg", caption: "Barba desenhada nos detalhes.", date: "2026-07-12", service: "Barba" },
  { id: "4", image: "/images/posts/corte-04.jpg", caption: "Visual completo e alinhado.", date: "2026-07-09", service: "Corte + barba" },
];
