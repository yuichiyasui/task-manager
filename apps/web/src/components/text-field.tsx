import type { ComponentPropsWithoutRef } from "react";
import { classnames } from "~/utils/classnames";

type InputProps = ComponentPropsWithoutRef<"input">;

type Props = Omit<InputProps, "type"> & {
  type: Extract<InputProps["type"], "text" | "email" | "password">;
};

export const TextField = ({ className, ...props }: Props) => {
  return (
    <input
      {...props}
      className={classnames(
        className,
        "aria-invalid:border-red-500",
        "aria-invalid:focus:ring-red-500/50",
      )}
    />
  );
};
