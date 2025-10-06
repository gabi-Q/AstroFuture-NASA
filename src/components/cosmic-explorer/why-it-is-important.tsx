'use client';
import { useLanguage } from '@/context/language-context';
import { Sparkles } from 'lucide-react';

export function WhyItIsImportant() {
  const { t } = useLanguage();

  return (
    <section id="why-it-is-important" className="py-20 md:py-32 bg-background text-foreground">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative flex justify-center items-center">
                    <div className="absolute w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
                    <Sparkles className="relative w-40 h-40 text-primary animate-pulse" />
                </div>
                <div className="md:pl-8">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">{t('home.why_it_is_important.title')}</h2>
                    <p className="text-lg text-gray-400 leading-relaxed">{t('home.why_it_is_important.description')}</p>
                </div>
            </div>
        </div>
    </section>
  );
}
