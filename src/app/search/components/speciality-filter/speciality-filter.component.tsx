"use client";

import { type ReactNode, useContext } from "react";
import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import CardComponet from "@/components/card/card.component";

import styles from "./sepciality-filter.module.css";

const specialities: string[] = [
  "استخوان و مفاصل",
  "زنان، زایمان و نازایی",
  "چشم پزشکی",
  "گوارش و معده",
  "کلیه و مجاری ادراری",
  "غدد و متابولیسم",
  "قلب و عروق",
  "داخلی",
  "دهان و دندان",
  "پوست و مو",
  "جراحی",
  "اطفال، کودکان و نوزادان",
  "روانپزشکی",
  "ریه و دستگاه تنفسی",
  "گوش، حلق و بینی",
  "بیهوشی و مراقبت های ویژه",
  "خون و سرطان",
  "آزمایشگاه",
  "پزشک عمومی",
  "تغذیه",
  "روانشناسی",
  "ژنتیک",
  "طب اورژانس",
  "طب تسکینی و درد",
  "عفونی",
  "مغز و اعصاب",
  "طب سنتی",
  "توانبخشی",
  "کرونا ویروس",
  "داروسازی",
  "سلامت جنسی",
  "زیبایی",
  "آلرژی",
  "دیابت",
  "تصویربرداری",
];

export default function SpecialityFilterComponent(): ReactNode {
  const { dispatchFilters } = useContext(FiltersContext);

  const buttonClickHandler = (value: string): void => {
    dispatchFilters({ type: "UPDATE", key: "speciality", value });
  };

  return (
    <CardComponet>
      <ul className={styles["speciality-filter"]}>
        <ul className={styles["expertise-filter"]}>
          {specialities.map((speciality) => (
            <li key={speciality}>
              <button
                type="button"
                onClick={() => buttonClickHandler(speciality)}
              >
                {speciality}
              </button>
            </li>
          ))}
        </ul>
      </ul>
    </CardComponet>
  );
}
