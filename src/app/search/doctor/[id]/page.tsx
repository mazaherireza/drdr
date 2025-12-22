import { type ReactNode } from "react";

import { notFound } from "next/navigation";

import { doctors } from "@/mock/doctors";

import { DoctorModel } from "@/models/doctor.model";
import { resolve } from "path";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props): Promise<ReactNode> {
  const doctor = await getDoctor(params.id);

  if (!doctor) {
    return notFound();
  }

  return <div>{doctor?.name}</div>;
}

async function getDoctor(id: string): Promise<DoctorModel | undefined> {
  return new Promise((resolve) => {
    setTimeout((): void => {
      const result = doctors.find((doctor) => doctor.id === id);
      resolve(result);
    }, 1000);
  });
}
