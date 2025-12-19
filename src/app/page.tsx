import type { ReactNode } from "react";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import SearchHistoryComponent from "@/components/search-history/search-history";

import styles from "./page.module.css";

export default function Home(): ReactNode {
  return (
    <div className={styles.home}>
      <h1>دکتردکتر</h1>
      <GlobalSearchBoxComponent />
      <SearchHistoryComponent />
    </div>
  );
}
