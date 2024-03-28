import React, { useEffect, useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import Image from "next/image";
import { Facebook, Instagram, Twitter, X, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const [data, setData] = useState<any>(null);
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        const data = await response.json();
        setData(data.user.about); // Assuming you want to display the 'about' section
        console.log(data.user);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    }
    fetchTestimonials();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <Section>
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
              src={data.avatar.url}
              alt={data.name}
              width={1920}
              height={1080}
              className="w-1/2 h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="flex-1 dark:bg-gray-900 p-12"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="text-5xl font-bold leading-tight">
              {data.subTitle}
            </h1>
            <p className="mt-6 text-lg">{data.description}</p>
            <div className="mt-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Name</h3>
                <p> {data.name}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Email Address</h3>
                <p> {data.contactEmail}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Phone Number</h3>
                <p> {data.phoneNumber}</p>
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
