"use client";
import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { Button } from "../ui/button";
import { SectionHeader } from "./SectionHeader";

export default function Projects() {
  const [toggle, setToggle] = React.useState(false);

  const toggleModal = () => {
    setToggle(!toggle);
  };

  return (
    <Section>
      <Heading title="Projects" />

      <div className="flex items-center justify-center">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="me-2">
            <a
              href="#"
              className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active"
              aria-current="page"
            >
              Tab 1
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Tab 2
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Tab 3
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              Tab 4
            </a>
          </li>
        </ul>
      </div>

      <ul className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        <li className="group relative rounded-3xl bg-slate-50 p-6 dark:bg-slate-800/80 dark:highlight-white/5 hover:bg-slate-100 dark:hover:bg-slate-700/50">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-slate-800 dark:group-hover:text-slate-200">
            Project Name
          </h3>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 group-hover:text-slate-500 dark:group-hover:text-slate-300">
            Project Description
          </p>
          <Button className="mt-4" onClick={toggleModal}>
            View Project
          </Button>
        </li>
      </ul>
      {toggle && <Projectmodal toggleModal={toggleModal} />}
    </Section>
  );
}

const Projectmodal = ({ toggleModal }: any) => {
  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full"
    >
      <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="relative bg-white rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white">
          <h3 className="text-lg font-semibold">Static modal</h3>
          <button
            type="button"
            className="text-gray-300 hover:text-gray-200 focus:outline-none"
            onClick={toggleModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <p className="text-base text-gray-700">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p className="mt-4 text-base text-gray-700">
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p>
        </div>
        <div className="flex justify-end px-4 py-2 bg-gray-800">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={toggleModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
