import axios from "axios";

const API = axios.create({
  baseURL: "https://petbuddy-backend-pamb.onrender.com/api",
  
});

export default API;
