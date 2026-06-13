import FloatingNavbar from "@/components/landing/FloatingNavbar";
import HeroSection from "@/components/landing/HeroSection";
import StatisticsSection from "@/components/landing/StatisticsSection";
import AboutSection from "@/components/landing/AboutSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ConsultationCTA from "@/components/landing/ConsultationCTA";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="relative">
      <FloatingNavbar />
      <HeroSection />
      <StatisticsSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ConsultationCTA />
      <FAQSection />
      <Footer />
    </main>
  );
}
