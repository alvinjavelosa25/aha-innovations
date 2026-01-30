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
      <ModernHero 
        title="All-in-One Business Platform"
        subtitle={
          <a 
            href="https://millennialbusinessinnovations.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-aha-red transition-colors"
          >
            Need custom solutions? Visit Millennial Business Innovations
          </a>
        }
        description="Replace 10+ tools with one simple platform. Grow faster, work smarter."
        ctaText="Get Started Free"
        ctaLink="/signup"
      />
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
