import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Expertises } from "@/components/sections/Expertises";
import { Beliefs } from "@/components/sections/Beliefs";
import { Accompany } from "@/components/sections/Accompany";
import { Team } from "@/components/sections/Team";
import { Method } from "@/components/sections/Method";
import { Portfolio } from "@/components/sections/Portfolio";
import { Gallery } from "@/components/sections/Gallery";
import { Clients } from "@/components/sections/Clients";
import { Stats } from "@/components/sections/Stats";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Expertises />
        <Beliefs />
        <Accompany />
        <Team />
        <Method />
        <Portfolio />
        <Gallery tinted />
        <Clients />
        <Stats />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
