<template>
  <base-home-section
    sectionClass="portfolio"
    sectionId="portfolio"
    headingString="portfolio.heading"
  >
    <p class="portfolio__description">
      {{ $t('portfolio.description') }}
    </p>
    <div class="portfolio__projects-wrapper">
      <home-portfolio-project name="Example project" link="#" />
      <home-portfolio-project name="Example project" link="#" />
      <home-portfolio-project name="Example project" link="#" />
      <home-portfolio-project name="Example project" link="#" />
      <home-portfolio-project name="Example project" link="#" />
    </div>
  </base-home-section>
</template>

<script>
import HomePortfolioProject from './HomePortfolioProject.vue';

export default {
  components: {
    HomePortfolioProject,
  },
};
</script>

<style lang="scss" scoped>
.portfolio {
  &__projects-wrapper {
    display: grid;
    grid-gap: 3rem;
    grid-template-columns: 1fr 1fr 1fr;

    @include mq {
      grid-template-columns: 1fr;
    }
  }
}
</style>
