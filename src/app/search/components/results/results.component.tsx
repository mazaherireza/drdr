"use client";

import { type ReactNode, useContext } from "react";

import Link from "next/link";

import { LocationIcon } from "@/assets/icons/location.icon";

import { DoctorsContext } from "@/app/search/providers/doctors/doctors.provider";

import styles from "./results.module.css";
import { convertEnNumToFa } from "@/utils/convert-en-num-to-fa";

export default function ResultsComponent(): ReactNode {
  const { filteredDoctors } = useContext(DoctorsContext);

  return (
    <ul className={styles.results}>
      {filteredDoctors.map((doctor) => (
        <li key={doctor.id}>
          <div className={styles.header}>
            <div className={styles.image}>
              <img
                src={`https://cdn.paziresh24.com${doctor.image}`}
                alt=""
                width={150}
                height={150}
              />
            </div>
            <div className={styles.name}>{doctor.name}</div>
            <div className={styles.brief}>{doctor.brief}</div>
            <div className={styles.badges}>
              {doctor.badges.map((badge) => (
                <div key={badge} className={styles.badge}>
                  {badge}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.address}>
            <LocationIcon /> آدرس: {doctor.address}
          </div>
          <div className={styles.actions}>
            <div className={styles.rating}>
              <span className={styles["average-rating"]}>
                {convertEnNumToFa(
                  (Math.floor(doctor.averageRating * 10) / 10).toString()
                )}
              </span>{" "}
              <span className={styles["total-votes"]}>
                ( {convertEnNumToFa(doctor.totalVotes.toString())} نظر)
              </span>
            </div>
            <div className={styles.caption}>
              اولین نوبت: {doctor.firstAvailableAppointment}
            </div>
            <Link href={`/doctor/${doctor.id}`}>نوبت‌دهی آنلاین</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
