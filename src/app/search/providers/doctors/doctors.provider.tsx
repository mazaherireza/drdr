"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type PropsWithChildren,
  type ReactNode,
  useCallback,
} from "react";

import { DoctorModel } from "@/models/doctor.model";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import {
  isSubjectedToTheSelectedQuery,
  isSubjectedToTheSelectedProperty,
  isSubjectedToTheSelectedGender,
} from "./utils/include.util";

type ContextValue = {
  filteredDoctors: DoctorModel[];
};

export const DoctorsContext = createContext<ContextValue>({
  filteredDoctors: [],
});

type Props = PropsWithChildren & {
  doctors: DoctorModel[];
};

export default function DoctorsProvider({
  doctors,
  children,
}: Props): ReactNode {
  const { filters } = useContext(FiltersContext);

  const [filteredDoctors, setFilteredDoctors] = useState<DoctorModel[]>([]);

  const isSubjected = useCallback(
    (doctor: DoctorModel): boolean => {
      return (
        isSubjectedToTheSelectedQuery(doctor, filters.query) &&
        isSubjectedToTheSelectedProperty(
          doctor.speciality,
          filters.speciality
        ) &&
        isSubjectedToTheSelectedGender(doctor.gender, filters.gender)
      );
    },
    [filters]
  );

  useEffect(() => {
    setFilteredDoctors(doctors.filter(isSubjected));
  }, [doctors, isSubjected]);

  return (
    <DoctorsContext value={{ filteredDoctors }}>{children}</DoctorsContext>
  );
}
