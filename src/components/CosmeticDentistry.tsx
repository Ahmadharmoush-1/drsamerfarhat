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

/* ---------------- Fade Image ---------------- */
const FadeImage = ({ src }: { src: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`w-full h-full object-cover transition-opacity duration-500 ${
        loaded ? "opacity-100" : "opacity-0"
      }`}
    />
  );
};

/* ---------------- Swipe Gallery ---------------- */
const SwipeGallery = ({ images }: { images: string[] }) => {
  return (
    <div
      className="
        flex gap-4
        overflow-x-auto
        snap-x snap-mandatory
        scroll-smooth
        scrollbar-hide
        pb-3
      "
    >
      {images.map((img, i) => (
        <div
          key={i}
          className="
            min-w-[280px]
            sm:min-w-[320px]
            md:min-w-[360px]
            h-48 sm:h-56 md:h-64
            snap-center
            rounded-2xl
            overflow-hidden
            shadow-lg
            bg-neutral-100
            flex-shrink-0
          "
        >
          <FadeImage src={img} />
        </div>
      ))}
    </div>
  );
};

const CosmeticDentistry = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  /* ---------------- IMAGES ---------------- */
  const compositeImages = [
    "/photos/CompositeVeneer-1.webp",
    "/photos/CompositeVeneer-2.webp",
    "/photos/CompositeVeneer-3.webp",
    "/photos/CompositeVeneer-4.webp",
    "/photos/compositeVeneer-5.webp",
    "/photos/compositeVeneer-6.webp",
    "/photos/compositeVeneer-7.webp",
    "/photos/compositeVeneer-8.webp",
  ];

  const emaxImages = [
    "/photos/emax-3.webp",
     "/photos/emax-4.webp",
    "/photos/emax-1.webp",
    "/photos/emax-2.webp",
    
   
    "/photos/emax-5.webp",
    "/photos/emax-6.webp",
    "/photos/emax-7.webp",
  ];

  const whatsappLink =
    "https://wa.me/96176026004?text=Hello%2C%20I%E2%80%99m%20interested%20in%20VIP%20Cosmetic%20Dentistry%20consultation.";

  return (
    <div className="min-h-screen bg-vip">
      <Navbar />

      {/* ---------------- HERO ---------------- */}
      <section className="pt-24 pb-14 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vip-cream via-vip to-white" />
        <div className="absolute inset-0 bg-gold/10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold-dark px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              Premium VIP Service
            </div>

            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-gold">Cosmetic Dentistry</span>
            </h1>

            <p className="text-base md:text-2xl text-slate-600 max-w-2xl mx-auto">
              Luxury Smile Design & Aesthetic Excellence
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-slate-600">
                <Award className="w-5 h-5 text-gold" />
                Premium Materials
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Shield className="w-5 h-5 text-gold" />
                10-Year Warranty
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Star className="w-5 h-5 text-gold" />
                VIP Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- VIP COMPOSITE ---------------- */}
      <section
        id="vip-composite"
        className="py-16 md:py-20 bg-gradient-to-b from-vip-cream via-vip to-vip"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-dark px-3 py-1.5 rounded-full mb-4 border border-gold/30">
                <Star className="w-4 h-4 text-gold" />
                VIP Treatment
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-gold">VIP Composite Veneers</span>
              </h2>

              <p className="text-slate-600 mb-6 text-lg">
                Same-day smile transformation with fully customizable,
                non-invasive composite veneers.
              </p>

              <ul className="space-y-3">
                {[
                  "Same-day results",
                  "Custom shade & shape",
                  
                  "Affordable luxury",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <span className="w-2 h-2 bg-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SWIPE COMPOSITE IMAGES */}
            <SwipeGallery images={compositeImages} />
          </div>
        </div>
      </section>

      {/* ---------------- E-MAX ---------------- */}
      <section id="emax-veneers" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
            <div>
            <div className="inline-flex items-center gap-2 bg-gold/15 text-gold px-3 py-1.5 rounded-full mb-4 border border-gold/30">
  <Award className="w-4 h-4 text-gold" />
  Premium Ceramic Veneers
</div>


              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gold">
  E-max Veneers
</h2>


              <p className="text-slate-600 mb-6 text-lg">
                Lithium disilicate ceramic veneers offering unmatched strength
                and natural translucency.
              </p>

              <ul className="space-y-3">
                {[
                  "15+ years durability",
                  "Natural enamel translucency",
                  "Stain-resistant",
                  "Minimal preparation",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600">
                    <span className="w-2 h-2 bg-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* SWIPE E-MAX IMAGES */}
            <SwipeGallery images={emaxImages} />
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gold/30 via-gold/20 to-gold/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready for Your <span className="text-gold">VIP Smile?</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-gold-foreground rounded-full px-8 py-6"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Book VIP Consultation
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white rounded-full px-8 py-6"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CosmeticDentistry;
