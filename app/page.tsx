import { Navbar } from "./Navbar";
import About from "./About";
import Features from "./Features";
import WarroomDifference from "./WarroomDifference";
import { GlassCard } from "./components/ui/glass-card";
import DefaultDemo from "./zoom-parallax-demo";
import FUITestimonialWithSlide from "./testimonials";
import SectionOne from "./SectionOne";
import Footer from "./Footer";
import CouponsSection from "./CouponsSection";
import FAQSection from "./FAQSection";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      {/* Global animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-gradient-to-r from-pink-600/10 to-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />

        {/* Smaller floating particles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }} />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '3s', animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '5s', animationDuration: '3.5s' }} />
      </div>

      {/* Subtle grid overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <Navbar />
      <SectionOne />
      <About />
      <Features />
      <WarroomDifference />
      <DefaultDemo />
      <GlassCard />
      <CouponsSection />
      <FUITestimonialWithSlide />
      <FAQSection />
      <Footer />
    </div>
  );
}
