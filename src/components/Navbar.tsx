import { useState } from "react";
import { Menu, X, Phone, Instagram, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// ⭐ TWO CLINIC LOCATIONS
const clinicLocations = [
  {
    name: "Chiyah – Beirut Clinic",
    url: "https://www.google.com/maps/dir/?api=1&destination=33.8582379,35.5145683",
  },
  {
    name: "Verdun – Beirut Clinic",
    url: "https://www.google.com/maps/dir/?api=1&destination=33.893791,35.489360",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLocations, setShowLocations] = useState(false);

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
        {/* TOP BAR */}
        <div className="flex justify-between items-center h-14 md:h-16 relative">

          {/* LEFT SIDE: Logo + Social Icons */}
          <div className="flex items-center gap-4">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/photos/drlogo.jpg"
                  alt="Dr. Samer Farhat Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm md:text-base text-foreground">
                  Dr. Samer Farhat
                </span>
                <span className="text-[10px] md:text-xs text-muted-foreground">
                  Dental Specialist
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-1.5 ml-1">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/drsamerfarhat/"
                target="_blank"
                className="p-1.5 rounded-full transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" style={{ color: "#E1306C" }} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/96176026004"
                target="_blank"
                className="p-1.5 rounded-full transition-all hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" style={{ color: "#25D366" }} />
              </a>

              {/* LOCATION DROPDOWN TRIGGER */}
              <button
                onClick={() => setShowLocations(!showLocations)}
                className="p-1.5 rounded-full transition-all hover:scale-110 relative"
              >
                <MapPin className="w-5 h-5" style={{ color: "#DB4437" }} />
              </button>

              {/* ⭐ LOCATION DROPDOWN */}
              {showLocations && (
                <div className="absolute top-14 left-20 bg-card border border-border rounded-xl shadow-lg p-3 w-56 z-50 animate-fadeIn">
                  <p className="text-xs font-semibold text-primary mb-2">
                    Choose Location
                  </p>

                  {clinicLocations.map((loc, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        window.open(loc.url, "_blank");
                        setShowLocations(false);
                      }}
                      className="block text-left w-full text-sm py-1.5 px-2 rounded-lg hover:bg-primary/10 transition-all"
                    >
                      {loc.name}
                    </button>
                  ))}
                </div>
              )}

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection("about")} className="text-sm font-medium hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection("gallery")} className="text-sm font-medium hover:text-primary transition-colors">Gallery</button>
              <button onClick={() => scrollToSection("testimonials")} className="text-sm font-medium hover:text-primary transition-colors">Testimonials</button>

              <Button onClick={() => scrollToSection("appointment")} size="sm" className="ml-2">
                <Phone className="w-3 h-3 mr-1" /> Book Now
              </Button>
            </div>
          </div>
        </div>

        {/* MOBILE NAVIGATION DROPDOWN */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-border animate-fadeIn slide-down">
            <div className="flex flex-col gap-2">
              <button onClick={() => scrollToSection("home")} className="py-2 text-left text-sm font-medium hover:text-primary">Home</button>
              <button onClick={() => scrollToSection("about")} className="py-2 text-left text-sm font-medium hover:text-primary">About</button>
              <button onClick={() => scrollToSection("services")} className="py-2 text-left text-sm font-medium hover:text-primary">Services</button>
              <button onClick={() => scrollToSection("gallery")} className="py-2 text-left text-sm font-medium hover:text-primary">Gallery</button>
              <button onClick={() => scrollToSection("testimonials")} className="py-2 text-left text-sm font-medium hover:text-primary">Testimonials</button>

              <Button
                onClick={() => scrollToSection("appointment")}
                size="sm"
                className="mt-2 w-full"
              >
                <Phone className="w-3 h-3 mr-1" /> Book Appointment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
