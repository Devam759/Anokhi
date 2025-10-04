import HeroSection from '@/components/HeroSection';
import BrandHighlights from '@/components/BrandHighlights';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BrandHighlights />
      <Footer />
    </div>
  );
}