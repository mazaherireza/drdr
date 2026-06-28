import type { PropsWithChildren, ReactNode } from "react";

import clsx from "clsx";

import styles from "./card.module.css";

type Props = PropsWithChildren<{
  className?: string;
  title?: string;
}>;

export default function CardComponet({
  children,
  className,
  title,
}: Props): ReactNode {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={clsx(styles.card, className)}>{children}</div>
    </div>
  );
}
