import React from "react";
import Hero from "@/components/newbody/Hero";
import LogoBar from "@/components/newbody/LogoBar";
import ResultsGallery from "@/components/newbody/ResultsGallery";
import VideoTestimonials from "@/components/newbody/VideoTestimonials";
import WrittenTestimonials from "@/components/newbody/WrittenTestimonials";
import WhyNewbody from "@/components/newbody/WhyNewbody";
import Technology from "@/components/newbody/Technology";
import Process from "@/components/newbody/Process";
import FinalCta from "@/components/newbody/FinalCta";
import FloatingWhatsApp from "@/components/newbody/FloatingWhatsApp";
import Footer from "@/components/newbody/Footer";

export default function Home() {
  return (
    <main className="bg-navy text-white min-h-screen">
      <LogoBar />
      <Hero />
      <ResultsGallery />
      <VideoTestimonials />
      <WrittenTestimonials />
      <WhyNewbody />
      <Technology />
      <Process />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}