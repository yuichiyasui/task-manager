import { serve } from "@hono/node-server";
import { PrismaClient } from "@prisma/client";
import { Hono } from "hono";
import routes from "./__generated__/routes";
import type { Env } from "./interface/env";
import { UserRepository } from "./repository/user-repository";

const app = new Hono<Env>();
const prisma = new PrismaClient();

app.use(async (c, next) => {
  c.set("userRepository", new UserRepository(prisma));
  await next();
});

app.route("/", routes);

const port = 8080;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
