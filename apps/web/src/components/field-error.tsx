import { classnames } from "~/utils/classnames";

type Props = {
  id: string;
  message: string;
};

export const FieldError = ({ id, message }: Props) => {
  return (
    <p id={id} role="alert" className={classnames("text-sm", "text-red-500")}>
      {message}
    </p>
  );
};
