"use client";
import { useState } from 'react';
import axios from '../utils/axiosInstance';
import { useRouter } from 'next/navigation'; // Importa useRouter

interface LoginProps {
  onLoginSuccess: () => void; // Define el tipo de la prop
}



export default function Login({ onLoginSuccess }: LoginProps) { // Añade la prop onLoginSuccess
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Inicializa useRouter

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.accessToken);
      alert('Login exitoso');
      onLoginSuccess(); // Llama a la función de éxito
      router.push('/dashboard'); // Redirige al dashboard
    } catch (error) {
      console.error(error);
      alert('Error en el login');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}
