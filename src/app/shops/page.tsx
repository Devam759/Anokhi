import type { Metadata } from "next";
import ShopsDirectory from '@/components/ShopsDirectory';

export const metadata: Metadata = {
  title: "Our Shops - Anokhi Retail Locations Across India",
  description: "Visit our Anokhi shops across India including Ahmedabad, Bengaluru, Chandigarh, Chennai, Coimbatore, Delhi, Gurgaon, Hyderabad, Jaipur, Jodhpur, Kochi, Kolkata, Lucknow, Mumbai, Noida, Puducherry, and Pune. Experience our handcrafted textiles, lifestyle products, and heritage collections at our beautiful retail locations.",
  keywords: "Anokhi shops, retail locations, Ahmedabad, Bengaluru, Chandigarh, Chennai, Coimbatore, Delhi, Gurgaon, Hyderabad, Jaipur, Jodhpur, Kochi, Kolkata, Lucknow, Mumbai, Noida, Puducherry, Pune, handcrafted textiles, store hours, directions, India stores",
};

export default function ShopsPage() {
  return <ShopsDirectory />;
}
