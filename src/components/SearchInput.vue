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
  width: 20rem;
  box-shadow: 0.1rem 0.1rem 1rem rgba(0, 0, 0, 0.384);
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
