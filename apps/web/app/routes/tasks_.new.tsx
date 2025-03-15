import { getMetaTitle } from "~/utils/meta";

export function meta() {
  return [getMetaTitle({ pageTitle: "タスクの作成" })];
}

export default function Page() {
  return (
    <main>
      <h1>タスクの作成</h1>
    </main>
  );
}
