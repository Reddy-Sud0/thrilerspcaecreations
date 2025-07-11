import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'; // Added missing import for React

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  achievements: string[];
  color: 'primary' | 'accent' | 'warning';
}

const milestones: TimelineMilestone[] = [
  {
    year: '2004',
    title: 'BORN',
    description: 'Funzone was conceptualized and started as an entity to bring the best technologies and systems into amusement industry in India. Funzone has developed & Manufactured products like Special Effects Theaters & 6 DOF Ride Motion Ride and is a pioneer in this area in India. Have exported some of our products like Special Effects Theaters to Saudi Arabia (Al Rashid Mall – Dahran & Sahara Mall – Riyadh) and Jordan (Mecca Mall - Amman). Supplied these equipment to about 20 centers in India.',
    achievements: [
      'Funzone conceptualized and started',
      'Developed Special Effects Theaters & 6 DOF Ride Motion Ride',
      'Exported products to Saudi Arabia and Jordan',
      'Supplied equipment to about 20 centers in India'
    ],
    color: 'primary'
  },
  {
    year: '2009',
    title: 'FEC BUSINESS',
    description: 'Funzone have developed India\'s First Themed Family Entertainment Center (FEC) in GVK One Mall in Hyderabad, owned and operated it for 10 years.',
    achievements: [
      'Developed India\'s First Themed FEC in GVK One Mall, Hyderabad',
      'Operated for 10 years'
    ],
    color: 'primary'
  },
  {
    year: '2009 -14',
    title: 'EXPANSION',
    description: 'Expansion to multiple malls and cities across India.',
    achievements: [
      'GVK One Mall, Hyderabad',
      'CMR Central, Vizag',
      'Asia Sridevi Mall, Hanmakonda',
      'Garuda Mall, MG Road, Bnglr',
      'Swagath Garuda, Bangalore',
      'Ashima Mall, Bhopal',
      'Alpha One Mall, Ahmedabad',
      'MBD Mall, Jalandhar',
      'V3S Mall, Laxmi Nagar, Delhi',
      'Phoenix Market city, Kurla, Mumbai',
      'MP Mall, Kachiguda, HYD',
      'PVP Mall, Vijayawada',
      'Oasis Mall, Hubli',
      'Rahul Raj Mall, Surat',
      'North Country Mall, Mohali',
      'MBD Mall, Ludhiana',
      'West Gate Mall, Delhi'
    ],
    color: 'primary'
  },
  {
    year: '2017',
    title: 'NEW VERTICAL',
    description: 'Funzone has created a new brand "THRILL CITY" in the year 2017 for their outdoor amusement parks. Under THRILLCITY brand an Urban Entertainment Center which is an amusement park is being developed, in the middle of Hyderabad city on Necklace Road. The project was opened in the month of August 2021 for public and running successfully spreading joy and happiness the customers.',
    achievements: [
      'Created THRILL CITY brand',
      'Developed Urban Entertainment Center in Hyderabad',
      'Opened August 2021, running successfully'
    ],
    color: 'primary'
  },
  {
    year: '2020',
    title: 'WOW Domes',
    description: 'Under THRILL CITY brand an Urban Resort component - Dome has been developed as an separate entity for multi applications varying from resorts, hotels, resorts, relief tents, isolation units etc.',
    achievements: [
      'Developed Urban Resort Dome under THRILL CITY',
      'Multi applications: resorts, hotels, relief tents, isolation units'
    ],
    color: 'primary'
  },
  {
    year: '2022',
    title: 'NOW',
    description: 'THRILL CITY has conceptualized a museum project, called "Telangana Museum of Science and Industry" also called as T-MOSI and we are in the process of formalizing the project under Department of Science and Technology of Telangana State and merging all companies under one umbrella Thrillscape Creations.',
    achievements: [
      'Conceptualized Telangana Museum of Science and Industry (T-MOSI)',
      'Merging all companies under Thrillscape Creations'
    ],
    color: 'primary'
  }
];

export const HorizontalTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    const sections = sectionsRef.current;

    if (!container || !scroller || sections.length === 0) return;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const scrollerWidth = scroller.scrollWidth;
    const containerWidth = container.offsetWidth;
    const isMobile = window.innerWidth < 768;
    
    // Calculate appropriate scroll distance without extra space
    const scrollDistance = scrollerWidth - containerWidth;
    const extraScrollBuffer = isMobile ? 0 : window.innerHeight * 0.2; // Minimal buffer for desktop only

    // Main horizontal scroll animation
    const horizontalScroll = gsap.to(scroller, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollDistance + extraScrollBuffer}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
      }
    });

    // Animate each section as it comes into view
    sections.forEach((section) => {
      // Fade in from right
      gsap.fromTo(
        section.querySelectorAll('.milestone-content'),
        {
          x: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'left 80%',
            end: 'left 20%',
            containerAnimation: horizontalScroll,
            scrub: 1,
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Highlight active section
      ScrollTrigger.create({
        trigger: section,
        start: 'left 60%',
        end: 'right 40%',
        containerAnimation: horizontalScroll,
        onEnter: () => {
          section.classList.add('active');
          gsap.to(section, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        },
        onLeave: () => {
          section.classList.remove('active');
          gsap.to(section, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        },
        onEnterBack: () => {
          section.classList.add('active');
          gsap.to(section, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
          });
        },
        onLeaveBack: () => {
          section.classList.remove('active');
          gsap.to(section, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });
    });

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 overflow-x-hidden">
      {/* Timeline Header */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full border border-purple-400/40 bg-purple-900/30 backdrop-blur-sm">
          <span className="text-sm font-medium text-purple-300">Our Story</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
          Our Journey
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
          From humble beginnings to industry leadership - discover the pivotal moments that defined our evolution
        </p>
      </div>

      {/* Horizontal Timeline Container */}
      <div 
        ref={containerRef}
        className="relative h-screen flex items-center overflow-hidden w-screen pt-20"
      >
        <div 
          ref={scrollerRef}
          className="flex h-full items-center gap-0 px-4 sm:px-6 lg:px-8"
          style={{ width: 'max-content' }}
        >
          {milestones.map((milestone, idx) => (
            <React.Fragment key={milestone.year + '-' + idx}>
              <div
                ref={el => {
                  if (el) sectionsRef.current.push(el);
                }}
                className="flex-none w-screen h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 timeline-section"
              >
                <div className="milestone-content max-w-xl w-full">
                  <div className={
                    `relative group rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2.5 lg:py-3 shadow-elevated overflow-hidden`
                  } style={{ backgroundColor: 'rgba(30, 27, 75, 0.8)' }}>
                    {/* Year Badge at top-left inside card */}
                    <div className="mb-4">
                      <div className="inline-flex items-center px-3 py-0.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg">
                        <span className="text-base sm:text-lg font-black text-white">
                          {milestone.year}
                        </span>
                      </div>
                    </div>
                    {/* Card Content */}
                    <div className="relative z-10 text-left">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 leading-tight">
                        {milestone.title}
                      </h2>
                      <p className="text-sm sm:text-base lg:text-lg text-purple-100 mb-4 leading-relaxed font-light">
                        {milestone.description}
                      </p>
                    </div>
                    {/* Card Glow Effect */}
                    <div className={`absolute -inset-0.5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10 bg-gradient-to-r from-purple-500/50 to-indigo-500/50`}></div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};