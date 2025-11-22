import { Activity, Sparkles, Drill, Smile } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: "Endodontics",
      description: "Expert root canal treatments using advanced techniques for pain-free procedures and long-lasting results.",
    },
    {
      icon: Sparkles,
      title: "Hollywood Smile",
      description: "Transform your smile with premium veneers designed to create a stunning, natural-looking aesthetic.",
    },
    {
      icon: Drill,
      title: "Dental Implants",
      description: "Replace missing teeth with durable, natural-looking implants that restore function and confidence.",
    },
    {
      icon: Smile,
      title: "Cosmetic Dentistry",
      description: "Comprehensive aesthetic treatments including whitening, bonding, and smile makeovers.",
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12 animate-fade-in-up">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Our Services</h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Comprehensive Dental Solutions
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            From preventive care to advanced cosmetic procedures, we offer complete dental services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
                className="group bg-card p-5 md:p-6 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              
                 <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
