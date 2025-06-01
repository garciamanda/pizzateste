import axios from "axios";

const api = axios.create({
  baseURL: "https://pizzateste.onrender.com/api", // Substitua pelo seu backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
