import { business } from "../../data/business";
import { services } from "../../data/services";
import { createWhatsAppUrl } from "../../utils/whatsapp";
export default function ServicesSection() {
  return <section className="section content-shell" id="servicos" aria-labelledby="services-title"><header className="section-heading"><p className="eyebrow">ESCOLHA SEU ESTILO</p><h2 id="services-title">Serviços</h2></header><div className="service-list">{services.map((service) => { const url = createWhatsAppUrl(business.phoneNumber, `Olá! Gostaria de agendar o serviço ${service.name} na Voucher Barbearia.`); return <article className="service-card" key={service.id}><span className="service-icon" aria-hidden="true">{service.icon}</span><div><h3>{service.name}</h3><p>{service.description}</p><small>{service.duration}</small></div><div className="service-action"><strong>{service.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })}</strong><a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Agendar ${service.name}`}>Agendar</a></div></article>; })}</div></section>;
}
