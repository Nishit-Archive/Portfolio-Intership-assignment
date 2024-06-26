import React, { useEffect, useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { log } from "console";

interface Item {
  forEducation: boolean;
  jobTitle?: string;
  degree?: string;
  startDate: string;
  endDate?: string;
  location: string;
  summary: string;
  bulletPoints?: string[];
  link?: string;
}

interface TimeLineProps {
  userData: Item[];
}

export default function TimeLine({ userData }: TimeLineProps) {
  const renderTimelineItems = (items: Item[], isEducation: boolean) => {
    return items.map((item, index) => {
      if (item.forEducation === isEducation) {
        // Format the start and end dates
        const formattedStartDate = new Date(item.startDate).toLocaleDateString(
          "default",
          { month: "long", year: "numeric" }
        );
        const formattedEndDate = item.endDate
          ? new Date(item.endDate).toLocaleDateString("default", {
              month: "long",
              year: "numeric",
            })
          : "Present";

        return (
          <li key={index} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white">
              {item.jobTitle || item.degree}
            </h3>
            <time className="mb-1 text-xs sm:text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {formattedStartDate} - {formattedEndDate}
            </time>
            <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
              {item.location}
            </p>
            <p className="text-sm sm:text-base font-normal text-gray-500 dark:text-gray-400">
              {item.summary}
            </p>
            {item.bulletPoints && item.bulletPoints.length > 0 && (
              <ul className="list-disc pl-5 mt-2 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                {item.bulletPoints.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            )}
            {item.link && (
              <a
                href={item.link}
                className="inline-flex items-center px-4 py-2 text-xs sm:text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more{" "}
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            )}
          </li>
        );
      }
      return null;
    });
  };

  return (
    <Section className="dark:bg-[#12151e] bg-grid-[#2c2f38]/[0.1]">
      <Heading title="TimeLine" />

      <div className="container flex flex-col sm:flex-col items-center justify-center gap-4 p-5 ">
        {/* Education Container */}
        <div className="w-full">
          <h1 className="h1 lg:text-center  md:mb-4 underline    sm:text-4xl text-3xl sm:mb-4 mt-3 mb-4">
            Education
          </h1>
          <ol className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3 relative border-s border-gray-500 dark:border-gray-700">
            {renderTimelineItems(userData, true)}
          </ol>
        </div>

        {/* Work Experience Container */}
        <div className="w-full">
          <h1 className="h1 lg:text-center  md:mb-4 underline  lg:text-blue-500 sm:text-red-300 sm:text-4xl text-3xl sm:mb-4 mt-3 mb-4">
            Work Experience
          </h1>
          <ol className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3 relative border-s border-gray-500 dark:border-gray-700">
            {renderTimelineItems(userData, false)}
          </ol>
        </div>
      </div>
    </Section>
  );
}
