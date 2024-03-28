import Image from "next/image";
import Heading from "./Heading";
import Section from "./Section";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Service {
  _id: string;
  name: string;
  charge: string;
  desc: string;
  image: {
    url: string;
  };
}

interface ServicesProps {
  usersData: {
    map(
      arg0: (service: any, index: number) => import("react").JSX.Element
    ): import("react").ReactNode;
    user: {
      services: Service[];
    };
  };
}

export default function Services({ usersData }: ServicesProps) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <Section className="dark:bg-[#12151e] bg-grid-[#2c2f38]/[0.1]">
      <Heading title="Services" text="MY Services" />

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        id="services"
      >
        <section className="">
          <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full">
              {usersData.map((service: any, index: number) => (
                <div
                  key={service._id}
                  className="h-auto md:h-full flex flex-col "
                >
                  <a
                    href="#"
                    className="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 flex-grow"
                  >
                    <Image
                      src={service?.image.url}
                      alt={service?.name}
                      width={2940}
                      height={1960}
                      className="absolute inset-0 h-full w-full object-cover group-hover:blur-sm transition duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0"></div>
                    <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      {service?.name}
                    </h3>
                    <div className="z-10 absolute bottom-0 left-0 p-4">
                      <p className="text-xl font-bold text-white">
                        {service?.charge}
                      </p>
                      <p className="text-md text-white mt-2">{service.desc}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </Section>
  );
}
