import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useSignUpFormStore } from "@/stores/signUpForm";

export const useStepCounterStore = defineStore('stepCounter', () => {
  const maxCount = ref(0);
  const count = ref(0);
  const getCount = computed(() => count.value);
  function increment() {
    const { signUpForm } = useSignUpFormStore();
    const isValidNextStep = !Object.values(signUpForm).filter(v => v.stepCnt == count.value).find(v => v.isValid === false);
    if(isValidNextStep){
      count.value = count.value == maxCount.value ? count.value : count.value + 1;
    }
  }
  function decrease() {
    count.value = count.value == 0 ? count.value : count.value - 1;
  }
  function setStepCount(cnt:number) {
    count.value = cnt;
  }
  function setMaxCount(cnt:number){
    maxCount.value = cnt;
  }
  return { count, setMaxCount, getCount, increment, decrease, setStepCount }
}, {
  persist:{
    storage: sessionStorage
  }
})
