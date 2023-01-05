<template>
  <div v-if="show" @click="hidePopup" class="modal">
    <div @click.stop class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
  mixins: [toggleMixin],
};
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
}

.content {
  background-color: white;
  margin: auto;
  min-height: 50px;
  min-width: 200px;
  padding: 20px;
  border-radius: 12px;
}
</style>
