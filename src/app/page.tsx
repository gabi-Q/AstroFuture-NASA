'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { AnimatedStarfield } from '@/components/cosmic-explorer/animated-starfield';
import { useLanguage } from '@/context/language-context';
import { AiExplainer } from '@/components/cosmic-explorer/ai-explainer';
import { WhatIsAstroFuture } from '@/components/cosmic-explorer/what-is-astro-future';
import { HowItWorks } from '@/components/cosmic-explorer/how-it-works';
import { WhyItIsImportant } from '@/components/cosmic-explorer/why-it-is-important';
import { CallToAction } from '@/components/cosmic-explorer/call-to-action';
import { Footer } from '@/components/cosmic-explorer/footer';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1">
        <section id="hero" className="relative h-[70vh] md:h-[90vh] flex items-center justify-center text-center overflow-hidden">
          <AnimatedStarfield />
          <div className="relative z-20 p-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">{t('home.hero.title')}</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              {t('home.hero.subtitle')}
            </p>
            <Link href="/aprende">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t('home.hero.cta')}
                <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
            </Link>
          </div>
        </section>
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
