"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ModernCTA: React.FC = () => {
  const stats = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "30-Day Free Trial",
      description: "No credit card required",
      color: "red",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "24/7 Customer Support",
      description: "We're here when you need us",
      color: "blue",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "100% Satisfaction Guarantee",
      description: "Love it or your money back",
      color: "purple",
    },
  ];

  const colorClasses = {
    red: "from-aha-red/10 to-black/40 border-aha-red/20",
    blue: "from-blue-500/10 to-black/40 border-blue-500/20",
    purple: "from-purple-500/10 to-black/40 border-purple-500/20",
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-black via-aha-darkred/10 to-black">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-aha-red/10 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-aha-red/20 hover:bg-aha-red/30 text-aha-red border-none mb-6 px-4 py-2">
              Limited Time Offer
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            You're Just One Click Away From{" "}
            <span className="bg-gradient-to-r from-aha-red to-red-500 bg-clip-text text-transparent">
              Growth
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Join thousands of businesses who have transformed their operations with AHA Innovations
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-aha-red hover:bg-aha-red/90 text-white text-lg px-10 py-7 rounded-full group"
              >
                Get Started Free!
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-10 py-7 rounded-full"
              >
                View Pricing
              </Button>
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`glass-heavy p-8 rounded-2xl border ${
                  colorClasses[stat.color as keyof typeof colorClasses]
                } text-center`}
              >
                <div className="text-aha-red mb-4 flex justify-center">{stat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{stat.title}</h3>
                <p className="text-white/60">{stat.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernCTA;
