"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How long does a typical visit take?",
    a: "A wash-only visit takes about 45 minutes. Full Premium packages run 2–3 hours, and Ultimate (correction + coating) is scheduled as a full-day visit.",
  },
  {
    q: "Do you need access to water or power?",
    a: "Our vans carry their own water tank and generator, so we can work at your home or office without hooking up to anything.",
  },
  {
    q: "What if it rains on my appointment day?",
    a: "We'll text you the morning of to reschedule at no charge if weather won't allow a proper finish — no rebooking fee.",
  },
  {
    q: "How long does ceramic coating last?",
    a: "Our standard coating is rated for 2 years with normal washing. We'll walk you through the first-30-days care routine so it bonds properly.",
  },
  {
    q: "What's the 72-hour guarantee?",
    a: "If anything doesn't meet spec, tell us within 72 hours and we'll come back and make it right at no extra cost.",
  },
];

export function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <p className="eyebrow">Questions</p>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">Before you book.</h2>
        </div>
        <div className="max-w-3xl">
          {FAQS.map((faq, i) => {
            const open = openIdx === i;
            return (
              <div key={faq.q} className="border-t border-line last:border-b">
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-[17px] font-medium"
                  >
                    {faq.q}
                    <span
                      aria-hidden="true"
                      className={`font-mono text-xl text-amber transition-transform ${open ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    open ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <p className="pb-5 text-[15px] text-chalk-dim">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line pb-8 pt-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <a href="#top" className="font-display text-xl font-bold uppercase tracking-wide">
              Torque<span className="text-amber">&</span>Shine
            </a>
            <p className="mt-3.5 max-w-[260px] text-sm text-chalk-dim">
              Mobile detailing serving Windsor–Essex county. Fully insured,
              two-person crews, same-day photo reports.
            </p>
          </div>
          <nav aria-label="Service area">
            <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-chalk-dim">
              Service Area
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>Windsor</li>
              <li>LaSalle</li>
              <li>Tecumseh</li>
              <li>Leamington</li>
            </ul>
          </nav>
          <nav aria-label="Site links">
            <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-chalk-dim">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                ["#services", "Services"],
                ["#pricing", "Pricing"],
                ["#reviews", "Reviews"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-amber">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-chalk-dim">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="tel:+15195550148" className="transition-colors hover:text-amber">
                  (519) 555-0148
                </a>
              </li>
              <li>
                <a href="mailto:book@torqueandshine.ca" className="transition-colors hover:text-amber">
                  book@torqueandshine.ca
                </a>
              </li>
              <li>Mon–Sat, 8am–6pm</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-line pt-6 font-mono text-[13px] text-chalk-dim">
          <span>© 2026 Torque &amp; Shine Mobile Detailing</span>
          <span>Windsor–Essex, Ontario</span>
        </div>
      </div>
    </footer>
  );
}
