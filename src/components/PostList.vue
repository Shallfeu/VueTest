<template>
  <div class="list">
    <div v-if="posts.length > 0">
      <transition-group name="post-list">
        <PostItem v-for="post in posts" :key="post.id" :post="post" />
      </transition-group>
    </div>

    <div v-else class="empty">Post List is empty</div>
  </div>
</template>

<script>
// Components
import PostItem from '@/components/PostItem';

export default {
  props: {
    posts: { type: Array, required: true },
  },

  components: { PostItem },
};
</script>

<style lang="scss" scoped>
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.post-list-move {
  transition: transform 0.7s ease;
}

.empty {
  margin-top: 20px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: red;
}
</style>
