<template>
  <section class="portfolio" id="portfolio">
    <h2 class="portfolio__heading">
      {{ $t('portfolio.heading') }}
    </h2>

    <div class="portfolio__projects-wrapper">
      <home-portfolio-project name="Example project" link="#" />
    </div>
  </section>
</template>

<script>
import HomePortfolioProject from './HomePortfolioProject.vue';

export default {
  components: {
    HomePortfolioProject,
  },
  mounted() {
    const sectionNode = document.querySelector('.portfolio');

    window.addEventListener('scroll', () => {
      let distanceFromTop = sectionNode.getBoundingClientRect().top;
      let opacityBasedOnScroll = -(distanceFromTop - window.innerHeight) / 750;

      sectionNode.style.opacity = opacityBasedOnScroll > 1 ? 1 : opacityBasedOnScroll;
    });
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  margin-top: 8rem;
  height: 200vh;

  &__heading {
    font-weight: lighter;
    font-size: 2.25rem;
    margin: 0 0 4.5rem 0;
  }

  &__projects-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include mq {
      grid-template-columns: 1fr;
    }
  }
}
</style>
