<template>
  <transition name="fade">
    <div class="exercise">
        <h2 class="exercise__title">{{name}}</h2>
        <div class="exercise__stats"> 
          <button v-if="maxWeight !== 0"
            class="btn btn--view-weight" 
            :class="{'btn--inactive':!viewByWeight}"
            @click="changeViewBy(true)"
          >
            Weight
          </button>
          <button v-if="maxReps !== 0"
            class="btn btn--view-reps" 
            :class="{'btn--inactive':viewByWeight}" 
            @click="changeViewBy(false)"
          >
            Reps
          </button>
          <div class="exercise__weight" v-if="viewByWeight">
            <p><span class="exercise__stats-label">Avg:</span> {{avgWeight}}</p>
            <p> <span class="exercise__stats-label">Max:</span> {{maxWeight}}</p>
          </div>
          <div class="exercise__reps" v-else>
            <p><span class="exercise__stats-label">Avg:</span> {{avgReps}}</p>
            <p><span class="exercise__stats-label">Max:</span> {{maxReps}}</p>
          </div>
          

        </div>
        
        <BarGraph 
          :sets="sets" 
          :divider="graphView == 'weight'? maxWeight:maxReps"
          :chartWidth="200"
          :chartHeight="100"
          :spacer="2"
          :viewBy="graphView"
          :title="name"
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
function avgValueArrOfObj(arr, property) {
  let total = arr.reduce((accum, curr) => accum + curr[property], 0);
  return (total / arr.length).toFixed(1);
}
export default {
  name: "exercise",
  props: {
    exercise: Object
  },
  created() {
    if (this.maxWeight === 0) {
      this.viewByWeight = false;
    }
  },
  data() {
    return { ...this.exercise, viewByWeight: true };
  },
  components: {
    BarGraph
  },
  computed: {
    avgWeight() {
      return avgValueArrOfObj(this.sets, "weight");
    },
    maxWeight() {
      return maxValueArrOfObj(this.sets, "weight");
    },
    avgReps() {
      return avgValueArrOfObj(this.sets, "reps");
    },
    maxReps() {
      return maxValueArrOfObj(this.sets, "reps");
    },
    graphView() {
      return this.viewByWeight && this.maxWeight > 0 ? "weight" : "reps";
    }
  },
  methods: {
    changeViewBy(bool) {
      this.viewByWeight = bool;
    }
  }
};
</script>

<style scoped lang="scss">
.exercise {
  background-color: rgb(219, 219, 219);
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.384);
  color: darkslategray;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  &__title {
    font-weight: 400;
  }
  &__stats {
    margin-bottom: 1rem;
    text-align: center;
  }
  &__stats-label {
    font-weight: 600;
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
.btn {
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.384);
  cursor: pointer;
  margin: 0.2rem;
  padding: 0.5rem;
  text-transform: lowercase;
  font-weight: 300;
  transition: all 0.2s;

  &--view-weight {
    background-color: rgb(102, 51, 153);
  }
  &--view-reps {
    background-color: rgb(255, 0, 0);
  }
  &--inactive {
    opacity: 0.5;
  }
}
</style>
