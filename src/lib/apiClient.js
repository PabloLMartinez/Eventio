import axios from "axios";

function client() {
  return axios.create({
    baseURL: process.env.SERVICES_URL,
    timeout: 3000,
    headers: {"APIKey": process.env.API_KEY}
  });
}

export default client;
