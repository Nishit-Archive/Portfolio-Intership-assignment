import Image from "next/image";
import Heading from "./Heading";
import Section from "./Section";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Services() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        const data = await response.json();
        setData(data.user.services);
        console.log(data.user.services);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    }
    fetchTestimonials();
  }, []);

  return (
    <Section>
      <Heading title="Services" text="MY Services" />

      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full">
              {data.map((service: any, index: number) => (
                <div
                  key={service._id}
                  className="h-auto md:h-full flex flex-col"
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
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
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
      </div>
    </Section>
  );
}
