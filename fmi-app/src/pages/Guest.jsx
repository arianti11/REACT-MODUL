import GuestHeader from "../components/GuestHeader";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProductSection from "../components/ProductSection";
import TestimonialSection from "../components/TestimonialSection";
import GuestFooter from "../components/GuestFooter";

const Guest = () => {
  return (
    <div className="overflow-x-hidden">
      <GuestHeader />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <TestimonialSection />
      <GuestFooter />
    </div>
  );
};

export default Guest;