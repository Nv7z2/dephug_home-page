<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import './style/init';

#app {
  padding: 16px 32px;
  background-color: $surface;
  height: 200vh;

  @include mq {
    padding: 8px 16px;
  }
}
</style>
