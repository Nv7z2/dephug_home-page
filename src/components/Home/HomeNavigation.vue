<template>
  <nav
    class="home-navigation"
    :class="{ 'home-navigation--active': isMenuActive }"
  >
    <div class="home-navigation__logo">
      <h2>Dephug</h2>
    </div>

    <button
      class="home-navigation__hamburger"
      @click="isMenuActive = !isMenuActive"
    >
      <div class="home-navigation__hamburger-inner"></div>
      <div class="home-navigation__hamburger-inner"></div>
      <div class="home-navigation__hamburger-inner"></div>
    </button>

    <div
      class="home-navigation__menu-wrapper"
      @click.self="isMenuActive = false"
    >
      <div class="home-navigation__menu">
        <ul class="home-navigation__list">
          <li class="home-navigation__element">
            <a
              href="#how-we-work"
              class="home-navigation__link"
              @click="isMenuActive = false"
            >
              {{ $t('navigation.how_we_work') }}
            </a>
          </li>
          <li class="home-navigation__element">
            <a
              href="#portfolio"
              class="home-navigation__link"
              @click="isMenuActive = false"
            >
              {{ $t('navigation.portfolio') }}
            </a>
          </li>
          <li class="home-navigation__element">
            <a
              href="#about-us"
              class="home-navigation__link"
              @click="isMenuActive = false"
            >
              {{ $t('navigation.about_us') }}
            </a>
          </li>
          <li class="home-navigation__element">
            <a
              href="#contact"
              class="home-navigation__link"
              @click="isMenuActive = false"
            >
              {{ $t('navigation.contact') }}
            </a>
          </li>
        </ul>
        <base-button outline @click="isMenuActive = false">
          {{ $t('navigation.create_your_project') }}
        </base-button>
        <base-button @click="isMenuActive = false">
          {{ $t('navigation.sign_in') }}
        </base-button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.home-navigation {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: #ffffff75;
  backdrop-filter: blur(6px);

  @include mq {
    padding: 0;
    background-color: transparent;

    &--active {
      height: 100vh;
    }
  }

  &__logo {
    h2 {
      margin: 0;
      font-size: 1.125rem;
    }

    @include mq {
      width: 100%;
      padding: 0.5rem 0;
      text-align: center;
      background-color: #ffffff50;
      backdrop-filter: blur(6px);
    }
  }

  &--active &__logo {
    @include mq {
      background-color: transparent;
    }
  }

  &__hamburger {
    width: 2rem;
    height: 1.5rem;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    background-color: transparent;
    border: none;
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    transition: none;
    display: none;

    @include mq {
      display: flex;
    }
  }

  &__hamburger-inner {
    width: 100%;
    height: 0.3rem;
    background-color: #000;
    border-radius: 0.1rem;
    transition: all 0.6s ease;

    &:nth-of-type(1) {
      width: 90%;
    }

    &:nth-of-type(2) {
      width: 70%;
    }
  }

  &--active &__hamburger {
    width: 4rem;
    height: 3rem;
    top: 50%;
    left: 2rem;
    z-index: 2;
    padding: 1rem;
    background-color: #fff;
    border-radius: 0.5rem;
    transform: translateY(-50%);
    transition: all 0.4s ease;
  }

  &--active &__hamburger-inner {
    display: block;
    &:nth-of-type(1) {
      width: 100%;
      transform: rotate(45deg) translateY(0.25rem) translateX(0.25rem);
    }
    &:nth-of-type(2) {
      opacity: 0;
    }
    &:nth-of-type(3) {
      transform: rotate(-45deg) translateY(-0.25rem) translateX(0.25rem);
    }
  }

  &__menu-wrapper {
    transition: background-color 0.2s ease;
  }

  &--active &__menu-wrapper {
    @include mq {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: #00000015;
      backdrop-filter: blur(4px);
    }
  }

  &__menu {
    display: flex;
    align-items: center;

    button:first-of-type {
      margin-left: 1rem;
      margin-right: 2rem;

      @include mq {
        margin: 2rem 0 0 0;
      }
    }

    button:last-of-type {
      @include mq {
        width: 100%;
        margin-top: 1rem;
      }
    }

    @include mq {
      height: 100vh;
      padding: 1rem 2rem;
      position: fixed;
      top: 0;
      right: -100%;
      flex-direction: column;
      align-items: start;
      background-color: $surface;
      transition: right 0.3s ease;
    }
  }

  &--active &__menu {
    @include mq {
      right: 0;
    }
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;

    @include mq {
      display: flex;
      flex-direction: column;
    }
  }

  &__element {
    display: inline-block;
  }

  &__link {
    display: block;
    color: $text-dark;
    text-decoration: none;
    font-weight: 300;
    padding: 0 1.25rem;
    transition: all 0.25s ease;

    &:hover {
      font-weight: bold;
    }

    @include mq {
      padding: 1rem 0;
    }
  }
}
</style>
