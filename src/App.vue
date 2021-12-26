<template>
  <div id="app">
    <main>
      <router-view />
    </main>
  </div>
</template>

<style lang="scss">
@import './style/init';

#app {
  padding: 16px 32px;
  background-color: $surface;

  @include mq {
    padding: 8px 16px;
  }
}
</style>
