import axios from "axios";

function client() {
  return axios.create({
    baseURL: process.env.SERVICES_URL,
    timeout: 3000,
    headers: {"Authorization": "Bearer " + localStorage.getItem("jwtToken")}
  });
}

export default client;
