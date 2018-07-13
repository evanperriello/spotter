<template>
    <div class="exercise">
        <h2 class="exercise__title">{{name}}</h2>
        <div class="exercise__stats"> 
          <p v-if="maxWeight > 0" class="exercise__mweight">
            Max weight: {{maxWeight}}
          </p>
          <p v-if="maxReps > 0" class="exercise__mreps">Max reps: {{maxReps}}
          </p>
        </div>
        
        <BarGraph 
          :sets="sets" 
          :divider="maxWeight > maxReps ? maxWeight: maxReps"
          :chartWidth="200"
          :chartHeight="100"
          :spacer="2"
          />
    </div>
</template>

<script>
import BarGraph from "@/components/BarGraph.vue";
function maxValueArrOfObj(arr, property) {
  return arr.reduce(
    (accum, curr) => (accum > curr[property] ? accum : curr[property]),
    0
  );
}
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
  },
  computed: {
    maxWeight() {
      return maxValueArrOfObj(this.sets, "weight");
    },
    maxReps() {
      return maxValueArrOfObj(this.sets, "reps");
    }
  }
};
</script>

<style scoped lang="scss">
.exercise {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
}
</style>
