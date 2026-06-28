"use client";

import { type ReactNode, useState } from "react";

import SelectComponent from "@/components/select/select.component";

import { SelectOptionType } from "@/types/select-option.type";

const options: SelectOptionType[] = [
  { value: "rating", label: "بهترین" },
  { value: "popularity", label: "محبوب‌ترین" },
  { value: "appointment", label: "نزدیک‌ترین نوبت" },
  { value: "waiting", label: "کمترین زمان معطلی" },
  { value: "view", label: "پربازدیدترین" },
];

export default function SortComponent(): ReactNode {
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(
    options[0],
  );
  return (
    <SelectComponent
      title="مرتب‌سازی"
      options={options}
      floating
      selectedOption={selectedOption}
      onSelectedOptionChange={setSelectedOption}
    />
  );
}
