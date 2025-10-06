'use client';
import { useLanguage } from '@/context/language-context';
import { Sparkles } from 'lucide-react';

export function WhyItIsImportant() {
  const { t } = useLanguage();

  return (
    <section id="why-it-is-important" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Sparkles className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold">{t('home.why_it_is_important.title')}</h2>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-400">{t('home.why_it_is_important.description')}</p>
        </div>
      </div>
    </section>
  );
}
