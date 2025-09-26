import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Shield, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-primary">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 animate-float">
          <BookOpen size={60} className="text-primary-foreground" />
        </div>
        <div
          className="absolute top-40 right-32 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Shield size={45} className="text-primary-foreground" />
        </div>
        <div
          className="absolute bottom-40 left-32 animate-float"
          style={{ animationDelay: "4s" }}
        >
          <TrendingUp size={50} className="text-primary-foreground" />
        </div>
      </div>

      {/* Parallax background shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-foreground rounded-full animate-parallax"></div>
        <div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary-foreground rounded-full animate-parallax"
          style={{ animationDelay: "10s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Bridge the Gap Before It&apos;s Too Late
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-primary-foreground/90 mb-4">
              VidyaSetu
            </div>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Early detection of student risks with smart dashboards. Prevent
              dropouts before they happen.
            </p>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              onClick={() => navigate("/upload-sheets")}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Take a demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div
            className="mt-12 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>Easy Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>Proven Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
