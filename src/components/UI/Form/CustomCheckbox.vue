<template>
  <label class="checkbox">
    <input
      type="checkbox"
      class="checkbox__input"
      id="checkbox"
      :checked="modelValue"
      :value="modelValue"
      @change="onChange"
    />
    <span class="checkbox__fake"></span>
    <span class="checkbox__label">{{ label }}</span>
  </label>
</template>

<script>
export default {
  name: 'custom-checkbox',
  props: {
    label: { type: String, default: '', required: true },
    modelValue: { type: [Boolean, String], required: true },
  },
  methods: {
    onChange(event) {
      this.$emit('update:modelValue', event.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.checkbox {
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
