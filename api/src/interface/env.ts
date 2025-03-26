import type { JwtVariables } from "hono/jwt";
import type { JwtPayload } from "./auth";
import type { IUserRepository } from "./user-repository";

export type Env = {
  Variables: {
    userRepository: IUserRepository;
  } & JwtVariables<JwtPayload>;
};
