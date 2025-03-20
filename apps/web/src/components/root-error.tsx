import { classnames } from "~/utils/classnames";

type Props = {
  message: string;
};

export const RootError = ({ message }: Props) => {
  return (
    <p role="alert" className={classnames("text-sm", "text-red-500")}>
      {message}
    </p>
  );
};
