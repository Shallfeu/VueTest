<template>
  <input :value="modelValue" @input="updateInput" class="input" />
</template>

<script>
export default {
  name: 'custom-input',
  props: { modelValue: [String, Number] },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  padding: 10px;
  border: none;
  border: 1px solid lightgray;
  border-radius: 5px;
  outline: none;

  &:hover {
    border: 1px solid lightgray;
  }

  &:focus {
    border-bottom: 2px solid teal;
  }
}
</style>
