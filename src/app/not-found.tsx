import { ReactNode } from "react";

import GlobalSerachBoxComponent from "@/components/global-seach-box/global-search-box.component";

import { convertEnNumToFa } from "@/utils/convert-en-num-to-fa";

import styles from "./not-found.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.writings}>
        <div className={styles["status-code"]}>{convertEnNumToFa("404")}</div>
        <h1>صفحه موردنظر پیدا نشد.</h1>
      </div>

      <GlobalSerachBoxComponent />
    </div>
  );
}
