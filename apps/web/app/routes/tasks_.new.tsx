import { Breadcrumb } from "~/components/breadcrumb";
import { getMetaTitle } from "~/utils/meta";

export function meta() {
  return [getMetaTitle({ pageTitle: "タスクの作成" })];
}

export default function Page() {
  return (
    <main>
      <div className="mb-2">
        <Breadcrumb
          links={[
            { label: "TOP", href: "/" },
            { label: "タスク一覧", href: "/tasks" },
            { label: "タスクの作成", href: "/tasks/new" },
          ]}
        />
      </div>
      <h1>タスクの作成</h1>
    </main>
  );
}
