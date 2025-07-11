"use client";
import { useRef } from "react";
import FloatingShapes from './FloatingShapes';
import ParticleBackground from './ParticleBackgroung';
import { HorizontalTimeline } from './HistoryTimeline';
import FounderSection from './FounderSection';
import TeamSection from './TeamSection';


const AboutSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const paragraphsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  // Removed gsap and useEffect animation logic

  return (
    <>
      <section
        ref={sectionRef}
        style={{ perspective: 1200 }}
        className="relative min-h-screen flex flex-col justify-end bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-500/20 animate-pulse" />
        <ParticleBackground />
        <FloatingShapes />
        
        {/* Enhanced Bottom Light Effect - Multiple Layers */}
        <div className="absolute bottom-0 left-0 right-0 h-screen bg-gradient-to-t from-cyan-400/40 via-blue-500/25 to-transparent blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white/30 via-cyan-300/20 to-transparent blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-0 left-1/4 right-1/4 h-80 bg-gradient-to-t from-cyan-200/50 to-transparent blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 right-1/3 h-64 bg-gradient-to-t from-white/40 to-transparent blur-lg animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Flower Formation Light Rays - Enhanced, Larger and Sheathing */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pointer-events-none">
          {/* Central beam - wider and taller */}
          <div className="w-12 h-[180vh] bg-gradient-to-t from-white/90 via-cyan-400/80 to-transparent blur-xl opacity-80 animate-pulse" />
          {/* 18 rays, every 10 degrees, alternating vibrant gradients, much taller */}
          {[...Array(18)].map((_, i) => {
            const angle = i * 10;
            const isEven = i % 2 === 0;
            const width = isEven ? 'w-5' : 'w-3';
            const height = isEven ? 'h-[140vh]' : 'h-[120vh]';
            const gradient = isEven
              ? 'bg-gradient-to-t from-cyan-400/80 via-blue-400/60 to-transparent'
              : 'bg-gradient-to-t from-pink-400/80 via-purple-400/60 to-transparent';
            const blur = isEven ? 'blur-2xl' : 'blur-xl';
            const opacity = isEven ? 'opacity-60' : 'opacity-50';
            return (
              <div
                key={i}
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-[${angle}deg] ${width} ${height} ${gradient} ${blur} ${opacity} animate-pulse`}
                style={{ animationDelay: `${0.08 * i}s` }}
              />
            );
          })}
          {/* Mirror the rays to the other side (negative angles) */}
          {[...Array(18)].map((_, i) => {
            const angle = -(i * 10);
            const isEven = i % 2 === 0;
            const width = isEven ? 'w-5' : 'w-3';
            const height = isEven ? 'h-[140vh]' : 'h-[120vh]';
            const gradient = isEven
              ? 'bg-gradient-to-t from-cyan-400/80 via-blue-400/60 to-transparent'
              : 'bg-gradient-to-t from-pink-400/80 via-purple-400/60 to-transparent';
            const blur = isEven ? 'blur-2xl' : 'blur-xl';
            const opacity = isEven ? 'opacity-60' : 'opacity-50';
            return (
              <div
                key={i + 100}
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-[${angle}deg] ${width} ${height} ${gradient} ${blur} ${opacity} animate-pulse`}
                style={{ animationDelay: `${0.08 * i + 0.04}s` }}
              />
            );
          })}
        </div>
        
        {/* Additional outer flower petals */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-[22deg] w-2 h-84 bg-gradient-to-t from-sky-400/40 via-blue-200/25 to-transparent blur-md animate-pulse" style={{ animationDelay: '1.3s' }} />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -rotate-[22deg] w-2 h-84 bg-gradient-to-t from-indigo-400/40 via-purple-200/25 to-transparent blur-md animate-pulse" style={{ animationDelay: '1.4s' }} />
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-[38deg] w-1.5 h-76 bg-gradient-to-t from-cyan-300/35 via-teal-100/20 to-transparent blur-md animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -rotate-[38deg] w-1.5 h-76 bg-gradient-to-t from-purple-300/35 via-pink-100/20 to-transparent blur-md animate-pulse" style={{ animationDelay: '1.6s' }} />
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-[52deg] w-1 h-68 bg-gradient-to-t from-blue-300/30 via-sky-100/15 to-transparent blur-md animate-pulse" style={{ animationDelay: '1.7s' }} />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -rotate-[52deg] w-1 h-68 bg-gradient-to-t from-violet-300/30 via-purple-100/15 to-transparent blur-md animate-pulse" style={{ animationDelay: '1.8s' }} />
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-[68deg] w-0.5 h-60 bg-gradient-to-t from-teal-300/25 via-cyan-100/10 to-transparent blur-md animate-pulse" style={{ animationDelay: '1.9s' }} />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -rotate-[68deg] w-0.5 h-60 bg-gradient-to-t from-pink-300/25 via-rose-100/10 to-transparent blur-md animate-pulse" style={{ animationDelay: '2.0s' }} />
        </div>
        
        {/* Intense Bottom Glow - Central core */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-radial from-white/60 via-cyan-300/40 to-transparent blur-2xl animate-pulse" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-16 bg-gradient-radial from-cyan-200/80 to-transparent blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-radial from-white/90 to-transparent blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse" />
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Techy SVG Circuit Lines - Extended to Top of Content */}
        <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none" width="700" height="1000" viewBox="0 0 700 1000" fill="none" style={{ opacity: 0.55 }}>
          {/* Radiating lines */}
          {[...Array(13)].map((_, i) => {
            const angle = (i - 6) * 13; // -78deg to +78deg
            const x2 = 350 + 480 * Math.sin((angle * Math.PI) / 180); // longer lines
            const y2 = 1000 - 900 * Math.cos((angle * Math.PI) / 180); // reach near top
            return (
              <line
                key={i}
                x1="350"
                y1="1000"
                x2={x2}
                y2={y2}
                stroke="url(#circuitGradient)"
                strokeWidth="6"
                strokeLinecap="round"
                filter="url(#boldglow)"
              />
            );
          })}
          {/* SVG gradients and filters for bold glow */}
          <defs>
            <linearGradient id="circuitGradient" x1="350" y1="1000" x2="350" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00fff7" />
              <stop offset="0.5" stopColor="#38bdf8" />
              <stop offset="1" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="boldglow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="10" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>

        {/* Subtle SVG Grid/Dot Overlay */}
        {/* (Removed as per user request) */}

        {/* Content Container with Glowing Border */}
        <div className="relative z-20 w-full py-20 pt-40 px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Glowing border/frame */}
          <div className="absolute -inset-4 rounded-3xl border-4 border-cyan-400/40 blur-md opacity-60 pointer-events-none animate-pulse" style={{ boxShadow: '0 0 40px 10px #00fff7, 0 0 80px 20px #8b5cf6' }} />
          <div className="relative w-full max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 w-full px-4 sm:px-6 lg:px-8" ref={headerRef}>
              <div className="inline-block relative">
                <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4 animate-fade-in">
                  ABOUT US
                </h2>
                <div className="absolute -top-2 -left-2 w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent animate-slide-in-right" />
                <div className="absolute -bottom-2 -right-2 w-32 h-1 bg-gradient-to-l from-purple-400 to-transparent animate-slide-in-right" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center gap-12 w-full px-4 sm:px-6 lg:px-8 xl:px-12" ref={contentRef}>
              {/* Text Content */}
              <div className="space-y-8 animate-fade-in text-center w-full max-w-4xl mx-auto" style={{ animationDelay: '0.3s' }}>
                <div className="space-y-6 text-gray-300 leading-relaxed w-full">
                  <p className="text-xl" ref={el => { paragraphsRef.current[0] = el; }}>
                    Welcome to <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-semibold">Thrillscape Creations</span>, where innovation meets experience in amusement ride manufacturing. With over <span className="text-yellow-400 font-bold">50 years</span> of combined industry experience, our team brings a wealth of knowledge and expertise.
                  </p>
                  <p className="text-lg" ref={el => { paragraphsRef.current[1] = el; }}>
                    For <span className="text-purple-400 font-semibold">four decades</span>, one of our key personnel has been shaping the industry&apos;s landscape, with other team members adding invaluable insight and innovation over a decade.
                  </p>
                  <p className="text-lg" ref={el => { paragraphsRef.current[2] = el; }}>
                    At Thrillscape Creations, we pride ourselves on being pioneers, such as being India&apos;s first 4D Cinema theatre manufacturer. Our portfolio includes state-of-the-art rides like <span className="text-cyan-400 font-semibold">VR roller coasters</span>, <span className="text-green-400 font-semibold">flying rides</span>, and <span className="text-pink-400 font-semibold">custom simulators</span>.
                  </p>
                  <p className="text-lg" ref={el => { paragraphsRef.current[3] = el; }}>
                    We also offer consultancy services for amusement parks and family entertainment centers, providing guidance to elevate their experiences. Our technical strengths enable us to push innovation boundaries, delivering unparalleled experiences.
                  </p>
                  <div className="relative p-8 sm:p-10 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl border border-cyan-500/30 backdrop-blur-sm w-full mx-4 sm:mx-8 lg:mx-12">
                    <p className="text-xl sm:text-2xl font-medium text-cyan-300 italic leading-relaxed">
                      &quot;Join us at Thrillscape Creations, where imagination meets craftsmanship to create unforgettable experiences.&quot;
                    </p>
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Enhanced Bottom Gradient with Light Effect */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cyan-400/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/20 to-transparent" /> */}
      </section>
      
      {/* Timeline Section - Now integrated into the main flow */}
      <HorizontalTimeline />
      
      <FounderSection />
      <TeamSection />
    </>
  );
};

export default AboutSection;