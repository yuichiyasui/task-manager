import type { PrismaClient } from "@prisma/client";

export interface IUserRepository {
  readonly client: PrismaClient;

  findByEmail(email: string): Promise<User | null>;
  save(user: User): Promise<void>;
}
