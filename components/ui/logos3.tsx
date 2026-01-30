// This template requires the Embla Auto Scroll plugin to be installed:
// npm install embla-carousel-auto-scroll

"use client";

import React from 'react';
import { RiLinkedinBoxLine } from "react-icons/ri";
import { SiWoo, SiTiktok } from "react-icons/si";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
  label?: string; // Optional text label below icon
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
  // Optional: supply brand slugs to load free SVGs from Simple Icons CDN
  brandSlugs?: string[];
  iconColorHex?: string; // e.g., 'ffffff' for white; omit to use official brand color
  // Prefer to show official wordmarks (when available). Fallbacks to icon automatically.
  wordmarkPreferredSlugs?: string[];
}

const Logos3 = ({
  heading = "Trusted by hundreds of companies worldwide",
  logos = [
    {
      id: "logo-1",
      description: "Company Logo 1",
      image: "/company-logos-1.png",
      className: "h-16 w-auto md:h-20",
    },
    {
      id: "logo-2",
      description: "Company Logo 2",
      image: "/company-logos-2.png",
      className: "h-16 w-auto md:h-20",
    },
    {
      id: "logo-3",
      description: "Company Logo 3",
      image: "/company-logos-3.png",
      className: "h-16 w-auto md:h-20",
    },
    {
      id: "logo-4",
      description: "Company Logo 4",
      image: "/company-logos-4.png",
      className: "h-16 w-auto md:h-20",
    },
  ],
  brandSlugs,
  iconColorHex = 'ffffff',
  wordmarkPreferredSlugs,
}: Logos3Props) => {
  // Correct Simple Icons slugs (some brands have different slugs)
  const correctSlugs: Record<string, string> = {
    tiktok: 'tiktok',
    instagram: 'instagram'
  };

  // Brand-specific colors for Simple Icons
  const brandColorBySlug: Record<string, string> = {
    tiktok: 'ffffff', // White for visibility against black background
    instagram: '000000' // Black for Instagram
  };

  // Brand labels for display below icons
  const brandLabels: Record<string, string> = {
    zapier: 'Zapier',
    whatsapp: 'WhatsApp',
    facebook: 'Facebook',
    stripe: 'Stripe',
    shopify: 'Shopify',
    tiktok: 'TikTok',
    quickbooks: 'QuickBooks',
    linkedin: 'LinkedIn',
    google: 'Google',
    slack: 'Slack',
    instagram: 'Instagram',
    woocommerce: 'WooCommerce'
  };

  const getWordmarkUrl = (slug: string): string => {
    // Try multiple sources for wordmarks with brand names
    const sources = [
      `https://www.vectorlogo.zone/logos/${slug}/${slug}-wordmark.svg`,
      `https://www.vectorlogo.zone/logos/${slug}/${slug}-ar21.svg`,
      `https://www.vectorlogo.zone/logos/${slug}/${slug}-logo.svg`,
    ];
    return sources[0];
  };

  const getIconUrl = (slug: string): string => {
    // Use correct slug for Simple Icons
    const correctSlug = correctSlugs[slug] || slug;
    const base = `https://cdn.simpleicons.org/${encodeURIComponent(correctSlug)}`;
    
    // Special case for TikTok to ensure visibility against black background
    if (slug === 'tiktok') {
      return `${base}/ffffff`; // Force white color for TikTok
    }
    
    // Force all other icons to be gray (no color parameters)
    return base;
  };

  // Build from Simple Icons or Wordmarks when preferred
  const resolvedLogos: Logo[] = (brandSlugs && brandSlugs.length > 0)
    ? brandSlugs.map((slug) => {
        const preferWordmark = !!(wordmarkPreferredSlugs || []).includes(slug);
        // Force Google to always use wordmark for better visibility
        // Special case for LinkedIn to use React Icon
        let imageUrl = (preferWordmark || slug === 'google') ? getWordmarkUrl(slug) : getIconUrl(slug);
        if (slug === 'linkedin') {
          imageUrl = 'react-icon:linkedin'; // Special identifier for React Icon
        }
        if (slug === 'woocommerce') {
          imageUrl = 'react-icon:woo'; // Use React Icon for WooCommerce
        }
        if (slug === 'tiktok') {
          imageUrl = 'react-icon:tiktok'; // Use React Icon for TikTok to ensure it's present
        }
        const label = brandLabels[slug] || slug;
        
        return {
          id: slug,
          description: `${slug} logo`,
          image: imageUrl,
          className: "h-8 w-auto md:h-10",
          label: label,
        } as Logo;
      })
    : logos;
  
  // Build two exact copies for truly seamless marquee (no jump on loop)
  const marqueeSetA = resolvedLogos.map((logo) => ({ ...logo, id: `${logo.id}-a` }));
  const marqueeSetB = resolvedLogos.map((logo) => ({ ...logo, id: `${logo.id}-b` }));

  return (
    <section className="py-10 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty text-xl font-bold lg:text-2xl text-white/90">
          {heading}
        </h2>
      </div>
      <div className="pt-6 md:pt-10 lg:pt-12">
        <div className="relative mx-auto lg:max-w-6xl overflow-hidden">
          {/* Marquee wrapper */}
          <div className="marquee flex w-max will-change-transform">
            {/* Track A */}
            <div className="marquee-track flex items-center gap-20 pr-0">
              {marqueeSetA.map((logo) => (
                <div key={logo.id} className="CarouselItem flex-shrink-0 flex flex-col items-center justify-center px-6 mx-4 min-w-[160px]">
                  {logo.image === 'react-icon:linkedin' ? (
                    <div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center text-gray-400">
                      <RiLinkedinBoxLine size={40} />
                    </div>
                  ) : logo.image === 'react-icon:woo' ? (
                    <div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center text-gray-300">
                      <SiWoo size={40} />
                    </div>
                  ) : logo.image === 'react-icon:tiktok' ? (
                    <div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center text-white">
                      <SiTiktok size={34} />
                    </div>
                  ) : (
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className="h-10 w-auto md:h-12 opacity-80 hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const carouselItem = target.closest('.CarouselItem') as HTMLElement;
                        if (carouselItem) {
                          carouselItem.style.display = 'none';
                        }
                      }}
                    />
                  )}
                  <span className="text-sm text-gray-400 mt-3 text-center font-medium">{logo.label}</span>
                </div>
              ))}
            </div>
            {/* Track B - identical copy to ensure seamless loop */}
            <div className="marquee-track flex items-center gap-20 pr-0" aria-hidden="true">
              {marqueeSetB.map((logo) => (
                <div key={logo.id} className="CarouselItem flex-shrink-0 flex flex-col items-center justify-center px-6 mx-4 min-w-[160px]">
                  {logo.image === 'react-icon:linkedin' ? (
                    <div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center text-gray-400">
                      <RiLinkedinBoxLine size={40} />
                    </div>
                  ) : logo.image === 'react-icon:woo' ? (
                    <div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center text-gray-300">
                      <SiWoo size={40} />
                    </div>
                  ) : logo.image === 'react-icon:tiktok' ? (
                    <div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center text-white">
                      <SiTiktok size={34} />
                    </div>
                  ) : (
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className="h-10 w-auto md:h-12 opacity-80 hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const carouselItem = target.closest('.CarouselItem') as HTMLElement;
                        if (carouselItem) {
                          carouselItem.style.display = 'none';
                        }
                      }}
                    />
                  )}
                  <span className="text-sm text-gray-400 mt-3 text-center font-medium">{logo.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
        .marquee { animation: marquee 80s linear infinite; }
        .marquee:hover { animation-play-state: paused; }
        
        /* Gradual blur effect using CSS transforms and opacity */
        .CarouselItem {
          transition: all 0.3s ease;
        }
        
        /* Create a mask effect that gradually fades icons at edges */
        .marquee::before,
        .marquee::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          pointer-events: none;
          z-index: 10;
        }
        
        .marquee::before {
          left: 0;
          background: linear-gradient(to right, 
            rgba(0, 0, 0, 0.9) 0%, 
            rgba(0, 0, 0, 0.6) 30%, 
            rgba(0, 0, 0, 0.3) 60%, 
            transparent 100%);
        }
        
        .marquee::after {
          right: 0;
          background: linear-gradient(to left, 
            rgba(0, 0, 0, 0.9) 0%, 
            rgba(0, 0, 0, 0.6) 30%, 
            rgba(0, 0, 0, 0.3) 60%, 
            transparent 100%);
        }
        
        @media (max-width: 768px) {
          .marquee { animation-duration: 120s; }
        }
      `}</style>
    </section>
  );
};

export { Logos3 };
