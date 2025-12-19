import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "96176026004";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello! I’d like to book an appointment.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="
        fixed 
        bottom-20 right-6 
        z-50 
        flex items-center gap-2 
        bg-[#25D366] hover:bg-[#1da851] 
        text-white 
        px-3 py-2.5 
        rounded-full 
        shadow-lg 
        transition-all duration-300 
        hover:scale-105 hover:shadow-xl
      "
    >
      <MessageCircle size={22} className="fill-white" />
      <span className="text-xs font-medium hidden sm:inline">
        WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
