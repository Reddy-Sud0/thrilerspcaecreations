import React from "react";
import { Sparkles } from "lucide-react";

const checklist = [
  { label: "Fast Planning" },
  { label: "Fully Staffed" },
  { label: "Always On Time" },
];

export default function BookCallSection() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 flex flex-col items-center text-center bg-gradient-to-br from-black via-[#0b0c2a] to-[#060618]">
      <div className="mb-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
          Let’s Turn Your Space into an Experience.
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 font-medium">
          You don’t need to figure it all out.<br />
          Just tell us your space, your crowd, and your budget — and we’ll handle the rest.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        {checklist.map((item, idx) => (
          <div
            key={item.label}
            className="flex items-center gap-2 px-2"
          >
            <Sparkles className="w-5 h-5 text-pink-400 drop-shadow-[0_1px_4px_rgba(236,72,153,0.7)]" />
            <span className="font-semibold text-gray-100 text-base">{item.label}</span>
          </div>
        ))}
      </div>
      <a
        href="#contact"
        className="inline-flex items-center gap-2 bg-white text-black font-bold py-3 px-6 rounded-full transition-all text-lg focus:outline-none focus:ring-2 focus:ring-blue-400
        hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:text-white hover:shadow-xl"
      >
        Book a Consultation Call
      </a>
    </section>
  );
} 