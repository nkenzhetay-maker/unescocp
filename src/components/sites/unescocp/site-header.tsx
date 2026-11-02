"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { DonateButton } from "./donate-button";
import { LanguageSwitcher } from "./language-switcher";

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/programs", label: "Programs" },
  { href: "/summer-program", label: "Summer Program" },
  { href: "/regional-coordinators", label: "Regional Coordinators" },
  { href: "/resources", label: "Resources" },
  { href: "/join-us", label: "Join Us" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#767676]">
      <div className="bg-[#3b355f] text-white text-xs py-1 px-4 flex items-center justify-between gap-4">
        <LanguageSwitcher />
        <span className="hidden md:inline">{"Flagship Member of the U.S. Federation of UNESCO Clubs, Centers & Associations"}</span>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-5 gap-4">
          <Link
            className="flex flex-shrink-0 items-center gap-3 text-primary font-bold text-lg leading-tight hover:opacity-80 transition-opacity"
            href="/"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <img
              alt="U.S. Federation of Clubs & Associations for UNESCO"
              src="/sites/unescocp/logo-us-federation.png"
              className="h-10 w-auto"
              width="500"
              height="471"
            />
            UNESCO Centre for Peace
          </Link>
          <nav className="hidden xl:flex items-center gap-1 flex-wrap justify-end">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                className={cn(
                  "text-xs font-semibold px-2 py-1 transition-colors hover:text-[#3b355f] uppercase tracking-wide",
                  isActive(item.href) ? "text-[#3b355f] border-b-2 border-[#3b355f]" : "text-[#333333]",
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
            <DonateButton className="ml-2" />
          </nav>
          <button
            className="xl:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <div className="xl:hidden border-t border-[#d0d0d0] py-4">
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  className={cn(
                    "text-sm font-semibold px-2 py-2 uppercase tracking-wide transition-colors hover:text-[#3b355f] hover:bg-gray-50 rounded",
                    isActive(item.href) ? "text-[#3b355f]" : "text-[#333333]",
                  )}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <DonateButton className="mt-2 mx-2 self-start" />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
