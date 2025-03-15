import { createFactory } from "hono/factory";
import type { UsersSignUpContext } from "../__generated__/users/users.context";
import { usersSignUpBody } from "../__generated__/users/users.zod";
import { zValidator } from "../__generated__/validator";

const factory = createFactory();

export const usersSignUpHandlers = factory.createHandlers(
  zValidator("json", usersSignUpBody),
  async (c: UsersSignUpContext) => {},
);
