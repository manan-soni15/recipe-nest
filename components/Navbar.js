"use client";

import React from "react";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="bg-[#fff9ec] text-black flex justify-between items-center px-9 h-10">
      <div className="logo font-bold text-lg">Recipe Nest</div>
      <ul className="flex justify-between gap-10 items-center">
        <Link href="/">
          <li>home</li>
        </Link>
        <Link href="/categories">
          <li>categories</li>
        </Link>
        <Link href="/about">
          <li>about</li>
        </Link>

        {/* Show only when signed in */}
        <SignedIn>
          <Link href="/my-recipes">
            <li>my recipes</li>
          </Link>
        </SignedIn>

        {/* Show login when signed out */}
        <SignedOut>
          <Link href="/login">
            <button className="font-medium cursor-pointer">login</button>
          </Link>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </ul>
    </nav>
  );
};

export default Navbar;
