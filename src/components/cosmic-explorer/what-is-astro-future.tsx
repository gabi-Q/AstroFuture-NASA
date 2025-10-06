'use client';
import { useLanguage } from '@/context/language-context';
import { Rocket } from 'lucide-react';

export function WhatIsAstroFuture() {
  const { t } = useLanguage();

  return (
    <section id="what-is" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Rocket className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold">{t('home.what_is.title')}</h2>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-400 mb-8">{t('home.what_is.description')}</p>
        </div>
      </div>
    </section>
  );
}
