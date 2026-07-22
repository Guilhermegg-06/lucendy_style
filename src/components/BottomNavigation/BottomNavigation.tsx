import { navigation } from "../../data/navigation";
import { BookingTrigger } from "../Booking/BookingProvider";

export default function BottomNavigation() {
  return <nav className="bottom-nav" aria-label="Navegação principal"><div>{navigation.map((item) => item.label === "Agendar" ? <BookingTrigger className="featured" key={item.label} ariaLabel="Abrir opções de agendamento"><span aria-hidden="true">{item.icon}</span><small>{item.label}</small></BookingTrigger> : <a href={item.href} key={item.label}><span aria-hidden="true">{item.icon}</span><small>{item.label}</small></a>)}</div></nav>;
}