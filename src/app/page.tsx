"use client";
// import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { FaBeer, FaCoffee } from "react-icons/fa";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserCard from "@/components/UserCard";

export default async function Home() {
  // Make the function async
  const session = await getServerSession(options);
  return (
    <main className="flex p-24">
      {/* <Nav /> */}
      <section className="py-12 mt-20 flex flex-col items-center text-center gap-8">
        <h1 className="text-4xl font-bold">Shadcn and Toggle is awesome</h1>
        <p className="text-2xl text-muted-foreground">
          Hand-picked themes that you can copy and paste into your apps.
        </p>

        <div className="flex gap-6 item-center justify-center">
          <Button>
            <FaBeer className="mr-2" /> Beer
          </Button>
          <Button>
            <FaCoffee className="mr-2" /> Coffee
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        {session ? (
          <UserCard user={session?.user} pagetype={"Home"} />
        ) : (
          <h1 className="text-5xl">Not Pass</h1>
        )}
      </section>
    </main>
  );
}
