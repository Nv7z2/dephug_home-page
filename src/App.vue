<template>
  <div id="app">
    <main>
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Dephug | Bring your ideas to life',
      meta: [
        {
          name: 'description',
          content:
            'Bring your ideas to life! With Dephug you can make your business more attractive to customers.',
        },
        {
          property: 'og:title',
          content: 'Dephug | Bring your ideas to life',
        },
        {
          property: 'og:url',
          content: 'https://dephug.com',
        },
        {
          property: 'og:image',
          content:
            'https://images.pexels.com/photos/3813324/pexels-photo-3813324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          property: 'og:image:url',
          content:
            'https://images.pexels.com/photos/3813324/pexels-photo-3813324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          property: 'og:image:secure_url',
          content:
            'https://images.pexels.com/photos/3813324/pexels-photo-3813324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          property: 'og:description”',
          content:
            'Bring your ideas to life! With Dephug you can make your business more attractive to customers.',
        },
        { property: 'og:site_name', content: 'Dephug' },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index,follow' },
      ],
    };
  },
};
</script>

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
