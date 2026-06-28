import type { ReactNode } from "react";

import SignInFormComponent from "@/app/auth/components/sign-in-form/sign-in-form";

import styles from "./page.module.css";

export default function Page(): ReactNode {
  return (
    <div className={styles.page}>
      <SignInFormComponent />
    </div>
  );
}
