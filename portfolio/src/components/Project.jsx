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
    <div className="w-full h-[550px] flex flex-col items-center gap-10  bg-gold-20 border rounded-lg border-gold-20 py-14">
      <p className="font-serif text-gray-10 text-4xl">{name}</p>
      <div className="flex gap-6 items-center justify-center">
        <div className="flex  items-center">
          <Image
            src={desktop}
            alt={desktop}
            width={500}
            height={300}
            priority
          />
          <Image src={mobile} alt={mobile} width={150} height={250} priority />
        </div>
        <div className="w-px h-full bg-gray-10"></div>
        <div className="w-1/3 h-full flex flex-col justify-around">
          <p className="text-start text-md">{description}</p>
          <div className="flex gap-3">
            <Link href={github}>
              <button className="w-[150px] h-[60px] flex items-center justify-center gap-2 border rounded-lg border-gray-13 bg-gray-13 cursor-pointer">
                <Image
                  src={githubicon}
                  alt="Github icon"
                  width={40}
                  height={40}
                />
                <p className="font-serif text-base">Github</p>
              </button>
            </Link>
            <Link href={demo}>
              <button className="w-[150px] h-[60px] flex items-center justify-center gap-2 border rounded-lg border-gray-13 bg-gray-13 cursor-pointer">
                <Image src={link} alt="link icon" width={40} height={40} />
                <p className="font-serif text-base">Website</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
