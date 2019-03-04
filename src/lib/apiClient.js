import axios from "axios";

export function client() {
  return axios.create({
    baseURL: process.env.SERVICES_URL,
    timeout: 3000,
    headers: {"APIKey": process.env.API_KEY}
  });
}

export function clientAuth() {
  return axios.create({
    baseURL: process.env.SERVICES_URL,
    timeout: 3000,
    headers: {"APIKey": process.env.API_KEY, "Authorization": localStorage.getItem("authorization")}
  });
}
