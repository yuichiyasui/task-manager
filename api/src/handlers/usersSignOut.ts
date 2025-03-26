import { deleteCookie } from "hono/cookie";
import { createFactory } from "hono/factory";
import type { UsersSignOutContext } from "../__generated__/users/users.context";
import {} from "../__generated__/users/users.zod";
import { cookieKey } from "../constants/cookie";

const factory = createFactory();

export const usersSignOutHandlers = factory.createHandlers(
  async (c: UsersSignOutContext) => {
    deleteCookie(c, cookieKey.token);
    return c.text("OK", 200);
  },
);
