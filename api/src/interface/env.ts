import type { IUserRepository } from "./user-repository";

export type Env = {
  Variables: {
    userRepository: IUserRepository;
  };
};
