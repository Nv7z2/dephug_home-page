<template>
  <button
    :class="{
      'base-button--outline': outline,
      'base-button--text-white': textWhite,
      'base-button--pulse': pulse,
    }"
    class="base-button"
    :disabled="disabled"
    type="button"
    @click="$emit('click')"
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
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    pulse: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes pulseButton {
  from {
    box-shadow: 0 0 0 0 rgba(#000, 0);
  }
  25% {
    transform: scale(0.97);
    box-shadow: 0 0 0 0.5rem rgba($primary, 0.25);
  }
  to {
    box-shadow: 0 0 0 1rem rgba(#000, 0);
  }
}

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

  &--pulse {
    animation: pulseButton 1.5s infinite;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: rgba($primary, 0.75);
  }
}
</style>
