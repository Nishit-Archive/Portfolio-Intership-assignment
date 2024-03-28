import React, { useEffect, useState } from "react";
import Section from "./Section";
import Heading from "./Heading";

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

export default function TimeLine() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const res = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        const data = await res.json();
        setData(data.user.timeline);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    }

    fetchSkills();
  }, []);

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
    <Section>
      <Heading title="TimeLine" />

      <div className="container flex flex-col sm:flex-row items-center justify-center gap-4 p-5 ">
        {/* Education Container */}
        <div className="w-full">
          <h1 className="h1 text-center underline text-xs sm:text-sm md:text-base lg:text-lg">
            Education
          </h1>
          <ol className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3 relative border-s border-gray-500 dark:border-gray-700">
            {renderTimelineItems(data, true)}
          </ol>
        </div>

        {/* Work Experience Container */}
        <div className="w-full">
          <h1 className="h1 text-center underline text-xs sm:text-sm md:text-base lg:text-lg">
            Work Experience
          </h1>
          <ol className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3 relative border-s border-gray-500 dark:border-gray-700">
            {renderTimelineItems(data, false)}
          </ol>
        </div>
      </div>
    </Section>
  );
}
