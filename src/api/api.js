import axios from "axios";
const api = axios.create({
  baseURL: "http://cliente.casafintech.com",
  withCredentials: true,
});
export default api;
