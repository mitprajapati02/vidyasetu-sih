import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CallToActionSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-r from-primary via-primary-glow to-primary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-bounce">
          <Sparkles size={24} className="text-primary-foreground" />
        </div>
        <div className="absolute top-20 right-20 animate-bounce" style={{ animationDelay: '1s' }}>
          <Sparkles size={32} className="text-primary-foreground" />
        </div>
        <div className="absolute bottom-20 left-32 animate-bounce" style={{ animationDelay: '2s' }}>
          <Sparkles size={28} className="text-primary-foreground" />
        </div>
        <div className="absolute bottom-10 right-10 animate-bounce" style={{ animationDelay: '3s' }}>
          <Sparkles size={20} className="text-primary-foreground" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Start Your Free Trial Today
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your approach to student success. No credit card required, no complex setup.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => navigate('/upload-sheets')}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-10 py-6 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Start Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-foreground mb-2">5 Min</div>
              <div className="text-primary-foreground/80">Setup Time</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-foreground mb-2">14 Days</div>
              <div className="text-primary-foreground/80">Free Trial</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20">
              <div className="text-3xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-primary-foreground/80">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;