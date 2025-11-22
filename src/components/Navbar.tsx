import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
                   <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
  <img 
    src="/photos/drlogo.jpg"    // your logo path
    alt="Dr. Samer Farhat Logo"
    className="w-full h-full object-cover"
  />
</div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm md:text-base text-foreground">Dr. Samer Farhat</span>
              <span className="text-[10px] md:text-xs text-muted-foreground">Dental Specialist</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("gallery")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Gallery
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Testimonials
            </button>
            <Button onClick={() => scrollToSection("appointment")} size="sm" className="ml-2">
              <Phone className="w-3 h-3 mr-1" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-border">
            <div className="flex flex-col gap-2">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 text-left">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 text-left">
                About
              </button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 text-left">
                Services
              </button>
              <button onClick={() => scrollToSection("gallery")} className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 text-left">
                Gallery
              </button>
              <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 text-left">
                Testimonials
              </button>
              <Button onClick={() => scrollToSection("appointment")} size="sm" className="mt-2 w-full">
                <Phone className="w-3 h-3 mr-1" />
                Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
