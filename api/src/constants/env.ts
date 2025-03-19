export const envVars = {
  cookieSecretKey: process.env.COOKIE_SECRET_KEY ?? "",
  jwtSecretKey: process.env.JWT_SECRET_KEY ?? "",
} as const;
