"use client";

import { type ReactNode, useContext } from "react";

import { DoctorsContext } from "@/app/search/providers/doctors/doctors.provider";

import styles from "./stats.module.css";

export default function StatsComponent(): ReactNode {
  const { filteredDoctors } = useContext(DoctorsContext);

  return (
    <div className={styles.stats}>
      {filteredDoctors.length.toLocaleString()} نتیجه
    </div>
  );
}
