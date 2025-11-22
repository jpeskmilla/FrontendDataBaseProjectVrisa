// src/shared/api/http.js

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  // Manejo automático de errores
  if (!response.ok) {
    let message = "Error en el servidor";
    try {
      const errorData = await response.json();
      message = errorData.message || message;
    } catch (_) {}

    throw new Error(message);
  }

  // Intentamos parsear JSON, si no tiene body, devolvemos null
  try {
    return await response.json();
  } catch (_) {
    return null;
  }
}
