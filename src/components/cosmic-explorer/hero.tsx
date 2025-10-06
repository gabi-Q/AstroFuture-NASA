'use client';
import { useLanguage } from '@/context/language-context';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedStarfield } from './animated-starfield';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-background">
      <AnimatedStarfield />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[clamp(300px,80vw,1000px)] aspect-square bg-primary/5 rounded-full blur-[120px] animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 animate-fade-in-up">
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300"
          style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.15)' }}
        >
          {t('home.hero.title')}
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10">
          {t('home.hero.subtitle')}
        </p>
        <Link href="/aprende">
            <Button size="lg" className="bg-primary text-lg px-8 py-7 rounded-full shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-primary/40 group">
                {t('home.hero.cta')}
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
        </Link>
      </div>
      
      {/* Adding keyframes directly to be self-contained */}
      <style jsx>{`
        @keyframes animate-fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: animate-fade-in-up 1s ease-out 0.2s forwards;
        }

        @keyframes pulse-slow {
            0%, 100% {
                transform: scale(0.9);
                opacity: 0.5;
            }
            50% {
                transform: scale(1.1);
                opacity: 0.7;
            }
        }
        .animate-pulse-slow {
            animation: pulse-slow 10s infinite alternate ease-in-out;
        }
      `}</style>
    </section>
  );
}
