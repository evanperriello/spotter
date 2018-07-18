<template>
    <div id="nav" class="nav">
      <div class="nav__logo-container">spotter icon here</div>
      <router-link class="nav__link" to="/">home</router-link>
      <router-link class="nav__link" to="/about">about</router-link>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(
    to right,
    rebeccapurple 10%,
    rgb(10, 10, 10) 10%
  );
  &__link {
    color: white;
    text-decoration: none;
    font-size: 2rem;
    padding: 2rem;
    transition: all 0.2s;
    width: 100%;
    text-align: center;
    display: flex;
  }
  &__link:hover {
    background: rebeccapurple;
  }
  &__logo-container {
    background-color: rebeccapurple;
    width: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>
