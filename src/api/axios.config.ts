import axios from "axios";

const baseConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 60 * 100,
  params: {
    "language": "pt-BR",
    "api_key": import.meta.env.VITE_API_KEY,
  }
}

const axiosInstance = axios.create(baseConfig);

export default axiosInstance;
