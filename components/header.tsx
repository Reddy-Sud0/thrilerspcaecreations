"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Orbitron } from 'next/font/google';
import {
  ChevronDown,
  Menu,
  X,
  ChevronRight,
  Cog,
  Gamepad2,
  Building2,
  Brain,
  MapPin,
  Headphones,
  Zap,
  Truck,
  Heart,
  Gift,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '700'] });

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Offerings",
    href: "#offerings",
    dropdown: [
      {
        title: "Turnkey Development",
        description: "End-to-end solutions from concept to reality",
        items: [
          { label: "Design to Commission", href: "/offerings/turnkey-development/design-to-commission" },
          { label: "DFM (Design for Manufacturing)", href: "/offerings/turnkey-development/dfm" },
          { label: "Installation & AMC Support", href: "/offerings/turnkey-development/installation-amc" },
        ],
        icon: Cog,
        color: "bg-gradient-to-r from-cyan-400 to-blue-500",
      },
      {
        title: "Amusement Parks & FECs",
        description: "Complete entertainment destinations",
        items: [
          { label: "Indoor & Outdoor Dry Parks", href: "/offerings/amusement-parks/indoor-outdoor-dry-parks" },
          { label: "Water Parks & Wave Pools", href: "/offerings/amusement-parks/water-parks-wave-pools" },
        ],
        icon: Gamepad2,
        color: "bg-gradient-to-r from-purple-400 to-pink-500",
      },
      {
        title: "Resorts & WOW Domes",
        description: "Innovative hospitality experiences",
        items: [
          { label: "Modular Dome Infrastructure", href: "/offerings/resorts-wow-domes/modular-dome-infrastructure" },
          { label: "Resort Integration", href: "/offerings/resorts-wow-domes/resort-integration" },
        ],
        icon: Building2,
        color: "bg-gradient-to-r from-pink-400 to-red-500",
      },
      {
        title: "Science & Edutainment",
        description: "Educational entertainment spaces",
        items: [
          { label: "T-MOSI (Science Museum)", href: "/offerings/science-edutainment/t-mosi" },
          { label: "Edutainment Spaces", href: "/offerings/science-edutainment/edutainment-spaces" },
        ],
        icon: Brain,
        color: "bg-gradient-to-r from-green-400 to-teal-500",
      },
      {
        title: "Urban Entertainment Centers",
        description: "City-scale entertainment hubs",
        items: [
          { label: "Thrill City, Hyderabad", href: "/offerings/urban-entertainment-centers/thrill-city-hyderabad" },
        ],
        icon: MapPin,
        color: "bg-gradient-to-r from-blue-400 to-indigo-500",
      },
    ],
  },
  {
    name: "Products",
    href: "#products",
    dropdown: [
      {
        title: "VR Simulators",
        description: "Cutting-edge virtual reality experiences",
        items: [
          { label: "12D Cinema Theatre", href: "/products/vr-simulators/12d-cinema-theatre" },
          { label: "VR Roller Coaster", href: "/products/vr-simulators/vr-roller-coaster" },
          { label: "VR Cinema Ride (7DOF)", href: "/products/vr-simulators/vr-cinema-ride-7dof" },
          { label: "VR Flying Ride", href: "/products/vr-simulators/vr-flying-ride" },
          { label: "Car Simulators", href: "/products/vr-simulators/car-simulators" },
          { label: "Flight Simulator", href: "/products/vr-simulators/flight-simulator" },
          { label: "Custom 3DOF / 6DOF Simulators", href: "/products/vr-simulators/custom-3dof-6dof" },
        ],
        icon: Headphones,
        color: "bg-gradient-to-r from-cyan-400 to-blue-500",
      },
      {
        title: "VR Experiences",
        description: "Immersive virtual adventures",
        items: [
          { label: "VR Shooting Game", href: "/products/vr-experiences/vr-shooting-game" },
          { label: "VR Dark Ride", href: "/products/vr-experiences/vr-dark-ride" },
        ],
        icon: Zap,
        color: "bg-gradient-to-r from-purple-400 to-pink-500",
      },
      {
        title: "Theme Park Rides",
        description: "Classic and modern attractions",
        items: [
          { label: "Sky Rider 12", href: "/products/theme-park-rides/sky-rider-12" },
          { label: "Mini Jet 8", href: "/products/theme-park-rides/mini-jet-8" },
          { label: "Crazy Bus", href: "/products/theme-park-rides/crazy-bus" },
          { label: "Carousel", href: "/products/theme-park-rides/carousel" },
          { label: "Tea Cup", href: "/products/theme-park-rides/tea-cup" },
        ],
        icon: Truck,
        color: "bg-gradient-to-r from-pink-400 to-red-500",
      },
      {
        title: "Attractions",
        description: "Unique entertainment experiences",
        items: [
          { label: "House of Horrors", href: "/products/attractions/house-of-horrors" },
          { label: "Mirror Maze", href: "/products/attractions/mirror-maze" },
          { label: "Illusions", href: "/products/attractions/illusions" },
        ],
        icon: Heart,
        color: "bg-gradient-to-r from-orange-400 to-yellow-500",
      },
      {
        title: "Carnival Games",
        description: "Interactive gaming experiences",
        items: [
          { label: "Bowler Roller", href: "/products/carnival-games/bowler-roller" },
          { label: "Camel Racing", href: "/products/carnival-games/camel-racing" },
          { label: "Dart Boards", href: "/products/carnival-games/dart-boards" },
          { label: "Bumper Cars", href: "/products/carnival-games/bumper-cars" },
        ],
        icon: Gift,
        color: "bg-gradient-to-r from-green-400 to-teal-500",
      },
    ],
  },
  { name: "Innovation", href: "/innovation" },
  { name: "Contact", href: "/contact" },
];

