<template>
  <form @submit.prevent class="form">
    <div v-focus class="form__input">
      <custom-input v-model="post.name" type="text" placeholder="Имя" />
    </div>

    <div class="form__input">
      <custom-input v-model="post.email" type="email" placeholder="Email" />
    </div>

    <div class="form__radio">
      <multi-radio
        v-model="post.gender"
        label="Выберите пол:"
        :options="genderOptions"
      ></multi-radio>
    </div>

    <div class="form__area">
      <custom-textarea v-model="post.description" label="Пару слов о себе: "></custom-textarea>
    </div>

    <div class="form__check">
      <custom-checkbox
        v-model="post.license"
        label="Согласен на обработку персональных данных"
      ></custom-checkbox>
    </div>

    <div class="form__btn">
      <custom-button @click="createPost">Отправить</custom-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        name: '',
        email: '',
        gender: 'male',
        description: '',
        license: false,
      },

      genderOptions: [
        { name: 'Мужской', value: 'male' },
        { name: 'Женский', value: 'female' },
      ],
    };
  },

  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post = { name: '', email: '', gender: '', description: '', license: false };
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__input {
    width: 100%;
    margin-top: 20px;

    &:first-child {
      margin: 0;
    }
  }

  &__radio {
    width: 100%;
    margin-top: 20px;
  }

  &__area {
    width: 100%;
    margin-top: 20px;
  }

  &__check {
    width: 100%;
    margin-top: 20px;
  }

  &__btn {
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;

    & button {
      display: flex;
      align-items: end;
      justify-self: end;
      margin-left: auto;
    }
  }
}
</style>
