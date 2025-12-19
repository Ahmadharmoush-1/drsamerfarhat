import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Jackie Nails and Beauty",
      treatment: "Hollywood Smile",
      rating: 5,
      text: "I recommend everyone to visit Dr Samer , best in town",
      video: "/videos/video1.mp4",
    },
    {
      name: "Anthonygh89",
      treatment: "Dental Implants",
      rating: 5,
      text: "Smile it lets your teeth breathe! Dr. Samer Farhat is an exceptional dentist.",
      video: "/videos/video2.mp4",
    },
    // {
    //   name: "Christelle bou ghannam",
    //   treatment: "Root Canal Treatment",
    //   rating: 5,
    //   text: "Now I can make that smile with confidence.",
    // },
    // {
    //   name: "Mostafa",
    //   treatment: "Cosmetic Dentistry",
    //   rating: 5,
    //   text: "Whitening & cosmetic work exceeded my expectations. Amazing results!",
    // },
  ];

  const nextSlide = () =>
    setCurrentIndex((i) => (i + 1) % testimonials.length);

  const prevSlide = () =>
    setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const renderContent = (t) => {
    if (!t.video) {
      return (
        <div className="p-4">
          <Quote className="w-7 h-7 text-primary/30 mb-2" />

          <div className="flex gap-0.5 mb-2">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>

          <p className="text-xs md:text-sm text-muted-foreground italic leading-relaxed">
            "{t.text}"
          </p>
        </div>
      );
    }

    const isYouTube = t.video.includes("youtube.com");

    return (
      <div className="aspect-video w-full">
        {isYouTube ? (
          <iframe
            src={`${t.video}?mute=1`}
            title={t.name}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={t.video}
            muted
            controls
            playsInline
            className="w-full h-full object-cover"
          />
        )}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-8 md:py-12 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-lg mx-auto mb-6 md:mb-8 animate-fade-in-up">
          <h3 className="text-xs font-semibold text-primary uppercase mb-1">
            Testimonials
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
            What Our Patients Say
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Real experiences from satisfied patients.
          </p>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid md:grid-cols-2 gap-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {renderContent(t)}

              <div
                className={`flex items-center gap-3 ${
                  t.video ? "p-3 bg-card" : "pt-2 px-4 pb-4"
                } border-t border-border`}
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-semibold text-primary">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>

                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE SLIDER */}
        <div className="md:hidden">
          <div className="bg-card rounded-xl border border-border shadow-md animate-fade-in-up overflow-hidden">
            {renderContent(testimonials[currentIndex])}

            <div
              className={`flex items-center gap-3 ${
                testimonials[currentIndex].video ? "p-3 bg-card" : "pt-2 px-4 pb-4"
              } border-t border-border`}
            >
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-semibold text-primary">
                  {testimonials[currentIndex].name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              <div>
                <p className="text-sm font-semibold">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonials[currentIndex].treatment}
                </p>
              </div>
            </div>
          </div>

          {/* NAV */}
          <div className="flex justify-center items-center gap-3 mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-8 h-8 rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-5" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-8 h-8 rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
