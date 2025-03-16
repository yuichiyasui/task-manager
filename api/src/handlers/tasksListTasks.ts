import { createFactory } from "hono/factory";
import {
  tasksListTasksQueryParams,
  tasksListTasksResponse,
} from "../__generated__/tasks/tasks.zod";
import { zValidator } from "../__generated__/validator";
import type { Env } from "../interface/env";

const factory = createFactory<Env>();

export const tasksListTasksHandlers = factory.createHandlers(
  zValidator("query", tasksListTasksQueryParams),
  zValidator("response", tasksListTasksResponse),
  async (c) => {
    c.get("userRepository");
  },
);
