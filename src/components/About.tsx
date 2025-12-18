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
    // {
    //   icon: Award,
    //   title: "Memberships",
    //   items: [
    //     "Lebanese Dental Association",
    //     "International Congress of Oral Implantologists",
    //     "American Academy of Cosmetic Dentistry",
    //     "European Society of Endodontology",
    //   ],
    // },
    // {
    //   icon: Briefcase,
    //   title: "Experience",
    //   items: [
    //     "9+ Years Clinical Practice",
    //     "5000+ Successful Procedures",
    //     "Root Canal Specialist",
    //     "Hollywood Smile Expert",
    //   ],
    // },
  ];

  return (
    <section id="about" className="py-6 md:py-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-5 gap-4 items-start">
          
          {/* Image */}
         

          {/* Content */}
          <div className="md:col-span-3 animate-slide-in-right">
            {/* <div className="mb-3">
              <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                About Dr. Samer Farhat
              </h3>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                Your Trusted Dental Specialist
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                With 9+ years of expertise in advanced dentistry, Dr. Farhat
                provides world-class care with modern techniques and high-precision treatments.
              </p>
            </div> */}

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
              {credentials.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-3 rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-sm font-semibold">{detail.title}</h3>
                    </div>

                    <ul className="space-y-1">
                      {detail.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-xs flex items-start gap-1 text-muted-foreground"
                        >
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
