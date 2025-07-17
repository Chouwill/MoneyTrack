<script setup lang="ts">
import Dialog from "primevue/dialog";

import { ref, defineExpose } from "vue";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

// const visible = ref(false);

import { onRegister } from "../api/method";

import { z } from "zod";
import cookie from "../util/useCookie";
import type { display } from "@primeuix/themes/aura/inplace";

const registerSchema = z.object({
  email: z.string().email({ message: "email必填" }).nonempty(),
  password: z
    .string({ required_error: "密碼必填" })
    .min(1, { message: "密碼必填" })
    .max(8, { message: "密碼最多 8 位數" }),
  confirmPassword: z.string().max(8).nonempty({ message: "請再次輸入密碼" }),
});

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

type fieldType = "password" | "email";

const checkField = (field: fieldType) => {
  console.log("單欄驗證", formData.value);
  const fieldResult = registerSchema.shape[field].safeParse(
    formData.value[field]
  );

  console.log(fieldResult);

  if (fieldResult.success === true) {
    console.log("驗證成功");
    errorMessage.value[field] = "";
  } else {
    console.log("驗證失敗");

    const errMsg = fieldResult.error.format();

    console.log(errMsg);

    errorMessage.value[field] = errMsg._errors[0];

    console.log(errorMessage.value.email);
  }
};

const handleUserRegister = async () => {
  console.log(formData.value);
  const result = registerSchema.safeParse(formData.value);

  console.log(result);
  if (result.success === true) {
    console.log("驗證true");
    try {
      const res = await onRegister(formData.value);

      console.log("註冊api回傳", res);
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log("驗證false");

    errorMessage.value.text = "註冊失敗";

    console.log(errorMessage.value.email);
  }
};

const value = ref(null);

const visible = ref(false);
defineExpose({ visible });
</script>

<template>
  <div class="card flex justify-center items-center border">
    <!-- <Button label="Show" @click="visible = true" /> -->
    <Dialog
      v-model:visible="visible"
      modal
      header="註冊表單"
      :style="{ width: '90%', maxWidth: '450px' }"
      :contentStyle="{
        display: 'flex',
        justifyContent: 'center',
      }"
      contentClass="p-0"
    >
      <div class="w-[100%] login rounded-xl border max-w-md">
        <form
          class="w-full bg-[white] rounded-2xl border flex flex-col justify-center items-center gap-10 py-10"
        >
          <h1 class="text-3xl">註冊帳號</h1>
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
          <div class="flex flex-col gap-1 border w-[80%]">
            <!-- <label class="block" for="password">密碼</label> -->
            <InputText
              class="w-full rounded-xl"
              placeholder="確認密碼"
              type="text"
              v-model="formData.confirmPassword"
              @blur="checkField('confirmPassword')"
            />

            <p class="errorText" v-if="errorMessage.confirmPassword">
              {{ errorMessage.confirmPassword }}
            </p>
          </div>
          <div class="w-[80%] flex justify-center border py-2">
            <button
              class="bg-[#DEE33E] w-full text-[black] text-base rounded-lg border px-5 py-2"
              @click="handleUserRegister"
            >
              註冊
            </button>
          </div>
          <p class="errorText" v-if="errorMessage.text">
            {{ errorMessage.text }}
          </p>
        </form>
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
.p-inputtext {
  --p-inputtext-background: #f9f9f9;
}
</style>
