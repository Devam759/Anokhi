import type { Metadata } from "next";
import CafeHero from '@/components/CafeHero';
import CafeMenu from '@/components/CafeMenu';
import CafeExperience from '@/components/CafeExperience';
import CafeInfo from '@/components/CafeInfo';

export const metadata: Metadata = {
  title: "Anokhi Café - Fresh Organic Cuisine & Heritage Experience",
  description: "Experience fresh, organic cuisine at Anokhi Café in Jaipur. From humble beginnings to serving farm-fresh produce, vegetarian dishes, and home-made delicacies in a heritage setting.",
  keywords: "Anokhi Café, organic cuisine, vegetarian restaurant, Jaipur café, farm fresh, heritage café, fresh produce, home-made cakes",
};

export default function CafePage() {
  return (
    <div className="min-h-screen">
      <CafeHero />
      <CafeExperience />
      <CafeMenu />
      <CafeInfo />
    </div>
  );
}
