<script setup lang="ts">
import InputText from "primevue/inputtext";

import { ref } from "vue";
import { z } from "zod";

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

const checkField = (field) => {
  console.log("單欄驗證", formData.value);

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

const handleLogin = () => {
  console.log(formData.value);

  const loginResult = loginSchema.safeParse(formData.value);

  console.log(loginResult);

  if (loginResult.success === true) {
    console.log("驗證成功");
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
      class="w-full border flex flex-col justify-center items-center gap-10 py-10"
    >
      <div class="flex flex-col gap-1">
        <label class="block" for="email">帳號</label>
        <InputText
          class="w-full rounded-xl"
          type="text"
          v-model="formData.email"
          @blur="checkField('email')"
        />
        <p class="errorText" v-if="errorMessage.email">
          {{ errorMessage.email }}
        </p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="block" for="password">密碼</label>
        <InputText
          class="w-full rounded-xl"
          type="text"
          v-model="formData.password"
          @blur="checkField('password')"
        />
        <p class="errorText" v-if="errorMessage.password">
          {{ errorMessage.password }}
        </p>
      </div>
      <div class="w-full flex justify-center border py-2">
        <button
          class="bg-[#5b86e5] text-[white] rounded-lg border px-5 py-2"
          @click="handleLogin"
        >
          登入
        </button>
      </div>
      <p class="errorText" v-if="errorMessage.text">{{ errorMessage.text }}</p>
    </form>
  </div>
</template>

<style scoped></style>
