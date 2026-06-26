import { type ReactNode } from "react";

import { Toaster, type ToasterProps } from "react-hot-toast";

type Props = Partial<ToasterProps>;

export default function ToasterComponent({ ...props }: Props): ReactNode {
  return (
    <Toaster
      toastOptions={{
        position: "bottom-left",
        duration: 4000,
      }}
      {...props}
    />
  );
}
