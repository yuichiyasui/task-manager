import "@typespec/http";
import "@typespec/rest";
import "@typespec/openapi3";

import "./models/task.tsp";

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
