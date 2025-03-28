import { customFetch } from "../../libs/orval";
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Task API
 * OpenAPI spec version: 0.0.0
 */
import type { ListTasks200, ListTasksParams } from "../api.schemas";

export type listTasksResponse = {
  data: ListTasks200;
  status: number;
  headers: Headers;
};

export const getListTasksUrl = (params: ListTasksParams) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? "null" : value.toString());
    }
  });

  return normalizedParams.size
    ? `/tasks?${normalizedParams.toString()}`
    : `/tasks`;
};

export const listTasks = async (
  params: ListTasksParams,
  options?: RequestInit,
): Promise<listTasksResponse> => {
  return customFetch<listTasksResponse>(getListTasksUrl(params), {
    ...options,
    method: "GET",
  });
};
