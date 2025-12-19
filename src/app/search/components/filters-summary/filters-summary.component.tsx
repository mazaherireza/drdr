"use client";

import { type ReactNode, useContext, useMemo } from "react";

import CardComponet from "@/components/card/card.component";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import styles from "./filters-summary.module.css";
import { FiltersType } from "@/types/filters.type";

export default function FiltersSummaryComponent(): ReactNode {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const shouldBeFiltered = useMemo(() => {
    return filters.query && filters.gender && filters.speciality;
  }, [filters]);

  if (!shouldBeFiltered) {
    return null;
  }

  const removeAllFiltersClickHandler = (): void => {
    dispatchFilters({ type: "CLEAR" });
  };

  const filterClickHandler = (key: keyof FiltersType): void => {
    dispatchFilters({ type: "REMOVE", key });
  };

  return (
    <CardComponet>
      <div className={styles["filters-summary"]}>
        <div className={styles.title}>فیلترهای انتخاب‌شده: </div>
        <button type="button" onClick={removeAllFiltersClickHandler}>
          حذف همه
        </button>

        <ul className={styles.filters}>
          {filters.query && (
            <li onClick={() => filterClickHandler("query")}>
              <button>{filters.query}</button>
            </li>
          )}

          {filters.speciality && (
            <li onClick={() => filterClickHandler("speciality")}>
              <button>{filters.speciality}</button>
            </li>
          )}

          {filters.gender && (
            <li onClick={() => filterClickHandler("gender")}>
              <button>{filters.gender}</button>
            </li>
          )}
        </ul>
      </div>
    </CardComponet>
  );
}
