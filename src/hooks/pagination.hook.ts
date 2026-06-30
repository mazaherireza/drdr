"use client";

import { useMemo, useState } from "react";

type Props<T> = {
  items: T[];
  perPage: number;
};

export default function usePagination<T>({ items, perPage }: Props<T>) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage, perPage]);

  const totalPages = Math.ceil(items.length / perPage);

  return { currentPage, setCurrentPage, currentItems, totalPages };
}
