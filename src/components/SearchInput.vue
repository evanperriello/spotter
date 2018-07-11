<template>
  <input class="searchInput" v-bind:value="value" type="text" v-on:input="onInputChange" placeholder="search for an exercise">
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    value: String
  },
  methods: {
    onInputChange(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style scoped lang="scss">
.searchInput {
  border-radius: 0.5rem;
  width: 50%;
  box-shadow: none;
  border: lightgray 0.1rem solid;
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
