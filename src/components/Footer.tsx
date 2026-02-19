import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/cohby-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Cohby Consult" className="h-20 w-auto mb-4" />
            <p className="text-primary-foreground/80 text-sm">
              Your trusted partner in achieving global education excellence. Transforming academic dreams into reality since inception.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#destinations" className="text-primary-foreground/80 hover:text-secondary transition-colors">Study Destinations</a></li>
              <li><a href="#courses" className="text-primary-foreground/80 hover:text-secondary transition-colors">Programs</a></li>
              <li><a href="/about-us" className="text-primary-foreground/80 hover:text-secondary transition-colors">About Us</a></li>
              <li><Link to="/terms-of-service" className="text-primary-foreground/80 hover:text-secondary transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="text-primary-foreground/80 hover:text-secondary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Study Destinations</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">USA</li>
              <li className="text-primary-foreground/80">United Kingdom</li>
              <li className="text-primary-foreground/80">Austria</li>
              <li className="text-primary-foreground/80">Denmark</li>
              <li className="text-primary-foreground/80">Canada</li>
              <li className="text-primary-foreground/80">Finland</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">info@cohbyconsult.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">+1 343 883 2087</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">+44 7424 742415</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary" />
                <span className="text-primary-foreground/80">Global Education Hub</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-primary-foreground/70 mb-4 md:mb-0">
              © {new Date().getFullYear()} Cohby Consult. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
