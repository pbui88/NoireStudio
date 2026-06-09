import Link from "next/link";

type Service = {
  name: string;
  price: number;
  plus?: boolean;
  duration?: string;
  description?: string;
  tagline?: string;
  note?: string;
};

const manicureServices: Service[] = [
  {
    name: "Gel (Shellac) Manicure",
    price: 43,
    description:
      "Includes nail trim, shape, cuticle grooming, lotion massage, and your choice of gel polish that lasts up to two weeks.",
  },
  {
    name: "Kids Manicure (10 Years Old and Under)",
    price: 15,
    description:
      "Includes nail trimming and shaping, cuticle grooming, buffing, lotion massage, and your choice of polish.",
  },
  {
    name: "Gel Polish Change (Without Manicure)",
    price: 30,
  },
  {
    name: "Gel Add-On Any Manicure Services",
    price: 15,
  },
  {
    name: "Gel Polish Removal",
    price: 10,
  },
];

const acrylicServices: Service[] = [
  { name: "Acrylic With Gel (Shellac) Full Set", price: 60, plus: true },
  { name: "Acrylic With Gel (Shellac) Fill", price: 50, plus: true },
  { name: "Acrylic Ombré Full Set", price: 70, plus: true },
  { name: "Acrylic Ombré Fill", price: 65, plus: true },
  { name: "Pink & White Full Set", price: 65, plus: true },
  { name: "Pink & White Fill", price: 55, plus: true },
  { name: "Pink Fill Only", price: 45, plus: true },
  { name: "Take Off Acrylic Without Service", price: 15 },
];

const tapGelServices: Service[] = [
  { name: "Fullset", price: 65 },
  { name: "Re-fill", price: 55 },
  { name: "Shape & Length", price: 5, plus: true },
];

const pedicureServices: Service[] = [
  {
    name: "Express Pedicure",
    price: 55,
    duration: "Approx. 30 Minutes",
    description:
      "Our essential pedicure includes a warm foot soak, nail shaping, cuticle care, callus smoothing, relaxing foot massage, hot towel treatment, and your choice of Gel Polish.",
  },
  {
    name: "Signature Pedicure",
    price: 75,
    duration: "Approx. 45 Minutes",
    description:
      "Elevate your self-care experience with everything included in our Express Pedicure, plus an exfoliating sugar scrub, hydrating mask, extended massage, hot towels, and your choice of Gel Polish.",
  },
  {
    name: "Ultimate Relaxation Pedicure",
    price: 95,
    duration: "Approx. 60 Minutes",
    tagline: "Relax · Recharge · Rejuvenate",
    description:
      "Indulge in the ultimate relaxation experience. This treatment includes everything in our Signature Pedicure, enhanced with seasonal spa treatments, hot stone massage, deeply moisturizing mask, extended massage, hot towels, and your choice of Gel Polish.",
    note: "Seasonal scents, scrubs, masks, and treatment enhancements may vary throughout the year.",
  },
];

const eyelashServices: Service[] = [
  { name: "Classic Full Set", price: 130 },
  { name: "Classic Fill", price: 65 },
  { name: "Hybrid Full Set", price: 175 },
  { name: "Hybrid Fill", price: 70 },
  { name: "Volume Full Set", price: 190 },
  { name: "Volume Fill", price: 75 },
  { name: "Wispy Full Set", price: 210 },
  { name: "Wispy Fill", price: 85 },
  { name: "Mega Volume Full Set", price: 225 },
  { name: "Mega Volume Fill", price: 85 },
  { name: "Lash Lift", price: 60 },
  { name: "Lash Tint", price: 20 },
  { name: "Lash Lift and Tint", price: 75 },
];

