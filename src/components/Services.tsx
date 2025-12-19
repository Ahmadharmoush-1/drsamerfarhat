import {
  Activity,
  Sparkles,
  Drill,
  Smile,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const services = [
    {
      icon: Smile,
      title: "Cosmetic Dentistry",
      description:
        "Comprehensive aesthetic treatments including whitening, bonding, and smile makeovers.",
      vip: true,
      href: "/cosmetic-dentistry",
    },
    {
      icon: Activity,
      title: "Endodontics",
      description:
        "Expert root canal treatments using advanced techniques for pain-free procedures and long-lasting results.",
    },
    {
      icon: Sparkles,
      title: "Hollywood Smile",
      description:
        "Transform your smile with premium veneers designed to create a stunning, natural-looking aesthetic.",
    },
    {
      icon: Drill,
      title: "Dental Implants",
      description:
        "Replace missing teeth with durable, natural-looking implants that restore function and confidence.",
    },
  ];

  const handleCardClick = (service: typeof services[number]) => {
    if (service.href) {
      navigate(service.href);
    }
  };

  return (
    <section
      id="services"
      className="py-12 bg-gradient-to-b from-background via-background/95 to-background/90 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Areas of Dental Practice
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            What we offer
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(service)}
              className={`
                group rounded-2xl border transition-all duration-300 animate-fade-in
                ${service.href ? "cursor-pointer" : ""}
                ${
                  service.vip
                    ? "bg-gradient-to-br from-yellow-300/20 via-amber-200/10 to-yellow-400/20 border-yellow-400/50 shadow-md"
                    : "bg-card border-border hover:border-primary/50 hover:shadow-md"
                }
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-4 flex flex-col items-start">

                {/* ICON */}
                <div
                  className={`
                    w-10 h-10 rounded-lg flex items-center justify-center mb-3
                    ${
                      service.vip
                        ? "bg-yellow-400/20 text-yellow-600 shadow-sm"
                        : "bg-primary/10 text-primary"
                    }
                  `}
                >
                  <service.icon className="w-5 h-5" />
                </div>

                {/* TITLE */}
                <h3
                  className={`text-base font-semibold mb-1 ${
                    service.vip ? "text-yellow-700" : "text-foreground"
                  }`}
                >
                  {service.title}
                </h3>

                {/* VIP BADGE */}
                {service.vip && (
                  <span className="text-[10px] uppercase font-semibold tracking-wide text-yellow-600 mb-1">
                    ✨ VIP Service
                  </span>
                )}

                {/* DESCRIPTION */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {service.description}
                </p>

                {/* CTA → ONLY FOR COSMETIC DENTISTRY */}
                {service.vip && (
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-xs font-semibold text-yellow-600 hover:text-yellow-700 group/btn"
                  >
                    More info
                    <ChevronRight
                      size={16}
                      className="ml-1 group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* DOTS (OPTIONAL UI – KEPT) */}
        <div className="flex justify-center gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primary w-6"
                  : "bg-muted w-2 hover:bg-muted-foreground/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
