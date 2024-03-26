"use client";
import React, { useState, useEffect } from "react";
import Section from "./Shared/Section";
import Heading from "./Shared/Heading";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionHeader } from "./Shared/SectionHeader";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const res = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        const data = await res.json();
        setSkills(data.user.skills);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    }

    fetchSkills();
  }, []);

  return (
    <Section>
      <Heading title="PROFESSIONAL SKILLS" text="My Talent" />
      {/* <SectionHeader title="PROFESSIONAL SKILLS" dir="l" /> */}

      {/* Mapping over the skills array to render each skill */}
      <div className="grid my-10 gap-4 grid-col-1 lg:grid-cols-6 md:grid-cols-2 slide-in mx-5">
        {skills.map((skill: any) => (
          <div
            key={skill._id}
            className="py-4 flex flex-col items-center justify-center sm:justify-start gap-4 bg-gray-50 dark:bg-gray-400 dark:hover:bg-gray-300 hover:bg-white dark:bg-darkPrimary hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700"
          >
            <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
              {/* Using the URL from the API response for the image */}
              <Avatar>
                <AvatarImage src={skill.image.url} />
                <AvatarFallback>{skill.name}</AvatarFallback>
              </Avatar>
            </div>
            {/* <p className="text-sm md:text-base font-semibold select-none pointer-events-none">
              {skill.name}
            </p> */}
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight dark:text-black">
              {skill.name}
            </h4>
            <Progress
              value={skill.percentage}
              className="h-2 w-24 bg-sky-600"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
