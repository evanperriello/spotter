<template>
    <div id="nav" class="nav">
      <div class="nav__logo-container">Spotter</div>
      <router-link class="nav__link" to="/">Home</router-link>
      <router-link class="nav__link" to="/about">About</router-link>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  color: white;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  background: rebeccapurple;
  position: absolute;
  height: 100%;
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
    color: rebeccapurple;
    background: white;
  }
}
</style>
