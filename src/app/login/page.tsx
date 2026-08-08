import type { Metadata } from "next";
import Link from "next/link";

import { Card } from "@heroui/react";

import { Icon } from "@/components/common/Icon";
import { AppHeader } from "@/components/layout/AppHeader";
import { AccountAuthPanel } from "@/components/auth/AccountAuthPanel";

export const metadata: Metadata = {
  title: "Login & Register",
  description: "Login or create your What's On Bali account.",
};

const accountBenefits = [
  {
    icon: "heart",
    title: "Personal itinerary",
    description: "Simpan event, deals, dan venue favorit dalam satu dashboard.",
  },
  {
    icon: "ticket",
    title: "Member-only offers",
    description: "Dapatkan akses lebih cepat ke promo dan rekomendasi pilihan.",
  },
  {
    icon: "shield",
    title: "Partner ready",
    description:
      "Kelola listing, update info venue, dan pantau peluang promosi.",
  },
] as const;

const trustSignals = ["Secure access", "Curated Bali picks", "Partner tools"];

export default function LoginPage() {
  return (
    <>
      <AppHeader />
      <main className="theme-surface relative min-h-screen overflow-hidden pb-24 pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-20 size-72 rounded-full bg-brand/15 blur-3xl" />
          <div className="absolute right-0 top-36 size-96 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 size-80 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl" />
        </div>

        <div className="page-container relative grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(360px,2fr)] lg:items-center">
          <section className="hidden lg:block">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-brand shadow-sm backdrop-blur">
              <Icon className="size-3.5" name="shield" />
              Member Access
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
              Satu akun untuk semua rencana terbaikmu di Bali
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-copy md:text-lg">
              Login atau daftar untuk menyimpan event favorit, mengklaim hot
              deals, dan mengelola rekomendasi venue dari What's On Bali.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {trustSignals.map((item) => (
                <span
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/75 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm backdrop-blur"
                  key={item}
                >
                  <Icon className="size-4 text-brand" name="check" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {accountBenefits.map((item) => (
                <Card
                  className="border border-white/70 bg-white/80 shadow-[0_18px_45px_rgb(15_23_42_/_8%)] backdrop-blur"
                  key={item.title}
                  variant="transparent"
                >
                  <Card.Content className="p-5">
                    <span className="mb-4 inline-flex size-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                      <Icon className="size-5" name={item.icon} />
                    </span>
                    <h2 className="text-base font-black text-ink">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-copy">
                      {item.description}
                    </p>
                  </Card.Content>
                </Card>
              ))}
            </div>
          </section>

          <Card className="rounded-[1.5rem] border border-white/80 bg-white/70 p-2 shadow-[0_24px_70px_rgb(15_23_42_/_12%)] backdrop-blur-xl sm:rounded-[2rem] sm:p-3">
            <AccountAuthPanel />

            <div className="mx-1 mt-2 flex flex-col items-center gap-2 rounded-2xl border border-brand/10 bg-brand/[0.04] px-4 py-4 text-center sm:flex-row sm:justify-center sm:gap-1 sm:py-3">
              <p className="text-sm leading-6 text-copy">
                Punya venue atau brand?
              </p>
              <Link
                className="inline-flex min-h-10 items-center rounded-full px-3 font-bold text-brand transition hover:bg-brand/10 hover:text-brand-dark"
                href="/partner/join"
              >
                Join Partner Program
                <span aria-hidden="true" className="ml-1">
                  →
                </span>
              </Link>
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}
