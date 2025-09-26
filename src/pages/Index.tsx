import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyUseVidyaSetuSection from "@/components/WhyUseVidyaSetuSection";
import CallToActionSection from "@/components/CallToActionSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <WhyUseVidyaSetuSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
