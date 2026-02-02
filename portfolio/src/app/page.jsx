"use client";
import Landing from "@/components/Landing";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Landing />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
