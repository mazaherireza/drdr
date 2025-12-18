"use client";

import { type ReactNode, useContext, useMemo } from "react";

import clsx from "clsx";

import { FiltersContext } from "@/app/search/providers/filters/filters-provider";

import styles from "./item.module.css";

type Props = {
  item: number;
};

export default function ItemComponent({ item }: Props): ReactNode {
  const { filters } = useContext(FiltersContext);

  const isActive = useMemo(() => {
    if (filters.even && item % 2 === 0) {
      return true;
    }

    if (filters.odd && item % 2 === 1) {
      return true;
    }

    if (filters.three && item % 3 === 0) {
      return true;
    }

    if (filters.five && item % 5 === 0) {
      return true;
    }

    if (filters.seven && item % 7 === 0) {
      return true;
    }

    return false;
  }, [filters, item]);

  return (
    <li className={clsx(styles.item, isActive && styles.active)}>{item}</li>
  );
}
