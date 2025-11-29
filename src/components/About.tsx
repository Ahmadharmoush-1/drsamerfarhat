import { Award, Users, Clock, Stethoscope } from "lucide-react";
import { GraduationCap, Briefcase, FileCheck } from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "Doctor of Dental Surgery (DDS)",
        "Lebanese University - Faculty of Dentistry",
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
        "Specialist in Root Canal Treatments",
        "Hollywood Smile Transformations Expert",
      ],
    },
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-start">

          {/* Doctor Image */}
          <div className="md:col-span-2 animate-slide-in-left">
            <div className="relative max-w-sm mx-auto">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/photos/drlogo2.jpg"
                  alt="Dr. Samer Farhat"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-3 rounded-xl shadow-lg animate-pop-in">
                <div className="text-2xl font-bold">9+</div>
                <div className="text-xs font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="md:col-span-3 animate-slide-in-right">
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                About Dr. Samer Farhat
              </h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                Your Trusted Dental Specialist
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                With over 9 years of expertise in advanced dentistry, Dr. Samer Farhat
                provides world-class care using the latest technology and modern treatment
                techniques to deliver exceptional results with comfort and precision.
              </p>
            </div>

            {/* Credentials Grid (same style as Credentials component) */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {credentials.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-5 rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-base font-semibold text-foreground">
                        {detail.title}
                      </h3>
                    </div>

                    <ul className="space-y-2">
                      {detail.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-xs text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
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
