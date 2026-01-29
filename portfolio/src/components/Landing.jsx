"use client";
import Navigation from "./Navigation";
import Button from "./Button";

export default function Landing() {
  return (
    <div
      id="home"
      className="relative bg-gray-10 w-screen h-screen text-gray-13"
    >
      <Navigation />
      <div className="w-3/4 absolute top-[60%] left-20  translate-y-[-50%] flex flex-col gap-12 justify-center items-start  ">
        <div className="text-left">
          <p className="font-serif text-3xl">Web developer</p>
          <p className=" font-serif text-8xl font-bold">ANA BRADARIĆ</p>
          <p className="font-sans font-light italic text-2xl  ">
            I specialize in creating functional, aesthetically attractive and
            technically stable solutions - from simple websites to complex web
            applications.
          </p>
        </div>
        <div className="flex gap-9">
          <Button
            width={"240px"}
            height={"70px"}
            text={"VIEW PROJECTS"}
            color={"white"}
          />
          <Button
            width={"240px"}
            height={"70px"}
            text={"CONTACT"}
            color={"gray"}
          />
        </div>
      </div>
    </div>
  );
}
