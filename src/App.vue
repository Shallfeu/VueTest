<template>
  <div class="app">
    <SideBar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar';

export default {
  components: {
    SideBar,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700&display=swap');
@import '@/assets/icomoon/style.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
  background-color: lightblue;
}

a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
  color: inherit;
}

.app {
  display: grid;
  grid-template-columns: 250px 1fr;
}

.title {
  font-size: 24px;
  font-weight: 700;
}

.container {
  padding: 0 30px;
}

.content {
  display: grid;
  grid-column: 2;
}
</style>
