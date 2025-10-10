import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { ProblemOutcome } from '@/components/landing/ProblemOutcome';
import { WhatWeDo } from '@/components/landing/WhatWeDo';
import { HowWeWork } from '@/components/landing/HowWeWork';
import { Industries } from '@/components/landing/Industries';
import { CaseHighlights } from '@/components/landing/CaseHighlights';
import { CTA } from '@/components/landing/CTA';
import { ContactStrip } from '@/components/landing/ContactStrip';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemOutcome />
        <WhatWeDo />
        <HowWeWork />
        <Industries />
        <CaseHighlights />
        <CTA />
        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
