<template>
  <div class="create">
    <div class="container">
      <h1 class="create__title title">Добавить запись</h1>
      <div class="create__inner">
        <div class="create__form"><PostForm @create="createPost" /></div>
        <div v-if="posts.length > 0" class="create__items">
          <div v-for="post in posts"><PostFormItem :post="post" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Components
import PostForm from '@/components/PostForm';
import PostFormItem from '@/components/PostFormItem';

export default {
  data() {
    return {
      posts: [
        {
          id: 'afsdfas',
          name: '1',
          email: '1',
          gender: 'male',
          description: '1111',
          license: false,
        },
      ],
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  },

  components: { PostForm, PostFormItem },
};
</script>

<style lang="scss" scoped>
.create {
  margin-top: 20px;

  &__inner {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__form {
    padding: 20px;
    background-color: #fff;
  }

  &__items {
    margin-left: 20px;
    background-color: #fff;
    padding: 20px;
  }
}
</style>
