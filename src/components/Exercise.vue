<template>
    <div class="exercise">
        <h2 class="exercise__title">{{name}}</h2>
        <BarGraph v-bind:sets="sets"/>

    </div>
</template>

<script>
import BarGraph from "@/components/BarGraph.vue";
export default {
  name: "exercise",
  props: {
    exercise: Object
  },
  data() {
    return { ...this.exercise };
  },
  components: {
    BarGraph
  }
};
</script>

<style scoped lang="scss">
</style>
