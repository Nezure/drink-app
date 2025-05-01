"use client";

import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-sidebar text-sidebar-foreground shadow-sm  border-b border-solid border-sidebar-border">
      <div className=" mx-auto px-4">
        <div className="flex h-12 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link className="text-xl font-extralight" to={"/"}>
              Drinkelino
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="hover:font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/create" className="hover:font-semibold">
                  Home
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="space-y-1 px-4 pb-3 pt-2">
          <Link
            to={"/"}
            className="block rounded-md px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to={"/create"}
            className="block rounded-md px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Create drink
          </Link>
        </div>
      </div>
    </header>
  );
}
