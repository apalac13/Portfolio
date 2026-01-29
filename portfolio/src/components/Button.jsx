"use client";

export default function Button({ width, height, text, color }) {
  return (
    <button
      style={{ width, height }}
      className={`flex items-center justify-center border rounded-md cursor-pointer
        ${
          (color === "white" && "border-gray-13 bg-gray-13") ||
          (color === "gray" && "border-gray-11 bg-gray-11")
        }
      `}
    >
      <p
        className={`
           text-lg font-serif font-light
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
