import React, {
  cloneElement,
  Component,
  type ComponentPropsWithoutRef,
  type ReactElement,
} from "react";
import { classnames } from "~/utils/classnames";

type Props = {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  children: ReactElement<
    ComponentPropsWithoutRef<"button"> | ComponentPropsWithoutRef<"a">
  >;
};

export const Button = ({
  variant = "primary",
  size = "md",
  children,
}: Props) => {
  const baseStyles = [
    "inline-flex",
    "items-center",
    "justify-center",
    "font-medium",
    "rounded-md",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-offset-2",
    "transition-all",
  ];

  const variantStyles = {
    primary: [
      "bg-blue-600",
      "text-white",
      "hover:bg-blue-700",
      "focus:ring-blue-500",
    ],
    secondary: [
      "bg-gray-600",
      "text-white",
      "hover:bg-gray-700",
      "focus:ring-gray-500",
    ],
    danger: [
      "bg-red-600",
      "text-white",
      "hover:bg-red-700",
      "focus:ring-red-500",
    ],
  };

  const sizeStyles = {
    sm: ["px-3", "py-1.5", "text-sm"],
    md: ["px-4", "py-2", "text-base"],
    lg: ["px-6", "py-3", "text-lg"],
  };

  return cloneElement(children, {
    className: classnames(
      ...baseStyles,
      ...variantStyles[variant],
      ...sizeStyles[size],
      children.props.className,
    ),
  });
};
