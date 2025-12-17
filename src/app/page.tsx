import type { ReactNode } from "react";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import SerachHistoryComponent from "@/components/search-history/search-history";

import styles from "./page.module.css";

export default function Home(): ReactNode {
  return (
    <div className={styles.home}>
      <h1>دکتردکتر</h1>
      <GlobalSearchBoxComponent />
      <SerachHistoryComponent />
    </div>
  );
}
