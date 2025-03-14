import { NavLink } from "react-router";

export default function Page() {
  return (
    <main>
      <h1>Tasks</h1>
      <div>
        <NavLink to="/tasks/new">Create Task</NavLink>
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
