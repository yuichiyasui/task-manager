/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Task API
 * OpenAPI spec version: 0.0.0
 */
export interface SignInRequest {
  /**
   * メールアドレス
   * @minLength 1
   */
  email: string;
  /**
   * パスワード
   * @minLength 1
   */
  password: string;
}

export interface SignUpRequest {
  /**
   * メールアドレス
   * @minLength 1
   */
  email: string;
  /**
   * パスワード
   * @minLength 8
   */
  password: string;
}

export interface Task {
  /** タスクID */
  id: string;
  /**
   * タスク名
   * @minLength 1
   * @maxLength 100
   */
  title: string;
  /** 進行状態 */
  status: TaskStatus;
}

export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TaskStatus = {
  todo: "todo",
  inProgress: "inProgress",
  done: "done",
} as const;

export type TasksListTasksParams = {
  /**
   * 取得上限件数
   */
  limit: number;
  /**
   * 取得開始位置
   */
  offset: number;
};

export type TasksListTasks200 = {
  tasks: Task[];
  total: number;
};
