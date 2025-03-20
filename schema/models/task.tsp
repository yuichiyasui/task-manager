model Task {
  @doc("タスクID")
  id: string;

  @doc("タスク名")
  @minLength(1)
  @maxLength(100)
  title: string;

  @doc("進行状態")
  status: TaskStatus;
}

enum TaskStatus {
  @doc("未着手")
  todo,

  @doc("進行中")
  inProgress,

  @doc("完了")
  done,
}
