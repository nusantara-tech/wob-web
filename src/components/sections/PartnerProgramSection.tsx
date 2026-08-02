import { Button } from "@heroui/react";

import { Icon } from "@/components/common/Icon";

const partnerStats = [
  { label: "verified partners", value: "240+" },
  { label: "monthly reach", value: "85K+" },
];

export function PartnerProgramSection() {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fb_45%,#ffffff_100%)] pb-10 pt-4 sm:pb-12 sm:pt-6"
      id="partner-program"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-8 size-72 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="page-container">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-ink text-white shadow-[0_24px_70px_rgb(15_23_42_/_10%)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgb(37_99_235_/_20%),transparent_34%),linear-gradient(135deg,rgb(255_255_255_/_8%),transparent_42%)]" />

          <div className="relative grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:p-9">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                Partner Program
              </span>
              <h2 className="mt-4 font-display text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                GROW YOUR BUSINESS WITH US
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/72 sm:text-base sm:leading-7">
                Join Bali&apos;s premium directory. Reach thousands of travelers
                and locals searching for the best island experiences daily.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button className="h-11 rounded-full bg-white px-6 font-bold text-ink hover:bg-white/90">
                  JOIN NOW
                  <Icon className="size-4" name="arrowRight" />
                </Button>
                <p className="text-xs font-medium text-white/55">
                  No setup friction. Curated onboarding for qualified partners.
                </p>
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-white/12 bg-white/[0.08] p-4 backdrop-blur-xl sm:p-5">
              <div className="grid grid-cols-2 gap-2">
                {partnerStats.map((stat) => (
                  <div
                    className="rounded-2xl border border-white/10 bg-white/10 p-3.5"
                    key={stat.label}
                  >
                    <span className="block text-xl font-black leading-none text-white sm:text-2xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-[10px] font-semibold uppercase leading-4 tracking-wide text-white/48">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex items-center gap-3 rounded-2xl bg-white p-3 text-ink">
                <div className="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-white">
                  <Icon className="size-5" name="shield" />
                </div>
                <div>
                  <p className="text-sm font-bold">Premium partners joined</p>
                  <p className="text-xs leading-5 text-copy">
                    Beach clubs, dining, wellness, hotels, and experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
