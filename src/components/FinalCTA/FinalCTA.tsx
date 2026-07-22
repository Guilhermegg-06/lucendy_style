import { business } from "../../data/business";
import { BookingTrigger } from "../Booking/BookingProvider";

export default function FinalCTA() {
  return <section className="final-cta content-shell"><p className="eyebrow">A CADEIRA ESTÁ PRONTA</p><h2>{business.slogan}</h2><p>Escolha o serviço e reserve seu horário online.</p><BookingTrigger className="primary-button">Agendar agora →</BookingTrigger></section>;
}