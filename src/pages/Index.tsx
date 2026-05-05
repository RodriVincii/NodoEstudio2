import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Work } from "@/components/portfolio/Work";
import { Services } from "@/components/portfolio/Services";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Work />
      <Services />
      <About />
      <Contact />
    </main>
  );
};

export default Index;
