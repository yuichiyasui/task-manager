import { NavLink, Outlet, redirect } from "react-router";
import { getSelf } from "~/__generated__/users/users";
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
  console.log("AuthLayout", _.loaderData.data);
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
