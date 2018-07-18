<template>
  <div id="app" class="app">
    <div class="navMain">
      <AppNav></AppNav>
      <main class="main"><router-view/></main>
    </div>
    <AppFooter></AppFooter>
    
  </div>
</template>
<script>
import AppNav from "@/shared/nav";
import AppFooter from "@/shared/footer";
export default {
  components: {
    AppNav,
    AppFooter
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
  color: white;
  height: 100%;
}
.app {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
}
.main {
  padding-top: 5rem;
  background-image: linear-gradient(
    to bottom,
    rgb(90, 90, 90),
    rgb(15, 15, 15)
  );
  display: flex;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
  min-height: 90vh;
}

.navMain {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: stretch;
}
</style>
