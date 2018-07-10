<template>
    <svg class="chart" v-bind:width="360" height="120" aria-labelledby="title desc" role="img">
        <title id="title">View your progress in this exercise</title>
        <g v-for="(set, iterator) in sets" v-bind:key="set.date" class="bar" v-on:hover="focusStats(set.weight)">
            <rect 
                class="weight-bar" 
                width="10" 
                v-bind:height="set.weight" 
                v-bind:y="[120 - set.weight]" 
                v-bind:x="[iterator*12]" 
                fill="rebeccapurple" 
                opacity=".5">
            </rect>
            <rect 
                class="reps-bar" 
                width="10" 
                v-bind:height="[set.reps * 4]" 
                v-bind:y="[120 - set.reps*4]" 
                v-bind:x="[iterator*12]" 
                fill="red" 
                opacity=".5">
            </rect>
        </g>
    </svg>  
</template>

<script>
export default {
  name: "bar-graph",
  props: {
    sets: Array
  },
  data() {
    return {};
  },
  methods: {
    focusStats(weight) {
      console.log(weight);
    }
  },
  computed: {
    chartHeight() {}
  },
  components: {}
};
</script>

<style scoped>
</style>
