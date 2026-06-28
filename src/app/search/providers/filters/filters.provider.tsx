"use client";

import {
  type Dispatch,
  type PropsWithChildren,
  type ReactNode,
  createContext,
  useReducer,
} from "react";

import {
  FiltersAction,
  filtersReducer,
} from "@/app/search/providers/reducers/filter.reducer";

import { FiltersType } from "@/types/filters.type";

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
