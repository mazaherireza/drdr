import type { ReactNode } from "react";

import styles from "./page.module.css";

import SignInFormComponent from "@/app/auth/components/sign-in-form/sign-in-form";

export default function Page(): ReactNode {
  return (
    <div className={styles.page}>
      <SignInFormComponent />
    </div>
  );
}
