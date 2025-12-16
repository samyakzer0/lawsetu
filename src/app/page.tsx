import NavigationHeader from "@/components/sections/navigation-header";
import HeroSection from "@/components/sections/hero-section";
import WhatsappIntegration from "@/components/sections/whatsapp-integration";
import JourneySection from "@/components/sections/journey-section";
import MarketplaceLeads from "@/components/sections/marketplace-leads";
import FeaturesGrid from "@/components/sections/features-grid";
import AIAssistant from "@/components/sections/ai-assistant";
import ClientPortalSection from "@/components/sections/client-portal";
import ECourtsIntegration from "@/components/sections/ecourts-integration";
import CTAFooterSection from "@/components/sections/cta-footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <NavigationHeader />
      <HeroSection />
      <WhatsappIntegration />
      <JourneySection />
      <MarketplaceLeads />
      <FeaturesGrid />
      <AIAssistant />
      <ClientPortalSection />
      <ECourtsIntegration />
      <CTAFooterSection />
    </main>
  );
}
