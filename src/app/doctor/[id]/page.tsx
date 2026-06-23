import { type ReactNode } from "react";

import { notFound } from "next/navigation";

import { doctors } from "@/mocks/doctors.mock";

import { DoctorModel } from "@/models/doctor.model";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props): Promise<ReactNode> {
  const doctor = await getDoctor((await params).id);

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
 