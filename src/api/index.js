import axios from "axios"

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  }
})

export const login = async (username , password) => {
  const res = await api.get("/login", { username, password });
  console.log(res.data)
  return res.data;
}