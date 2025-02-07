import { createFactory } from "hono/factory";
import { zValidator } from "./task-api.validator";
import type { TasksListTasksContext } from "./task-api.context";
import {
  tasksListTasksQueryParams,
  tasksListTasksResponse,
} from "./task-api.zod";

const factory = createFactory();
export const tasksListTasksHandlers = factory.createHandlers(
  zValidator("query", tasksListTasksQueryParams),
  zValidator("response", tasksListTasksResponse),
  async (c: TasksListTasksContext) => {},
);
