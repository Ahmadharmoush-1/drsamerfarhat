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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const mapUrl =
    "https://www.google.com/maps/place/33%C2%B051'27.8%22N+35%C2%B031'02.6%22E/@33.8577232,35.5148239,17z/data=!3m1!4b1!4m4!3m3!8m2!3d33.8577232!4d35.5173988?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-14 md:h-16">

          {/* LEFT */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-9 h-9 rounded-full overflow-hidden">
              <img
                src="/photos/drlogo.jpg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-sm">
                Dr. Samer Farhat
              </span>
              <span className="text-[10px] text-muted-foreground">
                Dental Specialist
              </span>
            </div>
          </div>

          {/* RIGHT DESKTOP */}
          <div className="hidden md:flex items-center gap-5">

            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>

            {/* COSMETIC DROPDOWN */}
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

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-2 ml-1">
              <a
                href="https://www.instagram.com/drsamerfarhat/"
                target="_blank"
              >
                <Instagram className="w-5 h-5 text-pink-500" />
              </a>
              <a href="https://wa.me/96176026004" target="_blank">
                <MessageCircle className="w-5 h-5 text-green-500" />
              </a>
              <a href={mapUrl} target="_blank">
                <MapPin className="w-5 h-5 text-red-500" />
              </a>
            </div>
          </div>

          {/* MOBILE RIGHT */}
          <div className="flex items-center gap-3 md:hidden">
            <a href="https://www.instagram.com/drsamerfarhat/" target="_blank">
              <Instagram className="w-5 h-5 text-pink-500" />
            </a>
            <a href="https://wa.me/96176026004" target="_blank">
              <MessageCircle className="w-5 h-5 text-green-500" />
            </a>
            <a href={mapUrl} target="_blank">
              <MapPin className="w-5 h-5 text-red-500" />
            </a>

            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden py-3 border-t">
            <button onClick={() => scrollToSection("home")} className="block py-2">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="block py-2">
              About
            </button>

            <div className="py-2">
              <p className="text-yellow-600 font-semibold">
                Cosmetic Dentistry
              </p>
              <button onClick={() => goToCosmetic()} className="block pl-4 py-1">
                Overview
              </button>
              <button
                onClick={() => goToCosmetic("#emax-veneers")}
                className="block pl-4 py-1"
              >
                E-max Veneers
              </button>
              <button
                onClick={() => goToCosmetic("#vip-composite")}
                className="block pl-4 py-1"
              >
                VIP Composite Veneers
              </button>
            </div>

            <button onClick={() => scrollToSection("gallery")} className="block py-2">
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="block py-2"
            >
              Testimonials
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
