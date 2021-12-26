<template>
  <section class="hero-section">
    <h2 class="hero-section__main-heading">
      {{ $t('hero.main_heading') }}
      <span class="color-primary">{{ $t('hero.main_heading_idea') }}.</span>
    </h2>
    <h4 class="hero-section__small-heading">{{ $t('hero.small_heading') }}.</h4>

    <home-hero-description class="heroDescription" />
  </section>
</template>

<script>
import HomeHeroDescription from './HomeHeroDescription.vue';

export default {
  components: {
    HomeHeroDescription,
  },
  mounted() {
    const heroSection = document.querySelector('.hero-section');
    const mainHeading = document.querySelector('.hero-section__main-heading');
    const smallHeading = document.querySelector('.hero-section__small-heading');

    if (window.innerWidth < 1024) {
      window.addEventListener('scroll', () => {
        heroSection.style.backgroundPositionY = `${window.scrollY / 3}px`;
        heroSection.style.opacity = 1 - window.scrollY / 700;
      });
    } else {
      window.addEventListener('scroll', () => {
        heroSection.style.backgroundPositionY = `${window.scrollY / 3}px`;
        mainHeading.style.top = window.scrollY / 1.5 + 'px';
        mainHeading.style.opacity = 1 - window.scrollY / 350;
        smallHeading.style.top = window.scrollY / 1.35 + 'px';
        smallHeading.style.opacity = 1 - window.scrollY / 350;
        heroSection.style.opacity = 1 - window.scrollY / 700;
        document.querySelector('.heroDescription').style.bottom =
          -window.scrollY / 2.5 + 'px';
        document.querySelector('.heroDescription').style.opacity =
          1 - window.scrollY / 700;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.color-primary {
  color: $primary;
}

.hero-section {
  margin-top: 4rem;
  padding: 2rem 3rem;
  border-radius: 1.5rem;
  background: url('~@/assets/hero_img.webp');
  background-size: cover;
  overflow: hidden;
  background-position-x: center;
  box-shadow: 0 2rem 3rem -2rem rgba($primary, 0.75);

  @include mq {
    margin-top: 2rem;
    padding: 0.5rem 1rem;
  }

  &__main-heading {
    color: #fff;
    font-size: 60px;
    margin: 0 0 1rem 0;
    position: relative;
    text-shadow: 0 2px 2px #00000030;

    @include mq {
      font-size: 30px;
      text-align: center;
    }
  }

  &__small-heading {
    margin: 0;
    color: #fff;
    font-size: 1.75rem;
    position: relative;
    text-shadow: 0 2px 2px #00000030;

    @include mq {
      font-size: 1.25rem;
      text-align: center;
    }
  }
}
</style>
