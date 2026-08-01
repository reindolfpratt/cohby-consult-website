import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/cohby-logo.png";

interface NavbarProps {
  onOpenForm: () => void;
}

const Navbar = ({ onOpenForm }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Programs", href: "/programs" },
    { name: "About Us", href: "/about-us" },
    { name: "Give Us Feedback", href: "/give-us-feedback" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-custom-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src={logo} 
              alt="COHBY Consult Logo" 
              className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-4 py-2 text-foreground font-medium hover:text-primary transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Button 
              onClick={onOpenForm}
              className="ml-4 bg-gradient-cta hover:shadow-custom-glow transition-all duration-300 font-heading font-semibold"
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-foreground font-medium hover:bg-muted rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <Button 
                onClick={() => {
                  onOpenForm();
                  setIsOpen(false);
                }}
                className="w-full bg-gradient-cta font-heading font-semibold"
              >
                Register Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
