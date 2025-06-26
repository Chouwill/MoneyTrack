import apiClient from "./axios";

export function onRegister(data: object) {
  return apiClient({
    url: `/api/register`,
    method: "post",
    data,
  });
}
