import {
  cloneElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
} from "react";
import { classnames } from "~/utils/classnames";

type Props = {
  children: ReactElement<ComponentPropsWithoutRef<"a">>;
};

export const TextLink = ({ children }: Props) => {
  return cloneElement(children, {
    className: classnames(
      "text-blue-600",
      "hover:underline",
      children.props.className,
    ),
  });
};
