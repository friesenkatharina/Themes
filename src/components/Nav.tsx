import React from "react";
import Image from "next/image";
import { ModeToggle } from "./ui/toggle-mode";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-green p-4">
      <ul className="flex justify-evenly text-2xl font-bold">
        <li>
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
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
        </li>
        <li>
          <ModeToggle />
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/api/auth/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>
        <li>
          <Link href="/server">Server</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
        <li>
          <Link href="/extra">Extra</Link>
        </li>
      </ul>
    </nav>
  );
}
