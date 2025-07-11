import React from "react";

const logos = [
  "/globe.svg",
  "/window.svg",
  "/file.svg",
  "/globe.svg", // Reusing for placeholder
];

const TrustedBrands: React.FC = () => (
  <section className="w-full py-10 bg-gradient-to-br from-black via-[#0b0c2a] to-[#060618] flex flex-col items-center">
    <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight text-center drop-shadow-lg mb-12">
      Trusted by <span className="text-white">World’s Most Loved Brands</span>
    </h1>
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center max-w-4xl w-full px-4">
        {logos.map((src, idx) => (
          <div key={idx} className="flex justify-center items-center">
            <img
              src={src}
              alt={`Brand logo ${idx + 1}`}
              className="h-20 md:h-28 w-auto grayscale hover:grayscale-0 transition duration-300 bg-white/10 rounded-lg p-4"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBrands; 