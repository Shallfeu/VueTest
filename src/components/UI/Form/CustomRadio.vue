<template>
  <label class="radio">
    <input
      name="same"
      type="radio"
      class="radio__input"
      id="radio"
      :checked="value === 'male'"
      :value="value"
      @change="onChange"
    />
    <span class="radio__fake"></span>
    <span class="radio__label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'custom-radio',

  props: {
    label: { type: String, default: '', required: true },
    modelValue: { type: String, required: true },
    value: { type: String, default: '', required: true },
  },

  methods: {
    onChange(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.radio {
  display: flex;
  align-items: center;

  &__fake {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid rgba($color: #1f119c, $alpha: 1);
    position: relative;

    &:before {
      content: '';
      position: absolute;
      display: block;
      width: 10px;
      height: 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: rgba($color: #1f119c, $alpha: 1);
      opacity: 0;
      transition: 0.3s;
    }
  }

  &__input {
    display: none;
  }

  &__input:checked + &__fake:before {
    opacity: 1;
  }

  &__label {
    margin-left: 15px;
    font-size: 15px;
    font-weight: 400;
  }
}
</style>
