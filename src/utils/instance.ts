import axios from "axios";
import { API_BASE_URL } from "../constants/constant";

const instance = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

export default instance;
