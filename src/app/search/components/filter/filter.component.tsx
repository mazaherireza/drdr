"use client";

import { type ReactNode, useContext } from "react";

import CardComponet from "@/components/card/card.component";
import FilterButtonComponent from "@/components/filter-button/filter-button.component";

import { FiltersContext } from "@/app/search/providers/filters/filters-provider";
import { DivisibilityType } from "@/app/search/types/divisibility.type";

import styles from "./filter.module.css";

type FilteredBy = {
  key: keyof DivisibilityType;
  label: string;
};

type Props = {
  title: string;
  filteredByList: FilteredBy[];
};

export default function FilterComponent({
  title,
  filteredByList,
}: Props): ReactNode {
  const { filters, changeFilters } = useContext(FiltersContext);

  return (
    <div className={styles.filter}>
      <CardComponet>
        <div className={styles.title}>{title}</div>
        <div className={styles.buttons}>
          {filteredByList.map((item) => (
            <FilterButtonComponent
              key={item.label}
              isActive={filters[item.key]}
              onClick={() => changeFilters(item.key, !filters[item.key])}
            >
              {item.label}
            </FilterButtonComponent>
          ))}
        </div>
      </CardComponet>
    </div>
  );
}
