import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Phone } from "lucide-react";

const Hero = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById("appointment");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] md:min-h-[90vh] flex items-center pt-14 md:pt-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/photos/behindimage.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6 animate-slide-in-left">
            <div className="inline-block px-3 py-1 bg-primary/10 rounded-full">
              <span className="text-xs md:text-sm font-medium text-primary">Professional Dental Care</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Welcome to<br />
              <span className="text-primary">Dr. Samer Farhat</span>
            </h1>
            
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-xl">
              Experience exceptional dental care with advanced technology and personalized treatment. Your smile is our priority.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
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

            {/* Location Badge */}
            <div className="flex items-start gap-2 pt-2 text-xs md:text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
              <span>Beirut – Chiyah – Mar Mkhayel Church – Near Mazen Pharmacy</span>
            </div>
          </div>

          {/* Doctor Image */}
         <div className="hidden md:flex justify-center items-center animate-slide-in-right">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl transition-all duration-500 group-hover:bg-primary/30" />
             <img 
  src="/photos/drlogo.jpg" 
  alt="Dr. Samer Farhat"
   className="relative w-full max-w-md rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-102"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
