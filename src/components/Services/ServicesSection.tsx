import { services, servicePackages } from "../../data/services";
import { BookingTrigger } from "../Booking/BookingProvider";

const money = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });

export default function ServicesSection() {
  return (
    <section className="section content-shell" id="servicos" aria-labelledby="services-title">
      <header className="section-heading"><p className="eyebrow">ESCOLHA SEU ESTILO</p><h2 id="services-title">Serviços</h2></header>
      <div className="package-heading"><p className="eyebrow">COMBOS COM DESCONTO</p><h3>Pacotes Lucendy</h3><p>Mais cuidado em uma experiência completa.</p></div>
      <div className="package-list">{servicePackages.map((pack) => (
        <article className="package-card" key={pack.id}>
          <div className="package-card__top"><h3>{pack.name}</h3><span>{pack.discount ? `${money(pack.discount)} OFF` : pack.discountNote}</span></div>
          <ul>{pack.items.map((item) => <li key={item}>{item}</li>)}</ul>
          <BookingTrigger message={`Olá! Gostaria de agendar o pacote ${pack.name} na Lucendy Style.`} ariaLabel={`Agendar pacote ${pack.name}`}>Quero este pacote</BookingTrigger>
        </article>
      ))}</div>

      <div className="individual-heading"><p className="eyebrow">SERVIÇOS INDIVIDUAIS</p><h3>Tabela de valores</h3></div>
      <div className="service-list">{services.map((service) => (
        <article className="service-card" key={service.id}>
          <span className="service-icon" aria-hidden="true">{service.icon}</span>
          <div><h3>{service.name}</h3><p>{service.description}</p></div>
          <div className="service-action">
            <strong>{service.startingAt && <small>A partir de </small>}{money(service.price)}</strong>
            <BookingTrigger message={`Olá! Gostaria de agendar o serviço ${service.name} na Lucendy Style.`} ariaLabel={`Agendar ${service.name}`}>Agendar</BookingTrigger>
          </div>
        </article>
      ))}</div>
    </section>
  );
}