<script setup lang="ts">
import InputText from "primevue/inputtext";
import { onLogin } from "../api/method";
import { ref } from "vue";
import { z } from "zod";
import cookie from "../util/useCookie";

const loginSchema = z.object({
  email: z.string().email({ message: "email必填" }).nonempty(),
  password: z
    .string({ required_error: "密碼必填" })
    .min(1, { message: "密碼必填" })
    .max(8, { message: "密碼最多 8 位數" }),
});

const formData = ref({
  email: "",
  password: "",
});

const errorMessage = ref({
  email: "",
  password: "",
  text: "",
});

type fieldType = "password" | "email";

const checkField = (field: fieldType) => {
  console.log("單欄驗證", formData.value);
  console.log("field", field);

  const result = loginSchema.shape[field].safeParse(formData.value[field]);

  console.log("單欄驗證", result);

  if (result.success === true) {
    console.log("true");
    errorMessage.value[field] = "";
  } else {
    console.log("false");

    const errMsg = result.error.format();

    console.log(errMsg);

    errorMessage.value[field] = errMsg._errors[0];

    console.log(errorMessage.value.password);
  }
};

const handleLogin = async () => {
  console.log(formData.value);

  const loginResult = loginSchema.safeParse(formData.value);

  console.log(loginResult);

  if (loginResult.success === true) {
    console.log("驗證成功");
    try {
      const res = await onLogin(formData.value);

      console.log(res);
      console.log("token", res.data.token);

      const token = res.data.token;

      cookie.set(token);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("驗證false");
    errorMessage.value.text = "登入失敗";
  }
};

const value = ref(null);
</script>

<template>
  <div class="w-[80%] login rounded-xl border m-20 md:w-[20%]">
    <form
      class="w-full bg-[white] rounded-2xl border flex flex-col justify-center items-center gap-10 py-10"
    >
      <h1 class="text-3xl">登入你的帳號</h1>
      <div class="flex flex-col gap-1 w-[80%]">
        <!-- <label class="block" for="email">帳號</label> -->
        <InputText
          class="w-full rounded-xl border"
          placeholder="Email"
          type="text"
          v-model="formData.email"
          @blur="checkField('email')"
        />
        <p class="errorText" v-if="errorMessage.email">
          {{ errorMessage.email }}
        </p>
      </div>
      <div class="flex flex-col gap-1 border w-[80%]">
        <!-- <label class="block" for="password">密碼</label> -->
        <InputText
          class="w-full rounded-xl"
          placeholder="密碼"
          type="text"
          v-model="formData.password"
          @blur="checkField('password')"
        />

        <p class="errorText" v-if="errorMessage.password">
          {{ errorMessage.password }}
        </p>
      </div>
      <div class="w-[80%] flex justify-center border py-2">
        <button
          class="bg-[#DEE33E] w-full text-[black] text-base rounded-lg border px-5 py-2"
          @click="handleLogin"
        >
          登入
        </button>
      </div>
      <p class="errorText" v-if="errorMessage.text">{{ errorMessage.text }}</p>
    </form>
  </div>
</template>

<style scoped>
.p-inputtext {
  --p-inputtext-background: #f9f9f9;
}
</style>
