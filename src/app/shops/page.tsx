import type { Metadata } from "next";
import ShopsDirectory from '@/components/ShopsDirectory';
import ShopMap from '@/components/ShopMap';

export const metadata: Metadata = {
  title: "Our Shops - Anokhi Retail Locations",
  description: "Visit our Anokhi shops in Jaipur, Delhi, and Mumbai. Experience our handcrafted textiles, lifestyle products, and heritage collections at our beautiful retail locations.",
  keywords: "Anokhi shops, retail locations, Jaipur, Delhi, Mumbai, handcrafted textiles, store hours, directions",
};

export default function ShopsPage() {
  return (
    <div className="min-h-screen">
      <ShopsDirectory />
      <ShopMap />
    </div>
  );
}
