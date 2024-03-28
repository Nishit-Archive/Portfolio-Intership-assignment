import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

// Define a type for the link objects
type NavLink = {
  href: string;
  label: string;
  ariaCurrent?: "page";
};

// Define your links
const navLinks: NavLink[] = [
  { href: "#", label: "Home", ariaCurrent: "page" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-xl font-semibold dark:text-white text-n-9"
            href={`/`}
            aria-label="Portfolio"
          >
            Portfolio
          </Link>
          <div className="sm:hidden">{/* Mobile menu button */}</div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
                href={link.href}
                aria-current={link.ariaCurrent}
              >
                {link.label}
              </Link>
            ))}
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
