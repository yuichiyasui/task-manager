export type JwtPayload = {
  /** ユーザーID */
  sub: string;
  /** 有効期限 */
  exp: number;
};
