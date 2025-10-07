import type { Metadata } from "next";
import StorySection from '@/components/StorySection';
import HeritageTimeline from '@/components/HeritageTimeline';
import CraftsmanshipShowcase from '@/components/CraftsmanshipShowcase';
import TeamSection from '@/components/TeamSection';
import ValuesSection from '@/components/ValuesSection';

export const metadata: Metadata = {
  title: "About Us - Anokhi Heritage & Craftsmanship",
  description: "Discover the rich heritage and traditional craftsmanship behind Anokhi. Learn about our journey from 1969, our commitment to preserving traditional arts, and the master artisans who create our beautiful textiles.",
  keywords: "Anokhi history, traditional craftsmanship, hand-block printing, heritage, artisans, textile arts, Jaipur",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <StorySection />
      <HeritageTimeline />
      <CraftsmanshipShowcase />
      <ValuesSection />
      <TeamSection />
    </div>
  );
}
