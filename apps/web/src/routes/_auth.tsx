import { NavLink, Outlet, redirect } from "react-router";
import { classnames } from "~/utils/classnames";
import type { Route } from "./+types/_auth";

export async function clientLoader() {
  // ユーザー情報を読み込み

  return redirect("/sign-in");
}

export default function AuthLayout(args: Route.ComponentProps) {
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
        <NavLink to="/" className={classnames("text-xl", "font-bold")}>
          Task Manager
        </NavLink>
      </header>
      <main className={classnames("py-4", "px-8")}>
        <Outlet />
      </main>
    </div>
  );
}
