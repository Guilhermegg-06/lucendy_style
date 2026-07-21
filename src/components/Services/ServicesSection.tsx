import { business } from "../../data/business";
import { services } from "../../data/services";

export default function ServicesSection() {
  return (
    <section className="section content-shell" id="servicos" aria-labelledby="services-title">
      <header className="section-heading"><p className="eyebrow">ESCOLHA SEU ESTILO</p><h2 id="services-title">Serviços</h2></header>
      <div className="service-list">{services.map((service) => (
        <article className="service-card" key={service.id}>
          <span className="service-icon" aria-hidden="true">{service.icon}</span>
          <div><h3>{service.name}</h3><p>{service.description}</p></div>
          <div className="service-action">
            <strong>{service.startingAt && <small>A partir de </small>}{service.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 })}</strong>
            <a href={business.bookingUrl} target="_blank" rel="noopener noreferrer" aria-label={`Agendar ${service.name}`}>Agendar</a>
          </div>
        </article>
      ))}</div>
    </section>
  );
}