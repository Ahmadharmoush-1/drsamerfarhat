import { MapPin } from "lucide-react";

const locations = [
  {
    name: "Chiyah-Beirut Clinic",
    address: "NEAR MAZEN PHARMACY, Mar Mkhayel Church, Chiyah, Beirut",
    phone: "+961 76 026 004",
    hours: [
      { days: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
      { days: "Saturday", time: "10:00 AM – 2:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5682745829746!2d35.51456831521083!3d33.85823798065334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUxJzI5LjciTiAzNcKwMzAnNTkuMCJF!5e0!3m2!1sen!2slb!4v1234567890123",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=33.8582379,35.5145683",
  },
  {
    name: "Verdun-Beirut Clinic",
    address: "Verdun",
    phone: "+961 76 026 004",
    hours: [
      { days: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
      { days: "Saturday", time: "10:00 AM – 2:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5!2d35.84!3d34.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDI1JzQ4LjAiTiAzNcKwNTAnMjQuMCJF!5e0!3m2!1sen!2slb!4v1",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=33.893791,35.489360",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="py-12 md:py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 animate-fade-in-up">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Our Clinics
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Visit Us
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            We have two convenient locations to serve you better.
          </p>
        </div>

        {/* ALWAYS SIDE-BY-SIDE */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {locations.map((location, index) => (
            <div
              key={location.name}
              className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden animate-fade-in-up hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Map Embed */}
              <div className="aspect-video w-full">
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

              {/* Location Details */}
              <div className="p-4 md:p-6 space-y-3">
                <h3 className="text-lg md:text-xl font-bold text-foreground flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {location.name}
                </h3>

                <p className="text-sm text-muted-foreground">{location.address}</p>

                {/* ⭐ GET DIRECTIONS BUTTON */}
                <a
                  href={location.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-2 px-4 
                             bg-primary text-white rounded-lg text-sm font-medium
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
