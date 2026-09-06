"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, User, X } from "lucide-react";

import tobamsLogo from "../public/f110fd4f935cdabd8ef9636a8144267e4494e408.png";
import menuBar from "../public/menu.png";

const navigationLinks = [
  { label: "About", href: "#", dropdown: true },
  { label: "What We Do", href: "#", dropdown: true },
  { label: "Jobs", href: "#", dropdown: true },
  { label: "Projects", href: "#" },
  { label: "TG Academy", href: "#" },
  { label: "Strategic Partnership", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Book a Consultation", href: "#" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative (--font-nunito-sans)">
      {/* Header / Logo and actions */}
      <div className="flex items-center justify-between border-b border-brand-dark/10 lg:px-12 p-2">
        <Image
          src={tobamsLogo}
          alt="Tobams Group logo"
          width={123}
          height={42}
          priority
        />

        {/* Desktop actions */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-4 pl-2">
            <button
              type="button"
              className="flex h-12 w-41.75 items-center justify-center rounded-sm bg-[#571244] p-2 text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#571244] focus-visible:ring-offset-2"
            >
              <span className="rounded-full bg-[#DDD0DA] p-2">
                <User
                  className="h-4 w-4 text-black"
                  aria-hidden="true"
                />
              </span>

              <span className="px-3 text-[18px]">
                Account
              </span>

              <ChevronDown
                className="h-4 w-4"
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              className="flex h-12 w-45.75 items-center justify-center rounded-sm bg-[#EF4353] p-2 text-[18px] text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4353] focus-visible:ring-offset-2"
            >
              Take Assessment
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}

          // CHANGED: Added accessibility attributes required for an accessible
          // interactive mobile navigation.
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}

          className="rounded-md p-2 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#571244] lg:hidden"
        >
          {mobileOpen ? (
            <X
              className="h-6 w-6"
              aria-hidden="true"
            />
          ) : (
            <Image
              src={menuBar}
              alt=""
              width={26}
              height={26}
              aria-hidden="true"
            />
          )}
        </button>
      </div>

      {/* Desktop navigation */}
      <div className="hidden h-12 items-center justify-center lg:flex">
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-6">
            {navigationLinks.map((link) => (
              <li
                key={link.label}
                className="flex items-center"
              >
                <a
                  href={link.href}
                  className={`text-[1rem] text-[#151515] transition-colors hover:text-[#571244] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#571244] focus-visible:ring-offset-2 ${
                    link.label === "About"
                      ? "border-b border-[#571244] pl-1 pr-4 text-[#571244]"
                      : ""
                  }`}
                >
                  {link.label}
                </a>

                {link.dropdown && (
                  <ChevronDown
                    className="h-4 w-4 pt-1"
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="w-full border-t border-brand-dark/10 bg-white px-6 py-6"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-5">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-sm text-lg font-medium text-[#571244] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#571244] focus-visible:ring-offset-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile actions */}
          <div className="mt-8 flex flex-col gap-3">
            <button
              type="button"
              className="flex h-12 items-center justify-center rounded-full bg-[#571244] text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#571244] focus-visible:ring-offset-2"
            >
              <span className="rounded-full bg-[#DDD0DA] p-2">
                <User
                  className="h-4 w-4 text-black"
                  aria-hidden="true"
                />
              </span>

              <span className="pl-2">
                Account
              </span>
            </button>

            <button
              type="button"
              className="h-12 rounded-full bg-[#EF4353] text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4353] focus-visible:ring-offset-2"
            >
              Take Assessment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

