import { ulid } from "ulid";

export class User {
  private readonly _id: string;
  private readonly _email: string;
  private readonly _password: string;

  constructor(args: { id: string | null; email: string; password: string }) {
    this._id = args.id === null ? ulid() : args.id;
    this._email = args.email;
    this._password = args.password;
  }

  get id() {
    return this._id;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }
}
