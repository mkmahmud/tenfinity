"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { menus } from "./menus";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";



export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="relative z-50">
      <div className="flex items-center justify-between border-b border-border px-4 md:px-6 py-2 bg-background">
        <Link href="/" className="font-semibold text-lg flex items-center gap-2">
          <Image src="/logo.jpg" height={40} width={40} alt="Logo Of This Website" />

        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {menus.map((menu, i) => (
                <NavigationMenuItem key={i}>
                  {menu.dropDown ? (
                    <HoverCard>
                      <HoverCardTrigger className="hover:bg-secondary outline-none cursor-pointer flex items-center gap-2 px-3 py-2 hover:text-primary transition rounded-md">
                        {menu.label}
                      </HoverCardTrigger>
                      <HoverCardContent className="p-0">
                        {menu.dropDown.map((sub, j) => (
                          <div key={j}>
                            <Link href={sub.path}>
                              <li className="list-none hover:bg-secondary cursor-pointer flex items-center gap-2 rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition">
                                {sub.label}
                              </li>
                            </Link>
                          </div>
                        ))}
                      </HoverCardContent>
                    </HoverCard>
                  ) : (
                    <Link href={menu.path}>
                      <NavigationMenuLink className="hover:bg-secondary cursor-pointer flex items-center gap-2 px-3 py-2 hover:text-primary transition rounded-md">
                        {menu.label}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Actions (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <Button className="cursor-pointer text-white" variant={"destructive"}>
            <Link href="/signin">Sign In</Link>
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileOpen((s) => !s)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="p-2"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-200 ease-in-out overflow-hidden bg-background border-b border-border ${mobileOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="px-4 py-4">
          <ul className="flex flex-col gap-1">
            {menus.map((menu, i) => (
              <li key={i} className="list-none">
                {menu.dropDown ? (
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer px-3 py-2 rounded-md hover:bg-secondary">
                      <span className="flex items-center gap-2">
                        {menu.label}
                      </span>
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="mt-2 ml-4 flex flex-col gap-1">
                      {menu.dropDown.map((sub, j) => (
                        <li key={j} className="list-none">
                          <Link
                            href={sub.path}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-secondary"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={menu.path}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-secondary"
                  >
                    {menu.label}
                  </Link>
                )}
              </li>
            ))}

            <li className="list-none mt-2">
              <Button
                className="w-full text-white"
                variant={"destructive"}
                onClick={() => setMobileOpen(false)}
              >
                <Link href="/signin">Sign In</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
