import React, { useState } from "react";
import Section from "./Shared/Section";
import Heading from "./Shared/Heading";
import { FaHome, FaEnvelope, FaUserShield, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { Label } from "./ui/lable";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import axios from "axios";

interface User {
  about: {
    phoneNumber: string;
    address?: string; // Assuming address is also part of the about object
  };
}

interface Data {
  user: User;
}

interface ContactFormProps {
  usersData: Data | null; // Assuming this is the structure, adjust as necessary
}

export default function ContactForm({ usersData }: ContactFormProps) {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 }, // Adjust the duration as needed
  };

  return (
    <Section className="dark:bg-[#0e1118] ">
      <motion.div {...fadeIn} className="container my-12 mx-auto px-2 md:px-4">
        <section className="mb-32">
          <div className="flex justify-center">
            <div className="text-center md:max-w-xl lg:max-w-3xl">
              <Heading title="Contact Me" text="LET’S Talk About Ideas" />
            </div>
          </div>

          <div className="flex flex-wrap">
            <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname" placeholder="Tyler" type="text" />
                </LabelInputContainer>
              </div>

              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">Email</Label>
                  <Input id="firstname" placeholder="Tyler" type="text" />
                </LabelInputContainer>
              </div>

              <div className="flex flex-col space-y-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message here" />
                </LabelInputContainer>
              </div>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Sign up &rarr;
                <BottomGradient />
              </button>
            </form>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                {/* Address */}
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-blue-500">
                        <FaHome size={24} />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Address</p>
                      <p className="text-neutral-500">
                        {usersData?.user.about.address}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Email */}
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-blue-500">
                        <FaEnvelope size={24} />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Email</p>
                      <p className="text-neutral-500">portfolio3@gmail.com</p>
                    </div>
                  </div>
                </div>
                {/* Admin */}
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-blue-500">
                        <FaUserShield size={24} />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold ">Admin</p>
                      <p className="text-neutral-500">Available Right Now</p>
                    </div>
                  </div>
                </div>
                {/* Phone */}
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-blue-500">
                        <FaPhone size={24} />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Phone</p>
                      <p className="text-neutral-500">
                        {usersData?.user.about.phoneNumber}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </Section>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
