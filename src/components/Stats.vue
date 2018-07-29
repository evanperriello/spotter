<template>
    <div class="stats">
        <div class="stats__weight" v-if="viewByWeight">
            <p><span class="stats__label">Avg:</span> {{avgWeight}}</p>
            <p> <span class="stats__label">Max:</span> {{maxWeight}}</p>
        </div>
        <div class="stats__reps" v-else>
            <p><span class="stats__label">Avg:</span> {{avgReps}}</p>
            <p><span class="stats__label">Max:</span> {{maxReps}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "stats",
  props: {
    avgWeight: Number,
    maxWeight: Number,
    avgReps: Number,
    maxReps: Number,
    viewByWeight: Boolean
  }
};
</script>

<style scoped lang="scss">
.stats {
  margin-bottom: 1rem;
  text-align: center;
  &__label {
    font-weight: 600;
  }
}
</style>
