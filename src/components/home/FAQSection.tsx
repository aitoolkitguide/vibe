"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Mavly?",
      a: "Mavly is an AI website builder that turns your ideas into beautiful, functional websites. You simply type what you want to create, and Mavly generates the full website layout, styles, components, and pages ready to edit and publish.",
    },
    {
      q: "Do I need any coding knowledge to use Mavly?",
      a: "Not at all. Mavly is built specifically so that anyone can create professional websites without writing a single line of code. If you do want to inspect or customize code, full Next.js and Tailwind source code is always accessible.",
    },
    {
      q: "How does the visual in-browser editor work?",
      a: "Once Mavly creates your website, you can use the built-in visual editor directly on the live preview. Click on any text, headline, or image to edit content in real time and see changes immediately.",
    },
    {
      q: "Can I connect my own custom domain?",
      a: "Yes. Mavly supports attaching custom domains with automated SSL provisioning. You can connect an existing domain from any registrar (such as GoDaddy, Namecheap, or Cloudflare) in just a few clicks.",
    },
    {
      q: "What kind of websites can I build with Mavly?",
      a: "You can build landing pages, business websites, portfolio sites, restaurant menus, personal blogs, agency showcases, and full-stack web applications with interactive databases and forms.",
    },
    {
      q: "How does Mavly pricing work?",
      a: "You can start building for free with included starter credits. There is no credit card required to begin designing and testing your sites. Pro tiers with dedicated compute and custom domains will be announced soon.",
    },
  ];

  return (
    <section id="faqs" className="py-24 sm:py-32 bg-white border-t border-black/[0.06] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-3 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-950 leading-tight">
            Got questions? We&apos;ve got answers.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            Everything you need to know about building websites with Mavly.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#faf9f6] border border-black/[0.06] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-gray-950 hover:text-neutral-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <div
                    className={`p-1.5 rounded-lg bg-white border border-black/[0.06] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-black" : "text-gray-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-black/[0.04] animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
