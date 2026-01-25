"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Clock, TrendingDown, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PainPointProps {
  icon: React.ReactNode;
  title: string;
  delay?: number;
}

const PainPoint: React.FC<PainPointProps> = ({ icon, title, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className="glass-heavy p-8 rounded-2xl border border-aha-red/20 hover:border-aha-red/40 transition-all duration-300 hover:scale-105">
        <div className="mb-4 text-aha-red">{icon}</div>
        <p className="text-white/90 text-lg">{title}</p>
      </div>
    </motion.div>
  );
};

const PainPoints: React.FC = () => {
  const painPoints = [
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Juggling 10+ different tools for your business?",
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Wasting hours on manual tasks and data entry?",
    },
    {
      icon: <TrendingDown className="w-12 h-12" />,
      title: "Missing leads and opportunities due to poor organization?",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Dealing with complex tech setup headaches?",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-black via-aha-darkred/5 to-black">
      <div className="absolute inset-0 bg-gradient-radial from-aha-red/5 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-aha-red/20 hover:bg-aha-red/30 text-aha-red border-none mb-6">
            Pain Points
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Is this <span className="text-aha-red">you</span> right now?
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <PainPoint
              key={index}
              icon={point.icon}
              title={point.title}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
