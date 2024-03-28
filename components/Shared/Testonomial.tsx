import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper/core";
import "swiper/css";
import Image from "next/image";
import Heading from "./Heading";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Section from "./Section";

SwiperCore.use([Autoplay, Pagination]);

interface Testimonial {
  review: string;
  image: { url: string };
  name: string;
  position: string;
}

interface TestimonialsProps {
  usersData: {
    map(
      arg0: (testimonial: any, indec: any) => React.JSX.Element
    ): React.ReactNode;
    user: {
      testimonials: Testimonial[];
    };
  };
}

export default function Testimonials({ usersData }: TestimonialsProps) {
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
    <Section className="dark:bg-[#11141e] bg-grid-[#2c2f38]/[0.01]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        id="reviews"
      >
        <div className="mb-16">
          <Heading title="Testimonials" text="What our happy user says!" />
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={32}
          loop={true}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 32,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="mySwiper"
        >
          {usersData.map((testimonial, indec) => (
            <SwiperSlide key={indec}>
              <div className="swiper-slide">
                <div className="group bg-white dark:bg-gray-800 border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 slide_active:border-indigo-600 hover:shadow-sm">
                  <div className="">
                    <div className=" flex items-center mb-12 gap-2 text-amber-500 transition-all duration-500  ">
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-base font-semibold text-indigo-600">
                        4.9
                      </span>
                    </div>
                    <p className="font-semibold text-base text-gray-600 dark:text-gray-300 leading-6  transition-all duration-500 pb-8 hover:text-gray-white slide_active:text-gray-800">
                      {testimonial?.review}
                    </p>
                  </div>
                  <div className="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                    <Image
                      className="h-10 w-10"
                      src={testimonial?.image.url}
                      alt="avatar"
                      width={40}
                      height={40}
                    />
                    <div className="block">
                      <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">
                        {testimonial?.name}
                      </h5>
                      <span className="text-sm leading-4 text-gray-500">
                        {testimonial?.position}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </Section>
  );
}
