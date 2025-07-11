"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, Cog, Wrench, Building, Users } from 'lucide-react';

const services = [
  {
    id: 'conceptualization',
    title: 'Conceptualization',
    subtitle: 'Where Dreams Take Shape',
    content: 'Our concept development for any Theme Park, Water Park, Resort, or Family Entertainment Center (FEC) generally begins with a site visit and an initial meeting to discuss the client\'s vision for the new leisure attraction. Conceptually, the design effort begins with a blank page. The greatest opportunity occurs when unique aspects of the project can be effectively integrated with the proven experience of comparable attractions for this particular location. The resulting plan is generally the strongest tool in financing and operational efforts.',
    icon: Lightbulb,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'design',
    title: 'Design for Manufacture',
    subtitle: 'Precision Meets Innovation',
    content: 'Through Design for Manufacturing (DFM), we optimize a part, product, or component\'s design to create it more affordably and efficiently. Our DFM process involves efficiently designing or engineering an object — generally during the product design stage, when it is easier and less expensive to do so — in order to reduce manufacturing costs. This allows us to identify and prevent mistakes or discrepancies before they occur.',
    icon: Cog,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'manufacture',
    title: 'Manufacture & Operations',
    subtitle: 'Complete Turnkey Solutions',
    content: 'We manufacture the equipment to the best standards available in the market, test them for quality, install the equipment, commission them, and also partake in their operations. As professional manufacturers and operators in the industry, we provide turnkey solutions. As per customer requirements, we also offer maintenance support through Annual Maintenance Contracts (AMCs).',
    icon: Wrench,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'amusement',
    title: 'For Amusement Parks',
    subtitle: 'Temporary Thrills, Lasting Memories',
    content: 'Fresh thrill formats that don\'t need a permanent build. Perfect for events, festivals, and temporary installations that deliver maximum excitement.',
    icon: Building,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'custom',
    title: 'For Custom Install Clients',
    subtitle: 'Permanent Magic Solutions',
    content: 'Built-on-site zones designed for long-term magic. Custom installations that become permanent fixtures of wonder and excitement.',
    icon: Users,
    color: 'from-indigo-500 to-purple-500'
  }
];

const OurServicesSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = services.map((_, index) => 
        document.getElementById(`service-${index}`)
      ).filter(Boolean);

      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const navItem = navRefs.current[activeSection];
    const container = navContainerRef.current;
    if (navItem && container) {
      const offset = navItem.offsetTop - container.offsetHeight / 2 + navItem.offsetHeight / 2;
      container.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }, [activeSection]);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(`service-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-10 px-4 md:px-8">
      <div className="container mx-auto px-4 py-10">
        {/* Centered Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-6xl font-extrabold  bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center mb-4 ">
            Our Services 
          </h1>
          <p className="text-xl md:text-2xl   text-white max-w-full mx-auto">
            From Vision to Thrill – We Handle It All. Whether you&apos;re organizing a 3-day campus fest or planning a corporate family day, we adapt our experiences to fit your reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 min-h-screen">
          {/* Left Side - Sticky Navigation Cards */}
          <div className="lg:sticky lg:top-24 lg:h-[80vh] flex items-start justify-start">
            <div ref={navContainerRef} className="space-y-4 h-full max-h-[70vh] overflow-y-auto w-full flex flex-col justify-center items-start px-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    onClick={() => scrollToSection(index)}
                    className={`max-w-xs w-full p-3 rounded-2xl border transition-all duration-300 group cursor-pointer hover:scale-105 ${
                      activeSection === index
                        ? `bg-gradient-to-r ${service.color} text-white shadow-lg shadow-purple-500/25 border-slate-400/60`
                        : 'bg-slate-800/50 text-gray-300 border-slate-600/40'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        activeSection === index
                          ? 'bg-white/20'
                          : 'bg-slate-700'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-base">{service.title}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Right Side - Content Cards */}
          <div className="space-y-24 flex flex-col justify-center items-center">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={`service-${index}`}
                  className="py-12 flex items-center justify-center"
                >
                  <div className="max-w-2xl w-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                        <p className={`text-base bg-gradient-to-r ${service.color} bg-clip-text text-transparent font-medium`}>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 text-base leading-relaxed">
                        {service.content}
                      </p>
                    </div>
                    {activeSection === index && (
                      <div className="mt-6 animate-fade-in">
                        <div className={`w-full h-1 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesSection; 