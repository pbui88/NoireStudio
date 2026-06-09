"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-20 bg-[#FAF6F1] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 65% at 72% 55%, #F0DEC9 0%, transparent 68%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-28">
          {/* Left: text */}
          <div className="flex flex-col gap-8">
            <span
              className="hero-enter text-[10px] tracking-[0.4em] font-sans font-medium text-[#C4956A] uppercase"
              style={{ animationDelay: "0.1s" }}
            >
              Aurora, Colorado
            </span>

            <h1
              className="hero-enter font-display text-[clamp(3.5rem,8vw,6.5rem)] font-light leading-[0.93] tracking-[-0.01em] text-[#3D2314]"
              style={{ animationDelay: "0.25s" }}
            >
              Where
              <br />
              <em className="italic font-light">Beauty</em>
              <br />
              Becomes
              <br />
              <span className="text-[#8B5230]">Art.</span>
            </h1>

            <div
              className="hero-enter flex items-center gap-4"
              style={{ animationDelay: "0.45s" }}
            >
              <span className="block w-12 h-px bg-[#C4956A]" />
              <p className="text-[10px] tracking-[0.25em] font-sans text-[#6B4A35] uppercase">
                Luxury Nail &amp; Lash Studio
              </p>
            </div>

            <p
              className="hero-enter font-sans text-[13px] leading-[1.9] text-[#3D2314] max-w-[300px] tracking-wide"
              style={{ animationDelay: "0.55s" }}
            >
              A curated space where intentional craft meets elevated beauty rituals.
              Each appointment, a private experience.
            </p>

            <div
              className="hero-enter flex items-center gap-6"
              style={{ animationDelay: "0.7s" }}
            >
              <Link
                href="/booking"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#8B5230] text-[#FAF6F1] text-[10px] tracking-[0.3em] uppercase font-sans font-medium hover:bg-[#6B3D20] transition-colors duration-300"
              >
                Book Now
              </Link>
              <Link
                href="/services"
                className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#8B5230] hover:text-[#6B3D20] transition-colors border-b border-[#C4956A] pb-px"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right: image placeholder */}
          <div
            className="hero-enter relative h-[440px] lg:h-[580px]"
            style={{ animationDelay: "0.35s" }}
          >
            <div className="absolute inset-0 bg-[#EDD8C0]" />
            <div className="absolute inset-8 border border-[#C4956A]/25" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none select-none">
              <span className="font-display text-5xl font-light italic text-[#C4956A]/30 tracking-[0.1em]">
                Noiré
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <span className="text-[9px] tracking-[0.3em] text-[#6B4A35]/70 font-sans uppercase">
                Noiré Studio
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#6B4A35]/70 font-sans uppercase">
                Aurora, CO
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRAND STRIP ──────────────────────────────────────────── */}
      <div className="bg-[#F0DEC9] border-y border-[#E2CBAF] py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-center gap-6 md:gap-10 text-[11px] tracking-[0.25em] uppercase font-sans font-semibold text-[#3D2314]">
            <span>Aurora, Colorado</span>
            <span className="w-1 h-1 rounded-full bg-[#C4956A]" />
            <span>Luxury Nail &amp; Lash Studio</span>
            <span className="w-1 h-1 rounded-full bg-[#C4956A] hidden md:block" />
            <span className="hidden md:inline">By Appointment</span>
          </div>
        </div>
      </div>

      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#FAF6F1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="reveal mb-16 lg:mb-20">
            <span className="text-[13px] tracking-[0.3em] font-sans font-bold text-[#8B5230] uppercase">
              Our Offerings
            </span>
            <h2 className="font-display text-5xl lg:text-6xl font-light text-[#3D2314] mt-4 leading-tight">
              Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E2CBAF]">
            {[
              {
                num: "01",
                title: "Nail Services",
                sub: "Manicure & Pedicure",
                desc: "From classic manicures to luxurious spa pedicures — every treatment performed with premium products and unhurried attention.",
                delay: "0s",
              },
              {
                num: "02",
                title: "Lash Services",
                sub: "Extensions",
                desc: "Classic, hybrid, and volume lash sets designed around your natural features. Lash lifts and tints for a low-maintenance glow.",
                delay: "0.12s",
              },
              {
                num: "03",
                title: "Nail Art",
                sub: "Bespoke Designs",
                desc: "Editorial nail art crafted to your vision — from minimalist linework to intricate hand-painted details.",
                delay: "0.24s",
              },
            ].map(({ num, title, sub, desc, delay }) => (
              <div
                key={num}
                className="reveal bg-[#FAF6F1] p-8 lg:p-10 group hover:bg-[#F5E6D3] transition-colors duration-300 flex flex-col gap-6 relative overflow-hidden"
                style={{ transitionDelay: delay }}
              >
                <span className="absolute top-6 right-7 font-display text-8xl font-light text-[#EDD8C0] select-none leading-none">
                  {num}
                </span>
                <div>
                  <p className="text-[11px] tracking-[0.25em] font-sans font-semibold text-[#8B5230] uppercase mb-2">
                    {sub}
                  </p>
                  <h3 className="font-display text-3xl font-semibold italic text-[#3D2314]">
                    {title}
                  </h3>
                </div>
                <p className="text-[13px] leading-[1.9] font-sans text-[#3D2314] max-w-[260px]">
                  {desc}
                </p>
                <Link
                  href="/services"
                  className="mt-auto text-[9px] tracking-[0.25em] uppercase font-sans text-[#8B5230] hover:text-[#6B3D20] transition-all flex items-center gap-2 group-hover:gap-3"
                >
                  Learn More <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY NOIRÉ ────────────────────────────────────────────── */}
      <section className="py-24 bg-[#F5E6D3] border-y border-[#E2CBAF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="reveal text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] font-sans font-medium text-[#C4956A] uppercase">
              The Noiré Way
            </span>
            <h2 className="font-display text-5xl lg:text-6xl font-light text-[#3D2314] mt-4">
              Our Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 text-center">
            {[
              {
                mark: "I",
                title: "Intentional Craft",
                body: "Every technique mastered, every detail considered. We work with precision so the result feels effortless.",
                delay: "0s",
              },
              {
                mark: "II",
                title: "Curated Products",
                body: "Only the finest, skin-safe formulas and tools. We source with care so your nails and lashes are always protected.",
                delay: "0.15s",
              },
              {
                mark: "III",
                title: "Serene Space",
                body: "A calm, unhurried environment where you can truly exhale. Designed to feel like a private retreat.",
                delay: "0.3s",
              },
            ].map(({ mark, title, body, delay }) => (
              <div
                key={mark}
                className="reveal flex flex-col items-center gap-5"
                style={{ transitionDelay: delay }}
              >
                <span className="font-display text-2xl italic font-semibold text-[#8B5230] tracking-widest">
                  {mark}
                </span>
                <div className="w-8 h-px bg-[#C4956A]" />
                <h3 className="font-display text-2xl font-semibold italic text-[#3D2314]">
                  {title}
                </h3>
                <p className="text-[13px] leading-[1.9] font-sans text-[#3D2314] max-w-[220px]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY TEASER ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#FAF6F1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="reveal flex items-end justify-between mb-12">
            <div>
              <span className="text-[10px] tracking-[0.4em] font-sans font-medium text-[#C4956A] uppercase">
                Our Work
              </span>
              <h2 className="font-display text-5xl lg:text-6xl font-light text-[#3D2314] mt-4">
                Portfolio
              </h2>
            </div>
            <Link
              href="/gallery"
              className="hidden md:inline-flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase font-sans text-[#8B5230] hover:text-[#6B3D20] transition-colors border-b border-[#C4956A] pb-px"
            >
              View Gallery →
            </Link>
          </div>

          <div className="reveal grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 md:gap-4" style={{ transitionDelay: "0.1s" }}>
            <div className="row-span-2 bg-[#EDD8C0] min-h-[200px] md:min-h-0 md:h-[420px]" />
            <div className="bg-[#DEC8AA] aspect-square md:aspect-auto md:h-[200px]" />
            <div className="bg-[#E8D4B8] aspect-square md:aspect-auto md:h-[200px]" />
            <div className="bg-[#D4B896] aspect-square md:aspect-auto md:h-[200px]" />
            <div className="hidden md:block bg-[#E0CBAF] h-[200px]" />
            <div className="hidden md:col-span-2 md:block bg-[#EAD5BB] h-[200px]" />
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              href="/gallery"
              className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#8B5230] hover:text-[#6B3D20] transition-colors border-b border-[#C4956A] pb-px"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BOOKING CTA ──────────────────────────────────────────── */}
      <section className="reveal bg-[#8B5230] py-28 lg:py-36">
        <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <span className="text-[13px] tracking-[0.35em] font-sans font-bold text-[#C4956A] uppercase">
            Reserve Your Seat
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light italic text-[#FAF6F1] leading-[1.05]">
            Your Appointment
            <br />
            Awaits
          </h2>
          <div className="w-10 h-px bg-[#C4956A]" />
          <p className="text-[12px] tracking-[0.15em] font-sans text-[#D4B896] max-w-sm leading-[1.9]">
            Book online and we&rsquo;ll confirm within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Link
              href="/booking"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#FAF6F1] text-[#8B5230] text-[10px] tracking-[0.3em] uppercase font-sans font-medium hover:bg-[#EDD8C0] transition-colors duration-300"
            >
              Reserve Your Appointment
            </Link>
            <Link
              href="/gift-certificates"
              className="text-[10px] tracking-[0.25em] uppercase font-sans text-[#EDD8C0] hover:text-[#FAF6F1] transition-colors border-b border-[#C4956A] pb-px"
            >
              Gift Certificates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
