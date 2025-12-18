import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Instagram,
  MapPin,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const clinicLocations = [
  {
    name: "Chiyah – Beirut Clinic",
    url: "https://www.google.com/maps/dir/?api=1&destination=33.8582379,35.5145683",
  },
  // {
  //   name: "Verdun – Beirut Clinic",
  //   url: "https://www.google.com/maps/dir/?api=1&destination=33.893791,35.489360",
  // },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const [showCosmetic, setShowCosmetic] = useState(false);

  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const goToCosmetic = (hash?: string) => {
    navigate(`/cosmetic-dentistry${hash || ""}`);
    setIsOpen(false);
    setShowCosmetic(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14 md:h-16 relative">

          {/* LEFT */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="/photos/drlogo.jpg" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm">Dr. Samer Farhat</span>
                <span className="text-[10px] text-muted-foreground">
                  Dental Specialist
                </span>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex items-center gap-1.5 ml-1">
              <a href="https://www.instagram.com/drsamerfarhat/" target="_blank">
                <Instagram className="w-5 h-5 text-pink-500" />
              </a>
              <a href="https://wa.me/96176026004" target="_blank">
                <MessageCircle className="w-5 h-5 text-green-500" />
              </a>

              {/* LOCATION */}
              <button onClick={() => setShowLocations(!showLocations)}>
                <MapPin className="w-5 h-5 text-red-500" />
              </button>

              {showLocations && (
                <div className="absolute top-14 left-20 bg-card border rounded-xl shadow-lg p-3 w-56 z-50">
                  <p className="text-xs font-semibold text-primary mb-2">
                    Choose Location
                  </p>
                  {clinicLocations.map((loc, i) => (
                    <button
                      key={i}
                      onClick={() => window.open(loc.url, "_blank")}
                      className="block w-full text-left py-1.5 px-2 rounded-lg hover:bg-primary/10"
                    >
                      {loc.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT DESKTOP */}
          <div className="hidden md:flex items-center gap-6">

            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>

            {/* ⭐ COSMETIC DENTISTRY DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setShowCosmetic(!showCosmetic)}
                className="flex items-center gap-1 font-medium text-yellow-600 hover:text-yellow-700"
              >
                Cosmetic Dentistry
                <ChevronDown className="w-4 h-4" />
              </button>

              {showCosmetic && (
                <div className="absolute top-10 left-0 bg-card border rounded-xl shadow-lg p-2 w-56">
                  <button
                    onClick={() => goToCosmetic()}
                    className="block w-full text-left px-3 py-2 hover:bg-primary/10 rounded-lg"
                  >
                    ⭐ Overview
                  </button>
                  <button
                    onClick={() => goToCosmetic("#emax-veneers")}
                    className="block w-full text-left px-3 py-2 hover:bg-primary/10 rounded-lg"
                  >
                    E-max Veneers
                  </button>
                  <button
                    onClick={() => goToCosmetic("#vip-composite")}
                    className="block w-full text-left px-3 py-2 hover:bg-primary/10 rounded-lg"
                  >
                    VIP Composite Veneers
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => scrollToSection("gallery")}>Gallery</button>
            <button onClick={() => scrollToSection("testimonials")}>
              Testimonials
            </button>

            <Button onClick={() => scrollToSection("appointment")} size="sm">
              <Phone className="w-3 h-3 mr-1" /> Book Now
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden py-3 border-t">
            <button onClick={() => scrollToSection("home")} className="block py-2">Home</button>
            <button onClick={() => scrollToSection("about")} className="block py-2">About</button>

            {/* MOBILE COSMETIC */}
            <div className="py-2">
              <p className="text-yellow-600 font-semibold">Cosmetic Dentistry</p>
              <button onClick={() => goToCosmetic()} className="block pl-4 py-1">Overview</button>
              <button onClick={() => goToCosmetic("#emax-veneers")} className="block pl-4 py-1">
                E-max Veneers
              </button>
              <button onClick={() => goToCosmetic("#vip-composite")} className="block pl-4 py-1">
                VIP Composite Veneers
              </button>
            </div>

            <button onClick={() => scrollToSection("gallery")} className="block py-2">Gallery</button>
            <button onClick={() => scrollToSection("testimonials")} className="block py-2">Testimonials</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
