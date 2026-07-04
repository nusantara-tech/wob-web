import Link from "next/link";

import { Icon } from "@/components/common/Icon";
import { bottomNavigation } from "@/constants/navigation";

export function BottomNavigation() {
  return (
    <nav
      aria-label="Mobile navigation"
      className="theme-bottom-navigation fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-white/10 bg-navy/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-2xl backdrop-blur md:hidden"
    >
      <ul className="grid grid-cols-5">
        {bottomNavigation.map((item, index) => (
          <li key={item.label}>
            <Link
              aria-current={index === 0 ? "page" : undefined}
              className={`relative flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-[10px] font-medium transition-colors ${
                index === 0
                  ? "text-blue-400"
                  : "text-slate-400 hover:text-white"
              }`}
              href={item.href}
            >
              <Icon className="size-5" name={item.icon} />
              <span>{item.label}</span>
              {index === 0 ? (
                <span className="absolute bottom-0 size-1 rounded-full bg-blue-400" />
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
