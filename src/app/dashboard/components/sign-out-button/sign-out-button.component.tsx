"use client";

import type { ReactNode } from "react";

import { useRouter } from "next/navigation";

import clsx from "clsx";

import { fetchWithToast } from "@/utils/fetch.util";

import styles from "./sign-out-button.module.css";

type Props = {
  className: string;
};

export default function SignOutButtonComponent({
  className,
}: Props): ReactNode {
  const router = useRouter();

  const handleSignOutButtonClick = async () => {
    const result = await fetchWithToast(
      "/api/auth/sign-out",
      {
        method: "DELETE",
      },
      "به امید دیدار",
    );

    if (result.error) {
      return;
    }

    router.push("/");
  };

  return (
    <button
      className={clsx(styles["sign-out-button"], className)}
      onClick={handleSignOutButtonClick}
    >
      خروج
    </button>
  );
}
