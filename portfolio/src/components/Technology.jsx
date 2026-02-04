"use client";
import { motion } from "framer-motion";

export default function Technology({ text, index }) {
  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      type="button"
      className="w-[150px] h-[50px] flex items-center justify-center bg-gray-10 rounded-lg cursor-pointer transition-all duration-300 ease-out
    hover:scale-105 hover:shadow-lg
    active:scale-95 "
    >
      <p className=" font-serif font-light text-gray-13 sm:text-[20px] text-lg">
        {text}
      </p>
    </motion.button>
  );
}
