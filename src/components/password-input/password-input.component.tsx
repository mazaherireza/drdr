"use client";

import {
  type ComponentProps,
  type ForwardedRef,
  forwardRef,
  type ReactNode,
  useState,
} from "react";

import NormalInputComponent from "@/components/normal-input/normal-input.component";

import EyeFill from "@/components/icons/eye-fill.icon";
import EyeCloseFill from "@/components/icons/eye-close-fill.icon";

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
