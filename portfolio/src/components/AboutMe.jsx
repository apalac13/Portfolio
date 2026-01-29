"use client";
import Technology from "./Technology";

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
      className="w-full min-h-screen bg-gray-11 flex flex-col gap-10 justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <p className="uppercase text-gray-13 text-6xl font-serif font-extrabold ">
          About me
        </p>
        <p className="text-gray-13 text-2xl text-center">
          I am Ana Bradarić, interested in web development on creating modern,
          responsive and scalable digital solutions. I made some applications
          that are both fast and easy to use, using technologies like Next.js,
          Node.js, React, Tailwind, MongoDB and others.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <p className="font-serif text-gray-10 text-4xl font-extrabold">
          technologies
        </p>
        <div className="grid grid-cols-7 gap-4">
          {technologies.map((technology, index) => (
            <Technology key={index} text={technology} />
          ))}
        </div>
      </div>
    </section>
  );
}
