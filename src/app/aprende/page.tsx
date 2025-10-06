'use client';
import { useEffect, useState } from 'react';
import { InfoCard } from '@/components/aprende/infocard';
import { FeaturedObjects } from '@/components/aprende/featured-objects';
import { useLanguage } from '@/context/language-context';
import data from '@/lib/locales/aprende.json';

type CelestialObject = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

export default function AprendePage() {
  const { language, t } = useLanguage();
  const [celestialObjects, setCelestialObjects] = useState<CelestialObject[]>([]);

  useEffect(() => {
    const objects = language === 'es' ? data.es.celestialObjects : data.en.celestialObjects;
    setCelestialObjects(objects);
  }, [language]);

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">{t('aprende.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {celestialObjects.map((object) => (
            <InfoCard
              key={object.id}
              title={object.title}
              description={object.description}
              imageUrl={object.imageUrl}
            />
          ))}
        </div>
      </div>
      <FeaturedObjects />
    </div>
  );
}
