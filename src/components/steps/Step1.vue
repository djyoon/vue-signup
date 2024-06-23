<script setup lang="ts">
  import Buttons from "@/components/buttons/Buttons.vue";
  import CommonInput from "@/components/inputs/CommonInput.vue";

  import {useSignUpFormStore} from "@/stores/signUpForm";
  import {useStepCounterStore} from "@/stores/stepCounter";

  const stepCounterStore = useStepCounterStore();
  const { signUpForm } = useSignUpFormStore();

</script>
<template>
    <div class="top-contents">
      <CommonInput
             :types="['text','password','password']"
             :refs="['email','pw','pwConfirm']"
             :usePinia="signUpForm"
             :phs="['이메일','비밀번호','비밀번호 확인']"
             :evts="['이메일','비밀번호','비밀번호 확인']"
             :labels="['이메일','비밀번호','비밀번호 확인']"/>
    </div>
    <div class="bottom-contents">
      <Buttons :labels="['다음']" :evts="[stepCounterStore.increment]"/>
    </div>
</template>
<style scoped>
</style>
