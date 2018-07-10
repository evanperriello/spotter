<template>
  <input v-bind:value="value" type="text" v-on:input="onInputChange" placeholder="search for an exercise">
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
</style>
