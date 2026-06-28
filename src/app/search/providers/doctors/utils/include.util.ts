import { DoctorModel } from "@/models/doctor.model";

import { GenderType } from "@/types/gender.type";

export function isSubjectedToTheSelectedQuery(
  doctor: DoctorModel,
  query?: string,
) {
  if (!query) {
    return true;
  }

  return [doctor.name, doctor.brief, doctor.address].some((item) =>
    isSubjectedToTheSelectedProperty(item, query),
  );
}

export function isSubjectedToTheSelectedProperty(
  property: string,
  query?: string,
) {
  if (!query) {
    return true;
  }

  return property.toLowerCase().includes(query.toLowerCase());
}

export function isSubjectedToTheSelectedGender(
  doctorsGender: GenderType,
  query?: string,
) {
  if (!query) {
    return true;
  }

  return doctorsGender == query ? true : false;
}
