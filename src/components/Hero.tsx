import { GraduationCap, Globe, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onOpenForm: () => void;
}

const Hero = ({ onOpenForm }: HeroProps) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-primary/20 -z-10" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-secondary/20 to-primary/20 backdrop-blur-md border-2 border-secondary/50 px-8 py-3 rounded-full mb-8 animate-fade-in shadow-custom-glow">
            <Sparkles className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-heading font-bold text-base md:text-lg tracking-wide">
              2026-2027 INTAKE OPEN
            </span>
            <Sparkles className="w-5 h-5 text-secondary" style={{ animationDelay: "0.5s" }} />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
            Your Gateway to
            <span className="block text-secondary mt-2">
              Global Education Excellence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Transform your academic dreams into reality with expert guidance. We help students secure admissions to top universities across USA, UK, Austria, Denmark, Canada, and Finland.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              onClick={onOpenForm}
              size="lg" 
              className="bg-gradient-cta hover:shadow-custom-glow hover:scale-105 transition-all duration-300 font-heading font-bold text-base md:text-lg px-10 py-7 shadow-lg"
            >
              Register Online
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-primary-foreground/10 backdrop-blur-md border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/20 hover:scale-105 transition-all duration-300 font-heading font-semibold text-base md:text-lg px-10 py-7 shadow-lg"
            >
              <a href="#destinations">
                Explore Destinations
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-gradient-to-br from-primary-foreground/15 to-primary-foreground/5 backdrop-blur-md rounded-2xl p-8 border-2 border-primary-foreground/30 hover:border-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-custom-glow group">
              <GraduationCap className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-heading font-bold text-primary-foreground mb-2">20+</div>
              <div className="text-sm text-primary-foreground/90 font-medium">Partner Universities</div>
            </div>
            <div className="bg-gradient-to-br from-primary-foreground/15 to-primary-foreground/5 backdrop-blur-md rounded-2xl p-8 border-2 border-primary-foreground/30 hover:border-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-custom-glow group">
              <Globe className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-heading font-bold text-primary-foreground mb-2">6</div>
              <div className="text-sm text-primary-foreground/90 font-medium">Countries</div>
            </div>
            <div className="bg-gradient-to-br from-primary-foreground/15 to-primary-foreground/5 backdrop-blur-md rounded-2xl p-8 border-2 border-primary-foreground/30 hover:border-secondary/50 transition-all duration-300 hover:scale-105 hover:shadow-custom-glow group">
              <Award className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-heading font-bold text-primary-foreground mb-2">100+</div>
              <div className="text-sm text-primary-foreground/90 font-medium">Successful Placements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
