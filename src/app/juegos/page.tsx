'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';
import meteoro from '@/../assets/meteoro.png';

export default function JuegosPage() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">{t('juegos.page.title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/juegos/cuestionario">
          <div className="border rounded-lg p-6 hover:bg-muted/50 transition-colors cursor-pointer">
            <Image src={meteoro} alt="Cuestionario Cósmico" className="rounded-md mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{t('juegos.page.quiz.title')}</h2>
            <p className="text-muted-foreground">{t('juegos.page.quiz.description')}</p>
          </div>
        </Link>
        <div className="border rounded-lg p-6 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold mb-4">{t('juegos.page.new_game.title')}</h2>
          <p className="text-muted-foreground">{t('juegos.page.new_game.description')}</p>
        </div>
      </div>
    </div>
  );
}
