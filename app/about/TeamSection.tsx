import React from "react";

const teamMembers = [
  {
    name: "ABRAHAM BOLLARAPU",
    country: "INDIA",
    countryColor: "text-yellow-400",
    role: "Technical Head",
    image: "/images/character.png",
  },
  {
    name: "PRABHU D",
    country: "INDIA",
    countryColor: "text-yellow-400",
    role: "Projects Head",
    image: "/images/character.png",
  },
  {
    name: "DR. THOENDEL EVZEN",
    country: "CZECH REPUBLIC, EUROPE",
    countryColor: "text-blue-400",
    role: "Technology Partner",
    image: "/images/character.png",
  },
  {
    name: "MARSHAL HORSBURGH",
    country: "AUSTRALIA",
    countryColor: "text-yellow-400",
    role: "Theming Partner",
    image: "/images/character.png",
  },
  {
    name: "THANOJ KUMAR",
    country: "INDIA",
    countryColor: "text-yellow-400",
    role: "Chief Executive Officer",
    image: "/images/character.png",
  },
  {
    name: "KRISHNA MOHAN VARMA",
    country: "INDIA",
    countryColor: "text-yellow-400",
    role: "Managing Partner",
    image: "/images/character.png",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-center mb-14">
          <span className="text-gray-900">OUR </span>
          <span className="text-cyan-600">MEMBERS</span>
        </h2>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 mb-10 justify-items-center">
          {teamMembers.slice(0, 2).map((member, idx) => (
            <div key={idx} className="flex flex-col items-center w-72 bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              <div className="w-full flex items-center justify-between bg-gray-800 px-4 py-3">
                <span className="text-lg font-bold text-white tracking-wide">{member.name}</span>
                <span className={`ml-2 font-bold ${member.countryColor}`}>{member.country}</span>
              </div>
              <div className="w-full text-center text-gray-700 text-base font-medium py-2 bg-white">
                {member.role}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {teamMembers.slice(2).map((member, idx) => (
            <div key={idx} className="flex flex-col items-center w-64 bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-44 object-cover"
              />
              <div className="w-full flex items-center justify-between bg-gray-800 px-3 py-2">
                <span className="text-base font-bold text-white tracking-wide">{member.name}</span>
                <span className={`ml-2 font-bold ${member.countryColor}`}>{member.country}</span>
              </div>
              <div className="w-full text-center text-gray-700 text-sm font-medium py-2 bg-white">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 