import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollProgressIndicator = () => {
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const scrollPercentRounded = Math.round(scrollPercent * 100);
      setProgress(scrollPercentRounded);
      // Calculate the strokeDashoffset based on scroll progress
      controls.start({ strokeDashoffset: 440 - 440 * scrollPercent });
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, [controls]);

  // Calculate the circumference of the circle
  const circumference = 2 * Math.PI * 28; // 28 is the radius of the circle

  return (
    <motion.svg
      className="fixed bottom-4 right-4 z-50" // Added z-50 to ensure it's above most elements
      width="60"
      height="60"
      viewBox="0 0 60 60"
      initial={{ strokeDasharray: circumference }}
      animate={controls}
    >
      <motion.circle
        cx="30"
        cy="30"
        r="28"
        fill="transparent"
        stroke="blue" // You can change the stroke color to match your design
        strokeWidth="4"
        strokeDasharray={circumference} // Use the calculated circumference for strokeDasharray
        strokeDashoffset={circumference} // Initially set strokeDashoffset to full circumference
        style={{ rotate: -90, originX: "50%", originY: "50%" }} // Rotate the circle to start from the top
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        stroke="#51c5cf"
        dy=".3em"
        fill="#51c5cf" // Use fill for the text color
        className="font-bold" // Tailwind class for bold text
      >
        {`${progress}%`}
      </text>
    </motion.svg>
  );
};

export default ScrollProgressIndicator;
