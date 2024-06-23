<script setup lang="ts">
  import { signUpCompose } from "@/js/composition/signUp";
  import CommonInput from "@/components/inputs/CommonInput.vue";
  import { type inputProps, defaultVals} from "@/interface/props";
  const props = withDefaults(defineProps<inputProps>(), defaultVals.inputProps);

</script>
<template>
  <div class="input-wrap">
    <label>
      주소
    </label>
    <div>
      <button @click="signUpCompose.fn.openPostCodePopup()">
        우편번호
      </button>
    </div>
  </div>
  <CommonInput
      :types="props.types"
      :refs="props.refs"
      :usePinia="props.usePinia"
      :useCheckValid="props.useCheckValid"
      :phs="props.phs"
      :evts="props.evts"
      :labels="props.labels"/>
</template>
