import axios from 'axios';

export const signSignupUrl = axios.create({
  baseURL: String(import.meta.env.VITE_API_URL),
});
