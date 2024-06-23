<script setup lang="ts">
  import {execCallback} from "@/js/common/utils";
  import {signUpCompose} from "@/js/composition/signUp";
  import {computed} from "vue";
  import {defaultVals, type inputProps} from "@/interface/props";
  const props = withDefaults(defineProps<inputProps>(), defaultVals.inputProps);

  const isShowLabel = computed(() => {
    return (idx:number):boolean => props.labels.length > 0 && typeof props.labels[idx] === 'string';
  });

</script>
<template>
  <div class="input-wrap" v-for="i in props.refs.length" :key="i">
    <label v-if="isShowLabel(i - 1)" :for="props.refs[i - 1]">{{ props.labels[i - 1] }}</label>
    <div>
      <input
          v-model="usePinia[props.refs[i - 1]].val"
          :name="props.refs[i - 1]"
          :ref="props.refs[i - 1]"
          :type="props.types[i - 1]"
          :placeholder="props.phs[i - 1]"
          @input="props.useCheckValid
          ? signUpCompose.fn.checkInputValue(props.refs[i - 1])
          : props.evts?.[i - 1] ? execCallback(props.evts[i - 1], `props.evts 배열 ${i - 1} 인덱스가 없습니다.`)
          : () => {}"/>
      <span v-if="props.useCheckValid" class="msg">{{ usePinia[props.refs[i - 1]].msg }}</span>
    </div>
  </div>
</template>