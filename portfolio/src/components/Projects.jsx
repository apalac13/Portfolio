import Project from "./Project";
import asdesktop from "../../public/project1-desktop.png";
import asmobile from "../../public/project1-mobile.png";
import sapedesktop from "../../public/project2-desktop.png";
import sapemobile from "../../public/project2-mobile.png";
import schooldesktop from "../../public/project3-desktop.png";
import schoolmobile from "../../public/project3-mobile.png";

export default function Projects() {
  const projects = [
    {
      name: "Autoškola Instruktor",
      desktop: asdesktop,
      mobile: asmobile,
      description:
        "A website/application made in the MERN stack (Next.js) which, in addition to the advertising part, contains a complete online system for learning,  tests, quizes, materials, and candidate management in the  E-Nastava section.",
      github: "https://github.com/apalac13/AutoSkolaInstruktor",
      demo: "https://autoskolainstruktor.com/",
    },
    {
      name: "Sretne Šape",
      desktop: sapedesktop,
      mobile: sapemobile,
      description:
        "A React (Vite) application with a JSON Server backend that provides a complete system for animal adoption and donations, allowing users to adopt animals or send donations, while admins can manage animals, create donation requests, and approve submitted donations.",
      github: "https://github.com/apalac13/SretneSape",
      demo: "sretne-sape.vercel.app",
    },
    {
      name: "EditSchool Prijave",
      desktop: schooldesktop,
      mobile: schoolmobile,
      description:
        "A React (Vite) application with a JSON Server backend that manages workshop registrations. Users can browse workshops and lecturers, view which workshops each lecturer teaches, and apply for available workshops. An admin panel provides full CRUD functionality for workshops, lecturers, and organizations, including tracking the number of applications and workshop dates. Lecturers are linked to organizations, enabling structured and relational data management within the system.",
      github: "https://github.com/apalac13/EditSchoolPrijave",
      demo: "edit-school-prijave.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-gray-12 flex flex-col gap-10 justify-center items-center"
    >
      <div className="w-full flex flex-col gap-20 items-center justify-center p-6 my-24">
        <p className="uppercase text-gray-10 text-6xl font-serif font-extrabold">
          Projects
        </p>
        <div className="flex flex-col gap-6">
          {projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              desktop={project.desktop}
              mobile={project.mobile}
              description={project.description}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
