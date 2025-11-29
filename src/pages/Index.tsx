import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
// import Credentials from "@/components/Credentials";
import Appointment from "@/components/Appointment";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <BeforeAfterSlider />
        {/* <Credentials /> */}
        <Appointment />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
