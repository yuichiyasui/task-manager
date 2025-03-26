import type { User } from "../domain/user";
import type { Email } from "../domain/value/email";

export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: Email): Promise<User | null>;
  save(user: User): Promise<void>;
}
