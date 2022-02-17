<template>
  <div class="cookies" :class="{ 'cookies--accepted': areCookiesAccepted }">
    <p class="cookies__info">
      Strona wykorzystuje minimalne ilości plików cookies dla poprawnego
      działania, żadne informacje nie są przekazywane stronom trzecim.
    </p>
    <button class="cookies__button" @click="acceptCookies">
      Akceptuję
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areCookiesAccepted: false,
    }
  },
  created() {
    if (window.localStorage.getItem('cookies-accepted')) {
      this.areCookiesAccepted = true;
    }
  },
  methods: {
    acceptCookies() {
      this.areCookiesAccepted = true;
      window.localStorage.setItem('cookies-accepted', true);
    }
  }
};
</script>

<style lang="scss" scoped>
.cookies {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 0.5rem;
  box-shadow: 0 -0.5rem 0.5rem -0.25rem rgba(#000, 0.05);

  &--accepted {
    display: none;
  }

  &__info {
    margin: 0;
    font-size: 0.8rem;
  }

  &__button {
    background-color: $primary;
    font-size: 0.8rem;
    border: none;
    border-radius: 0.5rem;
    color: #fff;
  }
}
</style>
