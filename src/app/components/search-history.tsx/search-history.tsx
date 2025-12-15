"use client";
import { type ReactNode, type MouseEvent, useState } from "react";

import { RemoveIcon } from "@/app/icons/remove.icon";

import styles from "./search-history.module.css";

const historyList = [
  { id: "s-001", title: "عمومی" },
  { id: "s-002", title: "پوست" },
];

export default function SerachHistoryComponent(): ReactNode {
  const [history, setHistory] = useState(historyList);

  const handleRemoveItem = (e: MouseEvent<HTMLOrSVGElement>, id: string) => {
    e.preventDefault();

    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.history}>
      {history.length !== 0 && (
        <div className={styles.title}>آخرین جست‌وجوهای شما</div>
      )}
      <ul>
        {history.map((hisoryItem) => (
          <li key={hisoryItem.id}>
            <span>{hisoryItem.title}</span>
            <RemoveIcon onClick={(e) => handleRemoveItem(e, hisoryItem.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
