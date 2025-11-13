import HeroOne from "./HeroOne";
import {Navbar} from "./Navbar";
import Framework from "./Framework";
import { GlassCard } from "./components/ui/glass-card";
import DefaultDemo from "./zoom-parallax-demo";
import FUITestimonialWithSlide from "./testimonials";
export default function Home() {
  return (
    <>
        <Navbar/>
    <HeroOne/>
    <Framework/>
    <DefaultDemo/>
    <GlassCard/>
    <FUITestimonialWithSlide/>
    </>
  );
}
