import HeroHeader from "./components/HeroHeader/HeroHeader";
import BusinessIntro from "./components/BusinessIntro/BusinessIntro";
import ServicesSection from "./components/Services/ServicesSection";
import GallerySection from "./components/Gallery/GallerySection";
import LocationSection from "./components/Location/LocationSection";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";
import BottomNavigation from "./components/BottomNavigation/BottomNavigation";
import { BookingProvider } from "./components/Booking/BookingProvider";
import ReviewPrompt from "./components/ReviewPrompt/ReviewPrompt";
import "./site.css";

function App() {
  return (
    <BookingProvider>
      <main id="inicio"><HeroHeader /><BusinessIntro /><ServicesSection /><GallerySection /><LocationSection /><FinalCTA /><Footer /></main>
      <BottomNavigation />
      <ReviewPrompt />
    </BookingProvider>
  );
}

export default App;