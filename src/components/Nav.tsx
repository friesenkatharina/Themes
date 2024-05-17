import React from "react";
import Image from "next/image";
import { ModeToggle } from "./ui/toggle-mode";

export default function Nav() {
  return (
    <nav className="bg-green p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <a
            className="pointer-events-none flex items-center gap-2 lg:pointer-events-auto lg:p-0"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/bulb.png"
              alt="bulb"
              className="dark:invert p-4"
              width={100}
              height={24}
              priority
            />
          </a>
          <ModeToggle />
        </div>
        <button className="block lg:hidden ">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
