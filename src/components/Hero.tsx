import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeedback = () => {
    const element = document.getElementById("feedback");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[78vh] flex items-center pt-8 pb-10 sm:pt-10 md:pt-12 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/photos/drlogo.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* FLOATING FEEDBACK BUTTON */}
      <button
        onClick={scrollToFeedback}
        className="
          fixed bottom-5 right-5 z-50
          bg-primary text-primary-foreground
          px-5 py-2 rounded-full
          shadow-lg hover:shadow-xl
          text-sm font-semibold tracking-wide
          hover:scale-110 transition-all duration-300
        "
      >
        Feedbacks
      </button>

      {/* FLOATING DENTAL ICONS */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-25">
        <img
          src="/photos/tooth.png"
          className="absolute top-6 left-4 w-8 sm:top-10 sm:left-10 sm:w-10 animate-float-slow"
        />
        <img
          src="/photos/implant.png"
          className="absolute bottom-[28%] left-[20%] w-10 sm:bottom-20 sm:left-[40%] sm:w-12 animate-float-medium"
        />
        <img
          src="/photos/dental-drill.png"
          className="absolute top-[20%] right-4 w-10 sm:top-[45%] sm:right-16 sm:w-14 animate-float-fast"
        />
        <img
          src="/photos/brush-teeth.png"
          className="absolute bottom-[18%] right-4 w-9 sm:bottom-10 sm:right-10 sm:w-10 animate-float-slower"
        />
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        @keyframes floatMedium {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(6deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes floatFast {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
          100% { transform: translateY(0px) scale(1); }
        }
        @keyframes floatSlower {
          0% { transform: translateY(0px) rotate(-4deg); }
          50% { transform: translateY(10px) rotate(4deg); }
          100% { transform: translateY(0px) rotate(-4deg); }
        }

        .animate-float-slow { animation: floatSlow 6s ease-in-out infinite; }
        .animate-float-medium { animation: floatMedium 7s ease-in-out infinite; }
        .animate-float-fast { animation: floatFast 5s ease-in-out infinite; }
        .animate-float-slower { animation: floatSlower 8s ease-in-out infinite; }

        @keyframes typeSignature {
          0% { width: 0; }
          100% { width: 100%; }
        }
      `}</style>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-4 animate-slide-in-left text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
              <span className="text-xs font-medium text-primary">
                Professional Dental Care
              </span>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <img
                src="/photos/drlogohero.jpg"
                alt="Dr. Samer Farhat"
                className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[440px] xl:w-[500px] object-contain"
              />
            </div>

            {/* ABOUT TEXT */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div
                className="text-primary text-lg sm:text-xl md:text-2xl overflow-hidden whitespace-nowrap"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  width: "0",
                  animation: "typeSignature 2.5s steps(30, end) forwards",
                }}
              >
                About Dr. Samer Farhat
              </div>

              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
                With 9+ years of expertise in advanced dentistry, Dr. Farhat
                provides world-class care with modern techniques and
                high-precision treatments.
              </p>
            </div>

            {/* BADGES */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[11px] font-medium">
                ⭐ 9+ Years Experience
              </div>
              <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[11px] font-medium">
                ⭐ Hollywood Smile Expert
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
              <Button
                onClick={scrollToAppointment}
                size="lg"
                className="shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>

              <Button
                size="lg"
                onClick={() => navigate("/cosmetic-dentistry")}
                className="
                  relative overflow-hidden
                  rounded-full
                  bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#B8962E]
                  text-[#2F2600] font-semibold
                  shadow-lg hover:shadow-2xl
                  hover:scale-105 transition-all duration-500
                "
              >
                <span
                  className="
                    absolute inset-0
                    bg-gradient-to-r from-transparent via-white/45 to-transparent
                    translate-x-[-120%]
                    hover:translate-x-[120%]
                    transition-transform duration-1000
                  "
                />
                <span className="relative z-10">
                  E-max & VIP Composite Veneers
                </span>
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE (EMPTY / CLEAN) */}
          <div />

        </div>
      </div>
    </section>
  );
};

export default Hero;
