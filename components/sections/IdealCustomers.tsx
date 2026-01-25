"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Briefcase, Users2, Store } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CustomerCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className="glass-heavy p-8 rounded-2xl border border-aha-red/20 hover:border-aha-red/40 transition-all duration-300 hover:scale-105 text-center h-full flex flex-col">
        <div className="mb-6 text-aha-red flex justify-center">{icon}</div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/70 flex-grow">{description}</p>
      </div>
    </motion.div>
  );
};

const IdealCustomers: React.FC = () => {
  const customers = [
    {
      icon: <Target className="w-16 h-16" />,
      title: "Entrepreneurs",
      description:
        "Solo founders and startups who need powerful tools without the complexity or cost.",
    },
    {
      icon: <Briefcase className="w-16 h-16" />,
      title: "Small Businesses",
      description:
        "Growing companies ready to streamline operations and scale efficiently.",
    },
    {
      icon: <Users2 className="w-16 h-16" />,
      title: "Service Providers",
      description:
        "Agencies, consultants, and professionals who need to manage clients and projects.",
    },
    {
      icon: <Store className="w-16 h-16" />,
      title: "E-commerce Stores",
      description:
        "Online retailers looking to automate marketing and improve customer relationships.",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-black via-aha-darkred/5 to-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-aha-red/20 hover:bg-aha-red/30 text-aha-red border-none mb-6">
            Who It's For
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Built For <span className="text-aha-red">Growing Businesses</span> Like Yours
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Whether you're just starting out or scaling up, we have the tools you need
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customers.map((customer, index) => (
            <CustomerCard
              key={index}
              icon={customer.icon}
              title={customer.title}
              description={customer.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdealCustomers;
