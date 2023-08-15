<template>
  <header>
    <nav>
      <RouterLink class="logo-refresh" :to="{ name: 'Home' }">random 🔄</RouterLink>
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>created by Nehuen - devChallenges.io</footer>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
header {
  grid-area: header;
  width: 100%;
  display: flex;
}

nav {
  width: inherit;
  display: inherit;
  padding: 2vh 4vw;
  justify-content: flex-end;
}

nav .logo-refresh {
  background: transparent;
  border: none;
  font: 500 1.125rem 'Raleway', sans-serif;
  text-transform: lowercase;
}

main {
  grid-area: page;
  display: flex;
  flex-direction: column;
  padding: 0 20vw;
}

footer {
  grid-area: footer;
  font: 500 1rem 'Montserrat', sans-serif;
  color: #828282;
  place-self: center;
}
</style>
