import { Activity, Sparkles, Drill, Smile } from "lucide-react";

const Services = () => {
  const services = [
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
    {
      icon: Smile,
      title: "Cosmetic Dentistry",
      description:
        "Comprehensive aesthetic treatments including whitening, bonding, and smile makeovers.",
    },
  ];

  return (
    <section id="services" className="py-8 md:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8 animate-fade-in-up">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
            Our Services
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-foreground mb-2">
            Comprehensive Dental Solutions
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            From preventive care to advanced cosmetic procedures, we offer complete dental services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-4 md:p-5 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-all duration-300">
                <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>

              <h3 className="text-sm md:text-base font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
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
