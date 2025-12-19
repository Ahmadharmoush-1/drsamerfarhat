import { MapPin } from "lucide-react";

const locations = [
{
  name: "Beirut – Mar Mkhayel Church",
  address: "Near Mazen Pharmacy Clinic",
  phone: "+961 76 026 004",

  // ✅ WORKING EMBED (no pb)
  mapUrl:
    "https://www.google.com/maps?q=33.8577232,35.5173988&hl=en&z=16&output=embed",

  // ✅ DIRECTIONS
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=33.8577232,35.5173988",
}


];

const Locations = () => {
  return (
    <section id="locations" className="py-12 md:py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 animate-fade-in-up">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Our Clinics
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Visit Us
          </h2>
          <p className="text-sm md:text-base text-slate-600">
            We have convenient locations to serve you better.
          </p>
        </div>

        {/* LOCATION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className="bg-card border border-border/60 rounded-2xl shadow-md 
                         hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Map */}
              <div className="aspect-video w-full border-b border-border/40">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${location.name} Map`}
                  className="w-full h-full"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                {/* Location name */}
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground leading-tight">
                      {location.name}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-600 mt-1">
                      {location.address}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border/40 my-2" />

                {/* Action */}
                <a
                  href={location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4
                             bg-primary text-white rounded-xl text-sm font-medium
                             hover:bg-primary/90 transition-all"
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Locations;
