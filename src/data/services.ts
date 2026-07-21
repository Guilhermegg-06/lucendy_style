export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  startingAt?: boolean;
  icon: string;
}

export const services: Service[] = [
  { id: "pezinho", name: "Pezinho", description: "Acabamento e contorno.", price: 12, icon: "✦" },
  { id: "sobrancelha", name: "Sobrancelha", description: "Limpeza de sobrancelha.", price: 7, icon: "⌒" },
  { id: "bigode", name: "Bigode", description: "Aparo e acabamento.", price: 7, icon: "⌁" },
  { id: "pigmentacao", name: "Pigmentação", description: "Realce e definição.", price: 18, icon: "◇" },
  { id: "limpeza-pele-simples", name: "Limpeza de pele simples", description: "Cuidado facial essencial.", price: 20, icon: "◇" },
  { id: "bigode-sobrancelha", name: "Bigode + sobrancelha", description: "Combo de acabamento.", price: 10, icon: "+" },
  { id: "depilacao-nasal-aural", name: "Depilação nasal + aural (cera)", description: "Depilação com cera.", price: 15, icon: "✦" },
  { id: "desondulacao-1", name: "Desondulação 1.0", description: "Tratamento capilar.", price: 60, startingAt: true, icon: "≈" },
  { id: "desondulacao-2", name: "Desondulação 2.0", description: "Tratamento capilar intensivo.", price: 85, startingAt: true, icon: "≈" },
  { id: "alinhamento", name: "Alinhamento", description: "Alinhamento capilar.", price: 60, startingAt: true, icon: "≋" },
  { id: "selagem", name: "Selagem", description: "Selagem capilar.", price: 85, startingAt: true, icon: "≋" },
  { id: "progressiva", name: "Progressiva", description: "Tratamento de alisamento.", price: 85, startingAt: true, icon: "≈" },
  { id: "relaxamento", name: "Relaxamento capilar", description: "Relaxamento dos fios.", price: 40, startingAt: true, icon: "≈" },
  { id: "hidratacao", name: "Hidratação profunda", description: "Hidratação intensiva dos fios.", price: 35, startingAt: true, icon: "◇" },
  { id: "limpeza-pele-profunda", name: "Limpeza de pele profunda", description: "Cuidado facial completo.", price: 35, icon: "◇" },
  { id: "corte-social", name: "Corte social na máquina", description: "Corte social feito na máquina.", price: 25, icon: "✦" },
  { id: "corte-tesoura", name: "Corte na tesoura", description: "Corte personalizado na tesoura.", price: 30, icon: "✂" },
  { id: "corte", name: "Corte", description: "Corte masculino.", price: 30, icon: "✦" },
  { id: "barboterapia", name: "Barboterapia", description: "Tratamento e cuidado da barba.", price: 25, icon: "◒" },
  { id: "design-sobrancelha", name: "Design de sobrancelha", description: "Design e definição.", price: 25, icon: "⌒" },
  { id: "design-sobrancelha-simples", name: "Design de sobrancelha simples", description: "Alinhamento e limpeza.", price: 15, icon: "⌒" },
  { id: "combo-corte-sobrancelha-bigode", name: "Corte + sobrancelha + bigode", description: "Combo completo de acabamento.", price: 36, icon: "+" },
  { id: "combo-corte-pele-barboterapia", name: "Corte + limpeza de pele + barboterapia", description: "Combo de corte e cuidados.", price: 65, icon: "+" },
  { id: "combo-barboterapia-pele", name: "Barboterapia + limpeza de pele", description: "Combo de cuidados faciais.", price: 35, icon: "+" },
  { id: "combo-corte-barboterapia-depilacao", name: "Corte + barboterapia + depilação", description: "Experiência completa.", price: 60, icon: "+" },
];