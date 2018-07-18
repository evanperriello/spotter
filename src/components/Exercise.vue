<template>
  <transition name="fade">
    <div class="exercise">
        <h2 class="exercise__title">{{name}}</h2>
        <div class="exercise__stats"> 
          <p v-if="maxWeight > 0" class="exercise__mweight">
            Max weight: {{maxWeight}}
          </p>
          <p v-if="maxReps > 0" class="exercise__mreps">Max reps: {{maxReps}}
          </p>
          <input 
            type="radio" 
            id="weightView" 
            :value="true" 
            v-model="viewByWeight">
          <label for="weightView" >Weight</label>
          <input 
            type="radio" 
            id="repView" 
            :value="false" 
            :checked="graphView === 'reps'" 
            v-model="viewByWeight">
          <label for="repView">Reps</label>

        </div>
        
        <BarGraph 
          :sets="sets" 
          :divider="graphView == 'weight'? maxWeight:maxReps"
          :chartWidth="200"
          :chartHeight="100"
          :spacer="2"
          :viewBy="graphView"
          />
    </div>
  </transition>
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
    return { ...this.exercise, viewByWeight: true };
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
    },
    graphView() {
      return this.viewByWeight && this.maxWeight > 0 ? "weight" : "reps";
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
  &__title {
    font-weight: 300;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  overflow: hidden;
}
</style>
