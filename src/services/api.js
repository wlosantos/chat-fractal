import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3001/api',
  headers:{
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.messenger-fractal.v1'
  }
});

export default api;