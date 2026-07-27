import { GraduationCap, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FlightAnimation } from "./FlightAnimation";

interface HeroProps {
  onOpenForm: () => void;
}

const Hero = ({ onOpenForm }: HeroProps) => {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden min-h-[90vh] flex items-center justify-center">
      {/* Animated Sky Canvas & Dual Aeroplane Motion (Background Layer) */}
      <FlightAnimation />

      {/* Subtle Vignette Overlay for Crisp Contrast */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-10 opacity-30" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-3 bg-secondary/30 backdrop-blur-md border-2 border-secondary px-7 py-2.5 rounded-full mb-6 animate-fade-in shadow-custom-glow">
            <span className="text-secondary-light font-heading font-bold text-sm md:text-base tracking-wide drop-shadow-sm">
              2026-2027 INTAKE OPEN
            </span>
          </div>

          {/* Main Heading (Scaled down slightly to reveal sky nodes) */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight animate-fade-in-up drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
            Your Gateway to
            <span className="block text-secondary mt-1 text-shadow-glow">
              Global Education Excellence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-slate-100 mb-8 max-w-xl mx-auto animate-fade-in-up drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium leading-relaxed" style={{ animationDelay: "0.1s" }}>
            Transform your academic dreams into reality with expert guidance. We help students secure admissions to top universities across USA, UK, Austria, Denmark, Canada, and Finland.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              onClick={onOpenForm}
              size="lg" 
              className="bg-gradient-cta hover:shadow-custom-glow hover:scale-105 transition-all duration-300 font-heading font-bold text-base md:text-lg px-9 py-6 shadow-2xl border border-white/20"
            >
              Register Online
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-slate-900/50 backdrop-blur-md border-2 border-white/60 text-white hover:bg-slate-800/80 hover:scale-105 transition-all duration-300 font-heading font-semibold text-base md:text-lg px-9 py-6 shadow-2xl"
            >
              <a href="#destinations">
                Explore Destinations
              </a>
            </Button>
          </div>

          {/* Stats Cards with Frosted Glass Backdrop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-slate-900/60 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20 hover:border-secondary/70 transition-all duration-300 hover:scale-105 hover:shadow-custom-glow group">
              <GraduationCap className="w-10 h-10 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
              <div className="text-3xl font-heading font-bold text-white mb-1 drop-shadow-md">20+</div>
              <div className="text-xs text-slate-200 font-medium">Partner Universities</div>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20 hover:border-secondary/70 transition-all duration-300 hover:scale-105 hover:shadow-custom-glow group">
              <Globe className="w-10 h-10 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
              <div className="text-3xl font-heading font-bold text-white mb-1 drop-shadow-md">6</div>
              <div className="text-xs text-slate-200 font-medium">Countries</div>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-lg rounded-2xl p-6 border-2 border-white/20 hover:border-secondary/70 transition-all duration-300 hover:scale-105 hover:shadow-custom-glow group">
              <Award className="w-10 h-10 text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
              <div className="text-3xl font-heading font-bold text-white mb-1 drop-shadow-md">100+</div>
              <div className="text-xs text-slate-200 font-medium">Successful Placements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
