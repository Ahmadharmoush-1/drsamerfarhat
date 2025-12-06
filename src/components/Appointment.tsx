import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, User, Phone, MapPin, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import OpeningHours from "./OpeningHours";

const TIME_SLOTS = [
  "09:00","09:30","10:00","10:30","11:00","11:30",
  "12:00","12:30","14:00","14:30","15:00","15:30",
  "16:00","16:30","17:00","17:30","18:00","18:30"
];

const WHATSAPP_NUMBER = "96176026004";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    location: "",
  });

  const [bookedSlots, setBookedSlots] = useState<Record<string, string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("bookedSlots");
    if (stored) setBookedSlots(JSON.parse(stored));
  }, []);

  const isSlotBooked = (date: string, time: string) =>
    bookedSlots[date]?.includes(time) || false;

  const isFormValid = () =>
    formData.name && formData.phone && formData.date && formData.time && formData.location;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid()) {
      toast({ title: "Missing Information", description: "Please fill all fields.", variant: "destructive" });
      return;
    }

    if (isSlotBooked(formData.date, formData.time)) {
      toast({ title: "Unavailable Slot", description: "This time is already booked.", variant: "destructive" });
      return;
    }

    // Save slot
    const updated = { ...bookedSlots };
    updated[formData.date] = [...(updated[formData.date] || []), formData.time];
    localStorage.setItem("bookedSlots", JSON.stringify(updated));
    setBookedSlots(updated);

    setIsSubmitting(true);

    const formattedDate = new Date(formData.date).toLocaleDateString("en-US", {
      weekday: "long", year: "numeric", month: "long", day: "numeric",
    });

    const message = `New Appointment:
Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formattedDate}
Time: ${formData.time}
Location: ${formData.location}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    toast({ title: "Appointment Sent!", description: "Redirecting to WhatsApp..." });

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
    }, 500);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="appointment" className="py-8 md:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-xs font-semibold text-primary uppercase mb-1">Book Now</h3>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
            Schedule Your Appointment
          </h2>
          <p className="text-xs text-muted-foreground max-w-md mx-auto">
            Fill the form and we will confirm through WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">

          {/* Opening Hours */}
          <div>
            <OpeningHours  />
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-card border border-border rounded-xl shadow-sm p-4">

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label className="text-xs flex items-center gap-1">
                    <User className="w-3 h-3 text-primary" /> Full Name
                  </Label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-9 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-xs flex items-center gap-1">
                    <Phone className="w-3 h-3 text-primary" /> Phone
                  </Label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-9 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <Label className="text-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-primary" /> Location
                </Label>
                <Select
                  value={formData.location}
                  onValueChange={(v) => setFormData({ ...formData, location: v })}
                >
                  <SelectTrigger className="h-9 text-sm">
                    <SelectValue placeholder="Beirut Clinic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beirut Clinic">Chiyah-Beirut Clinic</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <Label className="text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-primary" /> Date
                  </Label>
                  <Input
                    type="date"
                    min={today}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="h-9 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <Label className="text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3 text-primary" /> Time
                  </Label>
                  <Select
                    value={formData.time}
                    onValueChange={(v) => setFormData({ ...formData, time: v })}
                    disabled={!formData.date}
                  >
                    <SelectTrigger className="h-9 text-sm">
                      <SelectValue placeholder={formData.date ? "Select" : "Pick date first"} />
                    </SelectTrigger>
                    <SelectContent>
                      {TIME_SLOTS.map((time) => {
                        const booked = isSlotBooked(formData.date, time);
                        return (
                          <SelectItem
                            key={time}
                            value={time}
                            disabled={booked}
                            className={booked ? "opacity-50 line-through" : ""}
                          >
                            {time} {booked && "(Booked)"}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className="w-full h-10 text-xs font-medium shadow-sm hover:shadow-md transition"
              >
                <MessageCircle className="w-3 h-3" />
                Book via WhatsApp
              </Button>

              <p className="text-[10px] text-center text-muted-foreground">
                You'll be redirected to WhatsApp
              </p>
            </form>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground mb-1">Or call us at</p>
          <a href="tel:+96176026004" className="text-base font-semibold text-primary">
            +961 76 026 004
          </a>
        </div>

      </div>
    </section>
  );
};

export default Appointment;
