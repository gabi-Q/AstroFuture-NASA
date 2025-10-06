'use client';
import { useLanguage } from '@/context/language-context';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  const { t } = useLanguage();

  return (
    <section id="cta" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.cta.title')}</h2>
        <Link href="/aprende">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            {t('home.cta.button')}
          </Button>
        </Link>
      </div>
    </section>
  );
}
