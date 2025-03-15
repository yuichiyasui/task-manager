import { NavLink } from "react-router";
import { Breadcrumb } from "~/components/breadcrumb";
import { Button } from "~/components/button";
import { Table } from "~/components/table";
import { TextLink } from "~/components/text-link";
import { classnames } from "~/utils/classnames";
import { getMetaTitle } from "~/utils/meta";

export function meta() {
  return [getMetaTitle({ pageTitle: "タスク一覧" })];
}

const data = [
  { id: "1", title: "Task 1" },
  { id: "2", title: "Task 2" },
];

export default function Page() {
  return (
    <main>
      <div className="mb-2">
        <Breadcrumb
          links={[
            { label: "TOP", href: "/" },
            { label: "タスク一覧", href: "/tasks" },
          ]}
        />
      </div>
      <h1 className={classnames("text-2xl", "font-bold", "mb-4")}>
        タスク一覧
      </h1>
      <div className="mb-4">
        <Button>
          <NavLink to="/tasks/new">作成</NavLink>
        </Button>
      </div>
      <Table>
        <Table.Header columns={["No", "Title", "Actions"]} />
        <Table.Body
          rows={data.map((task, index) => ({
            cells: [
              index + 1,
              <TextLink key={task.id}>
                <NavLink to={`/tasks/${task.id}`}>{task.title}</NavLink>
              </TextLink>,
              <Button key={task.id} variant="danger" size="sm">
                <button type="button">削除</button>
              </Button>,
            ],
          }))}
        />
      </Table>
    </main>
  );
}
