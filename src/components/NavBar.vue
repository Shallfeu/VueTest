<template>
  <nav class="navbar">
    <ul class="navbar__menu">
      <router-link to="/" class="navbar__item">
        <i class="icon-home"></i>
        <span>Все новости</span>
      </router-link>
      <router-link to="/create" class="navbar__item">
        <i class="icon-create"></i>
        <span>Добавить новость</span>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.router-link-active {
  color: blue;
}
.navbar {
  display: flex;
  flex-direction: column;

  height: 100vh;

  &__menu {
  }

  &__item {
    border-top: 1px solid lightgray;
    padding: 10px 25px;

    display: flex;
    flex-direction: row;
    align-items: center;

    transition: 0.7s;

    &:hover {
      cursor: pointer;
      color: teal;
    }

    & img {
      width: 20px;
      height: 20px;
    }

    & span {
      margin-left: 20px;
    }
  }
}
</style>
