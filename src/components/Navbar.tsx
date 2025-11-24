import { useState } from "react";
import { Menu, X, Phone, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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
        <div className="flex justify-between items-center h-14 md:h-16">

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
              <span className="font-semibold text-sm md:text-base text-foreground">Dr. Samer Farhat</span>
              <span className="text-[10px] md:text-xs text-muted-foreground">Dental Specialist</span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* 🌙 iOS Dark Mode Toggle (Mobile) */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative md:hidden w-12 h-6 rounded-full transition-all duration-300
                         flex items-center px-1
                         shadow-inner
                         bg-secondary/40"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 rounded-full blur-md transition-all duration-300 ${
                  theme === "dark" ? "bg-blue-500/30 scale-110" : "bg-yellow-400/20 scale-75"
                }`}
              />

              {/* Circle Knob */}
              <div
                className={`h-5 w-5 rounded-full transition-all duration-300 transform
                            ${theme === "dark" ? "translate-x-6 bg-blue-500" : "translate-x-0 bg-yellow-400"}
                            shadow-md`}
              />
            </button>

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

              {/* Desktop Dark Mode Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative w-12 h-6 rounded-full transition-all duration-300
                           flex items-center px-1
                           shadow-inner bg-secondary/40"
              >
                <div
                  className={`absolute inset-0 rounded-full blur-md transition-all duration-300 ${
                    theme === "dark" ? "bg-blue-500/30 scale-110" : "bg-yellow-400/20 scale-75"
                  }`}
                />
                <div
                  className={`h-5 w-5 rounded-full transition-all duration-300 transform
                              ${theme === "dark" ? "translate-x-6 bg-blue-500" : "translate-x-0 bg-yellow-400"}
                              shadow-md`}
                />
              </button>

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

              <Button onClick={() => scrollToSection("appointment")} size="sm" className="mt-2 w-full">
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
