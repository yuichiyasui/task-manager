import { defineConfig } from "orval";

export default defineConfig({
  taskApiServer: {
    input: "schema/tsp-output/@typespec/openapi3/openapi.yaml",
    output: {
      client: "hono",
      clean: true,
      schemas: "api/src/__generated__/models",
      target: "api/src/__generated__/task-api.ts",
    },
    hooks: {
      afterAllFilesWrite: ["pnpm format"],
    },
  },
});
