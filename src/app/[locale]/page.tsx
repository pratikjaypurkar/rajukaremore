"use client";

import Hero from "@/components/LandingPage/Hero";
import About from "@/components/LandingPage/About/About";
import Progress from "@/components/LandingPage/Progess/Progress";
import News from "@/components/LandingPage/News/News";
import CampaignPrograms from "@/components/CampaignandProgram/CampaignandPrograms";
import RegistrationForm from "@/components/Member/Member";
import Media from "@/components/Media/Media";
import Services from "@/components/LandingPage/Services/Services";

export default function Home() {
  return (
    <main className="space-y-10">
      <Hero />
      <About />
      <Progress />
      <Services />
      <News />
      <CampaignPrograms />
      <RegistrationForm />
      <Media />
    </main>
  );
}
