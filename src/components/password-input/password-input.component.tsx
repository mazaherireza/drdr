"use client";

import {
  type ComponentProps,
  type ForwardedRef,
  type ReactNode,
  forwardRef,
  useState,
} from "react";

import EyeCloseFill from "@/components/icons/eye-close-fill.icon";
import EyeFill from "@/components/icons/eye-fill.icon";
import NormalInputComponent from "@/components/normal-input/normal-input.component";

type Props = ComponentProps<typeof NormalInputComponent>;

function PasswordInputComponent(
  { ...otherProps }: Props,
  ref: ForwardedRef<HTMLInputElement>,
): ReactNode {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <NormalInputComponent
      ref={ref}
      type={isVisible ? "text" : "password"}
      suffixIcon={isVisible ? <EyeCloseFill /> : <EyeFill />}
      onSuffixClick={() => setIsVisible((prev) => !prev)}
      {...otherProps}
    />
  );
}

export default forwardRef(PasswordInputComponent);
