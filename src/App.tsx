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
import ScrollExpand from "./components/ScrollExpand/ScrollExpand";
import "./site.css";

function App() {
  return (
    <BookingProvider>
      <main>
        <HeroHeader />
        <ScrollExpand
          mediaSrc="/images/posts/corte-barba.jpg"
          useWindowScroll
          startWidth={72}
          startHeight={62}
          startRadius={28}
          endRadius={0}
          mediaZoom={1.12}
          scrollDistance={0.8}
          holdDistance={0.12}
          smoothing={0.12}
          overlayScrim={0.25}
        />
        <BusinessIntro />
        <ServicesSection />
        <GallerySection />
        <LocationSection />
        <FinalCTA />
        <Footer />
      </main>
      <BottomNavigation />
      <ReviewPrompt />
    </BookingProvider>
  );
}

export default App;
