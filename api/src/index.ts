import { serve } from "@hono/node-server";
import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { jwt } from "hono/jwt";
import routes from "./__generated__/routes";
import { cookieKey } from "./constants/cookie";
import { envVars } from "./constants/env";
import type { Env } from "./interface/env";
import { UserRepository } from "./repository/user-repository";

const app = new Hono<Env>();
const prisma = new PrismaClient();

app.use(async (c, next) => {
  c.set("userRepository", new UserRepository(prisma));
  await next();
});

app.use(
  "*",
  cors({
    origin: [process.env.WEB_APP_ORIGIN as string],
    allowHeaders: ["Origin", "Content-Type"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    credentials: true,
    maxAge: 60 * 60 * 12, // 12 hours
  }),
);

const authRoutes = ["/users/self", "/users/sign-out", "/tasks"];
for (const route of authRoutes) {
  app.use(
    route,
    jwt({
      secret: envVars.jwtSecretKey,
      cookie: {
        key: cookieKey.token,
        secret: envVars.cookieSecretKey,
      },
    }),
  );
}

app.route("/", routes);

const port = 8080;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
