import { z } from "zod";

const emailRules = z.string().email();

export class Email {
  private _value: string;

  constructor(value: string) {
    this._value = value;
  }

  public isValid() {
    return emailRules.safeParse(this._value).success;
  }
}
