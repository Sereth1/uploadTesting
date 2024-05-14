"use client";
import Image from "next/image";
import { useState } from "react";
import Computer from "./components/Computer";
import Taskbar from "./components/TaskBar";
import Win95Modal from "./components/Win95Modal";

export default function Home() {
  return (
    <div>
      <Computer />

      <Taskbar />
    </div>
  );
}
