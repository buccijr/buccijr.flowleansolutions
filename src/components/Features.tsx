import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { MessageSquare, BarChart3, Clock, Users, Forklift, ArrowRight, Zap, CircleX } from "lucide-react";
import heroManufacturing from "../assets/hero-manufacturing.jpg";

const Features = () => {
  const features = [
    {
      icon: Forklift,
      title: "Process Integration",
      description:
        "Seamlessly connect all manufacturing processes with intelligent workflow automation and real-time coordination."
    },
    {
      icon: MessageSquare,
      title: "Enhanced Communication",
      description:
        "Bridge communication gaps between departments with automated alerts and streamlined information flow."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Monitor key metrics, identify bottlenecks, and optimize material flow with powerful analytics dashboards."
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      description:
        "Track materials and processes in real-time to ensure optimal efficiency and quick response to changes."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Foster better collaboration across teams with centralized communication and shared visibility into operations."
    },
    {
      icon: CircleX,
      title: "Minimize Waste",
      description:
        "Request materials only when needed, eliminating unnecessary transport, handling, and storage."
    }
  ];

  return (
    <section id="features" className="bg-[hsl(var(--muted)/0.3)] py-[80px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(var(--foreground))]">
            Powerful Features for
            <span className="text-[hsl(var(--primary))]"> Lean Manufacturing</span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[hsl(var(--muted-foreground))]">
            Our comprehensive solution provides everything you need to implement lean principles{" "}
            and optimize your material flow processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
       {features.map((feature, index) => (
  <Card
    key={index}
    className="border-0 shadow-md hover:shadow-[0_8px_20px_rgba(96,165,250,0.5)] transition-all duration-300 group cursor-pointer"
  >
    <CardHeader className="pb-4">
      <div className="w-12 h-12 bg-[linear-gradient(135deg,_hsl(var(--primary)),_hsl(var(--primary-glow)))] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <feature.icon className="h-6 w-6 text-[hsl(var(--primary-foreground))]" />
      </div>
      <CardTitle className="text-xl group-hover:text-[hsl(var(--primary))] transition-colors text-[hsl(var(--foreground))]">
        {feature.title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="leading-relaxed text-[hsl(var(--muted-foreground))]">{feature.description}</p>
    </CardContent>
  </Card>
))}
        </div>

        <div className="relative rounded-2xl p-8 md:p-12 text-center py-[30px] overflow-hidden group cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ color: "blue" }}
          />
          <div className="absolute inset-0 bg-black/70 group-hover:bg-black/30 transition-all duration-500" />
          <div className="relative max-w-3xl mx-auto">
            <Zap className="h-12 w-12 mx-auto mb-6 text-[hsl(var(--accent))]" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Transform Your Operations?</h3>
            <p className="mb-8 leading-relaxed text-white/90 text-lg">
              Send us an email at contact@flowleansolutions.com for a free 30-day trial!
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-lg transition-colors bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-glow))] text-[hsl(var(--primary-foreground))]">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-3 text-lg font-medium rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;