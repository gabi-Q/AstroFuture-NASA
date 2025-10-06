'use client';
import { AiExplainer } from '@/components/cosmic-explorer/ai-explainer';
import { CallToAction } from '@/components/cosmic-explorer/call-to-action';
import { Footer } from '@/components/cosmic-explorer/footer';
import { Hero } from '@/components/cosmic-explorer/hero';
import { HowItWorks } from '@/components/cosmic-explorer/how-it-works';
import { WhatIsAstroFuture } from '@/components/cosmic-explorer/what-is-astro-future';
import { WhyItIsImportant } from '@/components/cosmic-explorer/why-it-is-important';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1">
        <Hero />
        <WhatIsAstroFuture />
        <HowItWorks />
        <WhyItIsImportant />
        <CallToAction />
        <Footer />
      </main>
      <AiExplainer />
    </div>
  );
}
