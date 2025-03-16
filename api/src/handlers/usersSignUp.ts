import { createFactory } from "hono/factory";
import { usersSignUpBody } from "../__generated__/users/users.zod";
import { zValidator } from "../__generated__/validator";
import type { Env } from "../interface/env";

const factory = createFactory<Env>();

export const usersSignUpHandlers = factory.createHandlers(
  zValidator("json", usersSignUpBody),
  async (c) => {},
);
