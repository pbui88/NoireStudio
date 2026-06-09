"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF6F1]/95 backdrop-blur-md shadow-sm border-b border-[#E2CBAF]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center leading-none group">
            <span className="font-display text-2xl md:text-3xl font-semibold tracking-[0.15em] text-[#8B5230] group-hover:text-[#6B3D20] transition-colors">
              NOIRÉ
            </span>
            <span className="text-[9px] tracking-[0.35em] font-sans font-light text-[#C4956A] uppercase mt-[-2px]">
              Studio
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-[10px] tracking-[0.25em] uppercase font-sans font-medium transition-colors duration-200 ${
                  pathname === href
                    ? "text-[#8B5230]"
                    : "text-[#6B4A35] hover:text-[#8B5230]"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/booking"
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 bg-[#8B5230] text-[#FAF6F1] text-[10px] tracking-[0.25em] uppercase font-sans font-medium hover:bg-[#6B3D20] transition-colors duration-200"
            >
              Book Now
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden flex flex-col gap-[5px] p-2 group"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-px bg-[#8B5230] transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`block w-4 h-px bg-[#8B5230] transition-all duration-300 ml-auto ${open ? "opacity-0 w-0" : ""}`} />
              <span className={`block w-6 h-px bg-[#8B5230] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#FAF6F1]" />
        <nav className="relative h-full flex flex-col items-center justify-center gap-2 pt-20">
          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={`font-display text-4xl font-light tracking-[0.1em] text-[#8B5230] hover:text-[#6B3D20] py-3 transition-all duration-300 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-6">
            <Link
              href="/booking"
              className="inline-flex items-center px-10 py-3.5 bg-[#8B5230] text-[#FAF6F1] text-[10px] tracking-[0.3em] uppercase font-sans font-medium hover:bg-[#6B3D20] transition-colors"
            >
              Book Now
            </Link>
          </div>
          <p className="absolute bottom-10 text-[10px] tracking-[0.25em] text-[#C4956A] uppercase font-sans">
            Aurora, Colorado
          </p>
        </nav>
      </div>
    </>
  );
}
