"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const audiences = [
  {
    title: "Event Planners",
    description: "Fast deployment, full logistics, sponsor-friendly setups",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" className="text-blue-500"><circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/><path d="M10 16h12M16 10v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: "Malls & Resorts",
    description: "Selfie-ready installations that boost dwell time & brand love",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" className="text-pink-500"><rect x="6" y="10" width="20" height="12" rx="4" stroke="currentColor" strokeWidth="2"/><circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="2"/></svg>
    ),
  },
  {
    title: "Schools & Colleges",
    description: "Safe, controlled chaos students go wild for",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" className="text-green-500"><path d="M16 6l12 6-12 6-12-6 12-6z" stroke="currentColor" strokeWidth="2"/><path d="M4 18v4a2 2 0 002 2h20a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="2"/></svg>
    ),
  },
  {
    title: "Amusement Parks",
    description: "Fresh thrill formats that don’t need a permanent build",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" className="text-yellow-500"><circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2"/><path d="M16 6v20M6 16h20" stroke="currentColor" strokeWidth="2"/></svg>
    ),
  },
  {
    title: "Custom Install Clients",
    description: "Built-on-site zones designed for long-term magic",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32" className="text-purple-500"><rect x="8" y="8" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M12 12h8v8h-8z" stroke="currentColor" strokeWidth="2"/></svg>
    ),
  },
];

const WhoWeServeSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const introRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    let ctx: ReturnType<typeof gsap.context> | undefined;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ctx = gsap.context(() => {
            gsap.fromTo(headingRef.current, {
              opacity: 0,
              y: 40,
            }, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            });
            gsap.fromTo(subheadingRef.current, {
              opacity: 0,
              y: 40,
            }, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: 0.2,
              ease: "power3.out",
            });
            gsap.fromTo(introRef.current, {
              opacity: 0,
              y: 40,
            }, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: 0.4,
              ease: "power3.out",
            });
            gsap.fromTo(cardsRef.current, {
              opacity: 0,
              y: 40,
            }, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: 0.6,
              stagger: 0.15,
              ease: "power3.out",
            });
          }, sectionRef);
        } else {
          // Reset for repeatable animation
          gsap.set([headingRef.current, subheadingRef.current, introRef.current, ...cardsRef.current], { opacity: 0, y: 40 });
          if (ctx) ctx.revert();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 px-4 sm:px-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-64 h-64 opacity-10" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill="#3b82f6" /></svg>
        <svg className="absolute bottom-0 right-0 w-64 h-64 opacity-10" viewBox="0 0 200 200" fill="none"><rect width="200" height="200" rx="100" fill="#a5b4fc" /></svg>
      </div>
      <div className="relative max-w-5xl mx-auto text-center">
        <h2 ref={headingRef} className="text-3xl md:text-6xl font-extrabold text-black  text-center drop-shadow-lg  mb-4">Who We Serve</h2>
        <p ref={subheadingRef} className="text-xl sm:text-2xl text-blue-700 font-semibold mb-2">Every Crowd Is Different. Every Setup Is Custom</p>
        <p ref={introRef} className="text-gray-600 max-w-2xl mx-auto mb-12">
          Whether you&apos;re organizing a 3-day campus fest or planning a corporate family day, we adapt our experiences to fit your reality.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((aud, idx) => (
            <div
              key={aud.title}
              ref={el => (cardsRef.current[idx] = el)}
              className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl border border-blue-100"
            >
              <div className="mb-4">{aud.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{aud.title}</h3>
              <p className="text-gray-600 text-center">{aud.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
