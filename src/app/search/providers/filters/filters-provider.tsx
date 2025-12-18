"use client";

import {
  createContext,
  type ReactNode,
  type PropsWithChildren,
  useState,
} from "react";

import { DivisibilityType } from "@/app/search/types/divisibility.type";

type ContextValue = {
  filters: DivisibilityType;
  changeFilters: <TKey extends keyof DivisibilityType>(
    key: TKey,
    value: DivisibilityType[TKey]
  ) => void;
  removeFilters: <TKey extends keyof DivisibilityType>(key: TKey) => void;
  clear: () => void;
};

const defaultFilters: DivisibilityType = {
  even: true,
  odd: true,
  three: true,
  five: true,
  seven: true,
};

export const FiltersContext = createContext<ContextValue>({
  filters: { ...defaultFilters },
  changeFilters: () => {},
  removeFilters: () => {},
  clear: () => {},
});

type Props = PropsWithChildren;

export default function FiltersProvider({ children }: Props): ReactNode {
  const [filters, setFilters] = useState<DivisibilityType>({
    ...defaultFilters,
  });

  const changeFilters = <TKey extends keyof DivisibilityType>(
    key: TKey,
    value: DivisibilityType[TKey]
  ): void => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const removeFilters = <TKey extends keyof DivisibilityType>(
    key: TKey
  ): void => {
    setFilters((prev) => {
      const clone = structuredClone(prev);
      delete clone[key];
      return clone;
    });
  };

  const clear = (): void => {
    setFilters({ ...defaultFilters });
  };

  return (
    <FiltersContext.Provider
      value={{ filters, changeFilters, removeFilters, clear }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
