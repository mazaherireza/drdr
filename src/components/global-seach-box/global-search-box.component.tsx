import type { ReactNode } from "react";

import { LocationIcon } from "@/icons/location.icon";
import { SearchIcon } from "@/icons/search.icon";

import styles from "./global-search-box.module.css";

export default function GlobalSerachBoxComponent(): ReactNode {
  return (
    <div className={styles["global-search-box"]}>
      <div className={styles.prefix}>
        <SearchIcon />
      </div>
      <input type="text" placeholder="نام بیماری، تخصص، پزشک ..." />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button>
          <LocationIcon />
          همه شهرها
        </button>
      </div>
    </div>
  );
}
