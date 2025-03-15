export const classnames = (...args: (string | boolean | undefined)[]) => {
  return args.filter(Boolean).join(" ");
};
