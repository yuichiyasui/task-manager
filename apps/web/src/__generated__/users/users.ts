import { customFetch } from "../../libs/orval";
/**
 * Generated by orval v7.5.0 🍺
 * Do not edit manually.
 * Task API
 * OpenAPI spec version: 0.0.0
 */
import type { SignInRequest, SignUpRequest, User } from "../api.schemas";

export type getSelfResponse = {
  data: User | void;
  status: number;
  headers: Headers;
};

export const getGetSelfUrl = () => {
  return `/users/self`;
};

export const getSelf = async (
  options?: RequestInit,
): Promise<getSelfResponse> => {
  return customFetch<getSelfResponse>(getGetSelfUrl(), {
    ...options,
    method: "GET",
  });
};

export type signInResponse = {
  data: void | void;
  status: number;
  headers: Headers;
};

export const getSignInUrl = () => {
  return `/users/sign-in`;
};

export const signIn = async (
  signInRequest: SignInRequest,
  options?: RequestInit,
): Promise<signInResponse> => {
  return customFetch<signInResponse>(getSignInUrl(), {
    ...options,
    method: "POST",
    headers: { "Content-Type": "application/json", ...options?.headers },
    body: JSON.stringify(signInRequest),
  });
};

export type signUpResponse = {
  data: void | void;
  status: number;
  headers: Headers;
};

export const getSignUpUrl = () => {
  return `/users/sign-up`;
};

export const signUp = async (
  signUpRequest: SignUpRequest,
  options?: RequestInit,
): Promise<signUpResponse> => {
  return customFetch<signUpResponse>(getSignUpUrl(), {
    ...options,
    method: "POST",
    headers: { "Content-Type": "application/json", ...options?.headers },
    body: JSON.stringify(signUpRequest),
  });
};
