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
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"
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

  // Load booked slots from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("bookedSlots");
    if (stored) {
      setBookedSlots(JSON.parse(stored));
    }
  }, []);

  const isSlotBooked = (date: string, time: string): boolean => {
    return bookedSlots[date]?.includes(time) || false;
  };

  const getAvailableTimeSlots = () => {
    if (!formData.date) return TIME_SLOTS;
    return TIME_SLOTS.filter((time) => !isSlotBooked(formData.date, time));
  };

  const bookSlot = (date: string, time: string) => {
    const updated = { ...bookedSlots };
    if (!updated[date]) {
      updated[date] = [];
    }
    updated[date].push(time);
    setBookedSlots(updated);
    localStorage.setItem("bookedSlots", JSON.stringify(updated));
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.date !== "" &&
      formData.time !== "" &&
      formData.location !== ""
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      toast({
        title: "Please fill all fields",
        description: "All fields are required to book an appointment.",
        variant: "destructive",
      });
      return;
    }

    if (isSlotBooked(formData.date, formData.time)) {
      toast({
        title: "Time slot unavailable",
        description: "This time slot has already been booked. Please choose another.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Book the slot
    bookSlot(formData.date, formData.time);

    // Format date for display
    const formattedDate = new Date(formData.date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Generate WhatsApp message
    const message = `New Appointment Request:
Name: ${formData.name}
Phone: ${formData.phone}
Preferred Date: ${formattedDate}
Preferred Time: ${formData.time}
Location: ${formData.location}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Show success toast
    toast({
      title: "Booking Request Sent!",
      description: "Your booking request was sent on WhatsApp. We'll confirm shortly.",
    });

    // Reset form
    setFormData({ name: "", phone: "", date: "", time: "", location: "" });
    setIsSubmitting(false);

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="appointment" className="py-12 md:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-in-up">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Book Now</h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Schedule Your Appointment
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Take the first step towards your perfect smile. Fill out the form below and we'll confirm via WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Opening Hours Widget */}
          <div className="md:col-span-1">
            <OpeningHours />
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-card border border-border rounded-2xl shadow-lg p-5 md:p-8 animate-zoom-in hover:shadow-xl transition-shadow duration-500">
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
                    placeholder="Full Name"
                    required
                    className="h-10"
                  />
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
              </div>

            <div className="space-y-2">
  <Label htmlFor="location" className="text-sm font-medium flex items-center gap-2">
    <MapPin className="w-4 h-4 text-primary" />
    Location
  </Label>

  <Select
    value={formData.location}
    onValueChange={(value) => handleSelectChange("location", value)}
  >
    <SelectTrigger className="h-10">
      <SelectValue placeholder="Beirut Clinic" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="Beirut Clinic">Chiyah-Beirut Clinic</SelectItem>
    </SelectContent>
  </Select>
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
                    min={today}
                    required
                    className="h-10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="text-sm font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Preferred Time
                  </Label>
                  <Select
                    value={formData.time}
                    onValueChange={(value) => handleSelectChange("time", value)}
                    disabled={!formData.date}
                  >
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder={formData.date ? "Select time" : "Select date first"} />
                    </SelectTrigger>
                    <SelectContent>
                      {TIME_SLOTS.map((time) => {
                        const booked = isSlotBooked(formData.date, time);
                        return (
                          <SelectItem
                            key={time}
                            value={time}
                            disabled={booked}
                            className={booked ? "opacity-50 cursor-not-allowed line-through" : ""}
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
                className="w-full h-11 text-sm font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Book via WhatsApp
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                You'll be redirected to WhatsApp to confirm your appointment
              </p>
            </form>
          </div>
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