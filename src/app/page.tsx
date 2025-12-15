import GlobalSerachBoxComponent from "./components/global-seach-box/global-search-box.component";
import SerachHistoryComponent from "./components/search-history.tsx/search-history";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>دکتردکتر</h1>
      <GlobalSerachBoxComponent />
      <SerachHistoryComponent />
    </div>
  );
}
