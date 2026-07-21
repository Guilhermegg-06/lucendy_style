import { navigation } from "../../data/navigation";
export default function BottomNavigation() { return <nav className="bottom-nav" aria-label="Navegação principal"><div>{navigation.map((item) => <a className={item.label === "Agendar" ? "featured" : ""} href={item.href} key={item.label}><span aria-hidden="true">{item.icon}</span><small>{item.label}</small></a>)}</div></nav>; }
