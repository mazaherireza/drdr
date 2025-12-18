"use client";

import { type ReactNode, useContext } from "react";

import { FilteredItemsContext } from "@/app/search/providers/filterd-items/filtered-items.provider";

import ItemComponent from "@/app/search/components/item/item.component";

import styles from "./list.module.css";

export default function ListComponent(): ReactNode {
  const { filteredItems } = useContext(FilteredItemsContext);

  return (
    <ul className={styles.list}>
      {filteredItems.map((item) => (
        <ItemComponent key={item.value} item={item} />
      ))}
    </ul>
  );
}
