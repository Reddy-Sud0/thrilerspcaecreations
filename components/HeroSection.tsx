"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeroSectionProps {
  videoSrc?: string;
}

function HeroSection({
  videoSrc = "/Videos/herosection_bg.mp4",
}: HeroSectionProps) {
  const headline = "Where Your Space Becomes the Main Attraction.";
  const paragraph = "From amusement parks and malls to campus fests, resorts, and brand activations — ThrillScape creates fully-managed entertainment zones with mechanical rides, VR arenas, and high-energy games that captivate your audience and keep them coming back.\n\nWe don’t just set up — we deliver safety, scale, and spectacle.";
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const paragraphLettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  // Removed subheading and subLettersRef

  useEffect(() => {
    if (lettersRef.current.length) {
      gsap.fromTo(
        lettersRef.current,
        { y: 40, opacity: 0, scale: 0.7, filter: 'blur(12px)', z: -200 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          z: 0,
          stagger: 0.04,
          duration: 0.7,
          ease: "power3.out",
        }
      );
    }
    if (paragraphLettersRef.current.length) {
      gsap.fromTo(
        paragraphLettersRef.current,
        { y: 40, opacity: 0, scale: 0.7, filter: 'blur(12px)', z: -200 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          z: 0,
          stagger: 0.02,
          duration: 0.5,
          ease: "power3.out",
          delay: 0.5,
        }
      );
    }
  }, []);

  return (
    <section className="relative flex items-center justify-center w-full px-2 md:px-0 h-screen md:pt-[96px] md:h-[calc(600px+96px)]">
      <div className="absolute inset-0">
        <video
          src={videoSrc}
          className="object-cover w-full h-full brightness-90"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container relative z-10 text-center text-white hero-content flex flex-col items-center justify-center h-full px-2 md:px-0 md:-translate-y-16">
        <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight text-center drop-shadow-lg mb-3 md:mb-6  max-w-[90vw] md:max-w-[90vw]">
          {headline.split("").map((char, i) => (
            <span
              key={i}
              ref={el => {
                lettersRef.current[i] = el;
              }}
              style={{ display: char === " " ? "inline-block" : "inline-block", minWidth: char === " " ? "0.35em" : undefined, willChange: 'transform, filter, opacity' }}
              aria-hidden="true"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="text-center text-lg md:text-2xl font-normal mb-5 md:mb-8  max-w-[90vw] md:max-w-full whitespace-pre-line leading-snug md:leading-snug mt-6 md:mt-0 px-4 md:px-12">
          {paragraph.split('\n').map((line, lineIdx, arr) => (
            <React.Fragment key={lineIdx}>
              {line.split("").map((char, i) => (
                <span
                  key={i}
                  ref={el => {
                    paragraphLettersRef.current[lineIdx * 1000 + i] = el;
                  }}
                  style={{ display: char === " " ? "inline-block" : "inline-block", minWidth: char === " " ? "0.25em" : undefined, willChange: 'transform, filter, opacity' }}
                  aria-hidden="true"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              {lineIdx < arr.length - 1 && <br style={{ marginBottom: '1.5em' }} />}
            </React.Fragment>
          ))}
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 hero-buttons mt-32 md:mt-0">
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-transparent text-white font-semibold shadow border-2 border-white hover:bg-gradient-to-br hover:from-black hover:via-[#0b0c2a] hover:to-[#060618] hover:scale-105 transition-transform transition-colors duration-200 text-base md:text-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            Book a Free Consultation
          </a>
          <a
            href="/path/to/experience-deck.pdf" // Update this path to your actual PDF
            download
            className="px-6 py-3 rounded-full bg-transparent text-white font-semibold shadow border-2 border-white hover:bg-gradient-to-br hover:from-black hover:via-[#0b0c2a] hover:to-[#060618] hover:scale-105 transition-transform transition-colors duration-200 text-base md:text-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            Download Experience Deck
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection; 