import type { ReactNode } from "react";

import styles from "./page.module.css";

import SignUpFormComponent from "@/app/auth/components/sign-up-form/sign-up-form";

export default function Page(): ReactNode {
  return (
    <div className={styles.page}>
      <SignUpFormComponent />
    </div>
  );
}
