"use client";

import { type ReactNode, useContext } from "react";

import { DoctorsContext } from "@/app/search/providers/doctors/doctors.provider";

import styles from "./stats.module.css";
import { convertEnNumToFa } from "@/utils/convert-en-num-to-fa.util";

export default function StatsComponent(): ReactNode {
  const { filteredDoctors } = useContext(DoctorsContext);

  return (
    <div className={styles.stats}>
      {convertEnNumToFa(filteredDoctors.length.toString()).toLocaleString()}{" "}
      نتیجه
    </div>
  );
}
