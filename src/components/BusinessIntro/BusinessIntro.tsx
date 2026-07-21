import { business } from "../../data/business";
import { navigationCards } from "../../data/navigation";
import { socialLinks } from "../../data/socialLinks";
import { getBusinessStatus } from "../../utils/businessStatus";
import SmartImage from "../SmartImage/SmartImage";
import SocialIcon from "../SocialLinks/SocialIcon";

export default function BusinessIntro() {
  const status = getBusinessStatus();

  return (
    <div className="content-shell intro" id="agendar">
      <section className="business-summary" aria-labelledby="business-name">
        <div><p className="eyebrow">Barbearia em {business.address.city}</p><h1 id="business-name">{business.name}</h1><p>{business.description}</p></div>
        <div className="quick-info"><span className={`status ${status.isOpen ? "open" : ""}`}><i />{status.label}</span><span>{status.nextOpeningText}</span><span>⌖ {business.address.city} — {business.address.state}</span></div>
      </section>

      <a className="primary-button" href={business.bookingUrl} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">◌</span> Agendar horário</a>

      <section className="social-section" aria-labelledby="social-title">
        <div className="social-heading"><span aria-hidden="true"><SocialIcon name="like" /></span><div><p className="eyebrow">FIQUE POR DENTRO</p><h2 id="social-title">Acompanhe nossos trabalhos nas redes</h2></div></div>
        <nav className="social-links" aria-label="Redes e canais da Lucendy Style">
          {socialLinks.map((link) => <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label} title={link.label}><SocialIcon name={link.icon} /><small>{link.label}</small></a>)}
        </nav>
      </section>

      <section className="nav-cards" aria-label="Explore a Lucendy Style">{navigationCards.map((card) => <a className={card.large ? "nav-card nav-card--large" : "nav-card"} href={card.href} key={card.title} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"><SmartImage src={card.image} alt="" label={card.title} /><span className="nav-card__overlay" /><span className="nav-card__content"><b>{card.icon}</b><strong>{card.title}</strong><small>{card.text}</small></span></a>)}</section>
      <a className="booking-card" href={business.bookingUrl} target="_blank" rel="noopener noreferrer"><span><small>PRONTO PARA MUDAR?</small><strong>Reserve seu horário</strong></span><b>→</b></a>
    </div>
  );
}