import apiClient from "./axios";

export function onRegister(data: object) {
  return apiClient({
    url: `/api/register`,
    method: "post",
    data,
  });
}


export function onLogin(data: object) {
  return apiClient({
    url: `/api/login`,
    method: "post",
    data,
  });
}

export function getEconomy(data: object) {
  return apiClient({
    url: `/api/get/data/economy`,
    method: "get",
    data,
  });
}


// http://localhost:3000/get/data/economy