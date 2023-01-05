<template>
  <div v-if="post" class="post-data">
    <div class="post-data__field">
      <span class="post-data__title">ID:</span>
      <span class="post-data__value">{{ post.id }}</span>
    </div>
    <div class="post-data__field">
      <span class="post-data__title">Name:</span>
      <span class="post-data__value">{{ post.name }}</span>
    </div>
    <div class="post-data__field">
      <span class="post-data__title">Email:</span>
      <span class="post-data__value">{{ post.email }}</span>
    </div>
    <div class="post-data__field">
      <span class="post-data__title">Gender:</span>
      <span class="post-data__value">{{ post.gender }}</span>
    </div>
    <div class="post-data__field">
      <span class="post-data__title">Message:</span>
      <span class="post-data__value">{{ post.description }}</span>
    </div>
    <div class="post-data__field">
      <span class="post-data__title">Agree:</span>
      <span class="post-data__value">{{ post.license }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post-data {
  margin-top: 20px;
  padding: 20px;

  background-color: rgba($color: #085477, $alpha: 1);
  border-radius: 25px;
  color: white;

  &__field {
    margin-top: 5px;
  }

  &__title {
    color: gray;
  }

  &__value {
    margin-left: 15px;
  }
}
</style>
