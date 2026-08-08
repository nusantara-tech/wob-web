import type { Metadata } from "next";
import Link from "next/link";

import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";

import { Icon } from "@/components/common/Icon";
import { AppHeader } from "@/components/layout/AppHeader";

export const metadata: Metadata = {
  title: "Join Partner Program",
  description: "Daftarkan bisnis dan venue kamu ke What's On Bali.",
};

export default function PartnerJoinPage() {
  return (
    <>
      <AppHeader />
      <main className="theme-surface relative min-h-screen overflow-hidden pb-20 pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-20 size-80 rounded-full bg-brand/15 blur-3xl" />
          <div className="absolute right-0 top-36 size-96 rounded-full bg-gold/20 blur-3xl" />
        </div>

        <div className="page-container relative grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(360px,2fr)] lg:items-center lg:gap-14">
          <section className="hidden lg:block">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-brand shadow-sm backdrop-blur">
              <Icon className="size-3.5" name="sparkles" />
              Partner Program
            </span>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-black leading-tight tracking-tight text-ink xl:text-6xl">
              Make your Bali business easier to discover.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-copy md:text-lg">
              Bergabung dengan jaringan partner pilihan What's On Bali dan
              tampil di depan traveler serta locals yang sedang mencari
              pengalaman terbaik di pulau ini.
            </p>

            <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-3">
              {[
                ["250K+", "monthly discovery"],
                ["240+", "verified partners"],
                ["1 profile", "for your business"],
              ].map(([value, label]) => (
                <div
                  className="rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm backdrop-blur"
                  key={label}
                >
                  <p className="text-2xl font-black text-brand">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand/80"
              href="/login"
            >
              Already a partner? Login to your dashboard
              <Icon className="size-4" name="arrowRight" />
            </Link>
          </section>

          <Card className="border border-white/80 bg-white/95 shadow-[0_24px_70px_rgb(15_23_42_/_12%)] backdrop-blur-xl">
            <Card.Header className="gap-3 px-5 pb-3 pt-5 sm:px-7 sm:pt-7">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                <Icon className="size-5" name="sparkles" />
              </div>
              <Card.Title className="text-2xl font-bold leading-tight text-ink sm:text-3xl">
                Grow with What's On Bali
              </Card.Title>
              <Card.Description className="max-w-md text-sm leading-6 text-copy">
                Isi detail singkat. Tim kami akan menghubungi kamu untuk langkah
                berikutnya.
              </Card.Description>
            </Card.Header>
            <Card.Content className="px-5 pb-5 pt-2 sm:px-7 sm:pb-7">
              <Form
                aria-label="Partner registration form"
                className="flex flex-col gap-4 sm:gap-5"
              >
                <TextField isRequired name="businessName">
                  <Label className="text-sm font-bold text-slate-700">
                    Business name
                  </Label>
                  <Input
                    autoComplete="organization"
                    className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-base outline-none transition focus:border-brand focus:bg-white"
                    placeholder="Nama venue atau bisnis"
                  />
                </TextField>
                <TextField isRequired name="contactName">
                  <Label className="text-sm font-bold text-slate-700">
                    Your name
                  </Label>
                  <Input
                    autoComplete="name"
                    className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-base outline-none transition focus:border-brand focus:bg-white"
                    placeholder="Nama lengkap"
                  />
                </TextField>
                <TextField isRequired name="email" type="email">
                  <Label className="text-sm font-bold text-slate-700">
                    Work email
                  </Label>
                  <Input
                    autoComplete="email"
                    className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-base outline-none transition focus:border-brand focus:bg-white"
                    placeholder="you@business.com"
                  />
                </TextField>
                <TextField isRequired name="phone" type="tel">
                  <Label className="text-sm font-bold text-slate-700">
                    WhatsApp number
                  </Label>
                  <Input
                    autoComplete="tel"
                    className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-base outline-none transition focus:border-brand focus:bg-white"
                    placeholder="+62 812..."
                  />
                </TextField>
                <Button
                  className="mt-2 min-h-12 w-full rounded-full py-3 font-bold shadow-lg shadow-brand/20"
                  type="submit"
                  variant="primary"
                >
                  Submit partner application
                  <Icon className="size-4" name="arrowRight" />
                </Button>
              </Form>
              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                Dengan melanjutkan, kamu setuju untuk dihubungi oleh tim What's
                On Bali.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs font-semibold text-slate-500">
                <Icon className="size-3.5 text-brand" name="shield" />
                Your information stays private
              </div>
            </Card.Content>
          </Card>
        </div>
      </main>
    </>
  );
}
