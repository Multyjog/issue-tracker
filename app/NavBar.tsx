import Link from "next/link";
import React from "react";
import { IoBug } from "react-icons/io5";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <IoBug className="text-2xl" />
      </Link>
      {/* TODO: Do I need <ul> here? */}
      <ul className="flex space-x-6">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
