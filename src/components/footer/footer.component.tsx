import { ReactNode } from "react";

import Link from "next/link";

import { GithubIcon } from "@/icons/github.icon";
import { LinkedinIcon } from "@/icons/linkedin.icon";
import { YoutubeIcon } from "@/icons/youtube.icon";

import styles from "./footer.module.css";

export default function FooterComponent(): ReactNode {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.title}>دکتردکتر</div>
        <p className={styles.description}>
          مشاوره آنلاین و دریافت نوبت از پزشکان ایران
        </p>
      </div>
      <div className={styles.socials}>
        <ul>
          <li>
            <Link href="#">
              <GithubIcon />
            </Link>
          </li>
          <li>
            <Link href="#">
              <LinkedinIcon />
            </Link>
          </li>
          <li>
            <Link href="#">
              <YoutubeIcon />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copyright}>
        تمام حقوق مادی و معنوی این وب‌سایت متعلق به دکتردکتر می‌باشد.
      </p>
    </footer>
  );
}
