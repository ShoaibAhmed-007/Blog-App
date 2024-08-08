import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between bg-red-700 px-4 py-4 shadow-md">
        <Link href="/" className="text-3xl font-bold text-white">
          Blog App
        </Link>
        <div>
          <ul className="flex gap-8 text-xl text-white">
            <li>
              <Link href="/Pages/posts">Posts</Link>
            </li>
            <li>
              <Link href="/Pages/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
