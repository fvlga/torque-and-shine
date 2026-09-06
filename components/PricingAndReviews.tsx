const TIERS = [
  {
    tier: "TIER 1",
    name: "Basic",
    price: "$89",
    per: "/ visit",
    featured: false,
    items: ["Hand wash & dry", "Wheel & tire clean", "Interior vacuum", "Window clean, in & out"],
  },
  {
    tier: "TIER 2",
    name: "Premium",
    price: "$219",
    per: "/ visit",
    featured: true,
    items: [
      "Everything in Basic",
      "Clay bar decontamination",
      "One-step paint polish",
      "Leather & upholstery deep clean",
      "3-month sealant",
    ],
  },
  {
    tier: "TIER 3",
    name: "Ultimate",
    price: "$650",
    per: "/ once",
    featured: false,
    items: [
      "Everything in Premium",
      "Multi-stage paint correction",
      "2-year ceramic coating",
      "Engine bay detail",
      "Priority rebooking",
    ],
  },
];

export function PricingTable() {
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <p className="eyebrow">Packages</p>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Three ways to book.</h2>
          <p className="mt-4 text-chalk-dim">
            Every package includes a same-day photo report and our 72-hour redo guarantee.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded border p-8 ${
                t.featured
                  ? "border-amber bg-gradient-to-br from-concrete-2 to-concrete"
                  : "border-line bg-concrete"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-8 rounded bg-amber px-2.5 py-1 font-mono text-[11px] font-bold tracking-wider text-asphalt">
                  MOST BOOKED
                </span>
              )}
              <p className="mb-1 font-mono text-xs tracking-wider text-amber">{t.tier}</p>
              <h3 className="font-display text-2xl font-semibold">{t.name}</h3>
              <p className="my-4 font-mono text-4xl font-bold">
                {t.price} <span className="text-sm font-normal text-chalk-dim">{t.per}</span>
              </p>
              <ul className="mb-7 flex-grow">
                {t.items.map((item) => (
                  <li key={item} className="flex gap-2.5 border-t border-line py-2.5 text-sm text-chalk-dim">
                    <span aria-hidden="true" className="text-amber">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`rounded px-6 py-3.5 text-center font-semibold transition-colors ${
                  t.featured
                    ? "bg-amber text-asphalt hover:bg-amber-light"
                    : "border border-line text-chalk hover:border-chalk-dim"
                }`}
              >
                Book {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    text: "They caught swirl marks on my door I didn't even know were there and buffed them out on the spot. Car looked better than the day I bought it.",
    name: "D. Renaud, Windsor",
  },
  {
    text: "Booked the interior restoration after my dog spent a summer in the back seat. No more smell, and the seats look brand new.",
    name: "A. Kowalski, LaSalle",
  },
  {
    text: "Showed up on time, worked in my driveway, and sent before/after photos before they even left. Easiest booking I've done.",
    name: "M. Iyer, Tecumseh",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <p className="eyebrow">Reviews</p>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            What customers notice first.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rounded border border-line bg-concrete p-7">
              <p aria-label="5 out of 5 stars" className="mb-3.5 tracking-[2px] text-amber">
                ★★★★★
              </p>
              <blockquote className="mb-4 text-[15px]">{r.text}</blockquote>
              <figcaption className="font-mono text-xs text-chalk-dim">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
