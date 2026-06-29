import type { ReactNode } from "react";

import SidebarComponent from "./components/sidebar/sidebar.component";

import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <SidebarComponent />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
