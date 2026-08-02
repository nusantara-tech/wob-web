"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icon } from "@/components/common/Icon";
import { bottomNavigation } from "@/constants/navigation";

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-slate-200/90 bg-white/96 px-1 pt-2 shadow-[0_18px_45px_rgb(15_23_42_/_14%)] backdrop-blur-xl md:hidden"
    >
      <ul className="grid grid-cols-5">
        {bottomNavigation.map((item) => {
          const isActive = item.activePath
            ? pathname === item.activePath
            : pathname === "/" && item.href === "#top";

          return (
            <li key={item.label}>
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`relative flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-medium transition-colors ${
                  isActive ? "text-brand" : "text-slate-500 hover:text-brand"
                }`}
                href={item.href}
              >
                <Icon className="size-5" name={item.icon} />
                <span>{item.label}</span>
                {isActive ? (
                  <span className="absolute bottom-0 size-1 rounded-full bg-brand" />
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
