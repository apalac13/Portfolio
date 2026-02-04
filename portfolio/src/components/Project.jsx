"use client";
import Image from "next/image";
import githubicon from "../../public/github.svg";
import link from "../../public/github.svg";
import Link from "next/link";

export default function Project({
  name,
  desktop,
  mobile,
  description,
  github,
  demo,
}) {
  return (
    <div className="w-full h-full flex flex-col items-center gap-10  bg-gold-20 border rounded-lg border-gold-20 py-14">
      <p className="font-serif text-gray-10 text-2xl sm:text-3xl md:text-4xl">
        {name}
      </p>
      <div className="flex lg:flex-row flex-col h-full gap-6 items-center justify-center">
        <div className="relative flex items-center">
          <Image
            src={desktop}
            alt={desktop}
            width={"100%"}
            height={300}
            className="md:w-[500px] max-w-full sm:w-[400px] xs:w-[320px] relative"
            priority
          />
          <Image
            src={mobile}
            alt={mobile}
            width={100}
            height={250}
            className="md:w-[150px] sm:w-[120px] xs:w-[100px] absolute left-[70%] top-[20%] "
            priority
          />
        </div>
        <div className="w-px self-stretch bg-gray-10 "></div>
        <div className="w-full lg:border-none  border-t border-gray-10 p-10 lg:w-1/3 lg:p-0 h-full flex flex-col gap-12">
          <p className="text-start text-base">{description}</p>
          <div className="flex gap-3">
            <Link href={github}>
              <button className="w-[150px] h-[60px] flex items-center justify-center gap-2 border rounded-lg border-gray-13 bg-gray-13 cursor-pointer">
                <Image
                  src={githubicon}
                  alt="Github icon"
                  width={40}
                  height={40}
                />
                <p className="font-serif text-[14px]  md:text-base">Github</p>
              </button>
            </Link>
            <Link href={demo}>
              <button className="w-[150px] h-[60px] flex items-center justify-center gap-2 border rounded-lg border-gray-13 bg-gray-13 cursor-pointer">
                <Image src={link} alt="link icon" width={40} height={40} />
                <p className="font-serif text-[14px]  md:text-base">Website</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
