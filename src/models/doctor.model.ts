import { GenderType } from "@/types/gender.type";

export type DoctorModel = {
  id: string;
  name: string;
  image: string;
  isVerified: boolean;
  gender: GenderType;
  averageRating: number;
  totalVotes: number;
  address: string;
  firstAvailableAppointment: string;
  brief: string;
  degree: string;
  speciality: string;
  badges: string[];
};
