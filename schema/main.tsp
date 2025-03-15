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
@tag("Tasks")
namespace Tasks {
  @get
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
@tag("Users")
namespace Users {
  @route("/sign-up")
  @post
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
  op signIn(
    @body
    req: SignInRequest,
  ): {
    @statusCode statusCode: 200;
  } | {
    @statusCode statusCode: 400;
  };
}
