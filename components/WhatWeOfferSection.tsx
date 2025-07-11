"use client";

import React from "react";

const offerings = [
  {
    title: "Mechanical Rides",
    description:
      "High-impact attractions like Bull Rides, Meltdown, and Gyroscope that bring adrenaline and energy to any crowd.",
    image: "/images/character.png", // Placeholder image
  },
  {
    title: "VR Zones",
    description:
      "Immersive virtual reality setups featuring games like Beat Saber and Haunted Mazes — perfect for tech-savvy thrill-seekers.",
    image: "/images/character.png",
  },
  {
    title: "Game Zones",
    description:
      "Fun, competitive group activities like Sumo Fights and Obstacle Courses that boost bonding and crowd engagement.",
    image: "/images/character.png",
  },
  {
    title: "Custom Installations",
    description:
      "Tailor-made entertainment zones built for your space, brand, and audience — from malls to resorts and beyond.",
    image: "/images/character.png",
  },
];

const WhatWeOfferSection = () => {
  const headingRef = React.useRef<HTMLHeadingElement>(null);
  const subheadingRef = React.useRef<HTMLHeadingElement>(null);
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h1
          ref={headingRef}
          className="text-3xl md:text-6xl font-extrabold text-gray-900 leading-tight text-center drop-shadow-lg mb-4"
        >
          What We Offer
        </h1>
        <h2
          ref={subheadingRef}
          className="text-2xl md:text-4xl font-semibold text-indigo-600 text-center mb-12"
        >
          Our Experiences Are Built to Move People — Emotionally &amp; Physically.
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-stretch">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="flip-card bg-transparent w-full max-w-xs h-[340px] focus-within:ring-2 focus-within:ring-indigo-500"
              tabIndex={0}
            >
              <div className="flip-card-inner w-full h-full">
                {/* Front Side */}
                <div
                  className="flip-card-front flex flex-col items-center justify-center rounded-2xl shadow-lg border border-gray-100 h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${offering.image}')` }}
                >
                  <h3 className="text-xl font-semibold text-black bg-white/80 px-4 py-2 rounded-lg text-center">
                    {offering.title}
                  </h3>
                </div>
                {/* Back Side */}
                <div className="flip-card-back flex flex-col items-center justify-center rounded-2xl shadow-lg border border-gray-100 h-full w-full bg-white p-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-black">
                    {offering.title}
                  </h3>
                  <p className="text-lg md:text-xl text-slate-800 text-center leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          .flip-card {
            perspective: 1200px;
            min-width: 0;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s cubic-bezier(0.4,0.2,0.2,1);
            transform-style: preserve-3d;
          }
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card:focus .flip-card-inner,
          .flip-card:focus-visible .flip-card-inner,
          .flip-card:focus-within .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-front, .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 1rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}</style>
      </div>
    </section>
  );
};

export default WhatWeOfferSection; 