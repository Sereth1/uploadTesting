"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={() => setIsActive(!isActive)}
        className="rounded-full bg-blue-500 text-white px-4 py-2"
      >
        KANE CLICK
      </button>

      {isActive && (
        <>
          <h1>GAMIESE</h1>
          <Image src="/nikos.jpg" width={500} height={500} alt="nikolas" />
        </>
      )}
    </main>
  );
}
