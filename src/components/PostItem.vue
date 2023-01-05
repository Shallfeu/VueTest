<template>
  <div class="post">
    <div class="post__id">{{ post.id }}</div>

    <div class="post__info">
      <h1 @click="showBody" :class="isBody ? 'post__title-active' : ''" class="post__title">
        {{ post.title.toUpperCase() }}
      </h1>
      <h5 class="post__author">ID автора: {{ post.userId }}</h5>
      <p v-if="isBody" class="post__body">{{ post.body }}</p>
    </div>

    <div class="post__button">
      <button @click="togglePopup">Удалить</button>
    </div>

    <Popup v-model:show="showPopup">
      <div class="remove">
        <h1 class="remove__title">Вы точно хотите удалить этот пост?</h1>
        <div class="remove__btn">
          <custom-button @click="removePost(post.id)">Подтвердить</custom-button>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
// Components
import Popup from './Popup.vue';

export default {
  data() {
    return {
      isBody: false,
      showPopup: false,
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions('post', { deletePost: 'deletePost' }),

    showBody() {
      this.isBody = !this.isBody;
    },

    togglePopup() {
      this.showPopup = true;
    },

    removePost(id) {
      this.deletePost(id);
      this.showPopup = false;
    },
  },
  components: { Popup },
};
</script>

<style lang="scss" scoped>
.post {
  width: 100%;
  border-bottom: 2px solid lightgray;
  display: flex;
  margin-top: 20px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: row;

  &:first-child {
    margin: 0;
  }

  &__id {
    align-self: start;
    font-size: 60px;
    color: gray;
  }

  &__info {
    margin-left: 40px;
    width: 60%;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;

    transition: 0.5s;

    &:hover {
      cursor: pointer;
      color: blue;
    }

    &-active {
      color: blue;
    }
  }

  &__author {
    font-size: 14px;
    font-weight: 600;
    color: gray;
  }

  &__button {
    margin-top: 20px;
    margin-left: auto;

    & button {
      padding: 5px 15px;
      color: lightcoral;
      background-color: transparent;
      border: none;

      font-size: 15px;
      font-weight: 500;

      transition: 0.7s;

      &:hover {
        cursor: pointer;
        color: red;
      }
    }
  }
}

.remove {
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    font-size: 25px;
    font-weight: 600;
  }

  &__btn {
    margin-top: 30px;
  }
}
</style>
