class User {
  private readonly _id: string;
  private readonly _email: string;
  private readonly _password: string;

  constructor(args: { id: string; email: string; password: string }) {
    this._id = args.id;
    this._email = args.email;
    this._password = args.password;
  }

  get id(): string {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }
}
