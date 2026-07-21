export const business = {
  name: "Lucendy Style",
  slogan: "Seu próximo visual começa aqui.",
  description: "Estilo, cuidado e atendimento em cada detalhe.",
  phoneDisplay: "(82) 9 9682-2853",
  phoneNumber: "5582996822853",
  instagramUsername: "@lucendy_style",
  instagramUrl: "https://www.instagram.com/lucendy_style?igsh=MTRza3lsNmNwam53MA%3D%3D&utm_source=qr",
  tiktokUrl: "https://www.tiktok.com/@lucendystyle_765?_r=1&_t=ZS-98CV1oZnhoa",
  bookingUrl: "https://sites.appbarber.com.br/lucendystyle-2n3h",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Loteamento%20Terra%20Nova%2C%200%2C%20Centro%2C%20Maribondo%2C%20AL%2C%2057670-000",
  address: {
    street: "Loteamento Terra Nova, 0",
    district: "Centro",
    city: "Maribondo",
    state: "AL",
    postalCode: "57670-000",
    reference: "Última casa do lado esquerdo",
  },
  bookingMessage: "Olá! Encontrei a Lucendy Style pelo site e gostaria de falar com vocês.",
};

export const openingHours = [
  { day: "Domingo", hours: "Fechado", open: false },
  { day: "Segunda", hours: "Fechado", open: false },
  ...["Terça", "Quarta", "Quinta", "Sexta", "Sábado"].map((day) => ({ day, hours: "09h às 20h", open: true })),
];