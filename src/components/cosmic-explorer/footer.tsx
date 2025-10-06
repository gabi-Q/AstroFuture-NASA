'use client';
import { useLanguage } from '@/context/language-context';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-400 hover:text-white"><Github /></a>
          <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
          <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
        </div>
        <p className="text-gray-500">&copy; {new Date().getFullYear()} ASTRO FUTURE. {t('footer.rights')}</p>
      </div>
    </footer>
  );
}
