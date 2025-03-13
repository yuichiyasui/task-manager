import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Task Manager" },
    { name: "description", content: "タスク管理ツールです。" },
  ];
}

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
