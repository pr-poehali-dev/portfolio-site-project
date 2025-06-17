import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Gallery />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
