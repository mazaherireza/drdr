import type { ReactNode } from "react";

import FilterComponent from "./components/filter/filter.component";
import ResultsComponent from "./components/list/list.component";

import FiltersProvider from "./providers/filters/filters-provider";

import styles from "./page.module.css";

export default function Page(): ReactNode {
  return (
    <FiltersProvider>
      <div className={styles.page}>
        <div className={styles.filters}>
          <FilterComponent
            title="زوج یا فرد"
            filteredByList={[
              { key: "even", label: "زوج" },
              { key: "odd", label: "فرد" },
            ]}
          />
          <FilterComponent
            title="بخش‌پذیر بر:"
            filteredByList={[
              { key: "three", label: "سه" },
              { key: "five", label: "پنج" },
              { key: "seven", label: "هفت" },
            ]}
          ></FilterComponent>
        </div>
        <ResultsComponent />
      </div>
    </FiltersProvider>
  );
}
