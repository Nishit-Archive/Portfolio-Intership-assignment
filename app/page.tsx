"use client";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import ScrollProgressIndicator from "@/components/ProgressTracker";
import About from "@/components/Shared/About";
import Navbar from "@/components/Shared/Navbar";
import Projects from "@/components/Shared/Projects";
import Services from "@/components/Shared/Services";
import SliderTestimonial from "@/components/Shared/Testonomial";
import TimeLine from "@/components/Shared/TimeLine";
import Skills from "@/components/Skills";

import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <div className="flex min-h-screen w-screen flex-col dark:bg-gray-900 font-inter">
      <Navbar />
      <ScrollProgressIndicator />
      <Hero />
      <About />
      <Services />
      <Skills />
      <TimeLine />
      <Projects />
      <SliderTestimonial />
      <ContactForm />
    </div>
  );
}
