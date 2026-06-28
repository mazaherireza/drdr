"use client";

import { type ReactNode } from "react";

import { useRouter } from "next/navigation";

import { ButtonComponent } from "@/components/button/button.component";

import { fetchWithToast } from "@/utils/fetch.util";

import styles from "./page.module.css";

export default function Page(): ReactNode {
  const router = useRouter();

  const handleSignOutButtonClick = async (): Promise<void> => {
    const result = await fetchWithToast<null>("/api/sign-out", {
      method: "DELETE",
    });

    if (result?.error) {
      return;
    }

    router.push("/");
  };

  return (
    <div className={styles.page}>
      <h1>داشبورد</h1>
      <ButtonComponent variant="danger" onClick={handleSignOutButtonClick}>
        خروج
      </ButtonComponent>
    </div>
  );
}
