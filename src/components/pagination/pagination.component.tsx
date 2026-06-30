"use client";

import type { ReactNode } from "react";

import clsx from "clsx";

import styles from "./pagination.module.css";

type Props = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
};

export default function PaginationComponent({
  currentPage,
  totalPages,
  setCurrentPage,
}: Props): ReactNode {
  return (
    <ul className={styles.pagination}>
      {[...Array(totalPages)].map((_, index) => (
        <li key={index}>
          <button
            onClick={() => setCurrentPage(index + 1)}
            className={clsx(
              styles.button,
              `${index + 1 === currentPage ? styles.active : ""}`,
            )}
          >
            {index + 1}
          </button>
        </li>
      ))}
    </ul>
  );
}
