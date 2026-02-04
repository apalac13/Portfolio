import Link from "next/link";

export default function Navigation() {
  const navItems = [
    { name: "home", link: "#home" },
    { name: "about", link: "#about" },
    { name: "projects", link: "#projects" },
    { name: "contact", link: "#contact" },
  ];

  return (
    <nav className="w-full h-24 flex items-center justify-center gap-4 border-b-2 border-gray-13 fixed z-20 sm:gap-9 xl:h-28 xl:gap-11">
      {navItems.map((item, index) => (
        <Link
          href={item.link}
          className="text-xl sm:text-2xl xl:text-[34px] font-semibold font-serif cursor-pointer  "
          key={index}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
