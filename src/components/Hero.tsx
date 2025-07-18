import { Button } from "../components/ui/button"; 
import { ArrowRight, CheckCircle } from "lucide-react";
import React, { useState } from 'react';
import heroImage from "../assets/hero-manufacturing.jpg";

const Hero = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTutorials = () => {
    const element = document.getElementById('tutorials');
  if (element){

    element.scrollIntoView({behavior: "smooth"})
  }


}

const [isHovered, setIsHovered] = useState(false);
  return (
    <section 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden group">
  <div
   
  className="absolute inset-0 z-0">
    <img
   

      src={heroImage}
      alt="Manufacturing facility with lean principles"
      className="w-full h-full object-cover transition-filter duration-500 brightness-50 group-hover:brightness-80"
    />
    <div className="absolute inset-0 bg-gradient-steel opacity-90 transition-opacity duration-500 group-hover:opacity-30"></div>
  </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
       <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${
    isHovered ? "text-white" : "text-gray-400"
  }`}>
  Streamline Your
  <span
    className="inline-block bg-clip-text text-transparent ml-3"
    style={{
      backgroundImage:
        "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",
    }}
  >
    Material Flow
  </span>
  <br />
  with Lean Principles
</h1>

<p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-[hsl(var(--primary-foreground)/0.95)]">
  Transform your manufacturing operations with intelligent communication between processes and material handling. Eliminate waste, optimize flow, and boost efficiency.
</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-glow))] text-[hsl(var(--primary-foreground))] shadow-industrial text-lg px-8 py-3"
              onClick={scrollToFeatures}
            >
              Discover Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-[hsl(var(--primary-foreground)/0.3)] text-white
               bg-[hsl(var(--primary-foreground)/0.2)]
              hover:bg-[hsl(var(--primary-foreground)/0.5)] 
           font-bold
              text-lg px-8 py-3"
                onClick={scrollToTutorials}
            >
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[hsl(var(--primary-foreground)/0.9)]">
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="h-5 w-5 text-[hsl(var(--accent))] mr-2 flex-shrink-0" />
              <span>Comprehensive Analytics</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="h-5 w-5 text-[hsl(var(--accent))] mr-2 flex-shrink-0" />
              <span>Streamline communication</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <CheckCircle className="h-5 w-5 text-[hsl(var(--accent))] mr-2 flex-shrink-0" />
              <span>Real-time optimization</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;