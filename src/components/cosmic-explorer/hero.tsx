'use client';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/language-context';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  const { t } = useLanguage();
  const [stars, setStars] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const generateStars = () => {
        const isClient = typeof window !== 'undefined';
        if(isClient){
            const numStars = window.innerWidth > 768 ? 150 : 70; 
            const newStars = [];
            for (let i = 0; i < numStars; i++) {
                const style: React.CSSProperties = {
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                backgroundColor: 'white',
                borderRadius: '50%',
                opacity: Math.random() * 0.5 + 0.5,
                animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
                };
                newStars.push(style);
            }
            setStars(newStars);
        }
    };
    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);


  return (
    <section className="relative flex h-[60vh] items-center justify-center bg-[#060918] text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
             {stars.map((style, index) => (
                <div key={index} style={style} />
            ))}
        </div>
        <style>
        {`
            @keyframes twinkle {
                0%, 100% { opacity: 0.5; }
                50% { opacity: 1; }
            }
        `}
        </style>

      <div className="relative z-10 mx-auto px-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{t('home.hero.title')}</h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">{t('home.hero.subtitle')}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/aprende">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    {t('home.hero.cta')}
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
