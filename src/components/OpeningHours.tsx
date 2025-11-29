import { useState, useEffect } from "react";
import { Clock, Calendar } from "lucide-react";

const OpeningHours = () => {
  const [status, setStatus] = useState<{
    isOpen: boolean;
    message: string;
    nextChange: string;
  }>({ isOpen: false, message: "", nextChange: "" });

  // Opening hours configuration (24-hour format)
  const schedule = {
    monday: { open: 9, close: 19 },
    tuesday: { open: 9, close: 19 },
    wednesday: { open: 9, close: 19 },
    thursday: { open: 9, close: 19 },
    friday: { open: 9, close: 19 },
    saturday: { open: 10, close: 14 },
    sunday: null, // Closed
  };

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const currentDay = now
        .toLocaleDateString("en-US", { weekday: "long" })
        .toLowerCase() as keyof typeof schedule;
      const currentHour = now.getHours();

      const todaySchedule = schedule[currentDay];

      if (!todaySchedule) {
        // Closed on Sunday
        setStatus({
          isOpen: false,
          message: "Closed",
          nextChange: "Opens Monday at 9:00 AM",
        });
        return;
      }

      const { open, close } = todaySchedule;

      if (currentHour >= open && currentHour < close) {
        // Currently open
        const closingTime = close > 12 ? `${close - 12}:00 PM` : `${close}:00 AM`;
        setStatus({
          isOpen: true,
          message: "Open Now",
          nextChange: `Closes at ${closingTime}`,
        });
      } else if (currentHour < open) {
        // Before opening
        const openingTime = open > 12 ? `${open - 12}:00 PM` : `${open}:00 AM`;
        setStatus({
          isOpen: false,
          message: "Closed",
          nextChange: `Opens today at ${openingTime}`,
        });
      } else {
        // After closing
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowDay = tomorrow
          .toLocaleDateString("en-US", { weekday: "long" })
          .toLowerCase() as keyof typeof schedule;
        const tomorrowSchedule = schedule[tomorrowDay];

        if (tomorrowSchedule) {
          const openingTime =
            tomorrowSchedule.open > 12
              ? `${tomorrowSchedule.open - 12}:00 PM`
              : `${tomorrowSchedule.open}:00 AM`;
          setStatus({
            isOpen: false,
            message: "Closed",
            nextChange: `Opens tomorrow at ${openingTime}`,
          });
        } else {
          setStatus({
            isOpen: false,
            message: "Closed",
            nextChange: "Opens Monday at 9:00 AM",
          });
        }
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const days = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-5 shadow-sm animate-fade-in-up">
      {/* Live Status */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div
            className={`w-3 h-3 rounded-full ${
              status.isOpen ? "bg-green-500" : "bg-red-500"
            } animate-pulse`}
          />
          <div>
            <p className="text-sm font-semibold text-foreground">{status.message}</p>
            <p className="text-xs text-muted-foreground">{status.nextChange}</p>
          </div>
        </div>
        <Clock className="w-5 h-5 text-primary" />
      </div>

      {/* Opening Hours Schedule */}
      <div className="space-y-2.5">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-primary" />
          <h4 className="text-sm font-semibold text-foreground">Opening Hours</h4>
        </div>
        {days.map((schedule, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-xs py-1.5"
          >
            <span className="text-muted-foreground font-medium">{schedule.day}</span>
            <span className="text-foreground font-semibold">{schedule.hours}</span>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-4 pt-4 border-t border-border">
        <a
          href="tel:+96176026004"
          className="flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          <Clock className="w-4 h-4" />
          Call to Schedule: +961 76 026 004
        </a>
      </div>
    </div>
  );
};

export default OpeningHours;
