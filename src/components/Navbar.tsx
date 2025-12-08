import React from "react";
import Link from "next/link";
import { robotoMono } from "@/app/layout";

export default function Navbar() {
  return (
    <header>
      <nav className="sticky top-0 w-full z-10 flex justify-between items-center text-center bg-[rgb(30,32,32)] text-white py-4 px-8">
        <h1 className="text-xl font-bold">
          <Link href="/" className="hover:no-underline">
            personal website
          </Link>
        </h1>
        <ul className="flex flex-row list-none gap-6">
          <li>
            <Link
              href="/"
              className={`text-white font-bold no-underline tracking-[2px] hover:text-[rgb(36,94,255)] hover:underline ${robotoMono.className}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className={`text-white font-bold no-underline tracking-[2px] hover:text-[rgb(36,94,255)] hover:underline ${robotoMono.className}`}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/resume"
              className={`text-white font-bold no-underline tracking-[2px] hover:text-[rgb(36,94,255)] hover:underline ${robotoMono.className}`}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`text-white font-bold no-underline tracking-[2px] hover:text-[rgb(36,94,255)] hover:underline ${robotoMono.className}`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`text-white font-bold no-underline tracking-[2px] hover:text-[rgb(36,94,255)] hover:underline ${robotoMono.className}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
