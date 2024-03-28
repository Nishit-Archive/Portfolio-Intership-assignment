"use client";
import React, { useState, useEffect } from "react";
import Section from "./Shared/Section";
import Heading from "./Shared/Heading";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Skill {
  _id: string;
  name: string;
  percentage: number;
  image: {
    url: string;
  };
}

interface SkillsProps {
  skillsData: Skill[];
}

export default function Skills({ skillsData }: SkillsProps) {
  return (
    <Section className="dark:bg-[#161a25]">
      <Heading title="Professional Skills" text="My Talent" />

      {/* Mapping over the skills array to render each skill */}
      <div className="grid my-10 gap-4 grid-col-1 lg:grid-cols-6 md:grid-cols-2 slide-in mx-5">
        {skillsData.map((skill: any) => (
          <div
            key={skill._id}
            className="py-4 flex flex-col items-center justify-center sm:justify-start gap-4 bg-gray-50 dark:bg-slate-700 dark:hover:bg-gray-700 hover:bg-white dark:bg-darkPrimary dark:border-b hover:dark:border-sky-400 hover:dark:bg-darkSecondary border rounded-sm border-gray-300 dark:border-neutral-700"
          >
            <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100 select-none pointer-events-none">
              {/* Using the URL from the API response for the image */}
              <Avatar>
                <AvatarImage src={skill.image.url} />
                <AvatarFallback>
                  <p className="dark:text-white"> {skill.name}</p>
                </AvatarFallback>
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
