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
  className="relative min-h-[78vh] flex items-start pt-16 pb-12 sm:pt-20 md:pt-24 overflow-hidden"
>


      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/photos/behindimage.jpg')" }}
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
          text-sm font-semibold
          hover:scale-110 transition-all duration-300
        "
      >
        Feedbacks
      </button>

      {/* FLOATING ICONS */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <img src="/photos/tooth.png" className="absolute top-6 left-4 w-8 animate-float-slow" />
        <img src="/photos/implant.png" className="absolute bottom-[28%] left-[20%] w-10 animate-float-medium" />
        <img src="/photos/dental-drill.png" className="absolute top-[20%] right-4 w-10 animate-float-fast" />
        <img src="/photos/brush-teeth.png" className="absolute bottom-[18%] right-4 w-9 animate-float-slower" />
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes floatSlow { 0%{transform:translateY(0)}50%{transform:translateY(-12px)}100%{transform:translateY(0)} }
        @keyframes floatMedium { 0%{transform:translateY(0)}50%{transform:translateY(-16px) rotate(6deg)}100%{transform:translateY(0)} }
        @keyframes floatFast { 0%{transform:translateY(0)}50%{transform:translateY(-8px) scale(1.05)}100%{transform:translateY(0)} }
        @keyframes floatSlower { 0%{transform:translateY(0)}50%{transform:translateY(10px) rotate(4deg)}100%{transform:translateY(0)} }

        .animate-float-slow{animation:floatSlow 6s infinite}
        .animate-float-medium{animation:floatMedium 7s infinite}
        .animate-float-fast{animation:floatFast 5s infinite}
        .animate-float-slower{animation:floatSlower 8s infinite}

        @keyframes typeSignature { from{width:0} to{width:100%} }
      `}</style>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex justify-center md:justify-start">

          {/* LEFT CONTENT ONLY */}
          <div className="space-y-3 animate-slide-in-left text-center md:text-left">



            {/* TAG */}
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
              <span className="text-xs font-medium text-primary">
                Professional Dental Care
              </span>
            </div>

            {/* LOGO */}
            {/* <img
              src="/photos/drlogohero.jpg"
              alt="Dr. Samer Farhat"
              className="mx-auto md:mx-0 w-[260px] sm:w-[320px] md:w-[380px] object-contain"
            /> */}

            {/* DOCTOR IMAGE */}
            {/* DOCTOR IMAGE */}
<div className="flex justify-center md:justify-start -mt-4">



  <div className="relative group w-[180px] sm:w-[220px] md:w-[260px] aspect-square">

    {/* BLUE RING */}
    <div className="absolute inset-0 rounded-full border-[3px] border-primary" />

    {/* INNER DARK PLATE */}
    <div className="absolute inset-[10px] rounded-full bg-[#1b2430]" />

    {/* IMAGE */}
    <div className="absolute inset-[10px]">
      <img
        src="/photos/drlogo.jpg"
        alt="Dr. Samer Farhat"
        className="
          w-full h-full
          rounded-full
          object-cover
          shadow-xl
          transition-transform duration-500
          group-hover:scale-105
        "
      />
    </div>

    {/* TOOTH BADGE */}
    <div
      className="
        absolute
        bottom-0 right-0
        translate-x-[10%] translate-y-[10%]
        w-12 h-12 md:w-14 md:h-14
        rounded-full
        bg-[#0e1621]
        border-2 border-primary
        flex items-center justify-center
        shadow-xl
        transition-transform duration-500
        group-hover:scale-110
      "
    >
      <img
        src="/photos/tooth.png"
        alt="Tooth"
        className="w-6 md:w-7"
      />
    </div>

  </div>
</div>


            {/* ABOUT */}
            <div>
              <div
                className="text-primary text-lg sm:text-xl md:text-2xl overflow-hidden whitespace-nowrap"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  width: "0",
                  margin: "0 auto",
                  animation: "typeSignature 2.5s steps(30,end) forwards",
                }}
              >
                About Dr. Samer Farhat
              </div>

              <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto md:mx-0">
                With 9+ years of expertise in advanced dentistry, Dr. Farhat
                provides world-class care with modern techniques and
                high-precision treatments.
              </p>
            </div>

            {/* BADGES */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[11px]">
                ⭐ 9+ Years Experience
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[11px]">
                ⭐ Hollywood Smile Expert
              </span>
            </div>

            {/* BUTTONS (LAST ELEMENT) */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-8">
              <Button onClick={scrollToAppointment} size="lg">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>

              <Button
                size="lg"
                onClick={() => navigate("/cosmetic-dentistry")}
                className="
                  rounded-full
                  bg-gradient-to-r from-[#C9A227] via-[#D4AF37] to-[#B8962E]
                  text-[#2F2600] font-semibold
                "
              >
                 E-max & VIP Composite Veneers
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
