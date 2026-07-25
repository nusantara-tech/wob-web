"use client";

import { Button, Drawer } from "@heroui/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Icon } from "@/components/common/Icon";
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
      {item.icon ? (
        <Icon
          className={clsx(
            "size-4 shrink-0 text-current",
            item.iconClassName,
          )}
          name={item.icon}
        />
      ) : null}
      <span className={item.labelClassName}>{item.label}</span>
    </>
  );

  return (
    <header
      className={clsx(
        "site-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl backdrop-saturate-150 transition-all duration-500",
        isScrolled ? "theme-header" : "theme-header-transparent",
      )}
      id="top"
    >
      <nav
        aria-label="Main navigation"
        className="page-container flex h-16 items-center justify-between gap-6"
      >
        <div className="flex items-center gap-10">
          <Link aria-label={siteConfig.name} className="flex items-center" href="/">
            <Image
              alt={siteConfig.logo.alt}
              className={siteConfig.logo.invertedClassName}
              height={siteConfig.logo.height}
              priority
              src={siteConfig.logo.src}
              width={siteConfig.logo.width}
            />
          </Link>
          <div className="hidden items-center gap-2 lg:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                className={clsx(
                  "flex min-h-9 items-center gap-2 rounded-full px-3 text-sm font-semibold transition-colors",
                  isScrolled
                    ? "text-slate-700 hover:bg-blue-50 hover:text-brand"
                    : "text-slate-700 hover:bg-white/70 hover:text-brand",
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
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button
            className="hidden rounded-full px-4 sm:inline-flex"
            size="sm"
            variant="primary"
          >
            <Icon className="size-4" name="user" />
            Login
          </Button>
          <Button
            isIconOnly
            aria-label="Open notifications"
            className={clsx(
              "inline-flex border lg:hidden",
              isScrolled
                ? "border-slate-200 bg-white/80 text-slate-700 hover:bg-blue-50 hover:text-brand"
                : "border-blue-100 bg-white/70 text-brand shadow-sm hover:bg-white",
            )}
            size="sm"
            variant="ghost"
          >
            <Icon className="size-4.5" name="bell" />
          </Button>
          <Button
            aria-label="Open menu"
            className={clsx(
              "inline-flex border lg:hidden",
              isScrolled
                ? "border-slate-200 bg-white/80 text-slate-700 hover:bg-blue-50 hover:text-brand"
                : "border-blue-100 bg-white/70 text-brand shadow-sm hover:bg-white",
            )}
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
          <Drawer.Dialog className="border-l border-slate-200 bg-white text-ink shadow-2xl">
            <Drawer.CloseTrigger className="text-slate-500 hover:text-brand" />
            <Drawer.Header>
              <Drawer.Heading className="text-base font-bold">
                Menu
              </Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body>
              <nav aria-label="Mobile menu" className="flex flex-col gap-1">
                {siteConfig.navigation.map((item) => (
                  <Link
                    className={clsx(
                      "flex min-h-12 items-center gap-3 rounded-xl px-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-blue-50 hover:text-brand",
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
              <Button className="w-full rounded-full" size="sm" variant="primary">
                <Icon className="size-4" name="user" />
                Login
              </Button>
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </header>
  );
}
