import { defineStore } from "pinia";

import { ref } from "vue";

import { onLogin } from "../api/method";
import { value } from "@primeuix/themes/aura/knob";

export const useUserStore = defineStore("", () => {
  const isLoginStatus = ref(false);

  const handleLogin = async (value: object) => {
    console.log(value);

    try {
      const loginRes = await onLogin(value);

      console.log("API回傳", loginRes);

      isLoginStatus.value = true;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleLogin,
    isLoginStatus,
  };
});
