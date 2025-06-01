"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 z-50 border-b bg-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold">
          The Reading Retreat
        </Link>

        {/* Toggle Button for Mobile */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white p-4 md:static md:block md:w-auto md:p-0`}
        >
          <ul className="flex flex-col gap-4 md:flex-row md:items-center">
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
