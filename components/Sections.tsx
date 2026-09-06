const SERVICES = [
  { code: "SVC — WASH", name: "Hand Wash & Dry", desc: "Two-bucket foam wash, wheel wells, door jambs, and a spot-free microfiber dry.", time: "45 min", price: "from $45" },
  { code: "SVC — INT", name: "Interior Restoration", desc: "Deep vacuum, steam-cleaned upholstery, leather conditioning, and full dash detailing.", time: "90 min", price: "from $110" },
  { code: "SVC — CORR", name: "Paint Correction", desc: "Multi-stage machine polish to remove swirl marks, light scratches, and oxidation.", time: "3–5 hrs", price: "from $280" },
  { code: "SVC — COAT", name: "Ceramic Coating", desc: "2-year hydrophobic coating applied after correction — deep gloss, easier future washes.", time: "1 day", price: "from $650" },
  { code: "SVC — WHEEL", name: "Wheel & Tire Detail", desc: "Iron-fallout decontamination, brake dust removal, tire dressing, and rim sealant.", time: "40 min", price: "from $60" },
  { code: "SVC — ODOR", name: "Odor & Sanitizing", desc: "Ozone treatment and enzyme cleaner for smoke, pets, or spills — no perfume masking.", time: "60 min", price: "from $85" },
];

function ServiceCard({ code, name, desc, time, price }: (typeof SERVICES)[number]) {
  return (
    <div className="flex flex-col gap-3.5 bg-asphalt p-8 transition-colors hover:bg-concrete">
      <span className="font-mono text-xs tracking-wider text-amber">{code}</span>
      <h3 className="font-display text-xl font-semibold">{name}</h3>
      <p className="text-sm text-chalk-dim">{desc}</p>
      <div className="mt-auto flex justify-between border-t border-line pt-4 font-mono text-sm">
        <span>{time}</span>
        <span className="font-bold text-amber">{price}</span>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <p className="eyebrow">What we do</p>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Every service, one crew.</h2>
          <p className="mt-4 text-chalk-dim">
            Pick a single service or bundle into a package below — either way, the
            same detailer handles your car start to finish.
          </p>
        </div>
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.code} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

const TILES = [
  { label: "Paint correction", bg: "bg-[radial-gradient(circle_at_30%_30%,#3a3f45,#191a1c_70%)]" },
  { label: "Ceramic coat", bg: "bg-[radial-gradient(circle_at_60%_40%,#4a3320,#191a1c_70%)]" },
  { label: "Interior detail", bg: "bg-[radial-gradient(circle_at_40%_60%,#33383d,#191a1c_70%)]" },
  { label: "Wheel restore", bg: "bg-[radial-gradient(circle_at_70%_60%,#4a2c2c,#191a1c_70%)]" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto mb-14 max-w-6xl px-6">
        <p className="eyebrow">Recent work</p>
        <h2 className="font-display text-4xl font-semibold md:text-5xl">From the last two weeks.</h2>
      </div>
      <ul className="grid grid-cols-2 gap-px md:grid-cols-4">
        {TILES.map((t) => (
          <li key={t.label} className={`relative aspect-square ${t.bg}`}>
            <span className="absolute bottom-3 left-3 font-mono text-[11px] uppercase tracking-wider text-chalk-dim">
              {t.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const TRUST = [
  ["9 yrs", "In business, Windsor–Essex"],
  ["100%", "Mobile — we come to you"],
  ["$1M", "Liability coverage"],
  ["72 hr", "Redo guarantee"],
];

export function Trust() {
  return (
    <section className="py-24">
      <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-9 px-6 md:grid-cols-4">
        {TRUST.map(([stat, label]) => (
          <div key={label}>
            <dd className="font-mono text-3xl font-bold text-amber">{stat}</dd>
            <dt className="text-sm text-chalk-dim">{label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
