import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";

import "./models/task.tsp";
import "./models/user.tsp";

using TypeSpec.Http;
using TypeSpec.Rest;

@service({
  title: "Task API",
})
@server("http://localhost:8080")
namespace TaskApi;

@route("/tasks")
@tag("tasks")
namespace Tasks {
  @get
  @summary("タスク一覧を取得")
  op listTasks(
    @doc("取得上限件数")
    @query
    limit: int32,

    @doc("取得開始位置")
    @query
    offset: int32,
  ): {
    @statusCode statusCode: 200;
    @body result: {
      tasks: Task[];
      total: int16;
    };
  };
}

@route("/users")
@tag("users")
namespace Users {
  @route("/self")
  @get
  @summary("ログインユーザー自身の情報を取得")
  op getSelf(): {
    @statusCode statusCode: 200;
    @body user: User;
  } | {
    @statusCode
    statusCode: 401;
  };

  @route("/sign-up")
  @post
  @summary("ユーザー登録")
  op signUp(
    @body
    req: SignUpRequest,
  ): {
    @statusCode statusCode: 201;
  } | {
    @statusCode statusCode: 400;
  };

  @route("/sign-in")
  @post
  @summary("ログイン")
  op signIn(
    @body
    req: SignInRequest,
  ): {
    @statusCode statusCode: 200;
  } | {
    @statusCode statusCode: 400;
  };

  @route("/sign-out")
  @post
  @summary("ログアウト")
  op signOut(): {
    @statusCode statusCode: 200;
  } | {
    @statusCode statusCode: 401;
  };
}
