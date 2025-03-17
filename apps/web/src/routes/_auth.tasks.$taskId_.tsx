import { Breadcrumb } from "~/components/breadcrumb";
import { getMetaTitle } from "~/utils/meta";
import type { Route } from "./+types/tasks_.$taskId";

export function meta() {
  return [getMetaTitle({ pageTitle: "タスク詳細" })];
}

export default function Page({ params }: Route.MetaArgs) {
  return (
    <main>
      <div className="mb-2">
        <Breadcrumb
          links={[
            { label: "TOP", href: "/" },
            { label: "タスク一覧", href: "/tasks" },
            { label: "タスク詳細", href: `/tasks/${params.taskId}` },
          ]}
        />
      </div>
      <h1>タスク詳細</h1>
    </main>
  );
}
