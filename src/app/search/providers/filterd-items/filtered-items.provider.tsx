"use client";

import {
  type ReactNode,
  type PropsWithChildren,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

import { ItemType } from "@/types/item.type";

import { FiltersContext } from "../filters/filters-provider";

type ContextValue = {
  filteredItems: ItemType[];
};

export const FilteredItemsContext = createContext<ContextValue>({
  filteredItems: [],
});

type Props = PropsWithChildren & {
  items: ItemType[];
};

export default function FilteredItemsProvider({
  items,
  children,
}: Props): ReactNode {
  const { filters } = useContext(FiltersContext);

  const [filteredItems, setFilteredItems] = useState<ItemType[]>([]);

  const isActive = useCallback(
    (item: ItemType): boolean => {
      if (filters.even && item.value % 2 === 0) {
        return true;
      }

      if (filters.odd && item.value % 2 === 1) {
        return true;
      }

      if (filters.three && item.value % 3 === 0) {
        return true;
      }

      if (filters.five && item.value % 5 === 0) {
        return true;
      }

      if (filters.seven && item.value % 7 === 0) {
        return true;
      }

      return false;
    },
    [filters]
  );

  useEffect(() => {
    setFilteredItems(items.filter(isActive));
  }, [items, isActive]);

  return (
    <FilteredItemsContext.Provider value={{ filteredItems }}>
      {children}
    </FilteredItemsContext.Provider>
  );
}
