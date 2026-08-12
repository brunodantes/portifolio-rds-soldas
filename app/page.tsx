import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <Header />
      <Hero />
      <ValueProps />
      <Services />
      <Process />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
