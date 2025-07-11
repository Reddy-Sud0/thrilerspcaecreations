import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const testimonials = [
  {
    quote:
      "They didn’t just show up with equipment — they brought energy, structure, and ran the entire zone like seasoned professionals.",
    author: "Cultural Secretary",
    org: "NIT Suratkal",
    logo: "/images/nit-logo.png", // Placeholder path
  },
  {
    quote:
      "We booked them for a single day. The crowd response was so overwhelming, we extended the setup to three.",
    author: "Event Head",
    org: "Phoenix Mall",
    logo: "/images/phoenixmall-logo.png", // Placeholder path
  },
  {
    quote:
      "They transformed our resort into a destination. The guest engagement — and the social media buzz — was beyond our expectations.",
    author: "General Manager",
    org: "OceanStone Retreats",
    logo: "/images/oceanstone-logo.png", // Placeholder path
  },
];

export default function TrustedByLeaders() {
  const logoRefs = useRef<(HTMLImageElement | null)[]>([]);
  const quoteRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const footerRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Animate quote and footer moving up smoothly
    gsap.to(quoteRefs.current, { y: -24, duration: 0.6, ease: "power2.out" });
    gsap.to(footerRefs.current, { y: -24, duration: 0.6, ease: "power2.out" });
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-6xl font-extrabold text-black  text-center drop-shadow-lg mb-10">
          Trusted by Leaders
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 justify-center items-stretch">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="flex-1 flex flex-col items-center">
              <div className="mb-10 flex justify-center" style={{ minHeight: 64 }}>
                <img
                  ref={el => (logoRefs.current[i] = el)}
                  src={t.logo}
                  alt={t.org + ' logo'}
                  className="h-12 w-auto object-contain rounded-md shadow-sm bg-gray-100"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder-logo.svg';
                  }}
                />
              </div>
              <p
                ref={el => (quoteRefs.current[i] = el)}
                className="text-lg md:text-xl text-gray-800 italic mb-2 text-center"
              >
                “{t.quote}”
              </p>
              <footer
                ref={el => (footerRefs.current[i] = el)}
                className="text-sm text-gray-600 text-center mt-1"
              >
                — <span className="font-semibold text-gray-900">{t.author}</span>, {t.org}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
