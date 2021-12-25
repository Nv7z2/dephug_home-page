<template>
  <button
    :class="{
      'base-button--outline': outline,
    }"
    class="base-button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    outline: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  padding: 0.5rem 1.5rem;
  color: $text-light;
  background-color: $primary;
  border: 2px solid $primary;
  border-radius: 0.5rem;
  font-weight: bold;

  &--outline {
    background-color: transparent;
    color: $primary;
  }
}
</style>
