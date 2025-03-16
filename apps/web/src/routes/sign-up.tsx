import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useNavigation } from "react-router";
import { z } from "zod";
import { usersSignUp } from "~/__generated__/users/users";
import { Button } from "~/components/button";
import { FieldError } from "~/components/field-error";
import { TextField } from "~/components/text-field";
import { classnames } from "~/utils/classnames";
import { getMetaTitle } from "~/utils/meta";

export function meta() {
  return [getMetaTitle({ pageTitle: "ユーザー登録" })];
}

const formSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "メールアドレスを入力してください" })
      .email({ message: "メールアドレスの形式で入力してください" }),
    password: z
      .string()
      .min(8, { message: "8文字以上で入力してください" })
      .max(32, { message: "32文字以内で入力してください" })
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/, {
        message: "英大文字、英小文字、数字の3種類を含めてください",
      }),
    passwordConfirmation: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirmation;
    },
    { message: "パスワードが一致しません", path: ["passwordConfirmation"] },
  );

const fieldId = {
  email: "email",
  password: "password",
  passwordConfirmation: "passwordConfirmation",
} as const;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const navigate = useNavigate();
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  const submit = handleSubmit(async (data) => {
    try {
      await usersSignUp({
        email: data.email,
        password: data.password,
      });
      await navigate("/sign-in");
    } catch (error) {
      // TODO: エラーハンドリング
    }
  });

  const emailFieldErrorId = `${fieldId.email}-error`;
  const passwordFieldErrorId = `${fieldId.password}-error`;
  const passwordConfirmationFieldErrorId = `${fieldId.passwordConfirmation}-error`;

  return (
    <main className="p-4">
      <h1 className={classnames("text-lg", "font-bold", "mb-4")}>
        ユーザー登録
      </h1>
      <form className={classnames("grid", "gap-2", "w-96")}>
        <div>
          <div>
            <label htmlFor={fieldId.email}>メールアドレス</label>
          </div>
          <div className={classnames("grid", "gap-y-2")}>
            <TextField
              id={fieldId.email}
              type="email"
              aria-invalid={!!errors.email}
              aria-describedby={emailFieldErrorId}
              aria-required
              {...register("email")}
            />
            {errors.email?.message && (
              <FieldError
                id={emailFieldErrorId}
                message={errors.email.message}
              />
            )}
          </div>
        </div>
        <div>
          <div>
            <label htmlFor={fieldId.password}>パスワード</label>
          </div>
          <div className={classnames("grid", "gap-y-2")}>
            <TextField
              id={fieldId.password}
              type="password"
              aria-invalid={!!errors.password}
              aria-describedby={passwordFieldErrorId}
              aria-required
              {...register("password")}
            />
            {errors.password?.message && (
              <FieldError
                id={passwordFieldErrorId}
                message={errors.password.message}
              />
            )}
          </div>
        </div>
        <div>
          <div>
            <label htmlFor={fieldId.passwordConfirmation}>
              パスワード（確認）
            </label>
          </div>
          <div className={classnames("grid", "gap-y-2")}>
            <TextField
              id={fieldId.passwordConfirmation}
              type="password"
              aria-invalid={!!errors.passwordConfirmation}
              aria-describedby={passwordConfirmationFieldErrorId}
              aria-required
              {...register("passwordConfirmation")}
            />
            {errors.passwordConfirmation?.message && (
              <FieldError
                id={passwordConfirmationFieldErrorId}
                message={errors.passwordConfirmation.message}
              />
            )}
          </div>
        </div>
        <div className="mt-4">
          <Button>
            <button
              type="button"
              disabled={isSubmitting || isNavigating}
              onClick={submit}
            >
              登録
            </button>
          </Button>
        </div>
      </form>
    </main>
  );
}
