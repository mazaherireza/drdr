"use client";

import {
   type ComponentProps,
   type ForwardedRef,
  forwardRef,
   type ReactElement,
  useState,
} from "react";

import NormalInputComponent from "@/components/normal-input/normal-input.component";

type Props = ComponentProps<typeof NormalInputComponent>;

function PasswordInputComponent(
  { ...otherProps }: Props,
  ref: ForwardedRef<HTMLInputElement>,
): ReactElement {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <NormalInputComponent
      ref={ref}
      type={isVisible ? "text" : "password"}
      prefixIcon={<MingcuteKey2Line />}
      suffixIcon={isVisible ? <MingcuteEyeCloseLine /> : <MingcuteEye2Line />}
      onSuffixClick={() => setIsVisible((old) => !old)}
      {...otherProps}
    />
  );
}

export default forwardRef(PasswordInputComponent);