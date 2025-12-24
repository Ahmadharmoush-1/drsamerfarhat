import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Sparkles,
  Star,
  Phone,
  MessageCircle,
  Award,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ===================== Responsive Gallery ===================== */
type ImageItem = {
  src: string;
  alt: string;
};

const ResponsiveGallery = ({ images }: { images: ImageItem[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState<string | null>(null);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setFullscreen(img.src)}
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl cursor-pointer transition-all duration-500"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            onClick={() => setFullscreen(images[currentIndex].src)}
            className="w-full h-72 object-cover cursor-pointer"
          />
        </div>

        <div className="flex justify-center items-center gap-3 mt-4">
          <Button size="icon" variant="outline" onClick={prev}>
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex
                    ? "w-6 bg-primary"
                    : "w-2 bg-border"
                }`}
              />
            ))}
          </div>

          <Button size="icon" variant="outline" onClick={next}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Fullscreen */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setFullscreen(null)}
        >
          <img
            src={fullscreen}
            alt="Full view"
            className="max-w-[95%] max-h-[90%] rounded-2xl shadow-2xl"
          />
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setFullscreen(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
};

/* ===================== Page ===================== */
const CosmeticDentistry = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        document
          .querySelector(location.hash)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const whatsappLink =
    "https://wa.me/96176026004?text=Hello%2C%20I%E2%80%99m%20interested%20in%20the%20VIP%20Cosmetic%20Dentistry%20consultation.";

  const compositeImages: ImageItem[] = [
    { src: "/photos/CompositeVeneer-1.webp", alt: "Composite Veneers" },
    { src: "/photos/CompositeVeneer-2.webp", alt: "Composite Veneers" },
    { src: "/photos/CompositeVeneer-3.webp", alt: "Composite Veneers" },
    { src: "/photos/CompositeVeneer-4.webp", alt: "Composite Veneers" },
  ];

  const emaxImages: ImageItem[] = [
    { src: "/photos/emax-1.webp", alt: "E-max Veneers" },
    { src: "/photos/emax-2.webp", alt: "E-max Veneers" },
    { src: "/photos/emax-3.webp", alt: "E-max Veneers" },
    { src: "/photos/emax-4.webp", alt: "E-max Veneers" },
  ];

  return (
    <div className="min-h-screen bg-vip">
      <Navbar />

      {/* HERO */}
      <section className="pt-24 pb-20 text-center bg-gradient-to-b from-vip-cream to-white">
        <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 text-gold px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-4 h-4" />
          Premium VIP Service
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gold mb-4">
          Cosmetic Dentistry
        </h1>

        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Luxury smile design using premium materials and advanced aesthetic
          techniques.
        </p>

        <div className="mt-8 flex justify-center gap-6 text-slate-600">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-gold" />
            Premium Materials
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-gold" />
            10-Year Warranty
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-gold" />
            VIP Experience
          </div>
        </div>
      </section>

      {/* VIP COMPOSITE */}
      <section id="vip-composite" className="py-20 bg-vip">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-3 py-1.5 rounded-full mb-4">
              <Star className="w-4 h-4" />
              VIP Treatment
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gold mb-6">
              VIP Composite Veneers
            </h2>

            <p className="text-slate-600 mb-6 text-lg">
              Same-day smile transformation with non-invasive, fully customizable
              composite veneers.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• Same-day results</li>
              <li>• Custom shade & shape</li>
              
              <li>• Affordable luxury</li>
            </ul>
          </div>

          <ResponsiveGallery images={compositeImages} />
        </div>
      </section>

      {/* E-MAX */}
      <section id="emax-veneers" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-3 py-1.5 rounded-full mb-4">
              <Award className="w-4 h-4" />
              Premium Ceramic Veneers
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gold mb-6">
              E-max Veneers
            </h2>

            <p className="text-slate-600 mb-6 text-lg">
              Lithium disilicate ceramic veneers offering unmatched strength,
              translucency, and durability.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• 15+ years durability</li>
              <li>• Natural enamel translucency</li>
              <li>• Stain-resistant & biocompatible</li>
              <li>• Minimal tooth preparation</li>
            </ul>
          </div>

          <ResponsiveGallery images={emaxImages} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gold/30 via-gold/20 to-gold/30 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready for Your <span className="text-gold">VIP Smile?</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-dark text-gold-foreground px-10 py-6 rounded-full"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <Phone className="w-5 h-5 mr-2" />
            Book VIP Consultation
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white px-10 py-6 rounded-full"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CosmeticDentistry;
