"use client";

import { type ReactNode, useContext } from "react";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import { SelectOptionType } from "@/types/select-option.type";

import RadioFilterComponent from "@/app/search/components/radio-filter/radio-filter.component";

const options: SelectOptionType[] = [
  {
    value: "Female",
    label: "خانم",
  },
  {
    value: "Male",
    label: "آقا",
  },
];

export default function GenderFilterComponent(): ReactNode {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const changeHandler = (value: string): void => {
    dispatchFilters({ type: "UPDATE", key: "gender", value });
  };

  return (
    <RadioFilterComponent
      title="جنسیت پزشک"
      groupName="gender"
      options={options}
      value={filters.gender}
      onChange={changeHandler}
    />
  );
}
