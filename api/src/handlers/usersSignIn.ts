import { setSignedCookie } from "hono/cookie";
import { createFactory } from "hono/factory";
import { sign } from "hono/jwt";
import { AlgorithmTypes } from "hono/utils/jwt/jwa";
import { usersSignInBody } from "../__generated__/users/users.zod";
import { zValidator } from "../__generated__/validator";
import { cookieKey } from "../constants/cookie";
import { envVars } from "../constants/env";
import { Email } from "../domain/value/email";
import { Password } from "../domain/value/password";
import type { Env } from "../interface/env";

const factory = createFactory<Env>();

export const usersSignInHandlers = factory.createHandlers(
  zValidator("json", usersSignInBody),
  async (c) => {
    const body = c.req.valid("json");

    const email = new Email(body.email);
    const password = new Password(body.password);

    const userRepository = c.get("userRepository");
    const user = await userRepository.findByEmail(email);
    if (!user) {
      return c.text("Error", 400);
    }

    const isOk = await password.equals(user.password);
    if (!isOk) {
      return c.text("Error", 400);
    }

    const token = await createJwtToken();

    await setSignedCookie(c, cookieKey.token, token, envVars.cookieSecretKey, {
      path: "/",
      maxAge: 60 * 30, // 30分
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return c.text("OK", 200);
  },
);

const createJwtToken = async () => {
  const token = await sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 30, // 30分
    },
    envVars.jwtSecretKey,
    AlgorithmTypes.HS256,
  );

  return token;
};
