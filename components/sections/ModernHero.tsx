"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState, useRef } from "react";
import VideoPlayer from "@/components/ui/video-player";
import { FlipWords } from "@/components/ui/flip-words";
import { DotPattern } from "@/components/ui/dot-pattern";
import AHALiquidButton from "@/components/ui/aha-liquid-button";
import { useIsMobile } from "@/hooks/use-mobile";

interface ModernHeroProps {
  title: string;
  subtitle?: React.ReactNode;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export default function ModernHero({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
}: ModernHeroProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const words = ["Funnels", "Websites", "Workflows", "Automations"];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-aha-dark px-4"
    >
      {/* Complex Background Effects */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-aha-dark via-aha-darkpurple to-aha-dark" />
        
        {/* Dot Pattern Overlay */}
        <DotPattern
          width={32}
          height={32}
          cx={1}
          cy={1}
          cr={1}
          className="fill-white/[0.02]"
        />

        {/* Multiple Spotlight Layers */}
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-1/2 left-1/4 w-[600px] h-[600px]"
        >
          <div className="absolute inset-0 bg-aha-red/20 rounded-full blur-[120px] animate-pulse-slow" />
        </motion.div>
        
        <motion.div
          style={{ y: y2 }}
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px]"
        >
          <div className="absolute inset-0 bg-purple-600/15 rounded-full blur-[100px] animate-float" />
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 bg-aha-red/25 rounded-full blur-[150px]" />
        </motion.div>

        {/* Animated radial gradient overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(234, 56, 76, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(234, 56, 76, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 60%, rgba(234, 56, 76, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(234, 56, 76, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Light rays effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] animate-light-drift" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full py-20">
        <div className="text-center space-y-8">
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge 
                variant="outline" 
                className="bg-white/5 border-white/10 text-white backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                {subtitle}
              </Badge>
            </motion.div>
          )}

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span>Build </span>
            <span className="text-aha-red inline-block">
              <FlipWords 
                words={words} 
                duration={2500}
                className="text-aha-red"
              />
            </span>
            <br />
            <span>with AHA Innovations</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AHALiquidButton
              onClick={() => window.location.href = ctaLink}
              size={isMobile ? "md" : "lg"}
            >
              {ctaText}
            </AHALiquidButton>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="mt-16 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm bg-white/5">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%231A1F2C' width='1920' height='1080'/%3E%3C/svg%3E"
              >
                <source
                  src="https://storage.googleapis.com/msgsndr/LL7TmGrkL72EOf8O0FKA/media/69131b644dedcf1ffe981449.mp4"
                  type="video/mp4"
                />
              </video>
              
              {/* Unmute CTA Overlay */}
              <motion.button
                onClick={() => setIsVideoOpen(true)}
                className="absolute bottom-6 right-6 px-4 py-2 bg-aha-red/90 hover:bg-aha-red text-white rounded-full text-sm font-medium backdrop-blur-sm transition-all shadow-lg hover:shadow-aha-red/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Unmute for sound
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-aha-red transition-colors z-10"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <VideoPlayer
            src="https://storage.googleapis.com/msgsndr/LL7TmGrkL72EOf8O0FKA/media/69131b644dedcf1ffe981449.mp4"
          />
        </div>
      )}
    </section>
  );
}
