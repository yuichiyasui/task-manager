import type { PrismaClient } from "@prisma/client";
import { User } from "../domain/user";
import type { Email } from "../domain/value/email";
import type { IUserRepository } from "../interface/user-repository";

export class UserRepository implements IUserRepository {
  private readonly client: PrismaClient;

  constructor(client: PrismaClient) {
    this.client = client;
  }

  public async findByEmail(email: Email): Promise<User | null> {
    const user = await this.client.users.findUnique({
      where: { email: email.value },
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

  public async save(user: User): Promise<void> {
    await this.client.users.create({
      data: {
        id: user.id,
        email: user.email,
        password: user.password,
      },
    });
  }
}
