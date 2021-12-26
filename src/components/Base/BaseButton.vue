<template>
  <button
    :class="{
      'base-button--outline': outline,
      'base-button--text-white': textWhite,
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
    textWhite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  color: $text-light;
  background-color: $primary;
  border: 2px solid $primary;
  border-radius: 0.5rem;
  font-weight: bold;

  &--outline {
    color: $primary;
    background-color: #ffffff75;
    backdrop-filter: blur(6px);
  }

  &--text-white {
    color: $text-light;
  }
}
</style>
