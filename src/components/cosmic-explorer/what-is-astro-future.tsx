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
        <div className="max-w-4xl mx-auto">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/1W79mprWnag?si=0peTiEiqQwAR7nDN" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="w-full aspect-video rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
