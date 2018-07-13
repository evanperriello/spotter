<template>
  <div id="app" class="app">
    <Nav></Nav>
    <div class="spacer">&nbsp;</div>
    <main class="main"><router-view/></main>
    <footer>blah blah blah</footer>
    
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
html {
  height: 100%;
}
body {
  margin: 0;
  color: rgb(56, 56, 56);
  height: 100%;
}
.app {
  display: flex;
  align-items: stretch;
  position: relative;
}
.main {
  position: relative;
  left: 9rem;
  padding-right: 9rem;
}
</style>
