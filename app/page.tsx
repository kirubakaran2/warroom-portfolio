import { Navbar } from "./Navbar";
import About from "./About";
import Features from "./Features";
import { GlassCard } from "./components/ui/glass-card";
import DefaultDemo from "./zoom-parallax-demo";
import FUITestimonialWithSlide from "./testimonials";
import SectionOne from "./SectionOne";
import Footer from "./Footer";
import CouponsSection from "./CouponsSection";
export default function Home() {
  return (
    <>
      <Navbar />
      <SectionOne />
      <About />
      <Features />
      <DefaultDemo />
      <GlassCard />
      <CouponsSection />
      <FUITestimonialWithSlide />
      <Footer />
    </>
  );
}
