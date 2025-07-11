"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  Instagram,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'News', href: '#news' }
    ],
    services: [
      { name: 'VR Roller Coasters', href: '#vr-coasters' },
      { name: '4D Cinema', href: '#4d-cinema' },
      { name: 'Flying Simulators', href: '#simulators' },
      { name: 'Consultancy', href: '#consultancy' }
    ],
    support: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Support Center', href: '#support' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Warranty', href: '#warranty' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, href: '#', color: 'hover:text-cyan-400' },
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-400' }
  ];

  // Generate random positions only on the client
  const [particlePositions, setParticlePositions] = useState<{ left: number, top: number }[]>([]);

  useEffect(() => {
    const positions = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
    setParticlePositions(positions);
  }, []);


  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Particle streams */}
        {particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            animate={{
              y: [-50, 200],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(0, 240, 255, 0.3)',
                      '0 0 30px rgba(157, 0, 255, 0.5)',
                      '0 0 20px rgba(0, 240, 255, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-orbitron)' }}>
                    <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      THRILLSCAPE CREATIONS
                    </span>
                  </h3>
                  <p className="text-xs text-gray-400">Future of Entertainment</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Pioneering the future of amusement rides with cutting-edge technology, 
                immersive experiences, and unparalleled craftsmanship for over 50 years.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">info@rideinnovators.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">Innovation District, Tech City</span>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-white mb-6 capitalize" style={{ fontFamily: 'var(--font-orbitron)' }}>
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <motion.li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                      >
                        <motion.span
                          className="w-0 h-px bg-cyan-400 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"
                        />
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>


          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              {/* Social Links */}
              <motion.div
                className="flex items-center space-x-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-gray-400 text-sm">Follow us:</span>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Copyright */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-gray-400 text-sm">
                  © 2025 Symbiotes.ai. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Crafted with innovation and precision
                </p>
              </motion.div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-400 hover:border-cyan-400/60 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ArrowUp className="w-4 h-4" />
                <span className="text-sm">Back to Top</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Glow Effect */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scaleX: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </footer>
  );
};

export default Footer; 