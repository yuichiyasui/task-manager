import { createFactory } from "hono/factory";
import type { UsersSignInContext } from "../__generated__/users/users.context";
import { usersSignInBody } from "../__generated__/users/users.zod";
import { zValidator } from "../__generated__/validator";

const factory = createFactory();

export const usersSignInHandlers = factory.createHandlers(
  zValidator("json", usersSignInBody),
  async (c: UsersSignInContext) => {},
);
