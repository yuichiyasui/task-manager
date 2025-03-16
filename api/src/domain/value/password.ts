import * as bcrypt from "bcrypt";
import { z } from "zod";

const passwordRules = z
  .string()
  .min(8)
  .max(32)
  .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/); // 英大文字、英小文字、数字で構成される

export class Password {
  private _value: string;

  constructor(value: string) {
    this._value = value;
  }

  public isValid() {
    return passwordRules.safeParse(this._value).success;
  }

  public async getHashedValue() {
    return await bcrypt.hash(this._value, 10);
  }

  public async equals(hashedPassword: string) {
    return await bcrypt.compare(this._value, hashedPassword);
  }
}
