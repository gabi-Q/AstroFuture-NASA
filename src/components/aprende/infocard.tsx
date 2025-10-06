import Image from 'next/image';

export interface InfoCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function InfoCard({ title, description, imageUrl }: InfoCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
      <Image src={imageUrl} alt={title} width={500} height={300} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
