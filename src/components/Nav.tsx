import React from "react";
import Image from "next/image";
import { ModeToggle } from "./ui/toggle-mode";
import Link from "next/link";

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
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
          <ModeToggle />
        </div>
        <button className="block lg:hidden">
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
        <ul className="hidden lg:flex flex-wrap items-center justify-evenly text-2xl font-bold">
          <li className="p-2">
            <Link href="/">Home</Link>
          </li>
          <li className="p-2">
            <Link href="/api/auth/signin">Sign In</Link>
          </li>
          <li className="p-2">
            <Link href="/api/auth/signout">Sign Out</Link>
          </li>
          <li className="p-2">
            <Link href="/server">Server</Link>
          </li>
          <li className="p-2">
            <Link href="/client">Client</Link>
          </li>
          <li className="p-2">
            <Link href="/extra">Extra</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
