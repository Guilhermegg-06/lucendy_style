import { navigation } from "../../data/navigation";
import useActiveSection from "../../hooks/useActiveSection";
import { BookingTrigger } from "../Booking/BookingProvider";

const observedSectionIds = ["inicio", "servicos", "trabalhos", "localizacao"];

export default function BottomNavigation() {
  const activeSection = useActiveSection(observedSectionIds);

  return (
    <nav className="bottom-nav" aria-label="Navegação principal">
      <div>
        {navigation.map((item) => {
          if (item.label === "Agendar") {
            return (
              <BookingTrigger
                className="featured"
                key={item.label}
                ariaLabel="Abrir opções de agendamento"
              >
                <span aria-hidden="true">{item.icon}</span>
                <small>{item.label}</small>
              </BookingTrigger>
            );
          }

          const sectionId = item.href.slice(1);
          const isActive = activeSection === sectionId;

          return (
            <a
              className={isActive ? "is-active" : undefined}
              href={item.href}
              key={item.label}
              aria-current={isActive ? "location" : undefined}
            >
              <span aria-hidden="true">{item.icon}</span>
              <small>{item.label}</small>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
