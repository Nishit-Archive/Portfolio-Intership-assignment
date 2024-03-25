"use client";
import React from "react";
import Section from "./Shared/Section";
import Heading from "./Shared/Heading";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <Section>
      <Heading title="PROFESSIONAL SKILLS" text="My Talent" />
      {/* First Card */}
      <div className="grid grid-cols-3 gap-5 m-4">
        {[1, 2, 3, 4, 5].map((index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Top order */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXx0M2AThmX4gCUx8_9VJiSIxvuW9xeRwKSEOdm3celw&s"
                    alt="Programming"
                    width={50}
                    height={50}
                  />
                </div>
                <p className="font-semibold text-gray-800 truncate max-w-[150px]">
                  React
                </p>
              </div>
              <p className="text-gray-600">98%</p>
            </div>

            {/* Description */}
            <p className="text-gray-700 mt-2 truncate max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus dolorum maxime reiciendis,
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
