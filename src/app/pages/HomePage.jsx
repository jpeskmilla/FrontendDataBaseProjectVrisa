// src/components/Desktop1/Desktop1.jsx
import React, { useState } from "react";
// reemplaza por rutas reales de tus assets exportados desde Figma
import Logo from "../../assets/vrisa_logo.png";
import homepage from "../../assets/homepage.jpg";
import "./homepage-styles.css";
import { LoginInput } from "../../shared/components/Input";
import { useNavigate } from "react-router-dom";
import { AuthAPI } from "../../shared/api";
import { validateLoginInputs } from "../../shared/utils/validators";

export default function Desktop1() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setError(""); // Limpiar error al escribir
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validar y sanitizar inputs antes de enviar
    const validation = validateLoginInputs(formData.email, formData.password);

    if (!validation.isValid) {
      setError(validation.errors.join(". "));
      return;
    }

    setIsLoading(true);

    try {
      // Usar los datos sanitizados para el login
      const response = await AuthAPI.login(
        validation.sanitized.email,
        validation.sanitized.password
      );

      // Guardar token en localStorage
      if (response.token) {
        localStorage.setItem("token", response.token);
      }

      // Redirigir después del login exitoso
      // TODO: Cambiar a la ruta del dashboard cuando esté disponible
      navigate("/dashboard");
    } catch (err) {
      setError(
        err.message || "Error al iniciar sesión. Verifica tus credenciales."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="landing-wrapper">
      <div className="image-container">
        <img src={homepage} alt="homepage" className="homepage-image" />
      </div>

      <div className="homepage-container">
        <div className="homepage-welcome-container">
          <strong>¡Bienvenido!</strong>
          <p>Ingresa tu correo y contraseña para iniciar</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <LoginInput
              label="*  Correo"
              className="form-input"
              type="email"
              placeholder="correo@ejemplo.com"
              value={formData.email}
              onChange={handleChange("email")}
              required
            />
            <LoginInput
              type="password"
              label="* Contraseña"
              className="form-input"
              placeholder="Ingresa tu contraseña"
              value={formData.password}
              onChange={handleChange("password")}
              required
            />
          </div>

          {error && (
            <p
              style={{
                color: "#e53935",
                fontSize: "0.9rem",
                marginTop: "8px",
                textAlign: "right",
              }}
            >
              {error}
            </p>
          )}

          <p className="forget-text">¿Olvidaste tu contraseña?</p>

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>
        </form>

        <p className="register-text">
          ¿No tienes cuenta?{" "}
          <span onClick={handleRegisterClick} style={{ cursor: "pointer" }}>
            Regístrate
          </span>
        </p>

        <img src={Logo} alt="Logo" className="vrisa-logo" />
      </div>
    </div>
  );
}
