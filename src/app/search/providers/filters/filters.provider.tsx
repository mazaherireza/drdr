"use client";

import {
  createContext,
  type ReactNode,
  type PropsWithChildren,
  type Dispatch,
  useReducer,
} from "react";

import { FiltersType } from "@/types/filters.type";
import {
  FiltersAction,
  filtersReducer,
} from "@/app/search/providers/reducers/filter.reducer";

type ContextValue = {
  filters: FiltersType;
  dispatchFilters: Dispatch<FiltersAction>;
};

export const FiltersContext = createContext<ContextValue>({
  filters: {},
  dispatchFilters: () => {},
});

type Props = PropsWithChildren & {
  defaultFilters: FiltersType;
};

export default function FiltersProvider({
  defaultFilters,
  children,
}: Props): ReactNode {
  const [filters, dispatchFilters] = useReducer(filtersReducer, defaultFilters);

  return (
    <FiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
