<script setup lang="ts">
import { execCallback } from '@/js/common/utils'
import { type btnProps, defaultVals} from '@/interface/props';

const props = withDefaults(defineProps<btnProps>(), defaultVals.btnProps);

</script>
<template>
  <div class="button-wrap">
    <button v-for="i in props.labels.length" type="button" @click="execCallback(props.evts[i - 1], `props.evts 배열 ${i - 1} 인덱스가 없습니다.`)" :key="i">
      {{ props.labels[i - 1] }}
    </button>
  </div>
</template>
<style scoped>
.button-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
