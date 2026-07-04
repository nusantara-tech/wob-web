"use client";

import { Button, Drawer } from "@heroui/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Icon } from "@/components/common/Icon";
import { ThemeSwitch } from "@/components/common/ThemeSwitch";
import { siteConfig } from "@/config/site";

export function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => setIsScrolled(window.scrollY > 12);

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  const renderNavigationItemContent = (
    item: (typeof siteConfig.navigation)[number],
  ) => (
    <>
      <span className={item.labelClassName}>{item.label}</span>
      {item.icon ? <Icon className={item.iconClassName} name={item.icon} /> : null}
    </>
  );

  return (
    <header
      className={clsx(
        "site-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl backdrop-saturate-150",
        isScrolled ? "theme-header" : "theme-header-transparent",
      )}
      id="top"
    >
      <nav
        aria-label="Main navigation"
        className="page-container flex h-16 items-center justify-between gap-6"
      >
        <div className="flex items-center gap-10">
          <Link aria-label={siteConfig.name} className="flex items-center" href="#top">
            <Image
              alt={siteConfig.logo.alt}
              className={siteConfig.logo.invertedClassName}
              height={siteConfig.logo.height}
              priority
              src={siteConfig.logo.src}
              width={siteConfig.logo.width}
            />
          </Link>
          <div className="hidden items-center gap-7 lg:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                className={clsx(
                  "flex items-center text-sm font-medium text-white/88 transition-colors hover:text-white",
                  item.linkClassName,
                )}
                href={item.href}
                key={item.label}
              >
                {renderNavigationItemContent(item)}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-3">
          <ThemeSwitch />
          <Button className="hidden sm:inline-flex" size="sm" variant="primary">
            Sign In
          </Button>
          <Button
            aria-label="Open menu"
            className="inline-flex border border-white/10 bg-white/10 text-white hover:bg-white/15 lg:hidden"
            size="sm"
            variant="ghost"
            onPress={() => setIsMenuOpen(true)}
          >
            <Icon className="size-5" name="menu" />
          </Button>
        </div>
      </nav>
      <Drawer.Backdrop
        className="bg-black/45 backdrop-blur-sm"
        isOpen={isMenuOpen}
        onOpenChange={setIsMenuOpen}
      >
        <Drawer.Content placement="right">
          <Drawer.Dialog className="border-l border-white/10 bg-[#191c1e] text-white shadow-2xl">
            <Drawer.CloseTrigger className="text-white/80 hover:text-white" />
            <Drawer.Header>
              <Drawer.Heading className="text-base font-semibold">
                Navigation
              </Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <nav aria-label="Mobile menu" className="flex flex-col gap-1">
                {siteConfig.navigation.map((item) => (
                  <Link
                    className={clsx(
                      "flex min-h-12 items-center rounded-xl px-3 text-sm font-medium text-white/82 transition-colors hover:bg-white/10 hover:text-white",
                      item.linkClassName,
                    )}
                    href={item.href}
                    key={item.label}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {renderNavigationItemContent(item)}
                  </Link>
                ))}
              </nav>
            </Drawer.Body>
            <Drawer.Footer>
              <Button className="w-full" size="sm" variant="primary">
                Sign In
              </Button>
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </header>
  );
}
