import { business } from "../../data/business";
export default function FinalCTA() { return <section className="final-cta content-shell"><p className="eyebrow">A CADEIRA ESTÁ PRONTA</p><h2>{business.slogan}</h2><p>Escolha o serviço e reserve seu horário online.</p><a className="primary-button" href={business.bookingUrl} target="_blank" rel="noopener noreferrer">Agendar agora →</a></section>; }
