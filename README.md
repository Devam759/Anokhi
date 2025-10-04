# Anokhi - Handcrafted Heritage Website

A modern, responsive static website for a handcrafted textile and lifestyle brand, emphasizing storytelling, heritage, and design aesthetics with fast performance and SEO optimization.

## 🎨 Features

- **Modern Design**: Clean, minimalist layout with earthy tones
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for fast loading with static site generation
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and structured data
- **Accessible**: WCAG 2.1 compliant design
- **Heritage Focus**: Showcases traditional craftsmanship and brand story

## 📑 Pages

- **Home**: Hero banner, brand highlights, heritage preview, newsletter signup
- **About**: Heritage timeline, craftsmanship showcase, team, values
- **Shops**: Retail locations with embedded maps and contact info
- **Museum**: Exhibits, visitor information, booking system
- **Café**: Menu, experience, contact information
- **Contact**: Contact form, information, and location map

## ⚙️ Technical Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS with custom earthy color palette
- **TypeScript**: Full type safety
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: Formspree/Netlify Forms integration ready
- **Deployment**: Optimized for Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd anokhi
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run export
```

## 🎨 Customization

### Colors
The website uses a custom earthy color palette defined in `tailwind.config.ts`:
- **Earth**: Warm browns and tans
- **Sage**: Muted greens
- **Terracotta**: Rich orange-reds

### Content
All content is stored in JSON files in the `src/data/` directory:
- `brand.json`: Brand information and contact details
- `shops.json`: Retail locations and hours
- `heritage.json`: Timeline and craftsmanship information

### Images
Place images in the `public/images/` directory and update the paths in the data files.

## 📱 Form Integration

The contact forms are set up to work with:
- **Formspree**: Update the form action URLs
- **Netlify Forms**: Add `netlify` attribute to forms
- **Custom Backend**: Modify the form submission handlers

## 🌐 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Custom domain can be added in Vercel dashboard

### Other Platforms

The site is configured for static export and can be deployed to:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📈 SEO & Performance

- **Meta Tags**: Comprehensive meta tags for all pages
- **Sitemap**: Auto-generated sitemap at `/sitemap.xml`
- **Robots.txt**: Configured for search engine crawling
- **Performance**: Optimized images, lazy loading, and minimal JavaScript
- **Accessibility**: Semantic HTML and ARIA labels

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://anokhi.com
FORMSPREE_ENDPOINT=your-formspree-endpoint
GOOGLE_ANALYTICS_ID=your-ga-id
```

### Google Maps Integration

To enable interactive maps:
1. Get a Google Maps API key
2. Add it to your environment variables
3. Update the map components to use the API

## 📞 Support

For questions or support, please contact:
- Email: info@anokhi.com
- Phone: +91-141-256-1020

## 📄 License

This project is proprietary to Anokhi. All rights reserved.

---

Built with ❤️ for preserving and promoting traditional Indian textile arts.