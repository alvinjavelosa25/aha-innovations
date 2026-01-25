"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

const ModernShowcase: React.FC = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-aha-red/20 hover:bg-aha-red/30 text-aha-red border-none mb-6">
            See It In Action
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Watch How <span className="text-aha-red">Simple</span> It Really Is
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Take a quick tour of the platform and see why thousands of businesses love AHA
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="glass-heavy p-4 rounded-3xl border border-aha-red/20">
            <div className="relative aspect-video bg-gradient-to-br from-aha-darkred/20 to-black rounded-2xl overflow-hidden flex items-center justify-center group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-aha-red/10 via-transparent to-transparent"></div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative z-10 w-20 h-20 bg-aha-red rounded-full flex items-center justify-center shadow-2xl shadow-aha-red/50"
              >
                <Play className="w-10 h-10 text-white ml-1" />
              </motion.div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            </div>
          </div>

          {/* Feature highlights around video */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Intuitive Interface", description: "No learning curve required" },
              { title: "Powerful Automation", description: "Save hours every week" },
              { title: "24/7 Support", description: "We're always here to help" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernShowcase;
