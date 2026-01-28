"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check, Maximize2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModernShowcase: React.FC = () => {
  const [showCrmPreview, setShowCrmPreview] = useState(false);

  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-20"
        >
          <Badge className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border-none mb-3 md:mb-6 py-1 md:py-1.5 px-3 md:px-4 mx-auto block w-fit font-medium text-xs md:text-sm">
            Platform Overview
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold mb-3 md:mb-6 tracking-tight text-white">
            One platform, <span className="text-blue-400">unlimited</span> potential
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto text-sm md:text-base lg:text-lg">
            AHA-Innovations brings together all the tools you need to grow your business in one seamless platform.
            No more juggling between different software solutions.
          </p>
        </motion.div>

        {/* First showcase item - CRM */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-aha-red/20 hover:bg-aha-red/30 text-aha-red border-none mb-4 md:mb-6 py-1 px-3 font-medium text-xs md:text-sm">
              CRM & Pipeline Management
            </Badge>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-6 text-white">
              Manage Your Entire Sales Pipeline in One Place
            </h3>
            <p className="text-gray-400 mb-4 md:mb-8 text-sm md:text-base">
              Track leads, manage contacts, and close deals faster with our intuitive CRM system.
              Never lose track of a potential customer again.
            </p>

            <div className="space-y-5">
              {[
                "Visual pipeline management",
                "Contact & lead tracking",
                "Automated follow-ups",
                "Deal forecasting & analytics"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-2 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-white/5 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-aha-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-aha-red md:hidden" />
                    <Check size={14} className="text-aha-red hidden md:block" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm md:text-base">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-aha-red/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-70"></div>
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative z-10">
              {/* CRM Demo GIF */}
              <div
                className="w-full rounded-xl border border-white/10 shadow-lg mb-4 sm:mb-6 bg-gradient-to-br from-gray-900 to-black overflow-hidden relative cursor-pointer group"
                onClick={() => setShowCrmPreview(true)}
              >
                <img
                  src="https://storage.googleapis.com/msgsndr/LL7TmGrkL72EOf8O0FKA/media/694195080041dc4ac51130bb.gif"
                  alt="CRM Pipeline Demo"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 border border-white/20 text-[11px] font-medium text-white/90 opacity-80 group-hover:opacity-100">
                  <Maximize2 size={12} className="opacity-90" />
                  <span>Click to preview</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
                {[
                  {
                    title: "Contacts",
                    value: "10,000+",
                    subtitle: "Managed efficiently",
                    color: "aha-red"
                  },
                  {
                    title: "Deals",
                    value: "32%",
                    subtitle: "Conversion increase",
                    color: "blue"
                  }
                ].map((stat, index) => {
                  const bgColor = stat.color === "blue" ? "bg-blue-500/10" : "bg-aha-red/10";
                  const textColor = stat.color === "blue" ? "text-blue-400" : "text-aha-red";

                  return (
                    <motion.div
                      key={index}
                      className={`${bgColor} rounded-xl p-2 sm:p-3 md:p-5 flex flex-col`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 mb-0.5 md:mb-1">{stat.title}</span>
                      <span className={`text-lg sm:text-xl md:text-2xl font-bold ${textColor} mb-0.5 md:mb-1`}>{stat.value}</span>
                      <span className="text-[10px] sm:text-xs text-gray-500">{stat.subtitle}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Second showcase item - Sales Funnels */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-aha-red/10 rounded-2xl blur-xl opacity-70"></div>
            <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative z-10">
              {/* Sales Funnel Builder Demo GIF */}
              <div className="w-full rounded-xl border border-white/10 shadow-lg mb-6 bg-gradient-to-br from-gray-900 to-black overflow-hidden">
                <img
                  src="https://storage.googleapis.com/msgsndr/LL7TmGrkL72EOf8O0FKA/media/69419fa69edaf3e4dd9c52a6.gif"
                  alt="Sales Funnel Builder Demo"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  {
                    title: "Conversion",
                    value: "+45%",
                    subtitle: "Average increase",
                    color: "blue"
                  },
                  {
                    title: "Setup Time",
                    value: "5 min",
                    subtitle: "With templates",
                    color: "aha-red"
                  }
                ].map((stat, index) => {
                  const bgColor = stat.color === "blue" ? "bg-blue-500/10" : "bg-aha-red/10";
                  const textColor = stat.color === "blue" ? "text-blue-400" : "text-aha-red";

                  return (
                    <motion.div
                      key={index}
                      className={`${bgColor} rounded-xl p-3 md:p-5 flex flex-col`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <span className="text-xs md:text-sm text-gray-400 mb-0.5 md:mb-1">{stat.title}</span>
                      <span className={`text-xl md:text-2xl font-bold ${textColor} mb-0.5 md:mb-1`}>{stat.value}</span>
                      <span className="text-xs text-gray-500">{stat.subtitle}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <Badge className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border-none mb-4 md:mb-6 py-1 px-3 font-medium text-xs md:text-sm">
              Sales Funnels
            </Badge>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-6 text-white">
              Convert More Prospects with Unlimited Sales Funnels
            </h3>
            <p className="text-gray-400 mb-4 md:mb-8 text-sm md:text-base">
              Design high-converting sales funnels with our intuitive drag-and-drop builder.
              Create landing pages, order forms, upsells, and thank you pages that guide customers
              through their buying journey.
            </p>

            <div className="space-y-5">
              {[
                "Unlimited sales funnels with all plans",
                "Drag-and-drop page builder",
                "Pre-made templates for quick setup",
                "A/B testing to optimize conversion rates"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-2 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-white/5 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-blue-400 md:hidden" />
                    <Check size={14} className="text-blue-400 hidden md:block" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm md:text-base">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 md:px-6 py-3 md:py-5 text-sm md:text-base group relative overflow-hidden"
                onClick={() => (window.location.href = "/features")}
              >
                <span className="relative z-10 flex items-center gap-1 md:gap-2 font-medium">
                  Learn More
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-white/10 z-0 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* CRM Preview Modal */}
      <AnimatePresence>
        {showCrmPreview && (
          <motion.div
            className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCrmPreview(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white/80 hover:text-white inline-flex items-center gap-1 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full"
                onClick={() => setShowCrmPreview(false)}
              >
                Close
              </button>
              <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl bg-gradient-to-br from-gray-900/80 to-black/80">
                <img
                  src="https://storage.googleapis.com/msgsndr/LL7TmGrkL72EOf8O0FKA/media/694195080041dc4ac51130bb.gif"
                  alt="CRM Pipeline Demo Full Preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ModernShowcase;
