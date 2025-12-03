import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Phone } from "lucide-react";

const Hero = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[70vh] md:min-h-[75vh] flex items-center pt-10 md:pt-12"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/photos/behindimage.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
          {/* TEXT */}
          <div className="space-y-3 md:space-y-4 animate-slide-in-left">
            <div className="inline-block px-2.5 py-1 bg-primary/10 rounded-full">
              <span className="text-xs md:text-xs font-medium text-primary">
                Professional Dental Care
              </span>
            </div>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground">
  Welcome to <br />

  <span className="text-primary flex items-center gap-3">
    Dr. Samer Farhat

    <span
      className="text-primary text-2xl sm:text-3xl md:text-4xl"
      style={{ fontFamily: "'Great Vibes', cursive" }}
    >
      For Dental Solution
    </span>
  </span>
</h1>




            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-lg">
              Experience premium dental care with advanced technology and
              personalized treatment. Your smile is our priority.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <Button
                onClick={scrollToAppointment}
                size="lg"
                className="shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>

              <a href="tel:+96176026004">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +961 76 026 004
                </Button>
              </a>
            </div>

            {/* LOCATION */}
            <div className="flex items-start gap-2 pt-1 text-xs md:text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 text-primary" />
              <span>
                Beirut – Chiyah – Mar Mkhayel Church – Near Mazen Pharmacy
              </span>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center items-center animate-slide-in-right pt-6 md:pt-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl transition-all duration-500 group-hover:bg-primary/20" />

             <img
  src="/photos/drlogo.jpg"
  alt="Dr. Samer Farhat"
  className="
    relative 
    w-[150px] sm:w-[190px] md:w-full md:max-w-sm
    rounded-full              /* makes it perfectly round */
    shadow-xl
    transition-transform duration-500 
    group-hover:scale-105
    object-cover              /* fills shape */
    aspect-square             /* forces a circle */
  "
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
