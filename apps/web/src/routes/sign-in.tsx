import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import { z } from "zod";
import { signIn } from "~/__generated__/users/users";
import { Button } from "~/components/button";
import { FieldError } from "~/components/field-error";
import { RootError } from "~/components/root-error";
import { TextField } from "~/components/text-field";
import { TextLink } from "~/components/text-link";
import { classnames } from "~/utils/classnames";
import { getMetaTitle } from "~/utils/meta";

export function meta() {
  return [getMetaTitle({ pageTitle: "ログイン" })];
}

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "メールアドレスを入力してください" })
    .email({ message: "メールアドレスの形式で入力してください" }),
  password: z.string().min(1, { message: "パスワードを入力してください" }),
});

const fieldId = {
  email: "email",
  password: "password",
} as const;

export default function Page() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const submit = handleSubmit(async (data) => {
    try {
      await signIn({
        email: data.email,
        password: data.password,
      });
      await navigate("/");
    } catch (error) {
      setError("root", { message: "ログインに失敗しました" });
    }
  });

  const emailFieldErrorId = `${fieldId.email}-error`;
  const passwordFieldErrorId = `${fieldId.password}-error`;

  return (
    <main className={classnames("grid", "place-items-center", "min-h-lvh")}>
      <div
        className={classnames(
          "bg-white",
          "border",
          "border-gray-200",
          "p-6",
          "w-96",
        )}
      >
        <h1 className={classnames("text-2xl", "font-bold", "mb-4")}>
          ログイン
        </h1>
        <form>
          <div className={classnames("mb-4")}>
            <div className={classnames("mb-1")}>
              <label htmlFor={fieldId.email} className={classnames("text-sm")}>
                メールアドレス
              </label>
            </div>
            <div className={classnames("grid", "gap-y-2")}>
              <TextField
                id={fieldId.email}
                type="email"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={emailFieldErrorId}
                aria-required
                {...register("email")}
                className={classnames("w-full")}
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
            <div className={classnames("mb-1")}>
              <label
                htmlFor={fieldId.password}
                className={classnames("text-sm")}
              >
                パスワード
              </label>
            </div>
            <div className={classnames("grid", "gap-y-2")}>
              <TextField
                id={fieldId.password}
                type="password"
                autoComplete="current-password"
                aria-invalid={!!errors.password}
                aria-describedby={passwordFieldErrorId}
                aria-required
                {...register("password")}
                className={classnames("w-full")}
              />
              {errors.password?.message && (
                <FieldError
                  id={passwordFieldErrorId}
                  message={errors.password.message}
                />
              )}
            </div>
          </div>
          <div className={classnames("mt-4", "flex", "justify-center")}>
            <Button>
              <button type="button" disabled={isSubmitting} onClick={submit}>
                ログイン
              </button>
            </Button>
          </div>
          <div className={classnames("mt-2", "empty:mt-0", "text-center")}>
            {errors.root?.message && (
              <RootError message={errors.root.message} />
            )}
          </div>
        </form>
        <div className={classnames("mt-4", "text-center")}>
          <TextLink>
            <NavLink to="/sign-up">ユーザー登録</NavLink>
          </TextLink>
        </div>
      </div>
    </main>
  );
}
