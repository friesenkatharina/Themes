import React from "react";
import Image from "next/image";
import { ModeToggle } from "./ui/toggle-mode";

export default function Nav() {
  return (
    <nav className="">
      <ul className="flex gap-10">
        <li>
          <a
            className=" pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/bulb.png"
              alt="Vercel Logo"
              className=" dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
