<template>
  <div class="home">
    <SearchInput v-model="searchTerm"/>
    <div class="exercise-list">
      <Exercise v-for="exercise in filteredExercises" v-bind:exercise="exercise" v-bind:key="exercise.name"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

//data
import MockData from "@/data/mock.js";

//components
import SearchInput from "@/components/SearchInput.vue";
import Exercise from "@/components/Exercise.vue";

export default {
  name: "home",
  components: {
    SearchInput,
    Exercise
  },
  data() {
    return {
      searchTerm: "",
      userData: MockData.user123
    };
  },
  computed: {
    filteredExercises() {
      return this.userData.Exercises.filter(exercise => {
        return (
          exercise.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >=
          0
        );
      });
    }
  }
};
</script>
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.exercise-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
</style>
