import { getMetaTitle } from "~/utils/meta";

export function meta() {
  return [getMetaTitle({ pageTitle: "タスク詳細" })];
}

export default function Page() {
  return (
    <main>
      <h1>タスク詳細</h1>
    </main>
  );
}
