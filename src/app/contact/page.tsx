import type { Metadata } from "next";
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import ContactMap from '@/components/ContactMap';

export const metadata: Metadata = {
  title: "Contact Us - Anokhi Heritage & Craftsmanship",
  description: "Get in touch with Anokhi for inquiries about our handcrafted textiles, museum visits, café reservations, or collaboration opportunities. We're here to help!",
  keywords: "contact Anokhi, textile inquiries, museum information, café reservations, collaboration, customer service",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
    </div>
  );
}
