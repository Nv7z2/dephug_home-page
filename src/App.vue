<template>
  <div id="app">
    <main>
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<style lang="scss">
@import './style/init';

#app {
  padding: 16px 32px;
  overflow: hidden;
  background-color: $surface;

  @include mq {
    padding: 8px 16px;
  }
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: scale(0.9);
  opacity: 0;
}
</style>
