import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Providers } from "@/app/providers";
import { ScrollReveal } from "@/components/common/ScrollReveal";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { SiteFooter } from "@/components/layout/SiteFooter";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "What's On Bali",
    template: "%s | What's On Bali",
  },
  description:
    "Discover Bali's best events, venues, experiences, and island deals.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="bg-background text-foreground">
        <Providers>
          {children}
          <ScrollReveal distance="sm">
            <SiteFooter />
          </ScrollReveal>
          <BottomNavigation />
        </Providers>
      </body>
    </html>
  );
}
