import { createFactory } from "hono/factory";
import type { z } from "zod";
import { usersGetSelfResponse } from "../__generated__/users/users.zod";
import { zValidator } from "../__generated__/validator";
import type { Env } from "../interface/env";

const factory = createFactory<Env>();

type Response = z.infer<typeof usersGetSelfResponse>;

export const usersGetSelfHandlers = factory.createHandlers(
  zValidator("response", usersGetSelfResponse),
  async (c) => {
    const payload = c.get("jwtPayload");
    const userRepository = c.get("userRepository");

    const user = await userRepository.findById(payload.sub);
    if (!user) {
      return c.text("Error", 400);
    }

    return c.json({
      email: user?.email,
    } satisfies Response);
  },
);
