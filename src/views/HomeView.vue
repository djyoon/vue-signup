<script setup lang="ts">
  import Step1 from "@/components/steps/Step1.vue";
  import Step2 from "@/components/steps/Step2.vue";
  import Step3 from "@/components/steps/Step3.vue";
  import Step4 from "@/components/steps/Step4.vue";

  import {useStepCounterStore} from "@/stores/stepCounter";
  import { storeToRefs } from "pinia";

  const stepCounterStore = useStepCounterStore();

  const { getCount } = storeToRefs(stepCounterStore);
  const { setMaxCount }  = stepCounterStore;

  const components = [Step1, Step2, Step3, Step4];
  setMaxCount(components.length);

</script>

<template>
  <main>
    <keep-alive>
      <component :is="components[getCount]"/>
    </keep-alive>
  </main>
</template>
