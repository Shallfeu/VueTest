<template>
  <select :v-model="modelValue" @change="changeOption" class="select">
    <option selected disabled value="">Choose something...</option>
    <option
      class="select__item"
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'custom-select',
  props: {
    modelValue: {
      type: String,
    },

    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  padding: 10px 25px;
  border: 3px dashed teal;
}
</style>
