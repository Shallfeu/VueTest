<template>
  <div class="textarea">
    <div class="textarea__info">
      <label for="textarea" class="textarea__title">{{ label }}</label>
      <span class="textarea__length">Символов: {{ modelValue?.length }}</span>
    </div>
    <textarea :value="modelValue" @input="updateInput" class="textarea__input" id="textarea" />
  </div>
</template>

<script>
export default {
  name: 'custom-textarea',
  props: {
    label: {},
    modelValue: { type: String },
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.textarea {
  &__info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__title {
    font-size: 16px;
    font-weight: 500;
  }

  &__length {
    font-size: 16px;
    font-weight: 500;
  }

  &__input {
    margin-top: 15px;

    font-size: 20px;

    width: 100%;
    min-height: 100px;
    max-height: 300px;

    resize: vertical;
  }
}
</style>
