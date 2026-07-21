export interface Service { id: string; name: string; description: string; price: number; duration: string; icon: string }
export const services: Service[] = [
  { id: "corte", name: "Corte masculino", description: "Corte personalizado e finalização.", price: 35, duration: "45 min", icon: "✦" },
  { id: "barba", name: "Barba", description: "Desenho, toalha quente e acabamento.", price: 25, duration: "30 min", icon: "◒" },
  { id: "combo", name: "Corte + barba", description: "Experiência completa em uma sessão.", price: 55, duration: "1h 15 min", icon: "＋" },
  { id: "acabamento", name: "Acabamento", description: "Contornos renovados com precisão.", price: 15, duration: "20 min", icon: "⌁" },
  { id: "sobrancelha", name: "Sobrancelha", description: "Limpeza e alinhamento natural.", price: 10, duration: "15 min", icon: "⌒" },
  { id: "pele", name: "Limpeza de pele", description: "Cuidado facial para renovar a pele.", price: 30, duration: "35 min", icon: "◇" },
];
