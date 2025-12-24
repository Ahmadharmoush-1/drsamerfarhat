import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Sparkles,
  Star,
  Phone,
  MessageCircle,
  Award,
  Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ===================== Mobile Swipe Gallery ===================== */
type ImageItem = {
  src: string;
  alt: string;
};

const ResponsiveGallery = ({ images }: { images: ImageItem[] }) => {
  const [fullscreen, setFullscreen] = useState<string | null>(null);

  return (
    <>
      {/* DESKTOP GRID */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setFullscreen(img.src)}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl cursor-pointer transition"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      {/* MOBILE SWIPE */}
      <div className="md:hidden">
        <div
          className="
            flex gap-4
            overflow-x-auto
            snap-x snap-mandatory
            scroll-smooth
            pr-12
          "
        >
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setFullscreen(img.src)}
              className="
                min-w-[85%]
                snap-center
                rounded-xl
                overflow-hidden
                shadow-lg
                flex-shrink-0
                cursor-pointer
              "
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN */}
      {fullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setFullscreen(null)}
        >
          <img
            src={fullscreen}
            alt="Full view"
            className="max-w-[95%] max-h-[90%] rounded-xl shadow-2xl"
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl"
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
    { src: "/photos/compositeVeneer-5.webp", alt: "Composite Veneers" },
    { src: "/photos/compositeVeneer-6.webp", alt: "Composite Veneers" },
    { src: "/photos/compositeVeneer-7.webp", alt: "Composite Veneers" },
    { src: "/photos/compositeVeneer-8.webp", alt: "Composite Veneers" },
  ];

  const emaxImages: ImageItem[] = [
    { src: "/photos/emax-1.webp", alt: "E-max Veneers" },
    { src: "/photos/emax-2.webp", alt: "E-max Veneers" },
    { src: "/photos/emax-3.webp", alt: "E-max Veneers" },
    { src: "/photos/emax-4.webp", alt: "E-max Veneers" },
    { src: "/photos/emax-5.webp", alt: "E-max Veneers" },
    { src: "/photos/emax-6.webp", alt: "E-max Veneers" },
    { src: "/photos/emax-7.webp", alt: "E-max Veneers" },
  ];

  return (
    <div className="min-h-screen bg-vip">
      <Navbar />

      {/* HERO (ZOOMED OUT) */}
      <section className="pt-20 pb-14 text-center bg-gradient-to-b from-vip-cream to-white">
        <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold px-3 py-1 rounded-full mb-4 text-xs">
          <Sparkles className="w-3 h-3" />
          Premium VIP Service
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-gold mb-3">
          Cosmetic Dentistry
        </h1>

        <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">
          Luxury smile design using premium materials and advanced aesthetic techniques.
        </p>

        <div className="mt-6 flex justify-center gap-5 text-slate-600 text-sm">
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4 text-gold" />
            Premium Materials
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4 text-gold" />
            10-Year Warranty
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-gold" />
            VIP Experience
          </div>
        </div>
      </section>

      {/* VIP COMPOSITE */}
      <section id="vip-composite" className="py-14 bg-vip">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/15 text-gold px-3 py-1 rounded-full mb-3 text-xs">
              <Star className="w-3 h-3" />
              VIP Treatment
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-gold mb-4">
              VIP Composite Veneers
            </h2>

            <p className="text-slate-600 mb-4 text-sm md:text-base">
              Same-day smile transformation with non-invasive, fully customizable
              composite veneers.
            </p>

            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• Same-day results</li>
              <li>• Custom shade & shape</li>
              <li>• Affordable luxury</li>
            </ul>
          </div>

          <ResponsiveGallery images={compositeImages} />
        </div>
      </section>

      {/* E-MAX */}
      <section id="emax-veneers" className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/15 text-gold px-3 py-1 rounded-full mb-3 text-xs">
              <Award className="w-3 h-3" />
              Premium Ceramic Veneers
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-gold mb-4">
              E-max Veneers
            </h2>

            <p className="text-slate-600 mb-4 text-sm md:text-base">
              Lithium disilicate ceramic veneers offering unmatched strength,
              translucency, and durability.
            </p>

            <ul className="space-y-2 text-slate-600 text-sm">
              <li>• 15+ years durability</li>
              <li>• Natural enamel translucency</li>
              <li>• Minimal preparation</li>
            </ul>
          </div>

          <ResponsiveGallery images={emaxImages} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-gold/25 via-gold/20 to-gold/25 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          Ready for Your <span className="text-gold">VIP Smile?</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gold hover:bg-gold-dark text-gold-foreground px-8 py-5 rounded-full"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <Phone className="w-4 h-4 mr-2" />
            Book VIP Consultation
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white px-8 py-5 rounded-full"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CosmeticDentistry;
