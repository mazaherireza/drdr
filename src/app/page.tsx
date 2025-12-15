import GlobalSerachBoxComponent from "./components/global-seach-box/global-search-box.component";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>دکتردکتر</h1>
      <GlobalSerachBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جست‌وجوهای شما</div>
        <ul>
          <li>عمومی</li>
          <li>پوست</li>
        </ul>
      </div>
    </div>
  );
}
