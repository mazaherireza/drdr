"use client";

import { ReactNode } from "react";

import Image from "next/image";

import virusImage from "@/assets/images/virus.png";

import styles from "./error.module.css";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props): ReactNode {
  return (
    <div className={styles.error}>
      <div className={styles.writings}>
        <h1>یک خطای غیرمنتظره رخ داده است.</h1>
        <p>لطفا با تیم پشتیبانی تماس بگیرید.</p>
      </div>
      <div className={styles.visuals}>
        <Image src={virusImage} alt="" />
      </div>
      <div className={styles.actions}>
        <button onClick={reset}>تلاش مجدد</button>
      </div>
    </div>
  );
}
