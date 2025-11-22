import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah ",
      treatment: "Hollywood Smile",
      rating: 5,
      text: "Dr. Samer completely transformed my smile! The veneers look so natural and beautiful. The entire process was comfortable and professional. Highly recommend!",
    },
    {
      name: "Abed",
      treatment: "Dental Implants",
      rating: 5,
      text: "After years of being self-conscious about my missing tooth, Dr. Farhat gave me my confidence back with dental implants. The results are amazing!",
    },
    {
      name: "Layla ",
      treatment: "Root Canal Treatment",
      rating: 5,
      text: "I was terrified of getting a root canal, but Dr. Samer made it completely painless. His expertise and gentle approach put me at ease immediately.",
    },
    {
      name: "Mostafa",
      treatment: "Cosmetic Dentistry",
      rating: 5,
      text: "The teeth whitening and cosmetic work exceeded my expectations. Dr. Farhat is a true artist. My smile has never looked better!",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

 return (
    <section id="testimonials" className="py-12 md:py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12 animate-fade-in-up">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Testimonials</h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            What Our Patients Say
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Read real experiences from our satisfied patients.
          </p>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-3" />
              
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Slider */}
        <div className="md:hidden">
          <div className="bg-card p-6 rounded-2xl border border-border shadow-lg animate-fade-in-up">
            <Quote className="w-8 h-8 text-primary/30 mb-3" />
            
            <div className="flex gap-0.5 mb-3">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic min-h-[120px]">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex items-center gap-3 pt-3 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">
                  {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                <p className="text-xs text-muted-foreground">{testimonials[currentIndex].treatment}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-3 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-9 h-9 rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-9 h-9 rounded-full"
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
