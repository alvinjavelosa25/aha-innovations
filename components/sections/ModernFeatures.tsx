"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Zap,
  TrendingUp,
  Megaphone,
  Calendar,
  MessageSquare,
  BarChart3,
  ShoppingCart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  color?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
  color = "red",
}) => {
  const colorClasses = {
    red: "from-aha-red/10 to-black/40 border-aha-red/20 hover:border-aha-red/40",
    blue: "from-blue-500/10 to-black/40 border-blue-500/20 hover:border-blue-500/40",
    purple: "from-purple-500/10 to-black/40 border-purple-500/20 hover:border-purple-500/40",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative group h-full"
    >
      <div
        className={`glass-heavy p-8 rounded-2xl border ${colorClasses[color as keyof typeof colorClasses]} transition-all duration-300 hover:scale-105 h-full flex flex-col`}
      >
        <div className="mb-4 text-aha-red">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/70 flex-grow">{description}</p>
      </div>
    </motion.div>
  );
};

const ModernFeatures: React.FC = () => {
  const [showAutomationPreview, setShowAutomationPreview] = useState(false);

  const features = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Manage All Your Customers",
      description:
        "Keep track of every customer, lead, and conversation in one organized place.",
      color: "red",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Automate Repetitive Tasks",
      description:
        "Set it and forget it. Let automation handle the boring stuff while you focus on growth.",
      color: "red",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Convert Visitors Into Customers",
      description:
        "Beautiful landing pages and sales funnels that turn clicks into customers.",
      color: "blue",
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "Market Like A Pro",
      description:
        "Email, SMS, social media - all in one place. Reach your audience wherever they are.",
      color: "blue",
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Never Miss An Appointment",
      description:
        "Online booking, automated reminders, and calendar syncing. Show up ready.",
      color: "purple",
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Communicate Seamlessly",
      description:
        "Chat, email, SMS - all conversations in one unified inbox. Never lose a message.",
      color: "purple",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Track Your Performance",
      description:
        "Real-time analytics and reports. Know what's working and what needs attention.",
      color: "red",
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "Sell More, Faster",
      description:
        "Accept payments, create invoices, and manage your entire sales process effortlessly.",
      color: "blue",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-aha-red/20 hover:bg-aha-red/30 text-aha-red border-none mb-6">
            Features
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Everything You Need To{" "}
            <span className="text-aha-red">Grow Your Business</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            No more juggling multiple tools. Everything you need in one simple platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.05}
              color={feature.color}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/features">
            <Button
              size="lg"
              className="bg-aha-red hover:bg-aha-red/90 text-white rounded-full"
            >
              Explore All Features
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernFeatures;
