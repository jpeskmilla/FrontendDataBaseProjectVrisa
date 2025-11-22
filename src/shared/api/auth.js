// src/shared/api/auth.js
import { apiFetch } from "./http";

export function login(email, password) {
  return apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export function register(userData) {
  return apiFetch("/auth/register", {
    method: "POST",
    body: JSON.stringify(userData),
  });
}

export function logout() {
  return apiFetch("/auth/logout", { method: "POST" });
}
