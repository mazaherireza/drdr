import type { ReactNode } from "react";

import GlobalSerachBoxComponent from "@/components/global-seach-box/global-search-box.component";
import SerachHistoryComponent from "@/components/search-history.tsx/search-history";

import styles from "./page.module.css";

export default function Home(): ReactNode {
  throw new Error("TEST");

  return (
    <div className={styles.home}>
      <h1>دکتردکتر</h1>
      <GlobalSerachBoxComponent />
      <SerachHistoryComponent />
    </div>
  );
}
