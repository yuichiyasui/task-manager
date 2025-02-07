import { serve } from "@hono/node-server";
import app from "./__generated__/routes";

const port = 8080;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
