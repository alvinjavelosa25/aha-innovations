"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  role,
  company,
  content,
  rating,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      <div className="glass-heavy p-8 rounded-2xl border border-aha-red/20 hover:border-aha-red/40 transition-all duration-300 h-full flex flex-col">
        <Quote className="w-10 h-10 text-aha-red/40 mb-4" />
        
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          ))}
        </div>

        <p className="text-white/80 text-lg mb-6 flex-grow italic">{content}</p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-aha-red to-red-500 rounded-full flex items-center justify-center text-white font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="text-white font-semibold">{name}</h4>
            <p className="text-white/60 text-sm">
              {role} at {company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const EnhancedTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder",
      company: "Growth Co",
      content:
        "AHA has completely transformed how we run our business. We've cut our tool costs by 70% and our team is more productive than ever.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Tech Startup",
      content:
        "The automation features alone have saved us 20+ hours per week. It's like having an extra team member working 24/7.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Creative Agency",
      content:
        "Finally, a platform that actually does what it promises. Our conversion rates have doubled since switching to AHA.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Business Owner",
      company: "Local Services",
      content:
        "I was skeptical at first, but AHA has exceeded all my expectations. The support team is incredible too!",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Consultant",
      company: "Freelance",
      content:
        "Managing multiple clients used to be a nightmare. Now everything is organized and automated. Game changer!",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "E-commerce Owner",
      company: "Online Store",
      content:
        "Our sales have increased by 40% thanks to the marketing automation. Best investment we've made this year.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-black via-aha-darkred/5 to-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-aha-red/20 hover:bg-aha-red/30 text-aha-red border-none mb-6">
            Testimonials
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Loved By <span className="text-aha-red">10,000+</span> Businesses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Don't just take our word for it - hear from real businesses who've transformed with AHA
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              delay={index * 0.05}
            />
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/20"></div>
            <span>10,000+ Active Users</span>
            <div className="hidden md:block w-px h-6 bg-white/20"></div>
            <span>98% Customer Satisfaction</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;
