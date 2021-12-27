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
    const sectionHeading = document.querySelectorAll('.section__heading');
    // const allSections = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
      let distanceFromTop = sectionNode.getBoundingClientRect().top;
      let opacityBasedOnScroll = -(distanceFromTop - window.innerHeight) / 750;
      const opacityBack =
        1.05 -
        (window.innerHeight - sectionNode.getBoundingClientRect().bottom) / 600;

      if (
        window.innerHeight - sectionNode.getBoundingClientRect().bottom >
        window.innerHeight / 2
      ) {
        sectionNode.style.opacity = opacityBack < 0 ? 0 : opacityBack;
      } else {
        sectionNode.style.opacity =
          opacityBasedOnScroll > 1 ? 1 : opacityBasedOnScroll;
      }

      console.log(
        1 -
          (window.innerHeight -
            document.querySelector('.portfolio').getBoundingClientRect()
              .bottom) /
            650
      );

      sectionHeading.forEach((heading) => {
        heading.style.left = heading.getBoundingClientRect().y / 6 + 'px';
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.section {
  margin-top: 12rem;
  position: relative;
  overflow: hidden;
  transition: opacity 0.15s;

  @include mq {
    margin-top: 6rem;
  }

  &__heading {
    font-weight: lighter;
    font-size: 2.25rem;
    margin: 0 0 4.5rem 0;
    color: $text-dark;
    position: relative;

    @include mq {
      margin: 0 0 2rem 0;
    }
  }
}
</style>
