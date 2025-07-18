import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Tutorials from "../components/Tutorials";
import Footer from "../components/Footer";
import Chat from "../components/Chat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Pricing />
      <Tutorials />
      <Footer />
      <Chat />
    </div>
  );
};

export default Index;