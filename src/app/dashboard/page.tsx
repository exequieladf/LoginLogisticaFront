// src/app/dashboard.tsx
"use client"; // Asegúrate de que este archivo sea un componente de cliente

import Sidebar from "@/components/Sidebar"; // Importa el Sidebar
import styles from '@/pages/styles/dashboard.module.css';


export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <main className={styles.dashboardContent}>
        <h2 className={styles.welcome}>Bienvenido al Dashboard</h2>
        {/* Aquí puedes agregar más contenido dinámico según tus necesidades */}
      </main>
    </div>
  );
}
