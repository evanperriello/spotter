<template>
  <div id="app" class="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>
<script>
import Nav from "@/shared/nav";
export default {
  components: {
    Nav
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
.app {
}
</style>
