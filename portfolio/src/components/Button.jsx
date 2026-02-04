"use client";

export default function Button({ text, color }) {
  return (
    <button
      className={`flex items-center justify-center border rounded-md cursor-pointer w-60 h-[70px] max-xl:w-[220px] max-xl:h-[60px] max-sm:w-[200px] max-sm:h-[50px]
        ${
          (color === "white" && "border-gray-13 bg-gray-13") ||
          (color === "gray" && "border-gray-11 bg-gray-11")
        }
      `}
    >
      <p
        className={`
           text-lg max-xl:text-base max-sm:text-sm font-serif font-light
          ${
            (color === "white" && "text-gray-10") ||
            (color === "gray" && "text-gray-13")
          }
        `}
      >
        {text}
      </p>
    </button>
  );
}
