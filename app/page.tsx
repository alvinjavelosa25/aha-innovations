import ModernHero from "@/components/sections/ModernHero";
import TrustedCompanies from "@/components/sections/TrustedCompanies";
import PainPoints from "@/components/sections/PainPoints";
import ModernFeatures from "@/components/sections/ModernFeatures";
import IdealCustomers from "@/components/sections/IdealCustomers";
import ModernShowcase from "@/components/sections/ModernShowcase";
import EnhancedTestimonials from "@/components/sections/EnhancedTestimonials";
import PricingSectionDemo from "@/components/sections/PricingSectionDemo";
import FAQSection from "@/components/sections/FAQSection";
import ModernCTA from "@/components/sections/ModernCTA";
import ModernFooter from "@/components/sections/ModernFooter";

export default function Home() {
  return (
    <>
      <ModernHero />
      <TrustedCompanies />
      <PainPoints />
      <ModernFeatures />
      <IdealCustomers />
      <ModernShowcase />
      <EnhancedTestimonials />
      <ModernFooter />
    </>
  );
}
