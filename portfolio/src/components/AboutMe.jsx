"use client";
import Technology from "./Technology";
import { motion } from "framer-motion";

export default function AboutMe() {
  const technologies = [
    "HTML",
    "CSS",
    "Javascript",
    "React.js",
    "Next.js",
    "Vue.js",
    "Tailwind",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "Figma",
    "C",
    "C++",
    "Python",
    "MSOffice",
  ];

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gray-11 flex flex-col gap-10 justify-center items-center py-32"
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="uppercase text-4xl text-gray-13 xl:text-6xl sm:text-5xl font-serif font-extrabold "
        >
          About me
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-gray-13 text-lg sm:text-xl xl:text-2xl text-center px-4"
        >
          I am Ana Bradarić, a web developer with a Master’s degree in Computer
          Science from the Faculty of Electrical Engineering, Mechanical
          Engineering and Naval Architecture (FESB), University of Split,
          focused on creating modern, responsive, and scalable digital
          solutions. I have built several applications that are fast,
          user-friendly, and performance-oriented, using technologies such as
          Next.js, React, Node.js, Tailwind CSS, MongoDB, and more.
        </motion.p>
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-serif text-gray-10 text-3xl xl:text-4xl font-extrabold"
        >
          technologies
        </motion.p>
        <div className="xl:grid xl:grid-cols-7 flex flex-wrap justify-center  gap-4">
          {technologies.map((technology, index) => (
            <Technology key={index} text={technology} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
