<template>
  <div class="hero-description">
    <div class="hero-description__text-content">
      {{ $t('hero.description') }}
    </div>
    <div class="hero-description__buttons">
      <base-button @click="$router.push('#contact')">
        {{ $t('hero.contact_us') }}
      </base-button>
      <span class="hero-description__button-divider">
        {{ $t('hero.or') }}
      </span>
      <base-button outline text-white  @click="$router.push('#portfolio')">
        {{ $t('hero.check_our_portfolio') }}
      </base-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-description {
  padding: 1.5rem;
  display: inline-block;
  color: $text-light;
  background-color: #00000040;
  backdrop-filter: blur(6px);
  border-radius: 1rem;
  margin-top: 35vh;
  max-width: 70%;
  position: relative;

  @include mq {
    padding: 1rem;
    min-width: 100%;
    margin-top: 15vh;
  }

  &__text-content {
    margin-bottom: 2rem;
  }

  &__buttons {
    display: flex;
    align-items: center;

    @include mq {
      flex-direction: column;

      button {
        width: 100%;
      }
    }
  }

  &__button-divider {
    margin: 0 1.5rem;
    color: $text-light;
    font-weight: bold;

    @include mq {
      margin: 0.5rem 0;
    }
  }
}
</style>
