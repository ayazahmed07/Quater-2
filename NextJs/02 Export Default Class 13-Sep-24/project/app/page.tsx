import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <ul className="flex gap-40 bg-blue-600 p-10">
        <Link href="/"> Home Page </Link>
        <Link href="/about"> About </Link>
        <Link href="/contactus"> Contact Us </Link>
        <Link href="/career"> Career </Link>
      </ul>
    </div>
  );
}
