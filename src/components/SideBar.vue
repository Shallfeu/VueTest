<template>
  <div class="sidebar">
    <div class="sidebar__profile">
      <ProfilteItem />
    </div>

    <div class="sidebar__menu">
      <NavBar />
    </div>
  </div>
</template>

<script>
// Components
import NavBar from '@/components/NavBar';
import ProfilteItem from './ProfilteItem.vue';

export default { components: { NavBar, ProfilteItem } };
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: #fff;
  box-shadow: 1px 0px 10px 2px rgba(0, 0, 0, 0.8);
  position: fixed;

  &__profile {
  }

  &__menu {
  }
}
</style>
