/**
 * Sanitiza un string eliminando caracteres peligrosos para SQL Injection
 * @param {string} input - El string a sanitizar
 * @returns {string} - El string sanitizado
 */
export function sanitizeInput(input) {
  if (typeof input !== "string") return "";

  // Eliminar caracteres peligrosos comunes de SQL Injection
  return input
    .replace(/['";\\]/g, "") // Eliminar comillas simples, dobles, punto y coma y backslashes
    .replace(/--/g, "") // Eliminar comentarios SQL
    .replace(/\/\*/g, "") // Eliminar inicio de comentarios multilínea
    .replace(/\*\//g, "") // Eliminar fin de comentarios multilínea
    .replace(/xp_/gi, "") // Eliminar procedimientos almacenados peligrosos
    .trim(); // Eliminar espacios al inicio y final
}

/**
 * Valida formato de email
 * @param {string} email - El email a validar
 * @returns {boolean} - true si es válido
 */
export function isValidEmail(email) {
  if (!email || typeof email !== "string") return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Valida que un string no esté vacío y tenga una longitud mínima
 * @param {string} input - El string a validar
 * @param {number} minLength - Longitud mínima (default: 1)
 * @param {number} maxLength - Longitud máxima (default: 255)
 * @returns {boolean} - true si es válido
 */
export function isValidLength(input, minLength = 1, maxLength = 255) {
  if (typeof input !== "string") return false;
  const trimmed = input.trim();
  return trimmed.length >= minLength && trimmed.length <= maxLength;
}

/**
 * Valida que un string no contenga caracteres peligrosos
 * @param {string} input - El string a validar
 * @returns {boolean} - true si no contiene caracteres peligrosos
 */
export function hasNoDangerousChars(input) {
  if (typeof input !== "string") return false;

  // Patrones peligrosos comunes de SQL Injection
  const dangerousPatterns = [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|SCRIPT)\b)/gi,
    /(\b(OR|AND)\s+\d+\s*=\s*\d+)/gi,
    /('|(\\')|(;)|(\\)|(\/\*)|(\*\/)|(--)|(\+)|(\|)|(\&)|(\%)|(\$)|(\@)|(\!)|(\?)|(\^)|(\[)|(\]))/g,
  ];

  return !dangerousPatterns.some((pattern) => pattern.test(input));
}

/**
 * Valida y sanitiza datos de login
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña del usuario
 * @returns {object} - { isValid: boolean, errors: string[], sanitized: { email, password } }
 */
export function validateLoginInputs(email, password) {
  const errors = [];
  const sanitized = {
    email: "",
    password: "",
  };

  // Validar email
  if (!email || !email.trim()) {
    errors.push("El correo electrónico es requerido");
  } else {
    sanitized.email = sanitizeInput(email.trim().toLowerCase());

    if (!isValidEmail(sanitized.email)) {
      errors.push("El formato del correo electrónico no es válido");
    }

    if (!isValidLength(sanitized.email, 5, 100)) {
      errors.push("El correo electrónico debe tener entre 5 y 100 caracteres");
    }
  }

  // Validar contraseña
  if (!password || !password.trim()) {
    errors.push("La contraseña es requerida");
  } else {
    sanitized.password = password.trim(); // No sanitizar contraseña para permitir caracteres especiales

    if (!isValidLength(sanitized.password, 6, 128)) {
      errors.push("La contraseña debe tener entre 6 y 128 caracteres");
    }

    // Validar que la contraseña no contenga patrones peligrosos (pero permitir caracteres especiales normales)
    if (!hasNoDangerousChars(sanitized.password)) {
      errors.push("La contraseña contiene caracteres no permitidos");
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitized,
  };
}
