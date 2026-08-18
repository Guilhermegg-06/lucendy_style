export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  startingAt?: boolean;
  icon: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  items: string[];
  originalPrice?: number;
  price?: number;
  startingAt?: boolean;
  discountNote?: string;
}

export const servicePackages: ServicePackage[] = [
  { id: "essencial", name: "Essencial", items: ["Corte", "Limpeza de pele", "Sobrancelha", "Finalização"], originalPrice: 75, price: 60 },
  { id: "premium", name: "Premium", items: ["Corte", "Limpeza de pele", "Barba ou hidratação", "Sobrancelha", "Finalização"], originalPrice: 100, price: 80, startingAt: true },
  { id: "exclusivo", name: "Exclusivo", items: ["Visagismo simples", "Corte", "Limpeza de pele 2.0", "Hidratação ou barba", "Epilação de nariz e orelha", "Finalização"], discountNote: "Desconto a confirmar" },
];

export const services: Service[] = [
  { id: "corte", name: "Corte", description: "Corte de cabelo com acabamento.", price: 35, icon: "✦" },
  { id: "barba", name: "Barba", description: "Aparo, desenho e acabamento da barba.", price: 25, icon: "◒" },
  { id: "desondulacao-1", name: "Desondulação 1.0", description: "Tratamento para redução e controle do volume.", price: 70, startingAt: true, icon: "≈" },
  { id: "desondulacao-2", name: "Desondulação 2.0", description: "Tratamento intensivo para alinhamento dos fios.", price: 90, startingAt: true, icon: "≈" },
  { id: "hidratacao-profunda", name: "Hidratação profunda", description: "Hidratação intensiva dos fios.", price: 30, startingAt: true, icon: "◇" },
  { id: "design-sobrancelha-1", name: "Design de sobrancelha 1.0", description: "Limpeza e alinhamento da sobrancelha.", price: 15, icon: "⌒" },
  { id: "design-sobrancelha-2", name: "Design de sobrancelha 2.0", description: "Design completo e definição da sobrancelha.", price: 30, icon: "⌒" },
  { id: "limpeza-pele-1", name: "Limpeza de pele 1.0", description: "Cuidado facial essencial.", price: 25, icon: "◇" },
  { id: "limpeza-pele-2", name: "Limpeza de pele 2.0", description: "Limpeza facial completa e profunda.", price: 40, icon: "◇" },
  { id: "pigmentacao-cabelo", name: "Pigmentação — cabelo", description: "Pigmentação para realce e definição do cabelo.", price: 20, startingAt: true, icon: "◆" },
  { id: "pigmentacao-barba", name: "Pigmentação — barba", description: "Pigmentação para realce e definição da barba.", price: 12, startingAt: true, icon: "◆" },
  { id: "platinado", name: "Platinado", description: "Descoloração e tonalização dos fios.", price: 90, startingAt: true, icon: "✦" },
  { id: "luzes", name: "Luzes", description: "Iluminação e contraste nos fios.", price: 60, startingAt: true, icon: "✦" },
  { id: "epilacao-orelha", name: "Epilação da orelha — cera", description: "Remoção cuidadosa dos pelos com cera.", price: 15, icon: "○" },
  { id: "epilacao-nariz", name: "Epilação do nariz — cera", description: "Remoção cuidadosa dos pelos com cera.", price: 15, icon: "○" },
  { id: "acabamento-pezinho", name: "Acabamento do pezinho", description: "Contorno e acabamento preciso.", price: 15, icon: "⌁" },
  { id: "barboterapia", name: "Barboterapia", description: "Tratamento, desenho e cuidado completo da barba.", price: 30, icon: "◒" },
];
