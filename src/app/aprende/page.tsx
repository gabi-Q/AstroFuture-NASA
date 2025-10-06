
import { promises as fs } from 'fs';
import path from 'path';
import { InfoCard } from '@/components/aprende/infocard';
import { FeaturedObjects } from '@/components/aprende/featured-objects';

export default async function AprendePage() {
  const filePath = path.join(process.cwd(), 'src/lib/locales/aprende.json');
  const fileContent = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(fileContent);

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Aprende sobre el Cosmos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.celestialObjects.map((object) => (
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
