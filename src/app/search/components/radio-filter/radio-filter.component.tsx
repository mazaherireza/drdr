"use client";

import { type ReactNode, type ChangeEvent } from "react";

import CardComponet from "@/components/card/card.component";

import { SelectOptionType } from "@/types/select-option.type";

import styles from "./radio-filter.module.css";

type Props = {
  title: string;
  groupName: string;
  options: SelectOptionType[];
  value?: string;
  onChange: (value: string) => void;
};

export default function RadioFilterComponent({
  title,
  groupName,
  options,
  value,
  onChange,
}: Props): ReactNode {
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.currentTarget.value);
  };

  return (
    <CardComponet>
      <div className={styles["filter-component"]}>
        <div className={styles.title}>{title}</div>
        {options.map((option) => (
          <label key={option.label}>
            <input
              type="radio"
              name={groupName}
              value={option.value}
              checked={option.value === value}
              onChange={inputChangeHandler}
            />
          </label>
        ))}
      </div>
    </CardComponet>
  );
}
