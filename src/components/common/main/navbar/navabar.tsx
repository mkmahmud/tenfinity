"use client";
import * as React from "react";
import Link from "next/link";
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

import * as Icons from "lucide-react";
import { menus } from "./menus";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Icon({ name }: { name: string | undefined }) {
  const LucideIcon = Icons[name as keyof typeof Icons];
  if (LucideIcon) {
    return <LucideIcon className="w-4 h-4" />;
  }

  return;
}

export default function Navbar() {
  return (
    <div className="flex items-center justify-between border-b border-border px-6 py-1 bg-background">
      <Link href="/" className="font-semibold text-lg">
        <Image
          src="/images/logo.png"
          height={100}
          width={100} 
          alt="Logo Of This Website"
        />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {menus.map((menu, i) => (
            <NavigationMenuItem key={i}>
              {menu.dropDown ? (
                <div>
                  <HoverCard>
                    <HoverCardTrigger className="hover:bg-secondary  outline-none cursor-pointer flex items-center gap-2 px-3 py-2 hover:text-primary transition">
                      {menu?.label} <Icon name={menu.icon} />
                    </HoverCardTrigger>
                    <HoverCardContent className="p-0 ">
                      {menu.dropDown.map((sub, j) => (
                        <div key={j}>
                          <Link href={sub.path} passHref>
                            <li className="hover:bg-secondary cursor-pointer flex items-center gap-2 rounded-md p-2 hover:bg-accent hover:text-accent-foreground transition">
                              <Icon name={sub.icon} /> {sub.label}
                            </li>
                          </Link>
                        </div>
                      ))}
                    </HoverCardContent>
                  </HoverCard>
                </div>
              ) : (
                <Link href={menu.path} passHref>
                  <NavigationMenuLink className="hover:bg-secondary cursor-pointer flex items-center gap-2 px-3 py-2 hover:text-primary transition">
                    {menu.label}
                    <Icon name={menu.icon} />
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Login  */}
      <div>
        <Button className="cursor-pointer text-white" variant={"destructive"}>
          <Link href="/signin">Sign In</Link>
        </Button>
      </div>
    </div>
  );
}
