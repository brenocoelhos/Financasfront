import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:6060', // URL base do backend
  timeout: 5000, // Tempo limite para requisições
});

export default api;