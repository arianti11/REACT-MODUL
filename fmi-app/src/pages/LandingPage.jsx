import { Suspense, lazy } from "react";
import GuestNavbar from "../components/guest/GuestNavbar";
import HeroSection from "../components/guest/HeroSection";

// Lazy load section yang tidak critical untuk performance
const AboutSection = lazy(() => import("../components/guest/AboutSection"));
const ProductsSection = lazy(() => import("../components/guest/ProductsSection"));
const TestimonialsSection = lazy(() => import("../components/guest/TestimonialsSection"));
const GuestFooter = lazy(() => import("../components/guest/GuestFooter"));

// Skeleton loading component
const SectionSkeleton = () => (
  <div className="py-24 animate-pulse">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-8 bg-gray-200 rounded-full w-48 mx-auto mb-4"></div>
      <div className="h-12 bg-gray-200 rounded-full w-96 mx-auto mb-6"></div>
      <div className="h-4 bg-gray-200 rounded-full w-72 mx-auto"></div>
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar: tidak di-lazy karena harus langsung tampil */}
      <GuestNavbar />

      {/* Hero: tidak di-lazy karena above-the-fold */}
      <HeroSection />

      {/* Sections berikutnya di-lazy load */}
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ProductsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<div className="h-64 bg-gray-900 animate-pulse"></div>}>
        <GuestFooter />
      </Suspense>
    </div>
  );
};

export default LandingPage;