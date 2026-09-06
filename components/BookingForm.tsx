"use client";

import { useState, FormEvent } from "react";

type Errors = Partial<Record<"name" | "phone" | "email" | "vehicle" | "service" | "date", string>>;

const INPUT_CLS =
  "rounded border border-line bg-asphalt px-3.5 py-3 text-[15px] text-chalk focus:border-amber";

export default function BookingForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ ok: boolean; msg: string } | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => (data.get(k) as string | null)?.trim() ?? "";

    const next: Errors = {};
    if (get("name").length < 2) next.name = "Enter your full name.";
    if (!/^[\d\s()+-]{7,}$/.test(get("phone"))) next.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email"))) next.email = "Enter a valid email address.";
    if (get("vehicle").length < 3) next.vehicle = "Tell us the year, make, and model.";
    if (!get("service")) next.service = "Pick a package.";
    if (!get("date")) next.date = "Choose a preferred date.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus({ ok: false, msg: "Please fix the highlighted fields." });
      return;
    }

    setStatus({
      ok: true,
      msg: `Thanks, ${get("name").split(" ")[0]} — request sent. We'll text you shortly to confirm.`,
    });
    form.reset();
  }

  const err = (key: keyof Errors, id: string) =>
    errors[key] ? (
      <p id={id} className="text-[12.5px] text-[#e0716d]">
        {errors[key]}
      </p>
    ) : null;

  return (
    <section id="book" className="bg-concrete py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Book a visit</p>
          <h2 className="font-display mb-4 text-4xl font-semibold">Tell us about the car.</h2>
          <p className="mb-7 text-chalk-dim">
            We&apos;ll confirm your slot within an hour and text you a 30-minute
            arrival window the morning of.
          </p>
          <dl className="space-y-4 text-[15px]">
            {[
              ["Hours", "Mon–Sat, 8am–6pm"],
              ["Phone", "(519) 555-0148"],
              ["Service area", "Windsor, LaSalle, Tecumseh, Leamington"],
              ["Response", "Within 1 business hour"],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-3.5">
                <dt className="min-w-[100px] pt-0.5 font-mono text-xs uppercase tracking-wide text-amber">
                  {k}
                </dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={handleSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-[13px] font-medium text-chalk-dim">
              Full name
            </label>
            <input id="name" name="name" type="text" required autoComplete="name"
              aria-invalid={!!errors.name} aria-describedby={errors.name ? "err-name" : undefined}
              className={INPUT_CLS} />
            {err("name", "err-name")}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-[13px] font-medium text-chalk-dim">
              Phone number
            </label>
            <input id="phone" name="phone" type="tel" required autoComplete="tel"
              aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "err-phone" : undefined}
              className={INPUT_CLS} />
            {err("phone", "err-phone")}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-[13px] font-medium text-chalk-dim">
              Email
            </label>
            <input id="email" name="email" type="email" required autoComplete="email"
              aria-invalid={!!errors.email} aria-describedby={errors.email ? "err-email" : undefined}
              className={INPUT_CLS} />
            {err("email", "err-email")}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="vehicle" className="text-[13px] font-medium text-chalk-dim">
              Vehicle (year, make, model)
            </label>
            <input id="vehicle" name="vehicle" type="text" required placeholder="e.g. 2021 Honda Civic"
              aria-invalid={!!errors.vehicle} aria-describedby={errors.vehicle ? "err-vehicle" : undefined}
              className={INPUT_CLS} />
            {err("vehicle", "err-vehicle")}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="service" className="text-[13px] font-medium text-chalk-dim">
              Service needed
            </label>
            <select id="service" name="service" required defaultValue=""
              aria-invalid={!!errors.service} aria-describedby={errors.service ? "err-service" : undefined}
              className={INPUT_CLS}>
              <option value="" disabled>Select a package</option>
              <option>Basic — $89</option>
              <option>Premium — $219</option>
              <option>Ultimate — $650</option>
              <option>Not sure yet</option>
            </select>
            {err("service", "err-service")}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="date" className="text-[13px] font-medium text-chalk-dim">
              Preferred date
            </label>
            <input id="date" name="date" type="date" required
              aria-invalid={!!errors.date} aria-describedby={errors.date ? "err-date" : undefined}
              className={INPUT_CLS} />
            {err("date", "err-date")}
          </div>

          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="notes" className="text-[13px] font-medium text-chalk-dim">
              Anything we should know? <span className="text-chalk-dim/60">(optional)</span>
            </label>
            <textarea id="notes" name="notes" rows={3}
              placeholder="Gate code, pet hair, stains, parking instructions..."
              className={`${INPUT_CLS} resize-y`} />
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
            <button type="submit"
              className="rounded bg-amber px-7 py-3.5 font-semibold text-asphalt transition-colors hover:bg-amber-light">
              Request booking
            </button>
            <p role="status" aria-live="polite"
              className={`font-mono text-[13.5px] ${status?.ok ? "text-amber" : "text-[#e0716d]"}`}>
              {status?.msg}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
