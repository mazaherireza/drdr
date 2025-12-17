import type { ReactNode, ComponentProps } from "react";

import clsx from "clsx";

import styles from "./filter-button.module.css";

type Props = ComponentProps<"button"> & {
  isActive?: boolean;
};

export default function FilterButtonComponent({
  className,
  children,
  isActive = false,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(
        styles["filter-button"],
        isActive && styles.active,
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
