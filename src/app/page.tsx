"use client"
import { useState } from "react";
import { useRouter } from "next/navigation" 
import Login from "@/pages/login";
import Register from "@/pages/register";
import ThemeToggle from "../utils/themeToggle";




export default function Home() {
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter(); // Inicializa useRouter

  // Función para manejar el inicio de sesión exitoso
  const handleLoginSuccess = () => {
    router.push("/"); // Redirige al dashboard
  };

  return (
    <main className="main-container">
      <ThemeToggle />
      {isRegistering ? <Register /> : <Login onLoginSuccess={handleLoginSuccess} />}
      <div className="container">
        <button
          onClick={() => setIsRegistering(!isRegistering)}
          className="toggle-form-btn"
        >
          {isRegistering ? "¿Ya tienes cuenta? Inicia sesión" : "Registrarse"}
        </button>
      </div>
    </main>
  );
}