export default function Technology({ text }) {
  return (
    <button
      type="button"
      className="w-[150px] h-[50px] flex items-center justify-center bg-gray-10 rounded-lg cursor-pointer "
    >
      <p className=" font-serif font-light text-gray-13 text-[20px]">{text}</p>
    </button>
  );
}
