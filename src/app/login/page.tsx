import type { Metadata } from "next";
import Link from "next/link";

import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";

import { Icon } from "@/components/common/Icon";
import { AppHeader } from "@/components/layout/AppHeader";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your What's On Bali account.",
};

export default function LoginPage() {
  return (
    <>
      <AppHeader />
      <main className="theme-surface min-h-screen pb-24 pt-28">
        <div className="page-container grid gap-10 lg:grid-cols-[1fr_460px] lg:items-center">
          <section className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-brand">
              <Icon className="size-3.5" name="shield" />
              Member Access
            </p>
            <h1 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
              Login untuk mengelola pengalaman Bali kamu
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-copy">
              Simpan event favorit, pantau hot deals, dan kelola rekomendasi
              venue langsung dari akun What's On Bali.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Saved events",
                "Exclusive deals",
                "Partner tools",
              ].map((item) => (
                <div
                  className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm font-semibold text-slate-700 shadow-sm"
                  key={item}
                >
                  <Icon className="mb-3 size-5 text-brand" name="check" />
                  {item}
                </div>
              ))}
            </div>
          </section>

          <Card className="border border-slate-200 bg-white/95 shadow-[0_24px_70px_rgb(15_23_42_/_12%)]">
            <Card.Header>
              <Card.Title className="text-2xl font-bold text-ink">
                Welcome back
              </Card.Title>
              <Card.Description className="text-sm leading-6 text-copy">
                Masuk dengan email dan password akun kamu.
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <Form
                aria-label="Login form"
                className="flex flex-col gap-5"
              >
                <TextField isRequired name="email" type="email">
                  <Label className="text-sm font-bold text-slate-700">
                    Email
                  </Label>
                  <Input
                    autoComplete="email"
                    className="rounded-2xl border border-slate-200 px-4 py-3"
                    placeholder="you@example.com"
                  />
                </TextField>

                <TextField isRequired name="password" type="password">
                  <div className="flex items-center justify-between gap-4">
                    <Label className="text-sm font-bold text-slate-700">
                      Password
                    </Label>
                    <Link
                      className="text-xs font-bold text-brand hover:text-brand/80"
                      href="/login"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    autoComplete="current-password"
                    className="rounded-2xl border border-slate-200 px-4 py-3"
                    placeholder="••••••••"
                  />
                </TextField>

                <Button
                  className="mt-1 w-full rounded-full py-3 font-bold"
                  type="button"
                  variant="primary"
                >
                  <Icon className="size-4" name="user" />
                  Login
                </Button>
              </Form>
            </Card.Content>
            <Card.Footer className="justify-center border-t border-slate-100 pt-5 text-sm text-copy">
              Belum punya akun?{" "}
              <Link className="font-bold text-brand" href="/">
                Join Partner
              </Link>
            </Card.Footer>
          </Card>
        </div>
      </main>
    </>
  );
}
