"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Logos3 } from '@/components/ui/logos3';
import { AvatarCircles } from '@/components/ui/avatar-circles';

const TrustedCompanies: React.FC = () => {
  const stats = [
    { value: '5,000+', label: 'Small Businesses' },
    { value: '50K+', label: 'Hours Saved Monthly' },
  ];

  const customerAvatars = [
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?w=150&h=150&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  ];

  return (
    <section className="py-4 md:py-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96"
          style={{
            background: `radial-gradient(ellipse 400px 400px at center,
              rgba(234, 56, 76, 0.06) 0%,
              rgba(234, 56, 76, 0.03) 30%,
              rgba(234, 56, 76, 0.015) 50%,
              transparent 70%)`,
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]"
          style={{
            background: `radial-gradient(ellipse 600px 300px at center,
              rgba(255, 255, 255, 0.04) 0%,
              rgba(255, 255, 255, 0.02) 30%,
              transparent 50%)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 mb-4 md:mb-6">
        <div className="flex justify-center gap-16 md:gap-24 mb-6 md:mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex flex-col items-center"
            >
              <h3
                className="text-3xl sm:text-4xl md:text-5xl font-ultra font-gotham mb-1"
                style={{ fontWeight: 950 }}
              >
                {stat.value}
              </h3>
              <p className="text-white/70 text-xs md:text-sm uppercase tracking-wider font-gotham font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-2"
        >
          <AvatarCircles
            numPeople={5000}
            avatarUrls={customerAvatars}
            className="[&>img]:border-2 [&>img]:border-white/20 [&>a]:bg-aha-red [&>a]:border-white/20 [&>a]:hover:bg-aha-darkred"
          />
        </motion.div>
      </div>

      <Logos3
        heading="Integrates With Your Favorite Tools"
        brandSlugs={[
          'zapier',
          'whatsapp',
          'facebook',
          'stripe',
          'shopify',
          'tiktok',
          'quickbooks',
          'linkedin',
          'google',
          'slack',
          'instagram',
          'woocommerce',
        ]}
        wordmarkPreferredSlugs={['google', 'slack', 'shopify', 'tiktok', 'zapier']}
      />
    </section>
  );
};

export default TrustedCompanies;
