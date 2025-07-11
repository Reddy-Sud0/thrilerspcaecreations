"use client";

import React, { useEffect, useRef, useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { gsap } from "gsap";

const faqs = [
  {
    q: "What kind of spaces can you set up in ?",
    a: "We adapt to rooftops, indoor halls, outdoor grounds, malls, and even tight urban spaces. Just tell us the area and layout — we’ll suggest what fits best.",
  },
  {
    q: "Do you handle power, safety, and staffing ?",
    a: "Yes — all our setups are fully powered, staffed, and compliant with safety norms. You don’t need to manage anything on-site.",
  },
  {
    q: "What’s the minimum area required ?",
    a: "Most experiences need just 15x15 ft or more. We can scale up or down based on your space and crowd size.",
  },
  {
    q: "Can I customize the experience for my theme or brand ?",
    a: "Absolutely. We offer branding, signage, color themes, and even ride naming options to match your campaign or event.",
  },
  {
    q: "Do you travel to Tier 2 or Tier 3 cities ?",
    a: "Yes — we’ve delivered events in 40+ cities across India, including campuses and venues in Tier 2/3 regions.",
  },
  {
    q: "How far in advance should I book ?",
    a: "We recommend at least 2 weeks' notice to guarantee availability — especially during peak season or large-scale events.",
  },
  {
    q: "What’s included in your pricing ?",
    a: "Our packages include setup, equipment, power handling, on-ground staff, safety protocols, and teardown. No hidden charges.",
  },
  {
    q: "Can you manage large footfall events ?",
    a: "Yes — we’re equipped to handle events with thousands of attendees, with proper crowd flow, queue management, and staff rotation.",
  },
  {
    q: "Do you offer long-term or permanent installations ?",
    a: "We do. Our Custom Install service allows malls, resorts, and venues to have permanent entertainment zones designed end-to-end.",
  },
  {
    q: "Is this suitable for kids, adults, or both ?",
    a: "We have curated setups for all age groups — from high-adrenaline rides for youth to family-friendly game zones and kid-safe experiences.",
  },
];

export default function FAQSection({ showTitle = true, className = "" }: { showTitle?: boolean; className?: string }) {
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [itemsHidden, setItemsHidden] = useState(true);
  // Add state for controlled Accordion open values
  const [leftOpen, setLeftOpen] = useState<string[]>([]);
  const [rightOpen, setRightOpen] = useState<string[]>([]);

  useEffect(() => {
    if (!sectionRef.current || hasAnimated) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (faqRefs.current && faqRefs.current.every(Boolean)) {
            gsap.fromTo(
              faqRefs.current,
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                stagger: 0.08,
                duration: 0.7,
                ease: "power3.out",
                clearProps: "all",
                onComplete: () => setItemsHidden(false),
              }
            );
            setHasAnimated(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (faqRefs.current) {
      gsap.fromTo(
        faqRefs.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: "power3.out",
          clearProps: "all", // Remove inline styles after animation
        }
      );
    }
  }, []);

  // Split into two columns
  const leftFaqs = faqs.slice(0, 5);
  const rightFaqs = faqs.slice(5);

  // Helper: is desktop?
  const isDesktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;

  // Handlers for hover-to-open (desktop only)
  const handleMouseEnter = (value: string, side: 'left' | 'right') => {
    if (typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches) {
      if (side === 'left') setLeftOpen([value]);
      else setRightOpen([value]);
    }
  };
  const handleMouseLeave = (side: 'left' | 'right') => {
    if (typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches) {
      if (side === 'left') setLeftOpen([]);
      else setRightOpen([]);
    }
  };

  return (
    <section ref={sectionRef} className={`w-full py-16 px-4 bg-gradient-to-br from-black via-[#0b0c2a] to-[#060618] ${className}`}>
      <div className="max-w-5xl mx-auto w-full">
        {showTitle && (
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <Accordion type="multiple" value={leftOpen} onValueChange={setLeftOpen} className="space-y-4">
            {leftFaqs.map((faq, i) => (
              <div
                ref={el => (faqRefs.current[i] = el)}
                key={faq.q}
                className={itemsHidden ? 'opacity-0 translate-y-[60px]' : ''}
              >
                <AccordionItem
                  value={faq.q}
                  className="bg-[#10122b] rounded-lg border-none shadow-lg transition-colors data-[state=open]:bg-[#181a3a]"
                  onMouseEnter={() => handleMouseEnter(faq.q, 'left')}
                  onMouseLeave={() => handleMouseLeave('left')}
                >
                  <AccordionTrigger className="text-lg text-white px-6 py-4 flex justify-between items-center">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
          {/* Right Column */}
          <Accordion type="multiple" value={rightOpen} onValueChange={setRightOpen} className="space-y-4">
            {rightFaqs.map((faq, i) => (
              <div
                ref={el => (faqRefs.current[i + 5] = el)}
                key={faq.q}
                className={itemsHidden ? 'opacity-0 translate-y-[60px]' : ''}
              >
                <AccordionItem
                  value={faq.q}
                  className="bg-[#10122b] rounded-lg border-none shadow-lg transition-colors data-[state=open]:bg-[#181a3a]"
                  onMouseEnter={() => handleMouseEnter(faq.q, 'right')}
                  onMouseLeave={() => handleMouseLeave('right')}
                >
                  <AccordionTrigger className="text-lg text-white px-6 py-4 flex justify-between items-center">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 px-6 pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
} 