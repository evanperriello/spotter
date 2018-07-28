<template>
    <svg 
      class="chart" 
      :width="chartWidth" 
      :height="chartHeight"
      aria-labelledby="title desc" 
      role="img">
      
      <g 
        v-for="(set, iterator) in sets" 
        :key="set.date" 
        class="bar" 
        >
        <transition name="popup" mode="out-in">
          <rect v-if="viewBy == 'weight'"
              class="weight-bar" 
              :width="barWidth"
              :height="set.weight/divider  * chartHeight + 10" 
              :y="chartHeight - (set.weight/divider * chartHeight)" 
              :x="iterator*(barWidth + spacer)" 
              fill="rebeccapurple" 
              opacity=".6"
              :key="name + iterator + 'weight'"
              >
          </rect>
          <rect v-else
              class="reps-bar" 
              :width="barWidth" 
              :height="set.reps/divider * chartHeight + 10" 
              :y="chartHeight - (set.reps/divider  * chartHeight)" 
              :x="iterator*(barWidth + spacer)" 
              fill="red"
              opacity=".6"
              :key="name + iterator + 'reps'"
              >
          </rect>
        </transition>
      </g>
    </svg>  
</template>

<script>
export default {
  name: "bar-graph",
  props: {
    sets: Array,
    divider: Number,
    chartWidth: Number,
    chartHeight: Number,
    spacer: Number,
    viewBy: String,
    name: String
  },
  computed: {
    barWidth() {
      return this.chartWidth / this.sets.length - this.spacer;
    }
  }
};
</script>

<style lang="scss" scoped>
.popup-enter-active,
.popup-leave-active {
  transition: y 0.4s cubic-bezier(0.35, 0.07, 0.53, 1.23);
}
.popup-enter,
.popup-leave-to {
  y: 100;
}
</style>
