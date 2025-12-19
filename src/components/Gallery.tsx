import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const images = [
    { src: "/photos/beforeafter1.jpg", alt: "Hollywood Smile Transformation" },
    { src: "/photos/beforeafter2.jpg", alt: "Teeth Whitening Results" },
    { src: "/photos/beforeafter3.jpg", alt: "Dental Implant Success" },
    { src: "/photos/beforeafter4.jpg", alt: "Cosmetic Dentistry Results" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    
    <section id="gallery" className="py-12 md:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
         <div className="md:col-span-2 animate-slide-in-left flex justify-center">
           
          </div>
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12 animate-fade-in-up">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Before & After
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Smile Transformations
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            See the amazing results we've achieved for our patients through expert dental care.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 animate-zoom-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                onClick={() => setFullscreenImage(image.src)}
                className="w-full h-64 object-cover cursor-pointer group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              onClick={() => setFullscreenImage(images[currentIndex].src)}
              className="w-full h-72 object-cover cursor-pointer"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-3 mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-9 h-9 rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-1.5">
              {images.map((_, index) => (
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

      {/* FULLSCREEN IMAGE VIEWER */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in"
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="Full View"
            className="max-w-[95%] max-h-[90%] rounded-2xl shadow-2xl animate-zoom-in"
          />

          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold"
            onClick={() => setFullscreenImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
    