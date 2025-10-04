import type { Metadata } from "next";
import MuseumHero from '@/components/MuseumHero';
import MuseumExhibits from '@/components/MuseumExhibits';
import MuseumInfo from '@/components/MuseumInfo';
import MuseumVisit from '@/components/MuseumVisit';

export const metadata: Metadata = {
  title: "Anokhi Museum - Hand Printing Heritage & Textile Arts",
  description: "Visit the Anokhi Museum of Hand Printing in Jaipur. Explore the rich heritage of traditional Indian textile arts, witness live demonstrations, and discover centuries-old techniques.",
  keywords: "Anokhi Museum, hand printing, textile arts, Jaipur, heritage, traditional crafts, museum exhibits, textile history",
};

export default function MuseumPage() {
  return (
    <div className="min-h-screen">
      <MuseumHero />
      <MuseumExhibits />
      <MuseumInfo />
      <MuseumVisit />
    </div>
  );
}
