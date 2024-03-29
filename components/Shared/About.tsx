import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";

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
    <Section id="about" className="bg-white dark:bg-gray-900 py-10 lg:py-20">
      <Heading title="About Me" />

      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 px-4 md:px-8 lg:px-12 xl:px-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="w-full lg:w-1/3 flex justify-center"
        >
          <Image
            src={userData.avatar.url}
            alt="avatar"
            width={400}
            height={400}
            className="rounded-full"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="w-full lg:w-2/3 flex flex-col items-center lg:items-start justify-center gap-5 text-center lg:text-left"
        >
          <h1 className="text-2xl font-bold dark:text-white h1">
            {userData.subTitle}
          </h1>
          <p className="text-base dark:text-gray-300">
            <TextGenerateEffect
              className={`text-base dark:text-gray-300`}
              words={userData.description}
            />
          </p>
          <div className="mt-6 w-full">
            <div className="mb-4">
              <h3 className="text-lg font-semibold dark:text-gray-200">Name</h3>
              <p className="dark:text-gray-400"> {userData.name}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold dark:text-gray-200">
                Email Address
              </h3>
              <p className="dark:text-gray-400"> {userData.contactEmail}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold dark:text-gray-200">
                Phone Number
              </h3>
              <p className="dark:text-gray-400"> {userData.phoneNumber}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold dark:text-gray-200">
                Social Network
              </h3>
              <div className="flex justify-center lg:justify-start space-x-4 mt-2">
                <Facebook
                  size={24}
                  className="hover:text-blue-500 dark:hover:text-blue-400"
                />
                <Instagram
                  size={24}
                  className="hover:text-pink-500 dark:hover:text-pink-400"
                />
                <Twitter
                  size={24}
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                />
                <Youtube
                  size={24}
                  className="hover:text-red-500 dark:hover:text-red-400"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
