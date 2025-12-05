import axios from "axios";
import type { LoginResponse } from "../types/auth.types";

const API_URL = "http://localhost:8080/api/auth";

// 1. Login Call
export const login = (usernameOrEmail: string, password: string) => {
  return axios.post<LoginResponse>(API_URL + "/login", {
    usernameOrEmail,
    password,
  });
};

// 2. Store Tokens
export const saveTokens = (data: LoginResponse) => {
  localStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);
};

// 3. Get Access Token
export const getAccessToken = (): string | null => {
  return localStorage.getItem("accessToken");
};

// 4. Logout
export const logout = () => {
  localStorage.clear();
};

// 5. Check if Logged In
export const isLoggedIn = (): boolean => {
  return localStorage.getItem("accessToken") !== null;
};
