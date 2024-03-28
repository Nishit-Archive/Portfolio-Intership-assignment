import React, { useEffect, useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Image from "next/image";
import { Facebook, Instagram, Twitter, X, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function About({ userData }: any) {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <Section className="dark:bg-[#141820]">
      <Heading title="About" text="About Me" />
      <div>
        <section className="flex h-screen w-full">
          <motion.div
            className="flex items-center justify-center"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <Image
              src={userData.avatar.url}
              alt={userData.name}
              width={1920}
              height={1080}
              className="w-1/2 h-full object-cover shadow-[0_0_1000px_0]"
            />
          </motion.div>
          <motion.div
            className="flex-1 p-12"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="block text-2xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              {userData.subTitle}
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {userData.description}
            </p>
            <div className="mt-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Name</h3>
                <p> {userData.name}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Email Address</h3>
                <p> {userData.contactEmail}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Phone Number</h3>
                <p> {userData.phoneNumber}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Social Network</h3>
                <div className="flex space-x-4 mt-2">
                  <Facebook size={24} className="hover:text-blue-500" />
                  <Instagram size={24} className="hover:text-pink-500" />
                  <Twitter size={24} className="hover:text-blue-600" />
                  <Youtube size={24} className="hover:text-red-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </Section>
  );
}
