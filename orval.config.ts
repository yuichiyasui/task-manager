import { defineConfig } from "orval";

export default defineConfig({
  taskApiServer: {
    input: "schema/tsp-output/@typespec/openapi3/openapi.yaml",
    output: {
      client: "hono",
      clean: true,
      schemas: "api/src/__generated__/models",
      target: "api/src/__generated__/task-api.ts",
      biome: true,
      tsconfig: "api/tsconfig.json",
      mode: "tags-split",
      override: {
        hono: {
          compositeRoute: "api/src/__generated__/routes.ts",
          handlers: "api/src/handlers",
          validatorOutputPath: "api/src/__generated__/validator.ts",
        },
      },
    },
  },
});
