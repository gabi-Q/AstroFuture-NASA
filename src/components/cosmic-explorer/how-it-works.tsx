'use client';
import { useLanguage } from '@/context/language-context';
import { Orbit, Bot, BrainCircuit } from 'lucide-react';

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">{t('home.how_it_works.title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <Orbit className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">{t('home.how_it_works.simulations.title')}</h3>
            <p className="text-gray-400">{t('home.how_it_works.simulations.description')}</p>
          </div>
          <div>
            <Bot className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">{t('home.how_it_works.assistant.title')}</h3>
            <p className="text-gray-400">{t('home.how_it_works.assistant.description')}</p>
          </div>
          <div>
            <BrainCircuit className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">{t('home.how_it_works.learning.title')}</h3>
            <p className="text-gray-400">{t('home.how_it_works.learning.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
