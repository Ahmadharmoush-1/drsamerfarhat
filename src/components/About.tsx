import { Award, Users, Clock, Stethoscope } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "9+" },
    { icon: Users, label: "Happy Patients", value: "2000+" },
    { icon: Clock, label: "Working Hours", value: "Mon-Sat" },
    { icon: Stethoscope, label: "Specialties", value: "4+" },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
           <div className="order-2 md:order-1 flex justify-center animate-slide-in-left">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl transition-all duration-500 group-hover:bg-primary/20" />
              <img 
                src="/photos/drlogo2.jpg" 
                alt="Dr. Samer Farhat Portrait"
                 className="relative w-full max-w-[220px] sm:max-w-[320px] rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl shadow-lg animate-pop-in" style={{ animationDelay: '400ms' }}>
                <p className="text-xs font-semibold">9+ Years</p>
                <p className="text-[10px]">Experience</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-5 animate-slide-in-right">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wide">About Dr. Samer Farhat</h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Your Trusted Dental Specialist
              </h2>
            </div>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              With over 9 years of experience in advanced dentistry, Dr. Samer Farhat specializes in transforming smiles and providing comprehensive dental care. His expertise spans from complex root canal treatments to aesthetic smile makeovers.
            </p>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Using state-of-the-art technology and modern techniques, Dr. Farhat ensures every patient receives personalized, pain-free treatment in a comfortable environment.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 pt-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-background p-3 md:p-4 rounded-xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary mb-2" />
                  <p className="text-lg md:text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
