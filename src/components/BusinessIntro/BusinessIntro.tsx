import { business } from "../../data/business";
import { navigationCards } from "../../data/navigation";
import { socialLinks } from "../../data/socialLinks";
import { getBusinessStatus } from "../../utils/businessStatus";
import { createWhatsAppUrl } from "../../utils/whatsapp";
import SmartImage from "../SmartImage/SmartImage";

export default function BusinessIntro() {
  const status = getBusinessStatus();
  const bookingUrl = createWhatsAppUrl(business.phoneNumber, business.bookingMessage);
  return <div className="content-shell intro" id="agendar">
    <section className="business-summary" aria-labelledby="business-name">
      <div><p className="eyebrow">Barbearia em {business.address.city}</p><h1 id="business-name">{business.name}</h1><p>{business.description}</p></div>
      <div className="quick-info"><span className={`status ${status.isOpen ? "open" : ""}`}><i />{status.label}</span><span>{status.isOpen ? "Hoje até 20h" : status.nextOpeningText}</span><span>⌖ {business.address.city} — {business.address.state}</span></div>
    </section>
    <a className="primary-button" href={bookingUrl} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">◌</span> Agendar pelo WhatsApp</a>
    <nav className="social-links" aria-label="Redes sociais">{socialLinks.map((link) => <a key={link.label} href={link.url} target={link.url.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={link.label} title={link.label}>{link.short}</a>)}</nav>
    <section className="nav-cards" aria-label="Explore a Voucher Barbearia">{navigationCards.map((card) => <a className={card.large ? "nav-card nav-card--large" : "nav-card"} href={card.href} key={card.title} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"><SmartImage src={card.image} alt="" label={card.title} /><span className="nav-card__overlay" /><span className="nav-card__content"><b>{card.icon}</b><strong>{card.title}</strong><small>{card.text}</small></span></a>)}</section>
    <a className="booking-card" href={bookingUrl} target="_blank" rel="noopener noreferrer"><span><small>PRONTO PARA MUDAR?</small><strong>Reserve seu horário</strong></span><b>→</b></a>
  </div>;
}
