import { NavLink } from "react-router";
import type { Route } from "./+types/_index";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Task Manager" },
    { name: "description", content: "タスク管理ツールです。" },
  ];
}

export default function Page() {
  return (
    <main>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/tasks">Tasks</NavLink>
          </li>
        </ul>
      </nav>
    </main>
  );
}
