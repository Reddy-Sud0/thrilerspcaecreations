import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 300, suffix: '+', label: 'Experiences Delivered', color: 'from-cyan-400 to-blue-500' },
  { number: 95, suffix: '%', label: 'Client Repeat Rate', color: 'from-purple-400 to-pink-500' },
  { number: 40, suffix: '+', label: 'Cities Served', color: 'from-green-400 to-emerald-500' },
  { number: 100, suffix: '%', label: 'On-Time Deployment', color: 'from-yellow-400 to-orange-500' },
  { number: 150, suffix: '+', label: 'Mechanical + Digital Modules', color: 'from-red-400 to-orange-500' },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 60, scale: 0.85 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );

    // Number count-up animation
    numberRefs.current.forEach((el, i) => {
      if (!el) return;
      const stat = stats[i];
      const obj = { val: 0 };
      gsap.fromTo(
        obj,
        { val: 0 },
        {
          val: stat.number,
          duration: 1.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: function () {
            if (el) {
              const val = Math.floor(obj.val);
              el.textContent = val + (stat.suffix || "");
            }
          },
          onComplete: function () {
            if (el) {
              el.textContent = stat.number + (stat.suffix || "");
            }
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 px-4 md:px-12 bg-gradient-to-br from-[#0f1120] via-[#181a2a] to-[#0a0b13] relative overflow-hidden">
      <div className="max-w-4xl mx-auto mb-12 text-center relative z-10">
        <h1 ref={headingRef} className="text-3xl md:text-6xl font-extrabold text-white  text-center drop-shadow-lg mb-4 ">
          Built on Results. Backed by Reliability.
        </h1>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center max-w-[10rem]">
            <span
              ref={el => (numberRefs.current[index] = el)}
              className={`text-3xl md:text-6xl font-extrabold text-black text-center drop-shadow-lg mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
            >
              0{stat.suffix}
            </span>
            <span className="text-gray-200 text-xs sm:text-sm md:text-base font-medium text-center uppercase tracking-wide whitespace-pre-line break-words leading-tight">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
      {/* Decorative blurred shape */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-green-400/10 rounded-full blur-3xl z-0" />
    </section>
  );
} 