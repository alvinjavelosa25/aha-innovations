"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const PricingCard: React.FC<{ tier: PricingTier; delay?: number }> = ({
  tier,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative h-full"
    >
      <div
        className={`glass-heavy p-8 rounded-2xl border h-full flex flex-col ${
          tier.highlighted
            ? "border-aha-red/60 shadow-2xl shadow-aha-red/20 scale-105"
            : "border-aha-red/20 hover:border-aha-red/40"
        } transition-all duration-300`}
      >
        {tier.highlighted && (
          <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-aha-red text-white border-none">
            Most Popular
          </Badge>
        )}

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
          <p className="text-white/60 mb-4">{tier.description}</p>
          <div className="mb-4">
            <span className="text-5xl font-bold text-aha-red">{tier.price}</span>
            <span className="text-white/60 ml-2">{tier.period}</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-aha-red flex-shrink-0 mt-0.5" />
              <span className="text-white/80">{feature}</span>
            </li>
          ))}
        </ul>

        <Link href="/signup" className="w-full">
          <Button
            className={`w-full ${
              tier.highlighted
                ? "bg-aha-red hover:bg-aha-red/90 text-white"
                : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
            }`}
            size="lg"
          >
            {tier.cta}
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

const PricingSectionDemo: React.FC = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      price: "$97",
      period: "/month",
      description: "Perfect for solo entrepreneurs",
      features: [
        "Up to 1,000 contacts",
        "Basic CRM features",
        "Email marketing",
        "Landing pages",
        "Basic automation",
        "Email support",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$297",
      period: "/month",
      description: "For growing businesses",
      features: [
        "Up to 10,000 contacts",
        "Advanced CRM features",
        "Email & SMS marketing",
        "Unlimited landing pages",
        "Advanced automation",
        "Calendar booking",
        "Priority support",
        "Custom domains",
      ],
      highlighted: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "$497",
      period: "/month",
      description: "For established businesses",
      features: [
        "Unlimited contacts",
        "All Professional features",
        "White-label options",
        "Advanced reporting",
        "API access",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
      ],
      cta: "Contact Sales",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-aha-red/20 hover:bg-aha-red/30 text-aha-red border-none mb-6">
            Pricing
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Simple, <span className="text-aha-red">Transparent</span> Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Choose the plan that's right for your business. All plans include a 30-day free trial.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} delay={index * 0.1} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/60 mb-4">
            All plans include: SSL security, 99.9% uptime guarantee, GDPR compliance
          </p>
          <Link href="/pricing" className="text-aha-red hover:underline">
            View detailed comparison →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSectionDemo;
