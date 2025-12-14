"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border border-white/10 bg-white/9 backdrop-blur-md shadow-lg">
      <div className="flex items-center justify-between px-5 py-3 text-3xl">
        {/* LOGO */}
        <Link href="/Home" onClick={closeMenu}>
          <div className="font-bold text-white">AS</div>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex items-center gap-8 text-xl text-white/80">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <Link href={`/${item}`} key={item}>
              <li className="group relative cursor-pointer transition-all duration-300 hover:text-white hover:scale-105">
                {item}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </li>
            </Link>
          ))}
        </ul>

        {/* DESKTOP RESUME */}
        <a
          href="/Resume.pdf"
          target="blank"
          className="hidden md:block rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md hover:bg-white/20 transition"
        >
          Resume
        </a>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-white text-3xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden flex flex-col gap-6 px-6 py-6 bg-black/40 backdrop-blur-xl border-t border-white/10">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <Link href={`/${item}`} key={item} onClick={closeMenu}>
              <div className="text-white/80 text-xl group relative cursor-pointer transition-all duration-300 hover:text-white">
                {item}
                <span className="block h-[2px] w-0 bg-white mt-1 transition-all duration-300 group-hover:w-full" />
              </div>
            </Link>
          ))}

          <a
            href="/Resume.pdf"
            target="blank"
            onClick={closeMenu}
            className="rounded-full bg-white/10 px-4 py-2 text-white text-lg text-center backdrop-blur-md hover:bg-white/20 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
