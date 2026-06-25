"use client";

import { SubmitEvent, ReactElement, useRef } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { ButtonComponent } from "@/components/button/button.component";
import CardComponent from "@/components/card/card.component";
import NormalInputComponent from "@/components/normal-input/normal-input.component";
import PasswordInputComponent from "@/components/password-input/password-input.component";

// import { SignInDto } from "@/dto/auth.dto";

// import { fetchWithToast } from "@/utils/fetch-utils";

import styles from "@/app/auth/styles/auth-form.module.css";

export default function SignInFormComponent(): ReactElement {
  const router = useRouter();

  const formRef = useRef<HTMLFormElement>(null);

  const formSubmitHandler = async (
    e: SubmitEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // const dto: SignInDto = {
    //   username: formData.get("username") as string,
    //   password: formData.get("password") as string,
    // };

    // const result = await fetchWithToast<null>(
    //   "/api/auth/sign-in",
    //   {
    //     method: "POST",
    //     body: JSON.stringify(dto),
    //   },
    //   "خوش آمدید!",
    // );

    // if (result.error) {
    //   return;
    // }

    formRef.current?.reset();
    router.push("/dashboard");
  };

  return (
    <div className={styles["auth-form"]}>
      <CardComponent>
        <div className={styles.writings}>
          <h1>ورود!</h1>
          <form ref={formRef} onSubmit={formSubmitHandler}>
            <NormalInputComponent
              label="نام کاربری"
              type="text"
              name="username"
            />
            <PasswordInputComponent
              label="رمز عبور"
              name="password"
              autoComplete="current-password"
            />
            <ButtonComponent variant="primary">ورود</ButtonComponent>
          </form>
          <div className={styles["change-form"]}>
            قبلاً ثبت‌نام نکردید؟
            {` `}
            <Link href="/auth/sign-up">ثبت‌نام کنید</Link>.
          </div>
        </div>
      </CardComponent>
    </div>
  );
}
