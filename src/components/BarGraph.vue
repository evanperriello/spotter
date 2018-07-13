<template>
    <svg 
      class="chart" 
      :width="chartWidth" 
      :height="chartHeight"
      aria-labelledby="title desc" 
      role="img">
      <title id="title">View your progress in this exercise</title>
      <g 
        v-for="(set, iterator) in sets" 
        :key="set.date" 
        class="bar" 
        v-on:hover="focusStats(set.weight)">
          <rect 
              class="weight-bar" 
              :width="barWidth" 
              :height="set.weight/divider  * chartHeight" 
              :y="chartHeight - (set.weight/divider * chartHeight)" 
              :x="iterator*(barWidth + spacer)" 
              fill="rebeccapurple" 
              opacity=".6">
          </rect>
          <rect 
              class="reps-bar" 
              :width="barWidth" 
              :height="set.reps/divider * chartHeight" 
              :y="chartHeight - (set.reps/divider  * chartHeight)" 
              :x="iterator*(barWidth + spacer)" 
              fill="red"
              opacity=".6">
          </rect>
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
    spacer: Number
  },
  computed: {
    barWidth() {
      return this.chartWidth / this.sets.length - this.spacer;
    }
  }
};
</script>

<style scoped>
</style>
