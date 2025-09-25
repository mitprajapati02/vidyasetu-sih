import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, FileUp, Brain, DollarSign, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: AlertTriangle,
    title: "Early Detection of Dropout Risk",
    description: "Identify at-risk students before it's too late with ML-powered analytics and rule-based thresholds.",
    highlight: "Prevent 80% more dropouts"
  },
  {
    icon: FileUp,
    title: "Simple Spreadsheet Uploads",
    description: "No complex setup or training required. Just upload your existing CSV/Excel files and get started.",
    highlight: "5-minute setup"
  },
  {
    icon: Brain,
    title: "Data-Driven Yet Teacher-Friendly",
    description: "Combines powerful analytics with intuitive dashboards that educators actually want to use.",
    highlight: "95% teacher satisfaction"
  },
  {
    icon: DollarSign,
    title: "Affordable Solution",
    description: "Budget-friendly alternative to expensive analytics platforms. No extra infrastructure needed.",
    highlight: "70% cost savings"
  }
];

const WhyUseVidyaSetuSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Use VidyaSetu?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The smart choice for educational institutions serious about student success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-card/80 backdrop-blur-sm overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs font-medium px-2 py-1 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                        {benefit.highlight}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Transform Student Outcomes?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of educational institutions already using VidyaSetu to prevent student dropouts.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-accent" />
                No setup fees
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-accent" />
                Free trial
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-accent" />
                24/7 support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUseVidyaSetuSection;