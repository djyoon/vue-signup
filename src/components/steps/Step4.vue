<script setup lang="ts">
import {useSignUpFormStore} from "@/stores/signUpForm";
const { signUpForm } = useSignUpFormStore();

</script>
<template>
  <div class="wrap">
    <div class="top-contents">
    <span class="complete-msg">
      "{{ signUpForm.nm.val }}" 님,<br>회원가입이<br>완료되었습니다.
    </span>
    </div>
    <div class="bottom-contents">
      <div>이메일: <a :href="`mailto:${signUpForm.email.val}`" target="_blank">{{ signUpForm.email.val }}</a></div>
      <div>주소: {{ signUpForm.addrMain.val }} {{ signUpForm.addrSub.val }}</div>
      <div>연락처: {{ signUpForm.phoneNum.val }}</div>
    </div>
  </div>
</template>
<style scoped>
  .wrap {
    display: flex;
    width:100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .complete-msg {
    font-size: 30px;
    white-space: pre-line;
  }
</style>
