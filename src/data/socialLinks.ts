import { business } from "./business";

export const socialLinks = [
  { label: "Agendamento", short: "AG", url: business.bookingUrl },
  { label: "TikTok", short: "TT", url: business.tiktokUrl },
  { label: "Instagram", short: "IG", url: business.instagramUrl },
  { label: "WhatsApp", short: "WA", url: `https://wa.me/${business.phoneNumber}` },
  { label: "Localização", short: "MAP", url: business.mapsUrl },
];