function highlight(text: string, term: string) {
  const parts = text.split(new RegExp(`(${term})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === term.toLowerCase() ? (
      <strong key={i} className="font-semibold text-[#3D2314]">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function ServiceRow({ service }: { service: Service }) {
  return (
    <div className="group flex items-start justify-between gap-8 py-6 border-b border-[#E2CBAF] last:border-0">
      <div className="flex flex-col gap-2">
        <h3 className="font-sans font-semibold text-[14px] tracking-[0.08em] text-[#3D2314] uppercase leading-snug group-hover:text-[#8B5230] transition-colors duration-200">
          {service.name}
        </h3>
        {service.tagline && (
          <p className="font-display italic text-[14px] text-[#8B5230]">
            {service.tagline}
          </p>
        )}
        {service.description && (
          <p className="font-sans text-[12px] leading-[1.8] text-[#6B4A35] max-w-lg">
            {highlight(service.description, "Gel Polish")}
          </p>
        )}
        {service.note && (
          <p className="font-sans text-[11px] leading-[1.7] text-[#9C7B65] italic max-w-lg">
            {service.note}
          </p>
        )}
      </div>
      <div className="flex flex-col items-end gap-1 shrink-0">
        <span className="font-display text-2xl font-semibold text-[#8B5230] whitespace-nowrap">
          ${service.price}{service.plus && "+"}
        </span>
        {service.duration && (
          <span className="font-sans text-[10px] tracking-[0.15em] text-[#6B4A35] uppercase whitespace-nowrap">
            {service.duration}
          </span>
        )}
      </div>
    </div>
  );
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-8">
      <span className="text-[11px] tracking-[0.35em] font-sans font-bold text-[#8B5230] uppercase">
        {label}
      </span>
      <h2 className="font-display text-5xl lg:text-6xl font-light text-[#3D2314] mt-3 leading-tight">
        {title}
      </h2>
      <div className="mt-5 w-12 h-px bg-[#C4956A]" />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* ─── PAGE HERO ─────────────────────────────────────────── */}
      <section className="pt-36 pb-16 bg-[#FAF6F1] border-b border-[#E2CBAF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <span className="text-[11px] tracking-[0.35em] font-sans font-bold text-[#8B5230] uppercase">
            Noiré Studio
          </span>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-[#3D2314] mt-4 leading-[0.95]">
            Our Services
          </h1>
          <p className="mt-6 font-sans text-[13px] leading-[1.9] text-[#3D2314] max-w-md">
            Every service is performed with precision, premium products, and
            unhurried attention. By appointment only.
          </p>
          <div className="mt-8">
            <Link
              href="/booking"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#8B5230] text-[#FAF6F1] text-[10px] tracking-[0.3em] uppercase font-sans font-medium hover:bg-[#6B3D20] transition-colors duration-300"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MANICURE ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FAF6F1]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <SectionHeader label="Nail Services" title="Manicure" />
          <div className="border-t border-[#E2CBAF]">
            {manicureServices.map((s) => (
              <ServiceRow key={s.name} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TAP GEL & BUILDER GEL ─────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F5E6D3] border-t border-[#E2CBAF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <SectionHeader label="Nail Services" title="Tap Gel & Builder Gel" />
          <div className="border-t border-[#E2CBAF]">
            {tapGelServices.map((s) => (
              <ServiceRow key={s.name} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACRYLIC ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FAF6F1] border-t border-[#E2CBAF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <SectionHeader label="Nail Services" title="Acrylic" />
          <div className="border-t border-[#E2CBAF]">
            {acrylicServices.map((s) => (
              <ServiceRow key={s.name} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PEDICURE ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F5E6D3] border-t border-[#E2CBAF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <SectionHeader label="Pedicure Services" title="Pedicure" />
          <div className="border-t border-[#E2CBAF]">
            {pedicureServices.map((s) => (
              <ServiceRow key={s.name} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── EYELASH ───────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#F5E6D3] border-t border-[#E2CBAF]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <SectionHeader label="Lash Services" title="Eyelash Extensions" />
          <p className="font-sans text-[13px] leading-[1.9] text-[#3D2314] max-w-lg mb-10">
            Enhance your natural lashes with our high-quality extensions and professional services.
          </p>
          <div className="border-t border-[#E2CBAF]">
            {eyelashServices.map((s) => (
              <ServiceRow key={s.name} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOOKING CTA ───────────────────────────────────────── */}
      <section className="bg-[#8B5230] py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <span className="text-[11px] tracking-[0.35em] font-sans font-bold text-[#C4956A] uppercase">
            Ready to Book?
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-light italic text-[#FAF6F1] leading-tight">
            Reserve Your Appointment
          </h2>
          <div className="w-10 h-px bg-[#C4956A]" />
          <Link
            href="/booking"
            className="mt-2 inline-flex items-center gap-3 px-10 py-4 bg-[#FAF6F1] text-[#8B5230] text-[10px] tracking-[0.3em] uppercase font-sans font-medium hover:bg-[#EDD8C0] transition-colors duration-300"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
