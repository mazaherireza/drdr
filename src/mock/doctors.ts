import { DoctorModel } from "@/models/doctor.model";

export const doctors: DoctorModel[] = [
  {
    id: "a70497d6-c6aa-4144-a863-2962ab2b7f44",
    name: "محمد اخوان",
    image:
      "/getImage/p24/search-men/ffe01df9c737d76a59ddd88b564f993e.jpg?size=150",
    isVerified: true,
    gender: "آقا",
    averageRating: 4.73,
    totalVotes: 32,
    address:
      "رشت,رشت، فاز2 معلم، میدان سرگل، بلوار شمسی پور،  میدان هاشمی ساختمان آنتیک 1 طبقه دوم واحد2",
    firstAvailableAppointment: "کمتر از یک ساعت",
    brief: "آسیب شناس گفتار و زبان",
    degree: "کارشناس",
    speciality: "توانبخشی",
    badges: ["کمترین معطلی"],
  },
];
