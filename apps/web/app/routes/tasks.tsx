import { NavLink } from "react-router";
import { getMetaTitle } from "~/utils/meta";

export function meta() {
  return [getMetaTitle({ pageTitle: "タスク一覧" })];
}

export default function Page() {
  return (
    <main>
      <h1>タスク一覧</h1>
      <div>
        <NavLink to="/tasks/new">作成</NavLink>
      </div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Task 1</td>
            <td>
              <NavLink to="/tasks/1">Detail</NavLink>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Task 2</td>
            <td>
              <NavLink to="/tasks/2">Detail</NavLink>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
