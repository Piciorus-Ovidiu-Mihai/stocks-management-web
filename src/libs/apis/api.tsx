import axios from "axios";

const BASE_URL = "https://localhost:7235/api";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
