"use client";

import { useState } from "react";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-asphalt/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl font-bold uppercase tracking-wide">
          Torque<span className="text-amber">&</span>Shine
        </a>

        <ul className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-chalk-dim transition-colors hover:text-chalk"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#book"
          className="hidden rounded bg-amber px-5 py-2.5 text-sm font-semibold text-asphalt transition-colors hover:bg-amber-light md:inline-block"
        >
          Book Now
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-2xl text-chalk md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-line bg-concrete transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="border-t border-line first:border-t-0">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-chalk-dim hover:text-chalk"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="border-t border-line p-4">
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="block rounded bg-amber px-5 py-3 text-center text-sm font-semibold text-asphalt"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
