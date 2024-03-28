"use client";
import React, { useState, useEffect } from "react";
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
import Image from "next/image";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const [data, setData] = useState<any>(null);

  async function fetchUser() {
    const response = await axios.get(
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
    );
    const data = response.data;
    setData(data);

    return data;
  }

  const {
    isPending,
    isError,
    data: usersData,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex justify-center items-center dark:bg-gray-900 bg-white">
        <div className="relative flex justify-center items-center">
          <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
          <Image
            src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
            className="rounded-full h-28 w-28"
            alt="Loading"
            width={200}
            height={200}
          />
          <div className="absolute animate-ping rounded-full h-32 w-32 bg-purple-500 opacity-75"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-screen flex-col dark:bg-gray-900 font-inter">
      <Navbar />
      <ScrollProgressIndicator />
      <Hero usersData={usersData} />
      <About />
      <Services usersData={usersData.user.services} />
      <Skills skillsData={usersData.user.skills} />
      <TimeLine userData={usersData.user.timeline} />
      <Projects />
      <SliderTestimonial usersData={usersData.user.testimonials} />
      <ContactForm usersData={usersData} />
    </div>
  );
}
