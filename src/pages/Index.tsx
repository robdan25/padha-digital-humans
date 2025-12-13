import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhaeInAction from "@/components/PhaeInAction";
import EmailSubscribe from "@/components/EmailSubscribe";
import WhatIsPadha from "@/components/WhatIsPadha";
import TokenDetails from "@/components/TokenDetails";
import Docs from "@/components/Docs";
import OfficialLinks from "@/components/OfficialLinks";
import TeamCompany from "@/components/TeamCompany";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background to-background pointer-events-none" />

      {/* Animated background grid */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--aqua) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--aqua) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <PhaeInAction />
          <EmailSubscribe />
          <WhatIsPadha />
          <TokenDetails />
          <Docs />
          <OfficialLinks />
          <TeamCompany />
          <SocialLinks />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
