<template>
  <div class="home">
    <div class="container">
      <h1 class="home__titel title">Все новости</h1>

      <div class="home__list">
        <PostList v-if="!loading" :posts="posts" />

        <custom-loading v-else></custom-loading>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
// Components
import PostList from '@/components/PostList';

export default {
  mounted() {
    this.fetchPost();
  },

  methods: {
    ...mapActions('post', { fetchPost: 'fetchPost' }),
  },

  computed: {
    ...mapState({ posts: (state) => state.post.items, loading: (state) => state.post.loading }),
  },

  components: { PostList },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: 20px;

  &__list {
    margin-top: 20px;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
  }
}
</style>
