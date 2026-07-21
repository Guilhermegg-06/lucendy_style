import { business } from "../../data/business";
const logos = import.meta.glob<string>("../../assets/*.png", { eager: true, import: "default", query: "?url" });
export default function Footer() { const logo = Object.values(logos)[0]; return <footer className="footer content-shell">{logo && <img src={logo} alt="" />}<div><strong>{business.name}</strong><p>{business.phoneDisplay} · {business.instagramUsername}<br />{business.address.city} — {business.address.state}</p></div><small>© {new Date().getFullYear()} {business.name}. Desenvolvido por Guilherme.</small></footer>; }
