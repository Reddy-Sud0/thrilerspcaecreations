'use client';

import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import TrustedBrands from "@/components/TrustedBrands";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import OurServicesSection from "@/components/OurServicesSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import TrustedByLeaders from "@/components/TrustedByLeaders";
import BookCallSection from "@/components/BookCallSection";
import FAQSection from "@/components/FAQSection";


export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

     
      
      {/* Trusted Brands Section */}
      <TrustedBrands />

      {/* Who We Are Section */}
      <WhoWeAreSection />

      <WhatWeOfferSection />

      <OurServicesSection />

      {/* Who We Serve Section */}
      <WhoWeServeSection />



      {/* Stats Section */}
      <StatsSection />

      
      {/* Trusted By Leaders Section */}
      <TrustedByLeaders />

       {/* Book Call Section */}
       <BookCallSection />

       {/* FAQ Section */}
       
         <FAQSection />
       

      
    </>
  );
}