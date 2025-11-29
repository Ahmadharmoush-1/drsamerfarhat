import { GraduationCap, Briefcase, FileCheck, Award } from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "Doctor of Dental Surgery (DDS)",
        "Lebanese University - Dentistry",
        "Advanced Endodontics Certification",
        "Cosmetic Dentistry Specialization",
      ],
    },
    {
      icon: FileCheck,
      title: "Certifications",
      items: [
        "Board Certified Endodontist",
        "Advanced Aesthetic Dentistry",
        "Digital Smile Design Expert",
        "Dental Implantology Certified",
      ],
    },
    {
      icon: Award,
      title: "Memberships",
      items: [
        "Lebanese Dental Association",
        "International Congress of Oral Implantologists",
        "American Academy of Cosmetic Dentistry",
        "European Society of Endodontology",
      ],
    },
    {
      icon: Briefcase,
      title: "Experience",
      items: [
        "9+ Years Clinical Practice",
        "5000+ Successful Procedures",
        "Root Canal Specialist",
        "Hollywood Smile Expert",
      ],
    },
  ];

  return (
    <section id="about" className="py-8 md:py-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-5 gap-6 items-start">

          {/* Image */}
          <div className="md:col-span-2 animate-slide-in-left flex justify-center">
            <div className="relative max-w-[240px] w-full">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                <img
                  src="/photos/drlogo2.jpg"
                  alt="Dr. Samer Farhat"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-3 py-2 rounded-lg shadow-md text-center">
                <div className="text-xl font-bold">9+</div>
                <div className="text-[10px]">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3 animate-slide-in-right">
            <div className="mb-5">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                About Dr. Samer Farhat
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Your Trusted Dental Specialist
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                With 9+ years of expertise in advanced dentistry, Dr. Farhat provides world-class care with modern techniques and high-precision treatments.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {credentials.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-4 rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-sm font-semibold">{detail.title}</h3>
                    </div>

                    <ul className="space-y-1.5">
                      {detail.items.map((item, i) => (
                        <li key={i} className="text-xs flex items-start gap-1 text-muted-foreground">
                          <span className="text-primary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
