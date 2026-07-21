import { business } from "./business";

export const socialLinks = [
  { label: "Agendamento", icon: "calendar" as const, url: business.bookingUrl },
  { label: "TikTok", icon: "tiktok" as const, url: business.tiktokUrl },
  { label: "Instagram", icon: "instagram" as const, url: business.instagramUrl },
  { label: "WhatsApp", icon: "whatsapp" as const, url: `https://wa.me/${business.phoneNumber}` },
  { label: "Localização", icon: "map" as const, url: business.mapsUrl },
];