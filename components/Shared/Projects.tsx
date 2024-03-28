"use client";
import React, { useEffect, useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import { Button } from "../ui/button";
import Image from "next/image";
import { X } from "lucide-react";
import { Badge } from "../ui/badge";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundGradient } from "../ui/background-gradient";

export default function Projects() {
  const [data, setData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [techStacks, setTechStacks] = useState<any[]>([]);
  const [selectedTechStack, setSelectedTechStack] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [toggle, setToggle] = useState(false); // State to control modal visibility

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

  useEffect(() => {
    async function fetchSkills() {
      try {
        const res = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        const data = await res.json();
        setData(data.user.projects);
        setFilteredData(data.user.projects);

        // Extract unique tech stacks
        const techs = new Set();
        data.user.projects.forEach((project: any) => {
          project.techStack.forEach((tech: any) => {
            techs.add(tech.trim());
          });
        });
        setTechStacks([...techs]);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    }

    fetchSkills();
  }, []);

  useEffect(() => {
    if (selectedTechStack === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((project: any) =>
        project.techStack
          .map((tech: any) => tech.trim())
          .includes(selectedTechStack)
      );
      setFilteredData(filtered);
    }
  }, [selectedTechStack, data]);

  const toggleModal = (project = null) => {
    setSelectedProject(project); // Set the selected project or clear it
    setToggle(!toggle); // Toggle the modal visibility
  };

  return (
    <Section className="dark:bg-[#12151e] bg-grid-[#2c2f38]/[0.1]">
      <Heading title="Projects" text="Our Build" />

      <motion.div
        className="flex flex-wrap items-center justify-center gap-2 p-4"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInVariants}
      >
        <Button onClick={() => setSelectedTechStack("")}>All</Button>
        {techStacks.map((tech, index) => (
          <Button key={index} onClick={() => setSelectedTechStack(tech)}>
            {tech}
          </Button>
        ))}
      </motion.div>

      <ul className="grid max-w-[26rem] sm:max-w-[52.5rem] mt-16 sm:mt-20 md:mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-6 lg:gap-y-8 xl:gap-x-8 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        {filteredData.map((project: any, index: number) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900"
          >
            <Image
              src={project?.image?.url}
              alt="Project Image"
              width={500}
              height={500}
            />
            <div className="mt-4 mb-3 flex flex-wrap gap-2">
              {project.techStack.map((tech: any, techIndex: number) => (
                <Badge key={techIndex}>{tech.trim()}</Badge>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-slate-800 dark:group-hover:text-slate-200">
              {project?.title}
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-4">
              {project?.description}
            </p>
            {/* Assuming Button is a styled component or a component that accepts an onClick prop */}
            <Button className="mt-4" onClick={() => toggleModal(project)}>
              View Project
            </Button>
          </BackgroundGradient>
        ))}
      </ul>
      {toggle && (
        <ProjectModal
          toggleModal={toggleModal}
          selectedProject={selectedProject}
        />
      )}
    </Section>
  );
}

const ProjectModal = ({ toggleModal, selectedProject }: any) => {
  if (!selectedProject) return null; // Don't render the modal if there's no selected project

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full backdrop-blur-sm">
      <div
        className="absolute w-full h-full bg-gray-900 opacity-50"
        onClick={() => toggleModal()}
      ></div>
      <div className="relative bg-white dark:bg-gray-600 rounded-lg shadow-lg w-96 p-4">
        <h3 className="text-lg font-semibold">{selectedProject.title}</h3>
        <p className="mt-2">{selectedProject.description}</p>
        {/* Live URL Button */}
        {selectedProject.liveUrl && (
          <a
            href={selectedProject.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
          >
            Live URL
          </a>
        )}
        {/* GitHub Repo Button */}
        {selectedProject.liveurl && (
          <a
            href={selectedProject.liveurl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 ml-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none"
          >
            Live Url
          </a>
        )}
        {selectedProject.githuburl && (
          <a
            href={selectedProject.githuburl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 ml-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none"
          >
            GitHub Repo
          </a>
        )}
        <button
          className="absolute top-2 right-2"
          onClick={() => toggleModal()}
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
};
