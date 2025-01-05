
"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link'; // 
import { FaTimes, FaHome, FaUser, FaCog, FaBuilding, FaPlane, FaChartBar, FaFileAlt } from 'react-icons/fa';
import styles from './Sidebar.module.css'

const sections = [
  { id: 1, name: 'Inicio', path: '/dashboard/inicio', icon: <FaHome /> },
  { id: 2, name: 'Perfil', path: '/dashboard//perfil', icon: <FaUser /> },
  { id: 3, name: 'Configuraciones', path: '/dashboard//configuraciones', icon: <FaCog /> },
  { id: 4, name: 'Empresas', path: '/dashboard//empresas', icon: <FaBuilding /> },
  { id: 5, name: 'Viajes', path: '/dashboard//viajes', icon: <FaPlane /> },
  { id: 6, name: 'Estadísticas', path: '/dashboard//estadisticas', icon: <FaChartBar /> },
  { id: 7, name: 'Reportes', path: '/dashboard//reportes', icon: <FaFileAlt /> },
];

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Eliminar el token de la sesión
    router.push('/'); // Redirigir a la página de inicio
  };

  return (
    <aside className={styles.sidebar}>
      <button onClick={handleLogout} className={styles.logoutButton}>
        Cerrar Sesion<FaTimes /> {/* Icono de cerrar sesión */}
      </button>
      <nav>
        <ul>
          {sections.map(section => (
            <li key={section.id}>
            <Link href={section.path}>{section.icon}{section.name}</Link> 
          </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
