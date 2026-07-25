"use client";

import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Icon } from "@/components/common/Icon";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span aria-hidden="true" className="h-7 w-12" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Switch
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="theme-switch"
      isSelected={isDark}
      size="sm"
      onChange={(selected) => setTheme(selected ? "dark" : "light")}
    >
      <Switch.Content>
        <Icon
          className={`size-4 ${isDark ? "text-slate-400" : "text-amber-500"}`}
          name="sun"
        />
        <Switch.Control>
          <Switch.Thumb>
            <Switch.Icon>
              <Icon className="size-3" name={isDark ? "moon" : "sun"} />
            </Switch.Icon>
          </Switch.Thumb>
        </Switch.Control>
        <Icon
          className={`size-4 ${isDark ? "text-blue-400" : "text-slate-400"}`}
          name="moon"
        />
      </Switch.Content>
    </Switch>
  );
}
