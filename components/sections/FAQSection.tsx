"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const faqs: FAQ[] = [
    {
      question: "Do I really get a 30-day free trial?",
      answer:
        "Yes! You get full access to all features for 30 days, no credit card required. Cancel anytime before the trial ends and you won't be charged.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference.",
    },
    {
      question: "What if I need help getting started?",
      answer:
        "We've got you covered! All plans include email support, and our Professional and Enterprise plans come with priority and dedicated support. We also have extensive documentation and video tutorials.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Security is our top priority. We use bank-level encryption, regular backups, and are fully GDPR compliant. Your data is safe with us.",
    },
    {
      question: "Can I import my existing contacts?",
      answer:
        "Yes! We make it easy to import contacts from spreadsheets, other CRMs, or email platforms. Our team can help with large imports.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. Enterprise clients can also pay by invoice.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No setup fees, ever! The price you see is the price you pay. No hidden costs or surprises.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee. If you're not satisfied for any reason, we'll give you a full refund, no questions asked.",
    },
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-black via-aha-darkred/5 to-black">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-aha-red/20 hover:bg-aha-red/30 text-aha-red border-none mb-6">
            FAQs
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Frequently Asked <span className="text-aha-red">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70"
          >
            Got questions? We've got answers.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-heavy border border-aha-red/20 rounded-xl px-6 data-[state=open]:border-aha-red/40"
              >
                <AccordionTrigger className="text-left text-white hover:text-aha-red transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-white/60 mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="text-aha-red hover:underline font-semibold"
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
