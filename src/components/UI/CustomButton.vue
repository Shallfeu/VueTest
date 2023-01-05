<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default { name: 'custom-button' };
</script>

<style lang="scss" scoped>
.btn {
  background-color: transparent;
  border: 2px solid rgba($color: #2b15a8, $alpha: 0.8);
  border-radius: 5px;
  padding: 10px 25px;
  transition: 0.7s ease;

  &:hover {
    cursor: pointer;
    background-color: rgba($color: #2b15a8, $alpha: 0.8);
    color: white;
  }
}
</style>
