'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const features = [
  'From concept to crowd control — we handle it all.',
  'No confusion. No chaos. Just sharp planning, smooth execution, and memories that outlast the event.',
  'Every setup is crafted for maximum wow with minimum hassle.'
];

export default function WhoWeAreSection() {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const paraRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
    gsap.fromTo(
      subheadingRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
    );
    gsap.fromTo(
      paraRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: 'power3.out' }
    );
    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 0.8, ease: 'power3.out' }
    );
  }, []);

  return (
    <section className="relative py-16 px-4 md:px-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-purple-100 rounded-full opacity-30 blur-2xl z-0" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100 rounded-full opacity-20 blur-2xl z-0" />
      {/* Centered h1 and h2 headings at the top */}
      <div className="relative z-10 flex flex-col items-center justify-center mb-12">
        <h1
          ref={headingRef}
          className="text-3xl md:text-6xl font-extrabold text-black  text-center drop-shadow-lg mb-4"
        >
          Who We Are
        </h1>
        <h2
          ref={subheadingRef}
          className="text-2xl md:text-4xl font-semibold text-indigo-600 text-center mb-2"
        >
          We’re Not a Vendor. We’re Your Experience Partner.
        </h2>
      </div>
      {/* Two-column layout for rest of content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 flex flex-col md:items-start md:text-left items-center text-center">
          <p ref={paraRef} className="text-lg md:text-2xl text-gray-700 mb-6 max-w-2xl">
            ThrillScape is India’s leading experiential entertainment company — trusted by brands, schools, event planners, and venue owners to transform everyday spaces into high-impact, crowd-pulling experiences.<br /><br />
            We don’t just set up attractions — we orchestrate energy. From adrenaline-pumping rides to immersive VR zones and custom-built game arenas, every setup is crafted for maximum wow with minimum hassle.
          </p>
          <ul className="space-y-3 mb-6">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 md:justify-start justify-center">
                <span className="mt-1 w-3 h-3 bg-indigo-500 rounded-full inline-block shadow-md" />
                <span className="text-gray-800 text-base md:text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div ref={imageRef} className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-3xl shadow-xl overflow-hidden border-4 border-indigo-100 bg-white">
            <Image
              src="/images/character.png"
              alt="ThrillScape Experience"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
} 