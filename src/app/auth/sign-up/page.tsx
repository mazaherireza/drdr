import type { ReactNode } from "react";

import SignUpFormComponent from "@/app/auth/components/sign-up-form/sign-up-form";

import styles from "./page.module.css";

export default function Page(): ReactNode {
  return (
    <div className={styles.page}>
      <SignUpFormComponent />
    </div>
  );
}
