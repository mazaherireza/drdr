import type { ReactNode } from "react";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import { convertEnNumToFa } from "@/utils/convert-en-num-to-fa";

import styles from "./not-found.module.css";

export default function NotFoundPage(): ReactNode {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.writings}>
        <div className={styles["status-code"]}>{convertEnNumToFa("404")}</div>
        <h1>صفحه موردنظر پیدا نشد.</h1>
      </div>

      <GlobalSearchBoxComponent />
    </div>
  );
}
