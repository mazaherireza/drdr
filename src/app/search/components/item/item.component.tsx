"use client";

import { type ReactNode } from "react";

import { ItemType } from "@/types/item.type";

// import clsx from "clsx";

// import { FiltersContext } from "@/app/search/providers/filters/filters-provider";

import styles from "./item.module.css";

type Props = {
  item: ItemType;
};

export default function ItemComponent({ item }: Props): ReactNode {
  // const { filters } = useContext(FiltersContext);

  // const isActive = useMemo(() => {
  //   if (filters.even && item.value % 2 === 0) {
  //     return true;
  //   }

  //   if (filters.odd && item.value % 2 === 1) {
  //     return true;
  //   }

  //   if (filters.three && item.value % 3 === 0) {
  //     return true;
  //   }

  //   if (filters.five && item.value % 5 === 0) {
  //     return true;
  //   }

  //   if (filters.seven && item.value % 7 === 0) {
  //     return true;
  //   }

  //   return false;
  // }, [filters, item]);

  return <li className={styles.item}>{item.value}</li>;
}
