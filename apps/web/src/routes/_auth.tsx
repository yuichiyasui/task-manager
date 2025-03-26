import { NavLink, Outlet, redirect, useNavigate } from "react-router";
import { getSelf, signOut } from "~/__generated__/users/users";
import { TextLink } from "~/components/text-link";
import { classnames } from "~/utils/classnames";
import type { Route } from "./+types/_auth";

export async function clientLoader(_: Route.ClientLoaderArgs) {
  try {
    return await getSelf();
  } catch (error) {
    return redirect("/sign-in");
  }
}

export default function AuthLayout(_: Route.ComponentProps) {
  const navigate = useNavigate();

  return (
    <div>
      <header
        className={classnames(
          "border-b",
          "border-b-gray-200",
          "py-4",
          "px-8",
          "bg-white",
        )}
      >
        <div className={classnames("flex", "justify-between", "items-center")}>
          <NavLink to="/" className={classnames("text-xl", "font-bold")}>
            Task Manager
          </NavLink>
          <TextLink>
            <button
              type="button"
              onClick={async () => {
                await signOut();
                await navigate("/sign-in", { replace: true });
              }}
            >
              ログアウト
            </button>
          </TextLink>
        </div>
      </header>
      <main className={classnames("py-4", "px-8")}>
        <Outlet />
      </main>
    </div>
  );
}
