"use client";

import { useState } from "react";
import { Button, Card, Form, Input, Label, TextField } from "@heroui/react";

import { Icon } from "@/components/common/Icon";

export function AccountAuthPanel() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const isRegister = mode === "register";

  return (
    <Card className="border border-slate-200/80 bg-white shadow-sm">
      <Card.Header className="pb-2">
        <div className="mb-3 flex items-center justify-between gap-4">
          <div
            className={`inline-flex size-12 items-center justify-center rounded-2xl ${isRegister ? "bg-gold text-ink shadow-lg shadow-gold/20" : "bg-brand text-white shadow-lg shadow-brand/20"}`}
          >
            <Icon className="size-5" name={isRegister ? "sparkles" : "user"} />
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
            {isRegister ? "Step 1 of 1" : "Member access"}
          </span>
        </div>
        <Card.Title className="text-2xl font-bold text-ink">
          {isRegister ? "Create your account" : "Welcome back"}
        </Card.Title>
        <Card.Description className="text-sm leading-6 text-copy">
          {isRegister
            ? "Daftar gratis dan mulai susun rencana Bali kamu."
            : "Masuk untuk menyimpan event dan deals favoritmu."}
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <div className="relative overflow-hidden">
          <div
            key={mode}
            className="animate-in fade-in slide-in-from-right-2 duration-300"
          >
            <Form
              aria-label={`${isRegister ? "Register" : "Login"} form`}
              className="flex flex-col gap-5"
            >
              {isRegister && (
                <TextField isRequired name="name">
                  <Label className="text-sm font-bold text-slate-700">
                    Full name
                  </Label>
                  <Input
                    autoComplete="name"
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 outline-none transition focus:border-brand focus:bg-white"
                    placeholder="Nama kamu"
                  />
                </TextField>
              )}
              <TextField isRequired name="email" type="email">
                <Label className="text-sm font-bold text-slate-700">
                  Email
                </Label>
                <Input
                  autoComplete="email"
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 outline-none transition focus:border-brand focus:bg-white"
                  placeholder="you@example.com"
                />
              </TextField>
              <TextField isRequired name="password" type="password">
                <div className="flex items-center justify-between gap-4">
                  <Label className="text-sm font-bold text-slate-700">
                    Password
                  </Label>
                  {!isRegister && (
                    <a
                      className="text-xs font-bold text-brand hover:text-brand/80"
                      href="/login"
                    >
                      Forgot password?
                    </a>
                  )}
                </div>
                <Input
                  autoComplete={
                    isRegister ? "new-password" : "current-password"
                  }
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 outline-none transition focus:border-brand focus:bg-white"
                  placeholder={isRegister ? "Minimal 8 karakter" : "••••••••"}
                />
              </TextField>
              <Button
                className="mt-1 w-full rounded-full py-3 font-bold shadow-lg shadow-brand/20"
                type="submit"
                variant={isRegister ? "secondary" : "primary"}
              >
                <Icon
                  className="size-4"
                  name={isRegister ? "sparkles" : "user"}
                />
                {isRegister ? "Create account" : "Login"}
              </Button>
            </Form>
            <div className="my-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              <span className="h-px flex-1 bg-slate-200" />
              atau
              <span className="h-px flex-1 bg-slate-200" />
            </div>
            <Button
              className="w-full rounded-full border border-slate-200 bg-white py-3 font-bold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              type="button"
              variant="outline"
            >
              <span className="font-display text-lg font-black leading-none text-[#4285F4]">
                G
              </span>
              {isRegister ? "Register with Google" : "Login with Google"}
            </Button>
          </div>
        </div>
        <div className="mt-6 border-t border-slate-100 pt-5 text-center text-sm text-copy">
          {isRegister ? "Sudah punya akun?" : "Belum punya akun?"}{" "}
          <Button
            className="h-auto p-0 font-bold text-brand"
            onPress={() => setMode(isRegister ? "login" : "register")}
            variant="ghost"
          >
            {isRegister ? "Login di sini" : "Register sekarang"}
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
