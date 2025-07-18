import { Check, PlayCircle, Clock, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";

const Tutorials = () => {
  const [currentTutorial, setCurrentTutorial] = useState(0);

  const tutorials = [
        {
      title: "Why FlowLeanSolutions?",
      description:
        "Discover how our service can optimize manufacturing.",
      duration: "10 minutes",
      difficulty: "",
      topics: ["Quality Gates", "Automated Checks", "Lean Principles"],
    },
    {
      title: "Getting Started with FlowLean",
      description:
        "Learn the basics of setting up your lean manufacturing workflows and connecting your teams for optimal material flow.",
      duration: "8 minutes",
      difficulty: "",
      topics: ["Initial Setup", "User Management", "Basic Workflows"],
    },
    {
      title: "Analytics & Reporting",
      description:
        "Learn how to use our powerful analytics dashboard to identify bottlenecks and optimize your manufacturing processes.",
      duration: "3 minutes",
      difficulty: "",
      topics: ["KPI Tracking", "Custom Reports", "Data Analysis"],
    },
    {
      title: "Material Flow",
      description:
        "Learn how FlowLean optimizes your material flow and how to create routes.",
      duration: "15 minutes",
      difficulty: "",
      topics: ["Alert Configuration", "Team Integration", "Process Automation"],
    },

  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentTutorial((prev) => (prev + 1) % tutorials.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [tutorials.length]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "text-[hsl(var(--green-600))] bg-[hsl(var(--green-100))]";
      case "Intermediate":
        return "text-[hsl(var(--blue-600))] bg-[hsl(var(--blue-100))]";
      case "Advanced":
        return "text-[hsl(var(--orange-600))] bg-[hsl(var(--orange-100))]";
      default:
        return "text-[hsl(var(--gray-600))] bg-[hsl(var(--gray-100))]";
    }
  };

  return (
    <section id="tutorials" className="py-20 bg-[hsl(var(--muted)/0.3)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--foreground))] mb-4">
            How to get Started With{" "}
            <span className="text-[hsl(var(--primary))]">FlowLeanSolutions</span>
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
          Discover how you can use FlowLeanSolutions to optimize your material flow.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-industrial bg-[hsl(var(--background))] relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <PlayCircle className="h-12 w-12 text-[hsl(var(--primary)/0.2)] mb-6" />

              <div className="min-h-[200px] flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  {/* <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                      tutorials[currentTutorial].difficulty
                    )}`}
                  >
                    {tutorials[currentTutorial].difficulty}
                  </span> */}
                  <div className="flex items-center text-[hsl(var(--muted-foreground))]">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{tutorials[currentTutorial].duration}</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl text-[hsl(var(--foreground))] leading-relaxed mb-4 font-semibold">
                  {tutorials[currentTutorial].title}
                </h3>

                <p className="text-[hsl(var(--muted-foreground))] text-lg mb-6 leading-relaxed">
                  {tutorials[currentTutorial].description}
                </p>

                {/* <div className="flex flex-wrap gap-2 mb-6">
                  {tutorials[currentTutorial].topics.map((topic, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] rounded-lg text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div> */}

                <button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] text-[hsl(var(--primary-foreground))] px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center w-fit">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Start Tutorial
                </button>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            {tutorials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTutorial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTutorial === index
                    ? "bg-[hsl(var(--primary))] scale-125"
                    : "bg-[hsl(var(--muted-foreground)/0.3)] hover:bg-[hsl(var(--muted-foreground)/0.5)]"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Empty placeholders - you can fill these if needed */}
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[hsl(var(--primary))]"></div>
            <div className="text-[hsl(var(--muted-foreground))]"></div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[hsl(var(--primary))]"></div>
            <div className="text-[hsl(var(--muted-foreground))]"></div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[hsl(var(--primary))]"></div>
            <div className="text-[hsl(var(--muted-foreground))]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
