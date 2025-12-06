import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Phone } from "lucide-react";

const Hero = () => {
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
      className="relative min-h-[78vh] flex items-center pt-8 pb-10 sm:pt-10 md:pt-12"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/photos/behindimage.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* ⭐ Floating Feedback Button (TEXT ONLY) */}
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">

          {/* TEXT */}
          <div className="space-y-4 animate-slide-in-left text-center md:text-left">

            {/* Tag */}
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mx-auto md:mx-0">
              <span className="text-xs font-medium text-primary">
                Professional Dental Care
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground">
              Welcome to <br />
              <span className="text-primary block sm:flex sm:items-center sm:justify-center md:justify-start">
                Dr. Samer Farhat
                <span
                  className="text-primary text-xl sm:text-2xl md:text-3xl sm:ml-2 mt-1 sm:mt-0 block"
                  style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                  For Dental Solution
                </span>
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-md mx-auto md:mx-0">
              Experience premium dental care with advanced technology and
              personalized treatment. Your smile is our priority.
            </p>

            {/* ⭐ TRUST BADGES */}
            <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
              <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[11px] font-medium">
                ⭐ 9+ Years Experience
              </div>
              <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[11px] font-medium">
                ⭐ Endodontics Specialist
              </div>
              <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-[11px] font-medium">
                ⭐ Hollywood Smile Expert
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-2 pt-2 justify-center md:justify-start">
              <Button
                onClick={scrollToAppointment}
                size="lg"
                className="shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>

              <a href="tel:+96176026004" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +961 76 026 004
                </Button>
              </a>
            </div>

            {/* LOCATION */}
            <div className="flex items-start justify-center md:justify-start gap-2 pt-2 text-xs sm:text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 text-primary" />
              <span className="max-w-[260px] leading-snug">
                Beirut – Chiyah – Mar Mkhayel Church – Near Mazen Pharmacy
              </span>
            </div>
          </div>

          {/* IMAGE (premium framed) */}
          <div className="flex flex-col items-center animate-slide-in-right pt-4 md:pt-0">
            <div className="relative group">

              {/* Glow Behind Image */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 
                              rounded-full blur-2xl opacity-70 group-hover:opacity-90 transition-all duration-700" />

              {/* Gradient Ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary/60 via-transparent to-accent/60 p-[2px]">
                <div className="w-full h-full rounded-full bg-background" />
              </div>

              {/* Your Original Image */}
              <img
                src="/photos/drlogo.jpg"
                alt="Dr. Samer Farhat"
                className="
                  relative
                  w-[130px] sm:w-[170px] md:w-[230px]
                  rounded-full
                  shadow-xl
                  transition-transform duration-500
                  group-hover:scale-105
                  object-cover
                  aspect-square
                "
              />

              {/* Shine Hover Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr 
                              from-transparent via-white/10 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Signature */}
            <div
              className="text-primary text-2xl sm:text-3xl md:text-4xl mt-3"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Dr. Samer Farhat
            </div>

            <div className="text-[11px] sm:text-xs text-primary/80 font-medium tracking-wide -mt-1">
              Dental Specialist
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
