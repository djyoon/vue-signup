<script setup lang="ts">
import CommonInput from "@/components/inputs/CommonInput.vue";
import { type inputProps, defaultVals } from "@/interface/props";
const props = withDefaults(defineProps<inputProps>(), defaultVals.inputProps);

</script>
<template>
  <div class="input-wrap">
    <label>
      카드번호
    </label>
  </div>
  <div class="card-info-wrap">
    <CommonInput
        :types="props.types"
        :refs="props.refs"
        :usePinia="props.usePinia"
        :useCheckValid="props.useCheckValid"
        :phs="props.phs"
        :evts="props.evts"
        :labels="props.labels"/>
  </div>

</template>
<style scoped>
.card-info-wrap {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
</style>