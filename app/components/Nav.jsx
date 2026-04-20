"use client";

import { useState } from "react";

const LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#ai-solutions", label: "AI" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-swiss-fg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#hero" className="flex items-center gap-3">
            <img
              src="/DeftSquadBlack.png"
              alt="DeftSquad logo"
              className="h-9 md:h-10 w-auto"
              width={40}
              height={50}
            />
            <span className="font-black text-base md:text-lg uppercase tracking-tight">
              Deft<span className="text-swiss-accent">Squad</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-slide text-xs font-bold uppercase tracking-widest"
              >
                <span>{link.label}</span>
                <span className="text-swiss-accent">{link.label}</span>
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center bg-swiss-fg text-white font-bold text-xs uppercase tracking-widest px-6 py-3 hover:bg-swiss-accent transition-colors duration-200"
          >
            Get Started
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-12 h-12 flex items-center justify-center border-2 border-swiss-fg"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t-2 border-swiss-fg bg-white">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-0">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-bold uppercase tracking-widest py-4 border-b border-gray-200 hover:text-swiss-accent transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block bg-swiss-fg text-white text-sm font-bold uppercase tracking-widest py-4 text-center mt-4 hover:bg-swiss-accent transition-colors duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
