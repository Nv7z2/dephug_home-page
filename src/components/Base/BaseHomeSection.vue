<template>
  <section :class="sectionClass" :id="sectionId" class="section">
    <h2 :class="sectionClass + '__heading'" class="section__heading">
      {{ $t(headingString) }}
    </h2>

    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    sectionClass: {
      type: String,
      required: true,
    },
    sectionId: {
      type: String,
      required: false,
    },
    headingString: {
      type: String,
      required: true,
    },
  },
  mounted() {
    const sectionNode = document.querySelector(`.${this.sectionClass}`);

    window.addEventListener('scroll', () => {
      let distanceFromTop = sectionNode.getBoundingClientRect().top;
      let opacityBasedOnScroll = -(distanceFromTop - window.innerHeight) / 750;

      sectionNode.style.opacity =
        opacityBasedOnScroll > 1 ? 1 : opacityBasedOnScroll;
    });
  },
};
</script>

<style lang="scss" scoped>
.section {
  margin-top: 8rem;

  &__heading {
    font-weight: lighter;
    font-size: 2.25rem;
    margin: 0 0 4.5rem 0;
    color: $text-dark;
  }
}
</style>
