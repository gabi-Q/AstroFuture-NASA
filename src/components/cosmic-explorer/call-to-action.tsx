'use client';
import { useLanguage } from '@/context/language-context';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export function CallToAction() {
  const { t } = useLanguage();

  return (
    <section id="cta" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="relative bg-gray-900/50 rounded-2xl overflow-hidden p-12 border border-primary/20">
            <div className="absolute inset-0 w-full h-full bg-grid-primary/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">{t('home.cta.title')}</h2>
                <p className="text-lg text-gray-400 mb-8">{t('home.cta.subtitle')}</p>
                <Link href="/aprende">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
                        {t('home.cta.button')}
                        <MoveRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
}
