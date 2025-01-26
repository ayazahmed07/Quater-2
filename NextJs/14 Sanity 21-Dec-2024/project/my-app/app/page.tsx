"use client"

import Image from "next/image";
import Header from "@/components/Header";
import { useState, useRef, useEffect, ChangeEvent } from "react";

export default function Home() {

  const [count, setcount] = useState(0)  

  return (
    <div classname="flex justify-center items-center h-screen">
      

<h1> Counter App </h1>

<button> + </button>

{count}

<button> - </button>

         </div>
  );
}
