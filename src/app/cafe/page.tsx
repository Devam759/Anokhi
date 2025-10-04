import type { Metadata } from "next";
import CafeHero from '@/components/CafeHero';
import CafeMenu from '@/components/CafeMenu';
import CafeExperience from '@/components/CafeExperience';
import CafeInfo from '@/components/CafeInfo';

export const metadata: Metadata = {
  title: "Anokhi Café - Authentic Indian Cuisine & Artisanal Beverages",
  description: "Experience authentic Indian cuisine at Anokhi Café in Jaipur. Enjoy traditional dishes, artisanal beverages, and a heritage setting that complements our textile museum.",
  keywords: "Anokhi Café, Indian cuisine, Jaipur restaurant, authentic food, artisanal beverages, heritage café, traditional dishes",
};

export default function CafePage() {
  return (
    <div className="min-h-screen">
      <CafeHero />
      <CafeMenu />
      <CafeExperience />
      <CafeInfo />
    </div>
  );
}
