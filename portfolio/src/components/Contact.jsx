"use client";
import Image from "next/image";
import linkedin from "../../public/linkedin.svg";
import whatsapp from "../../public/whatsapp.svg";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat w-full min-h-screen"
      style={{
        backgroundImage: "url('/contact.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gray-10/60 "></div>
      <div className="absolute w-full flex flex-col items-center gap-20 px-4 xxl:px-40 mt-36">
        <div className="w-full flex flex-col items-start gap-3 ">
          <p className="font-serif font-extrabold text-gray-13 text-4xl xl:text-6xl sm:text-5xl ml-2">
            CONTACT
          </p>
          <div className="w-full h-px bg-gray-13"></div>
          <div className="flex flex-col items-start mmd:flex-row gap-2 font-serif  text-gray-13 text-2xl sm:text-3xl mmd:text-4xl  ml-2">
            <span>CLICK TO SEND</span>
            <a
              href="mailto:anabradaric77@gmail.com"
              className=" hover:text-gold-20 transition-colors"
            >
              &#8594; anabradaric77@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          <p className="font-serif text-gray-13 text-2xl sm:text-3xl mmd:text-4xl">
            OR
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/ana-palac-210a98318"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src={linkedin}
                alt="Linkedin icon"
                width={60}
                height={60}
                className="mmd:w-[70px] h-[70px]"
                priority
              />
            </a>

            <a
              href="https://wa.me/38763513486"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Image
                src={whatsapp}
                alt="Whatsapp icon"
                width={60}
                height={60}
                className="mmd:w-[70px] h-[70px]"
                priority
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
