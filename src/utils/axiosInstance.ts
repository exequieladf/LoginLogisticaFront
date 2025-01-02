import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambia al endpoint del backend
});

export default axiosInstance;