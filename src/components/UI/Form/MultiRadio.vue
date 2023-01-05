<template>
  <div class="multi-radio">
    <span class="multi-radio__title">{{ label }}</span>
    <div class="multi-radio__area">
      <custom-radio
        v-for="option in options"
        v-model="gender"
        :key="option.value"
        :label="option.name"
        :value="option.value"
      ></custom-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'multi-radio',

  data() {
    return {
      gender: '',
    };
  },

  props: {
    label: { type: String, required: true },
    options: { type: Array, required: true },
    modelValue: { type: String, required: true },
  },

  watch: {
    gender() {
      this.$emit('update:modelValue', this.gender);
    },
  },
};
</script>

<style lang="scss" scoped>
.multi-radio {
  &__title {
    font-size: 16px;
    font-weight: 500;
  }

  &__area {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
