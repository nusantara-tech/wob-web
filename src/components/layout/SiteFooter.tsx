import { Button, InputGroup } from "@heroui/react";
import Link from "next/link";

import { Icon } from "@/components/common/Icon";

const footerGroups = [
  {
    title: "For Attendees",
    links: ["Help Center", "How it Works", "Refund Policy", "Secure Checkout"],
  },
  {
    title: "For Organizers",
    links: ["Sell Tickets", "Pricing", "Event Marketing", "Developer API"],
  },
];

export function SiteFooter() {
  return (
    <footer className="theme-footer bg-ink pb-28 pt-14 text-white md:pb-8 md:pt-16">
      <div className="page-container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            className="font-display mb-5 block text-2xl font-bold"
            href="#top"
          >
            What&apos;s On Bali
          </Link>
          <p className="max-w-sm text-xs leading-6 text-white/60">
            The island&apos;s curated guide to exclusive events, retreats,
            venues, and experiences.
          </p>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest">
              {group.title}
            </h3>
            <ul className="space-y-3">
              {group.links.map((link) => (
                <li key={link}>
                  <Link
                    className="text-xs text-white/60 transition-colors hover:text-white"
                    href="#"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="mb-5 text-xs font-bold uppercase tracking-widest">
            Newsletter
          </h3>
          <p className="mb-4 text-xs text-white/60">
            The week&apos;s best events, delivered to your inbox.
          </p>
          <InputGroup className="bg-white/10">
            <InputGroup.Prefix>
              <Icon className="size-4 text-white/50" name="mail" />
            </InputGroup.Prefix>
            <InputGroup.Input
              aria-label="Email address"
              className="text-white placeholder:text-white/40"
              placeholder="Email address"
              type="email"
            />
            <InputGroup.Suffix>
              <Button className="rounded-lg" size="sm">
                Join
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
        </div>
      </div>
      <div className="page-container mt-12 border-t border-white/10 pt-7 text-[10px] text-white/40">
        © 2026 What&apos;s On Bali. All rights reserved.
      </div>
    </footer>
  );
}
