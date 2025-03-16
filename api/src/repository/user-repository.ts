import type { PrismaClient } from "@prisma/client";
import { User } from "../domain/user";
import type { IUserRepository } from "../interface/user-repository";

export class UserRepository implements IUserRepository {
  private readonly client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.client.users.findUnique({
      where: { email },
    });

    if (user == null) {
      return null;
    }

    return new User({
      id: user.id,
      email: user.email,
      password: user.password,
    });
  }

  async save(user: User): Promise<void> {
    this.client.users.create({
      data: {
        id: user.id,
        email: user.email,
        password: user.password,
      },
    });
  }
}