type DropdownItem = {
  label: string;
  href: string;
};

type DropdownSection = {
  title: string;
  items: DropdownItem[];
  icon: React.ElementType;
  color: string;
};

type MegaDropdownProps = {
  data: DropdownSection[];
  isVisible: boolean;
};

const MegaDropdown: React.FC<MegaDropdownProps> = ({ data, isVisible }) => (
  <div
    className={cn(
      "fixed top-[72px] left-1/2 -translate-x-1/2 w-full max-w-[1200px] bg-gradient-to-br from-black via-[#0b0c2a] to-[#060618] z-50 transition-all duration-300 ease-out",
      isVisible ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
    )}
    onMouseEnter={() => {
      // No-op, handled in parent
    }}
    onMouseLeave={() => {
      // No-op, handled in parent
    }}
    style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
  >
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {data.map((section, index) => (
          <div
            key={index}
            className={
              `relative group text-left rounded-3xl p-6 transition-all duration-300 bg-transparent`
            }
          >
            {/* No overlay, solid background */}
            <div className="relative flex items-start gap-3 mb-4 z-10">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shadow-sm bg-gradient-to-br from-blue-700 to-blue-400")}> 
                <section.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-bold text-white text-base mb-1 group-hover:text-blue-200 transition-colors text-left">
                  {section.title}
                </h3>
                {/* Description removed as requested */}
              </div>
            </div>
            <div className="relative space-y-1 text-left z-10">
              {section.items.map((item: DropdownItem, itemIndex: number) => (
                <a
                  key={itemIndex}
                  href={item.href}
                  className="block px-3 py-2.5 text-sm text-white hover:text-blue-200 hover:bg-blue-400/20 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-300 hover:shadow-md text-left"
                  style={{ backdropFilter: 'blur(3px)' }}
                >
                  <div className="flex items-center justify-between text-left">
                    <span className="font-medium text-left text-white group-hover:text-blue-100">{item.label}</span>
                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                  </div>
                </a>
              ))}
            </div>
            {/* No description, no 'View all' link */}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // New: Track which submenu is open in mobile
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  return (
    <header style={{ background: '#00010a', height: '96px', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
      <div className="w-full h-full px-2 md:px-8 flex items-center justify-center">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2 shadow-inner shadow-white/5 backdrop-blur-xl transition-all duration-300 md:px-8 flex-wrap min-w-0 max-w-full"
          style={{ boxShadow: 'inset 0 1.5px 12px 0 rgba(255,255,255,0.07)' }}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`select-none text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 transition hover:rotate-1 hover:scale-105 duration-300 ${orbitron.className}`}
            style={{ textShadow: '0 0 8px #a21caf55, 0 0 2px #06b6d455' }}
          >
            ThrillscapeCreation
          </Link>
          {/* Desktop Nav */}
          <ul className="hidden md:flex flex-wrap gap-2 lg:gap-4 items-center font-semibold text-white/90 text-lg min-w-0 max-w-full">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.name}
                className="relative group min-w-0"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center gap-1 px-4 py-3 rounded-lg transition-all duration-300 hover:text-cyan-400 hover:scale-105 focus:outline-none"
                      onFocus={() => setOpenDropdown(item.name)}
                      onBlur={() => setOpenDropdown(null)}
                      tabIndex={0}
                      type="button"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
                    </button>
                    {/* Mega Menu Dropdown */}
                    <div
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <MegaDropdown
                        data={item.dropdown}
                        isVisible={openDropdown === item.name}
                      />
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-3 rounded-lg transition-all duration-300 hover:text-cyan-400 hover:scale-105"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden p-2 rounded-lg text-white/80 hover:bg-white/10 transition"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </nav>
      </div>
        {/* Mobile Nav Drawer */}
        <div
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 md:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-xs bg-gradient-to-br from-black via-[#181a2a] to-[#1a1333] backdrop-blur-xl border-l border-white/10 shadow-xl transition-transform duration-300 md:hidden flex flex-col ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <button
            className="self-end m-4 p-2 rounded-lg text-white/80 hover:bg-white/10 transition"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>
          <ul className="flex flex-col gap-2 px-6 py-4 font-semibold text-white/90 text-lg">
            {NAV_ITEMS.map((item) => (
              <li key={item.name} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      className="flex w-full items-center gap-2 px-2 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:text-cyan-400 hover:scale-105 focus:outline-none bg-white/5 backdrop-blur-md border border-white/10 shadow"
                      onClick={() => setMobileSubmenuOpen(mobileSubmenuOpen === item.name ? null : item.name)}
                      aria-expanded={mobileSubmenuOpen === item.name}
                      aria-controls={`mobile-submenu-${item.name}`}
                      type="button"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${mobileSubmenuOpen === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    <div
                      id={`mobile-submenu-${item.name}`}
                      className={`overflow-hidden transition-all duration-300 ${mobileSubmenuOpen === item.name ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'} bg-gradient-to-br from-[#181a2a] to-[#1a1333] rounded-2xl border border-white/10 shadow-lg backdrop-blur-md`}
                      style={{ pointerEvents: mobileSubmenuOpen === item.name ? 'auto' : 'none' }}
                    >
                      <div className="flex flex-col gap-3 p-3">
                        {item.dropdown.map((section) => (
                          <div key={section.title} className="mb-2 last:mb-0 rounded-xl bg-white/5 p-3 border border-white/10 shadow-inner">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xl"><section.icon className="w-5 h-5" /></span>
                              <span className="font-bold text-white text-base">{section.title}</span>
                            </div>
                            {/* <span className="text-xs text-white/70 mb-1">{section.description}</span> */}
                            <ul className="list-none text-sm text-white/90 pl-2">
                              {section.items.map((itm) => (
                                <li key={itm.label}>
                                  <Link href={itm.href} className="block py-1 px-2 rounded-lg hover:text-pink-400 hover:bg-white/10 transition-colors" onClick={() => { setMobileOpen(false); setMobileSubmenuOpen(null); }}>
                                    {itm.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-2 py-2 rounded-lg transition-all duration-300 hover:text-cyan-400 hover:scale-105"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
    </header>
  );
} 