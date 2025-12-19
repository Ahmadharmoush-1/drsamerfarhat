import { useEffect } from "react";
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

  /* IMAGE PATHS */
  const emaxImages = [
    "/photos/beforeafter5.jpg",
    "/photos/beforeafter5.jpg",
    "/photos/beforeafter5.jpg",
    "/photos/beforeafter5.jpg",
  ];

  const compositeImages = [
    "/photos/CompositeVeneer-1.jpg",
    "/photos/CompositeVeneer-2.jpg",
    "/photos/CompositeVeneer-3.jpg",
    "/photos/CompositeVeneer-4.jpg",
  ];

  /* WhatsApp Link */
  const whatsappLink =
    "https://wa.me/96176026004?text=Hello%2C%20I%E2%80%99m%20interested%20in%20the%20VIP%20Cosmetic%20Dentistry%20consultation%20(E-max%20and%20Composite%20Veneers).%20I%E2%80%99d%20like%20to%20book%20an%20appointment.";

  return (
    <div className="min-h-screen bg-vip">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vip-cream via-vip to-white" />
        <div className="absolute inset-0 bg-gold/10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold-dark px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Premium VIP Service</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Cosmetic <span className="text-gold">Dentistry</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
              Luxury Smile Design & Aesthetic Excellence
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6">
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

      {/* ================= VIP COMPOSITE ================= */}
      <section
        id="vip-composite"
        className="py-20 bg-gradient-to-b from-vip-cream via-vip to-vip relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              {compositeImages.map((img, i) => (
                <div
                  key={i}
                  className={`relative rounded-2xl overflow-hidden shadow-lg ${
                    i === 0 ? "col-span-2 h-64" : "h-48"
                  }`}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                  {i === 0 && (
                    <span className="absolute top-4 right-4 bg-gold text-gold-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      VIP
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-dark px-3 py-1.5 rounded-full mb-4 border border-gold/30">
                <Star className="w-4 h-4 text-gold" />
                VIP Treatment
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gold">VIP Composite Veneers</span>
              </h2>

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Same-day smile transformation with fully customizable,
                non-invasive composite veneers — luxury made accessible.
              </p>

              <ul className="space-y-3">
                {[
                  "Same-day results",
                  "Custom shade & shape",
                  "Reversible procedure",
                  "Affordable luxury",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <span className="w-2 h-2 bg-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= E-MAX ================= */}
      <section id="emax-veneers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full mb-4">
                <Award className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase">
                  Premium Ceramic Veneers
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                E-max Veneers
              </h2>

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Crafted from lithium disilicate glass-ceramic, E-max veneers
                provide unmatched translucency, durability, and a perfectly
                natural appearance.
              </p>

              <ul className="space-y-3">
                {[
                  "Durability 15+ years",
                  "Natural enamel-like translucency",
                  "Stain-resistant & biocompatible",
                  "Minimal tooth preparation",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-600"
                  >
                    <span className="w-2 h-2 bg-gold rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {emaxImages.map((img, i) => (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden shadow-lg ${
                    i === 0 ? "col-span-2 h-64" : "h-48"
                  }`}
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-gradient-to-br from-gold/30 via-gold/20 to-gold/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Exclusive Consultation
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Your <span className="text-gold">VIP Smile?</span>
          </h2>

          <p className="text-lg font-bold text-white mb-10">
            Book your exclusive consultation today and discover the perfect
            cosmetic solution for your smile.
          </p>

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
