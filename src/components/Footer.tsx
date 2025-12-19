import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 animate-fade-in-up">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* About */}
           <div className="space-y-3 animate-slide-in-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src="/photos/drlogo.jpg"    // your logo path
                  alt="Dr. Samer Farhat Logo"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-semibold text-base text-foreground">Dr. Samer Farhat</h3>
                <p className="text-xs text-muted-foreground">Dental Specialist</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Providing exceptional dental care with advanced technology and personalized treatment for over 9 years.
            </p>
          </div>

          {/* Contact Info */}
           <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="font-semibold text-base text-foreground mb-3">Contact Information</h3>
            
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">
                Beirut – Mar Mkhayel Church<br />Near Mazen Pharmacy
              </span>
            </div>

            <a href="tel:+96176026004" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary" />
              +961 76 026 004
            </a>

            <a href="mailto:info@drsamerfarhat.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary" />
              info@drsamerfarhat.com
            </a>
          </div>

          {/* Map & Social */}
           <div className="space-y-4 animate-slide-in-right" style={{ animationDelay: '400ms' }}>
            <h3 className="font-semibold text-base text-foreground">Find Us</h3>
            
            {/* <div className="w-full h-40 rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5682745829746!2d35.51456831521083!3d33.85823798065334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUxJzI5LjciTiAzNcKwMzAnNTkuMCJF!5e0!3m2!1sen!2slb!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Samer Farhat Location"
              />
            </div> */}

            <div className="flex gap-3">
              {/* <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
               className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a> */}
              <a 
                href="https://www.instagram.com/drsamerfarhat/" 
                target="_blank" 
                rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
             <a
  href="https://wa.me/96176026004"
  target="_blank"
  rel="noopener noreferrer"
  className="w-9 h-9 rounded-full bg-[#25D366]/10 flex items-center justify-center 
             hover:bg-[#25D366] hover:text-white hover:scale-110 
             transition-all duration-300"
>
  <MessageCircle className="w-4 h-4" />
</a>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-border text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dr. Samer Farhat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;