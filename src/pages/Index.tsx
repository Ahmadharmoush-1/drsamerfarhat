import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
// import Credentials from "@/components/Credentials";
import Appointment from "@/components/Appointment";
import Locations from "@/components/Locations";
import WhatsAppButton from "@/components/WhatsAppButton";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FeedbackReviews from "@/components/FeedbackReviews";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhatsAppButton />
        <BeforeAfterSlider />
        {/* <Credentials /> */}
        <Appointment /> 
        <FeedbackReviews />
         <Testimonials />
        <Locations />
       
      </main>
      <Footer />
    </div>
  );
};

export default Index;