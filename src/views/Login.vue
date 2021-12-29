<template>
  <div class="login">
    <div class="login__background"></div>
    <div class="login__content">
      <div class="login__heading">
        <h2>{{ $t('login.heading') }}</h2>
      </div>

      <form class="login__form" @submit.prevent>
        <label for="" class="login__field">
          <span class="login__label">
            {{ $t('login.login') }}
          </span>
          <input type="text" class="login__input" autocomplete="login" />
        </label>
        <label for="" class="login__field">
          <span class="login__label">
            {{ $t('login.password') }}
          </span>
          <input type="password" class="login__input" />
        </label>

        <base-button>
          {{ $t('login.button') }}
        </base-button>
      </form>

      <router-link to="/" class="login__back-anchor">
        {{ $t('login.go_back') }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let currentFilter = 0;
    let filterModeAdd = true;
    const background = document.querySelector('.login__background');

    background.addEventListener('click', () => {
      if (filterModeAdd == true) currentFilter++;
      else currentFilter--;

      if (currentFilter >= 10) filterModeAdd = false;
      else if (currentFilter <= 1 && !filterModeAdd) filterModeAdd = true;

      background.style.filter = `grayscale(${currentFilter / 10})`;
    });
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  height: 100vh;
  margin: -1rem -2rem;

  &__background {
    flex: 1;
    background: url('~@/assets/contact_poster.webp') center / cover;

    @include mq {
      display: none;
    }
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // height: 100%;
  }

  &__heading {
    text-align: center;
  }

  &__form {
    display: flex;
    margin: 2.5rem 5rem 0.5rem 5rem;
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: #f7e8d8;

    @include mq {
      margin: 1rem 2rem 0.5rem 2rem;
    }
  }

  &__field {
    display: flex;
    margin-bottom: 2.5rem;
    flex-direction: column;
  }

  &__label {
    font-size: 0.85rem;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
  }

  &__input {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 2px solid transparent;
  }

  &__back-anchor {
    text-align: center;
    color: $text-dark;
  }
}
</style>
