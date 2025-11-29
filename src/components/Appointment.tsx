import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, User, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import OpeningHours from "./OpeningHours";

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
      description: "We'll contact you shortly.",
    });
    setFormData({ name: "", email: "", phone: "", date: "", time: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="appointment" className="py-10 md:py-14 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-6 md:mb-8 animate-fade-in-up">
          <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
            Book Now
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Schedule Your Appointment
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">
            Fill out the form and we’ll get back to you shortly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">

          {/* Hours */}
          <div className="md:col-span-1">
            <OpeningHours />
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-card border border-border rounded-xl shadow-md p-4 md:p-6 animate-zoom-in">
            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-primary" />
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="h-9 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-xs flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-primary" />
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
                  className="h-9 text-sm"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="date" className="text-xs flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="h-9 text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="time" className="text-xs flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    Preferred Time
                  </Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                  onChange={handleChange}
                  required
                  className="h-9 text-sm"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-10 text-sm font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all"
            >
              Request Appointment
            </Button>
          </form>
        </div>
      </div>

      {/* Contact Text */}
      <div className="mt-5 text-center">
        <p className="text-xs text-muted-foreground mb-1">
          Or call us directly at
        </p>
        <a
          href="tel:+96176026004"
          className="text-base md:text-lg font-semibold text-primary hover:text-accent transition"
        >
          +961 76 026 004
        </a>
      </div>

    </div>
  </section>
  );
};

export default Appointment;
