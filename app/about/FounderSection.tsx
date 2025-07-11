import React from 'react';

const FounderSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center  py-16 pb-24 px-4 md:px-20 bg-white/90 rounded-3xl shadow-xl">
      {/* Founder Image */}
      <div className="flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-cyan-400/40 bg-gray-100">
        <img
          src="https://via.placeholder.com/300x400.png?text=Founder+Photo"
          alt="Abraham Bollarapu"
          className="object-cover w-full h-full"
        />
      </div>
      {/* Founder Info */}
      <div className="max-w-2xl text-gray-800">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
          <span className="text-black">ABRAHAM </span>
          <span className="text-cyan-600">BOLLARAPU</span>
        </h2>
        <h3 className="text-2xl font-semibold text-gray-600 mb-4">DIRECTOR</h3>
        <hr className="border-cyan-400 w-20 mb-4" />
        <p className="mb-3">
          ABRAHAM BOLLARAPU is an established name in amusement industry, is a first-generation entrepreneur and led different establishments in undertaking various projects of repute in the amusement industry and has researched & developed various technology intensive products.
        </p>
        <p className="mb-3">
          It is his vision, passion, zeal and indefatigable energy which has been instrumental in bringing new technologies into the country. He has over 39 years of experience in conceiving and developing Projects, primarily in Amusement Sector in India. After working abroad in the amusement industry, he has returned to India in the year 2005 and has established the first themed Family Entertainment Center (FEC) in India in GVK One Mall, Hyderabad by his brand “Funzone” and successfully operated it for 10 years. Subsequently, he has created various formats of FECs in various parts of the country for different clients.
        </p>
        <p>
          He has conceptualized and taken up a key role in implementing an Urban Entertainment Center, an amusement park in 2 acres of land, in the heart of the city, on Necklace Road, Hyderabad by his brand name “THRILLCITY”.
        </p>
      </div>
    </section>
  );
};

export default FounderSection; 