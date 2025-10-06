'use client';
import { useLanguage } from '@/context/language-context';
import { Orbit, Bot, BrainCircuit } from 'lucide-react';

export function HowItWorks() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Orbit className="h-10 w-10 text-primary" />,
      title: t('home.how_it_works.simulations.title'),
      description: t('home.how_it_works.simulations.description'),
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: t('home.how_it_works.assistant.title'),
      description: t('home.how_it_works.assistant.description'),
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-primary" />,
      title: t('home.how_it_works.learning.title'),
      description: t('home.how_it_works.learning.description'),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">{t('home.how_it_works.title')}</h2>
          <p className="text-lg text-gray-400">{t('home.how_it_works.subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 rounded-xl p-8 border border-transparent hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
