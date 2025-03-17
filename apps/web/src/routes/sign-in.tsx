import { NavLink, useNavigate } from "react-router";
import { Button } from "~/components/button";
import { TextField } from "~/components/text-field";
import { TextLink } from "~/components/text-link";
import { classnames } from "~/utils/classnames";
import { getMetaTitle } from "~/utils/meta";

export function meta() {
  return [getMetaTitle({ pageTitle: "ログイン" })];
}

export default function Page() {
  const navigate = useNavigate();

  const signIn = async () => {
    // TODO: ログイン処理を実装
    await navigate("/");
  };

  return (
    <main className={classnames("grid", "place-items-center", "min-h-lvh")}>
      <div
        className={classnames(
          "bg-white",
          "border",
          "border-gray-200",
          "p-4",
          "w-96",
        )}
      >
        <h1 className={classnames("text-2xl", "font-bold", "mb-4")}>
          ログイン
        </h1>
        <form>
          <div className={classnames("mb-4")}>
            <div className={classnames("mb-1")}>
              <label htmlFor="email" className={classnames("text-sm")}>
                メールアドレス
              </label>
            </div>
            <TextField
              id="email"
              type="email"
              className={classnames("w-full")}
            />
          </div>
          <div>
            <div className={classnames("mb-1")}>
              <label htmlFor="password" className={classnames("text-sm")}>
                パスワード
              </label>
            </div>
            <TextField
              id="password"
              type="password"
              className={classnames("w-full")}
            />
          </div>
          <div className={classnames("mt-4", "flex", "justify-center")}>
            <Button>
              <button type="button" onClick={signIn}>
                ログイン
              </button>
            </Button>
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
