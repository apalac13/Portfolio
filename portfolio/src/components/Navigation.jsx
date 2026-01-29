import Link from "next/link";

export default function Navigation() {
  const navItems = [
    { name: "home", link: "#home" },
    { name: "about", link: "#about" },
    { name: "projects", link: "#projects" },
    { name: "contact", link: "#contact" },
  ];

  return (
    <nav className="w-full h-28 flex gap-11 items-center justify-center  border-b-2 border-gray-13 fixed z-20">
      {navItems.map((item, index) => (
        <Link
          href={item.link}
          className=" text-[34px] font-semibold font-serif cursor-pointer"
          key={index}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
