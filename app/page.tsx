import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import Navbar from "@/components/Shared/Navbar";
import Services from "@/components/Shared/Services";
import Skills from "@/components/Skills";

import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <div className="flex min-h-screen w-screen flex-col dark:bg-gray-900 font-inter">
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <ContactForm />
    </div>
  );
}
