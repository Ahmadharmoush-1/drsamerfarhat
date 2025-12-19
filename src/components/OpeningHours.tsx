import { useState, useEffect } from "react";
import { Clock, Calendar } from "lucide-react";

const OpeningHours = () => {
  const [status, setStatus] = useState({
    isOpen: false,
    message: "",
    nextChange: "",
  });

  // Opening hours (24h format)
  const schedule = {
    monday: { open: 9, close: 19 },
    tuesday: { open: 9, close: 19 },
    wednesday: { open: 9, close: 19 },
    thursday: { open: 9, close: 19 },
    friday: { open: 9, close: 19 },
    saturday: { open: 10, close: 14 },
    sunday: null,
  };

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const currentDay = now
        .toLocaleDateString("en-US", { weekday: "long" })
        .toLowerCase();
      const currentHour = now.getHours();
      const today = schedule[currentDay];

      if (!today) {
        setStatus({
          isOpen: false,
          message: "Closed",
          nextChange: "Opens Monday at 9:00 AM",
        });
        return;
      }

      if (currentHour >= today.open && currentHour < today.close) {
        const closingTime =
          today.close > 12 ? `${today.close - 12}:00 PM` : `${today.close}:00 AM`;

        setStatus({
          isOpen: true,
          message: "Open Now",
          nextChange: `Closes at ${closingTime}`,
        });
      } else if (currentHour < today.open) {
        const openingTime =
          today.open > 12 ? `${today.open - 12}:00 PM` : `${today.open}:00 AM`;

        setStatus({
          isOpen: false,
          message: "Closed",
          nextChange: `Opens today at ${openingTime}`,
        });
      } else {
        const nextDay = new Date(now);
        nextDay.setDate(now.getDate() + 1);

        const name = nextDay
          .toLocaleDateString("en-US", { weekday: "long" })
          .toLowerCase();
        const tomorrow = schedule[name];

        if (tomorrow) {
          const openingTime =
            tomorrow.open > 12
              ? `${tomorrow.open - 12}:00 PM`
              : `${tomorrow.open}:00 AM`;

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
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const days = [
    { day: "Mon - Sat", hours: "9:00 AM - 7:00 PM" },
    
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-4 shadow-sm animate-fade-in-up">
      
      {/* Status */}
      <div className="flex items-center justify-between mb-3 pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div
            className={`w-2.5 h-2.5 rounded-full ${
              status.isOpen ? "bg-green-500" : "bg-red-500"
            } animate-pulse`}
          />
          <div>
            <p className="text-sm font-semibold">{status.message}</p>
            <p className="text-[11px] text-muted-foreground">{status.nextChange}</p>
          </div>
        </div>
        <Clock className="w-4 h-4 text-primary" />
      </div>

      {/* Hours */}
      <div className="space-y-2">
        <div className="flex items-center gap-1 mb-2">
          <Calendar className="w-3.5 h-3.5 text-primary" />
          <h4 className="text-xs font-semibold">Opening Hours</h4>
        </div>

        {days.map((item, i) => (
          <div key={i} className="flex justify-between text-[11px] py-1">
            <span className="text-muted-foreground">{item.day}</span>
            <span className="text-foreground font-semibold">{item.hours}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-3 pt-3 border-t border-border">
        <a
          href="tel:+96176026004"
          className="flex items-center justify-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition"
        >
          <Clock className="w-3.5 h-3.5" />
          Call: +961 76 026 004
        </a>
      </div>
    </div>
  );
};

export default OpeningHours;
