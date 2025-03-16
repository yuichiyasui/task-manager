import { createFactory } from "hono/factory";
import { usersSignUpBody } from "../__generated__/users/users.zod";
import { zValidator } from "../__generated__/validator";
import { User } from "../domain/user";
import { Email } from "../domain/value/email";
import { Password } from "../domain/value/password";
import type { Env } from "../interface/env";

const factory = createFactory<Env>();

export const usersSignUpHandlers = factory.createHandlers(
  zValidator("json", usersSignUpBody),
  async (c) => {
    const body = c.req.valid("json");

    const email = new Email(body.email);
    const password = new Password(body.password);
    if (!email.isValid() || !password.isValid()) {
      return c.status(400);
    }

    const userRepository = c.get("userRepository");
    const user = await userRepository.findByEmail(body.email);
    if (user) {
      return c.status(400);
    }

    const hashedPassword = await password.getHashedValue();
    const newUser = new User({
      id: null,
      email: body.email,
      password: hashedPassword,
    });

    await userRepository.save(newUser);

    return c.status(201);
  },
);
