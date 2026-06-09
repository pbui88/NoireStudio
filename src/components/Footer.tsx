import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/booking", label: "Book Now" },
  { href: "/gift-certificates", label: "Gift Certificates" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F0DEC9] border-t border-[#E2CBAF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex flex-col items-center md:items-start leading-none">
              <span className="font-display text-3xl font-semibold tracking-[0.15em] text-[#8B5230]">
                NOIRÉ
              </span>
              <span className="text-[9px] tracking-[0.35em] font-sans font-semibold text-[#8B5230] uppercase">
                Studio
              </span>
            </div>
            <p className="text-[12px] tracking-[0.1em] text-[#3D2314] font-sans leading-relaxed text-center md:text-left max-w-[200px]">
              Luxury nail & lash studio crafting beauty with intention.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-[11px] tracking-[0.25em] uppercase font-sans font-bold text-[#3D2314] mb-2">
              Navigate
            </h3>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[12px] tracking-[0.1em] text-[#3D2314] hover:text-[#8B5230] font-sans transition-colors uppercase"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact & Hours */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="text-[11px] tracking-[0.25em] uppercase font-sans font-bold text-[#3D2314] mb-2">
              Visit Us
            </h3>
            <p className="text-[12px] tracking-[0.1em] text-[#3D2314] font-sans text-center md:text-left">
              Aurora, Colorado
            </p>
            <div className="mt-2 space-y-1 text-center md:text-left">
              <p className="text-[11px] tracking-[0.15em] text-[#3D2314] font-sans font-semibold uppercase">Hours</p>
              <p className="text-[12px] tracking-[0.05em] text-[#3D2314] font-sans">Tue – Sat: 10am – 7pm</p>
              <p className="text-[12px] tracking-[0.05em] text-[#3D2314] font-sans">Sun: 11am – 5pm</p>
              <p className="text-[12px] tracking-[0.05em] text-[#3D2314] font-sans">Mon: Closed</p>
            </div>
            <div className="mt-4 flex flex-col gap-1 text-center md:text-left">
              <a
                href="mailto:hello@noirestudio.com"
                className="text-[12px] tracking-[0.05em] text-[#3D2314] hover:text-[#8B5230] font-sans transition-colors"
              >
                hello@noirestudio.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-[#E2CBAF] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] tracking-[0.15em] text-[#3D2314] font-sans uppercase">
            © {new Date().getFullYear()} Noiré Studio. All rights reserved.
          </p>
          <Link
            href="/gift-certificates"
            className="text-[11px] tracking-[0.15em] text-[#8B5230] hover:text-[#6B3D20] font-sans font-semibold uppercase transition-colors"
          >
            Purchase a Gift Certificate →
          </Link>
        </div>
      </div>
    </footer>
  );
}
