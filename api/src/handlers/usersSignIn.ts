import { createFactory } from "hono/factory";
import { usersSignInBody } from "../__generated__/users/users.zod";
import { zValidator } from "../__generated__/validator";
import type { Env } from "../interface/env";

const factory = createFactory<Env>();

export const usersSignInHandlers = factory.createHandlers(
  zValidator("json", usersSignInBody),
  async (c) => {},
);
