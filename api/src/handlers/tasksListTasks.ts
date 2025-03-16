import { createFactory } from "hono/factory";
import type { TasksListTasksContext } from "../__generated__/tasks/tasks.context";
import {
  tasksListTasksQueryParams,
  tasksListTasksResponse,
} from "../__generated__/tasks/tasks.zod";
import { zValidator } from "../__generated__/validator";

const factory = createFactory();

export const tasksListTasksHandlers = factory.createHandlers(
  zValidator("query", tasksListTasksQueryParams),
  zValidator("response", tasksListTasksResponse),
  async (c: TasksListTasksContext) => {},
);
