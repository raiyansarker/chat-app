"use client";

import { cn } from "@/lib/utils";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";

export default function Link({
  children,
  activeClassName,
  className,
  href,
}: PropsWithChildren<{
  activeClassName?: string;
  className?: string;
  href: string;
}>) {
  const pathname = usePathname();

  return (
    <NextLink
      href={href}
      className={cn(className, pathname === href && activeClassName)}
    >
      {children}
    </NextLink>
  );
}
