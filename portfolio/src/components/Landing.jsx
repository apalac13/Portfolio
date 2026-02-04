"use client";
import Navigation from "./Navigation";
import Button from "./Button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Landing() {
  return (
    <section
      id="home"
      className="relative bg-gray-10 w-screen h-screen text-gray-13"
    >
      <Navigation />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=" w-full xxs:w-3/4 absolute top-[60%] xxs:left-20 pl-10 pr-2 xxs:pl-0 xxs:pr-0  translate-y-[-50%] flex flex-col gap-12 justify-center items-start    "
      >
        <div className="text-left">
          <p className="font-serif text-3xl max-xl:text-2xl max-sm:text-xl">
            Web developer
          </p>
          <p className=" font-serif text-8xl max-xl:text-7xl max-sm:text-5xl font-bold">
            ANA BRADARIĆ
          </p>
          <p className="font-sans font-light italic text-2xl max-xl:text-lg max-sm:text-base  ">
            I specialize in creating functional, aesthetically attractive and
            technically stable solutions - from simple websites to complex web
            applications.
          </p>
        </div>
        <div className="flex flex-row max-sm:flex-col max-sm:gap-3 gap-9">
          <Link href={"#projects"}>
            <Button text={"VIEW PROJECTS"} color={"white"} />
          </Link>
          <Link href={"#contact"}>
            <Button text={"CONTACT"} color={"gray"} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
