import { type ReactNode, SubmitEvent, useEffect, useState } from "react";

import Loading from "@/app/loading";

import { ButtonComponent } from "@/components/button/button.component";
import CardComponent from "@/components/card/card.component";
import NormalInputComponent from "@/components/normal-input/normal-input.component";
import PasswordInputComponent from "@/components/password-input/password-input.component";

import { EditProfileDto } from "@/dto/edit-profile.dto";

import { fetchWithToast } from "@/utils/fetch.util";

import styles from "./profile-form.module.css";

export default function ProfileFormComponent(): ReactNode {
  const [values, setValues] = useState<EditProfileDto>({});
  const [status, setStatus] = useState<"pending" | "error" | "success">(
    "pending",
  );

  useEffect(() => {
    const fetchProfile = async () => {
      const result = await fetchWithToast<EditProfileDto>(
        "/api/dashboard/profile",
      );

      if (result.error) {
        setStatus("error");
        return;
      }

      setValues(result.data!);
      setStatus("success");
    };

    fetchProfile().then();
  }, []);

  const formSubmitHandler = async (
    e: SubmitEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    const result = await fetchWithToast<null>(
      "/api/dashboard/profile",
      {
        method: "PATCH",
        body: JSON.stringify(values),
      },
      "پروفایل با موفقیت ویرایش شد",
    );

    if (result.error) {
      return;
    }
  };

  if (status === "pending") {
    return <Loading />;
  }

  if (status === "error") {
    return <h1>خطایی رخ داده</h1>;
  }

  return (
    <CardComponent className={styles["profile-form"]}>
      <h1>ویرایش پروفایل</h1>
      <form onSubmit={formSubmitHandler}>
        <NormalInputComponent
          label="نام و نام خانوادگی"
          type="text"
          name="name"
          value={values.name}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <NormalInputComponent
          label="نام کاربری"
          type="text"
          name="username"
          value={values.username}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, username: e.target.value }))
          }
        />
        <NormalInputComponent
          label="ایمیل"
          type="email"
          name="email"
          value={values.email}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <PasswordInputComponent
          label="رمز عبور"
          name="password"
          autoComplete="new-password"
          value={values.password}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <ButtonComponent variant="primary">ثبت‌نام</ButtonComponent>
      </form>
    </CardComponent>
  );
}
