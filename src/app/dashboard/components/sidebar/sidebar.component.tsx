"use client";

import type { ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import SignOutButtonComponent from "@/app/dashboard/components/sign-out-button/sign-out-button.component";

import styles from "./sidebar.module.css";

type NavItem = {
  title: string;
  href: string;
};

const path = "/dashboard";

const items: NavItem[] = [
  {
    title: "پروفایل",
    href: `${path}/profile`,
  },
  {
    title: "نوبت‌های من",
    href: `${path}/appointments`,
  },
];

export default function SidebarComonent(): ReactNode {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <nav aria-label="Pages in Dashboard">
        <ul>
          {items.map((item, index) => (
            <li
              className={clsx(
                styles.item,
                pathname === item.href && styles.active,
              )}
              key={index}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <SignOutButtonComponent className={styles.item} />
    </aside>
  );
}
