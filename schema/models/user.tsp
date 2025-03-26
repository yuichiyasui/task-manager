model User {
  email: string;
}

model SignUpRequest {
  @doc("メールアドレス")
  @minLength(1)
  email: string;

  @doc("パスワード")
  @minLength(8)
  password: string;
}

model SignInRequest {
  @doc("メールアドレス")
  @minLength(1)
  email: string;

  @doc("パスワード")
  @minLength(1)
  password: string;
}
