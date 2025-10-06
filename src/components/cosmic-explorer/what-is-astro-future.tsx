'use client';
import { useLanguage } from '@/context/language-context';
import { Rocket } from 'lucide-react';

export function WhatIsAstroFuture() {
  const { t } = useLanguage();

  return (
    <section id="what-is" className="py-20 md:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="md:pr-8">
                    <div className="flex items-center gap-4 mb-4">
                        <Rocket className="h-10 w-10 text-primary" />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('home.what_is.title')}</h2>
                    </div>
                    <p className="text-lg text-gray-400 leading-relaxed">{t('home.what_is.description')}</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <iframe 
                        src="https://www.youtube.com/embed/1W79mprWnag?si=0peTiEiqQwAR7nDN" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                        className="w-full aspect-video"
                    ></iframe>
                </div>
            </div>
        </div>
    </section>
  );
}
