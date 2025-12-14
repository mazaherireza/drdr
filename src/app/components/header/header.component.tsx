"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactNode {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/" className={pathname === "/" ? styles.active : ""}>
              خانه
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className={pathname === "/search" ? styles.active : ""}
            >
              جست‌وجو
            </Link>
          </li>
        </ul>
      </nav>
      <button className={styles.cta}>ورود | ثبت‌نام</button>
    </header>
  );
}
