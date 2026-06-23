import { type ReactNode } from "react";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import { doctors } from "@/mocks/doctors.mock";

import { FiltersType } from "@/types/filters.type";

import AppointmentFilterComponent from "./components/appointment-filter/appointment-filter.component";
import SpecialityFilterComponent from "./components/speciality-filter/speciality-filter.component";
import FiltersSummaryComponent from "./components/filters-summary/filters-summary.component";
import GenderFilterComponent from "./components/gender-filter/gender-filter.component";
import ResultsComponent from "./components/results/results.component";
import SortComponent from "./components/sort/sort.component";
import StatsComponent from "./components/stats/stats.component";

import FiltersProvider from "./providers/filters/filters.provider";
import DoctorsProvider from "./providers/doctors/doctors.provider";

import styles from "./page.module.css";

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

type Props = {
  searchParams: Promise<SearchParams>;
};

export default async function Page({
  searchParams,
}: Props): Promise<ReactNode> {
  const defaultFilters = generateDefaultFilters(await searchParams);

  return (
    <FiltersProvider defaultFilters={defaultFilters}>
      <DoctorsProvider doctors={doctors}>
        <div className={styles.page}>
          <div className={styles.search}>
            <GlobalSearchBoxComponent />
          </div>
          <div className={styles.filters}>
            <FiltersSummaryComponent />
            <SpecialityFilterComponent />
            <GenderFilterComponent />
          </div>
          <div className={styles.toolbar}>
            <SortComponent />
            <AppointmentFilterComponent />
            <div className={styles.stats}>
              <StatsComponent />
            </div>
          </div>
          <div className={styles.results}>
            <ResultsComponent />
          </div>
        </div>
      </DoctorsProvider>
    </FiltersProvider>
  );
}

function generateDefaultFilters(searchParams: SearchParams): FiltersType {
  const { query, speciality, gender } = searchParams;

  return {
    query: normalizeFilter(query),
    speciality: normalizeFilter(speciality),
    gender: normalizeFilter(gender),
  };
}

function normalizeFilter(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}
