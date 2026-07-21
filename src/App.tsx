import HeroHeader from "./components/HeroHeader/HeroHeader";
import BusinessIntro from "./components/BusinessIntro/BusinessIntro";
import ServicesSection from "./components/Services/ServicesSection";
import GallerySection from "./components/Gallery/GallerySection";
import VoucherSection from "./components/Voucher/VoucherSection";
import LocationSection from "./components/Location/LocationSection";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import "./site.css";

function App() {
  return (
    <><main id="inicio"><HeroHeader /><BusinessIntro /><ServicesSection /><GallerySection /><VoucherSection /><LocationSection /><FinalCTA /><Footer /></main><BottomNavigation /></>
  );
}

export default App;
