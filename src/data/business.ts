export const business = {
  name: "Voucher Barbearia",
  slogan: "Seu próximo visual começa aqui.",
  description: "Estilo, cuidado e atendimento em cada detalhe.",
  phoneDisplay: "(82) 9 9682-2853",
  phoneNumber: "5582996822853",
  instagramUsername: "@lucendy_style",
  instagramUrl: "https://instagram.com/lucendy_style",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=R.%20C%C3%B4nego%20Terra%20Nova%2C%201681%2C%20Macei%C3%B3%20AL",
  address: { street: "R. Cônego Terra Nova, 1681", district: "Luciano Cavalcante Seminário", city: "Maceió", state: "AL" },
  bookingMessage: "Olá! Encontrei a Voucher Barbearia pelo site e gostaria de agendar um horário.",
};

export const openingHours = [
  { day: "Domingo", hours: "Fechado", open: false },
  { day: "Segunda", hours: "Fechado", open: false },
  ...["Terça", "Quarta", "Quinta", "Sexta", "Sábado"].map((day) => ({ day, hours: "09h às 20h", open: true })),
];
