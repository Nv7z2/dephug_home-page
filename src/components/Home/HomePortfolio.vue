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
      <home-portfolio-project
        name="Trening ITA"
        link="https://treningita.pl"
        imagePath="portfolio_treningita.jpeg"
        description="portfolio_description_1"
      />
      <home-portfolio-project
        name="Restauracja Jadalnia"
        link="https://jadalnia.patriotow303.pl"
        imagePath="portfolio_jadalnia.jpeg"
        description="test"
      />
      <home-portfolio-project
        name="Natursauna"
        link="https://natursauna.pl"
        imagePath="natursauna.jpeg"
        description="test"
      />
      <home-portfolio-project
        name="Seecontainers"
        link="https://seecontainers.pl"
        imagePath="seecontainers.jpeg"
        description="test"
      />
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
