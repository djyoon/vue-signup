<script setup lang="ts">

  import Buttons from "@/components/buttons/Buttons.vue";
  import CardNumberForm from "@/components/customForm/CardNumberForm.vue";
  import {useSignUpFormStore} from "@/stores/signUpForm";
  import {signUpCompose} from "@/js/composition/signUp";

  const { signUpForm } = useSignUpFormStore();

</script>
<template>
  <div class="top-contents">
    <CardNumberForm
                  :useCheckValid="false"
                  :types="['string','string','string','string']"
                  :refs="['cardNum1','cardNum2','cardNum3','cardNum4']"
                  :usePinia="signUpForm"
                  :phs="['카드번호1','카드번호2','카드번호3','카드번호4']"/>
  </div>
  <span class="msg">{{ signUpCompose.data.cardInfoValidMsg }}</span>
  <div class="bottom-contents">
    <Buttons :labels="['완료']" :evts="[signUpCompose.fn.clickConfirmBtn]"/>
  </div>
</template>
<style scoped>
</style>
