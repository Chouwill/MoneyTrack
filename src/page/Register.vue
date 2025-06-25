<script setup lang="ts">
import { z } from "zod";

import { ref } from "vue";
import InputText from "primevue/inputtext";
import { email } from "zod/v4";
import { Password } from "primevue";

const formData = ref({
  email: "",
  password: "",
  confirmPassword: "",
});

const errorMessage = ref({
  email: "",
  password: "",
  confirmPassword: "",
  text: "",
});

const registerSchema = z.object({
  email: z.string().email({ message: "email必填" }).nonempty(),
  password: z
    .string({ required_error: "密碼必填" })
    .min(1, { message: "密碼必填" })
    .max(8, { message: "密碼最多 8 位數" }),
  confirmPassword: z.string().max(8).nonempty({ message: "請再次輸入密碼" }),
});

const checkField = (field: any) => {
  console.log("單欄驗證", formData.value);
  const fieldResult = registerSchema.shape[field].safeParse(formData.value[field]);

  console.log(fieldResult);

  if (fieldResult.success === true) {
    console.log("驗證成功");
  } else {
    console.log("驗證失敗");

    const errMsg = fieldResult.error.format();

    console.log(errMsg);

    errorMessage.value[field] = errMsg._errors[0];

    console.log(errorMessage.value.email);
  }
};

const handleUserRegister = () => {
  console.log(formData.value);
  const result = registerSchema.safeParse(formData.value);

  console.log(result);
  if (result.success === true) {
    console.log("驗證true");
  } else {
    console.log("驗證false");

    errorMessage.value.text = '註冊失敗';

    console.log(errorMessage.value.email);
  }
};
</script>

<template>
  <div class="w-[80%] login rounded-xl border m-20 md:w-[20%]">
    <form class="w-full border flex flex-col justify-center items-center gap-10 py-10">
      <div class="flex flex-col gap-1">
        <label class="block" for="email">帳號</label>
        <InputText class="w-full rounded-xl" type="text" v-model="formData.email" @blur="checkField('email')" />
        <p class="errorText" v-if="errorMessage.email">{{ errorMessage.email }}</p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="block" for="password">密碼</label>
        <InputText class="w-full rounded-xl" type="text " v-model="formData.password" @blur="checkField('password')" />
        <p class="errorText" v-if="errorMessage.password">{{ errorMessage.password }}</p>
      </div>
      <div class="flex flex-col gap-1">
        <label class="block" for="password">確認密碼</label>
        <InputText
          class="w-full rounded-xl"
          type="text "
          v-model="formData.confirmPassword"
          @blur="checkField('confirmPassword')" />
        <p class="errorText" v-if="errorMessage.confirmPassword">{{ errorMessage.confirmPassword }}</p>
      </div>
      <p class="errorText" v-if="errorMessage.text">{{ errorMessage.text }}</p>

      <div class="w-full flex justify-center border py-2">
        <button @click="handleUserRegister" class="bg-[#5b86e5] text-[white] rounded-lg border px-5 py-2">註冊</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
