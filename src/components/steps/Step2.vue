<script setup lang="ts">

import Buttons from "@/components/buttons/Buttons.vue";
import CommonInput from "@/components/inputs/CommonInput.vue";
import PostCodeForm from "@/components/customForm/PostCodeForm.vue";

import {useSignUpFormStore} from "@/stores/signUpForm";
import {useStepCounterStore} from "@/stores/stepCounter";

const stepCounterStore = useStepCounterStore();
const { signUpForm } = useSignUpFormStore();

</script>
<template>
  <div class="top-contents">
    <CommonInput
                 :types="['text','text']"
                 :refs="['nm','phoneNum']"
                 :usePinia="signUpForm"
                 :phs="['이름','연락처']"
                 :labels="['이름','연락처']"/>
    <PostCodeForm :types="['text','text']"
                  :refs="['addrMain','addrSub']"
                  :usePinia="signUpForm"
                  :phs="['주소','상세 주소']"/>
  </div>
  <div class="bottom-contents">
    <Buttons :labels="['이전','다음']" :evts="[stepCounterStore.decrease, stepCounterStore.increment]"/>
  </div>

</template>
<style scoped>
</style>
