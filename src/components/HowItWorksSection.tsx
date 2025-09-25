import { Card, CardContent } from "@/components/ui/card";
import { Upload, Settings, BarChart3, Bell } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Student Data",
    description: "Simply upload attendance, marks, and fees data via CSV/Excel files. No complex setup required.",
    step: "01"
  },
  {
    icon: Settings,
    title: "Set Rules & Assign Mentors",
    description: "Configure thresholds for attendance, performance, and fee payments. Assign mentors to students.",
    step: "02"
  },
  {
    icon: BarChart3,
    title: "Dashboard Highlights At-Risk Students",
    description: "Color-coded dashboard instantly shows which students need attention with clear risk indicators.",
    step: "03"
  },
  {
    icon: Bell,
    title: "Alerts Sent to Mentors & Parents",
    description: "Automatic notifications ensure timely intervention when students are flagged as at-risk.",
    step: "04"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your student data into actionable insights in just four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <div className="mb-6 mt-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 text-muted-foreground">
            <div className="h-px bg-border flex-1 w-20"></div>
            <span className="text-sm font-medium">Start preventing dropouts today</span>
            <div className="h-px bg-border flex-1 w-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;