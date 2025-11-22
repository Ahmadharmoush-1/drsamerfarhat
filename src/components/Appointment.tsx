import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, User, Mail, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Request Received",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    setFormData({ name: "", email: "", phone: "", date: "", time: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="appointment" className="py-12 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
       <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-in-up">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Book Now</h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Schedule Your Appointment
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Take the first step towards your perfect smile. Fill out the form below and we'll get back to you promptly.
          </p>
        </div>

        {/* Form */}
        <div className="bg-card border border-border rounded-2xl shadow-lg p-5 md:p-8 animate-zoom-in hover:shadow-xl transition-shadow duration-500">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="h-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+961 XX XXX XXX"
                required
                className="h-10"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Preferred Date
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="h-10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="text-sm font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Preferred Time
                </Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="h-10"
                />
              </div>
            </div>

           <Button type="submit" className="w-full h-11 text-sm font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              Request Appointment
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">Or call us directly at</p>
          <a 
            href="tel:+96176026004" 
            className="text-lg md:text-xl font-semibold text-primary hover:text-accent transition-colors"
          >
            +961 76 026 004
          </a>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
